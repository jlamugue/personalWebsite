import { SwiperDots } from '../swiper-dots/swiper-dots';
import './swiper.css';

export const Swiper = (images, options = {}) => {
	const {
		autoSlide = true,
		interval = 4000,
		enableSwipe = true,
		showArrows = false,

		// nuevas
		dotsPosition = 'overlay', // 'overlay' | 'bottom'
		dotsDirection = 'vertical', // 'vertical' | 'horizontal'
		dotsColor = '#ffffff',

		// para asegurar altura estable
		aspectRatio = '16 / 9', // podés cambiarlo en modal si querés
	} = options;

	let current = 0;
	let timer = null;
	let startX = 0;
	let isDragging = false;

	// Root
	const container = document.createElement('div');
	container.classList.add('swiper-container');

	container.classList.toggle('swiper--dots-bottom', dotsPosition === 'bottom');
	container.classList.toggle(
		'swiper--dots-horizontal',
		dotsDirection === 'horizontal'
	);

	container.style.setProperty('--swiper-dot-color', dotsColor);
	container.style.setProperty('--swiper-aspect-ratio', aspectRatio);

	// ✅ Stage con altura estable (aquí van las imágenes)
	const stage = document.createElement('div');
	stage.classList.add('swiper-stage');

	// Two overlapping images for smooth crossfade
	const img1 = document.createElement('img');
	const img2 = document.createElement('img');
	img1.classList.add('swiper-image');
	img2.classList.add('swiper-image');

	img1.src = images[current];
	img1.draggable = false;
	img2.draggable = false;
	img2.style.opacity = 0;

	stage.append(img1, img2);

	// Flechas (opcionales)
	if (showArrows) {
		stage.append(
			createArrow('prev', () => prev()),
			createArrow('next', () => next())
		);
	}

	function createArrow(direction, onClick) {
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.classList.add('swiper-arrow', `swiper-arrow--${direction}`);
		btn.setAttribute(
			'aria-label',
			direction === 'prev' ? 'Imagen anterior' : 'Imagen siguiente'
		);
		btn.innerHTML =
			direction === 'prev'
				? '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
				: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
		// Que el clic en la flecha no inicie un arrastre
		btn.addEventListener('mousedown', (e) => e.stopPropagation());
		btn.addEventListener('touchstart', (e) => e.stopPropagation());
		btn.addEventListener('click', onClick);
		return btn;
	}

	// Dots wrapper (overlay o bottom)
	const dotsWrapper = document.createElement('div');
	dotsWrapper.classList.add('swiper-dots-wrapper');

	const { element: dotsEl, updateDots } = SwiperDots(
		images.length,
		goTo,
		current
	);

	dotsWrapper.appendChild(dotsEl);

	// ✅ Ensamble correcto según posición
	if (dotsPosition === 'overlay') {
		stage.appendChild(dotsWrapper); // dots encima de la imagen
		container.appendChild(stage);
	} else {
		container.appendChild(stage);
		container.appendChild(dotsWrapper); // dots debajo (fuera del stage)
	}

	// Go to specific slide
	function goTo(index) {
		const next = (index + images.length) % images.length;

		const top = current % 2 === 0 ? img1 : img2;
		const bottom = current % 2 === 0 ? img2 : img1;

		bottom.src = images[next];

		// mantener transición
		bottom.style.transition = 'opacity 1s ease-in-out';
		top.style.transition = 'opacity 1s ease-in-out';

		bottom.style.opacity = 1;
		top.style.opacity = 0;

		current = next;
		updateDots(current);
	}

	function next() {
		goTo(current + 1);
	}

	function prev() {
		goTo(current - 1);
	}

	// Auto-slide
	if (autoSlide) {
		timer = setInterval(next, interval);
		container.addEventListener('mouseenter', () => clearInterval(timer));
		container.addEventListener('mouseleave', () => {
			timer = setInterval(next, interval);
		});
	}

	// Swipe gestures (igual que antes, pero en el CONTAINER está bien)
	if (enableSwipe) {
		container.addEventListener('touchstart', (e) => {
			startX = e.touches[0].clientX;
			isDragging = true;
			if (timer) clearInterval(timer);
		});

		container.addEventListener('touchmove', (e) => {
			if (!isDragging) return;
			const diff = e.touches[0].clientX - startX;
			if (Math.abs(diff) > 60) {
				diff > 0 ? prev() : next();
				isDragging = false;
			}
		});

		container.addEventListener('touchend', () => {
			isDragging = false;
			if (autoSlide) timer = setInterval(next, interval);
		});

		container.addEventListener('mousedown', (e) => {
			startX = e.clientX;
			isDragging = true;
			if (timer) clearInterval(timer);
		});

		container.addEventListener('mousemove', (e) => {
			if (!isDragging) return;
			const diff = e.clientX - startX;
			if (Math.abs(diff) > 60) {
				diff > 0 ? prev() : next();
				isDragging = false;
			}
		});

		container.addEventListener('mouseup', () => {
			isDragging = false;
			if (autoSlide) timer = setInterval(next, interval);
		});

		container.addEventListener('mouseleave', () => {
			isDragging = false;
		});
	}

	return container;
};
