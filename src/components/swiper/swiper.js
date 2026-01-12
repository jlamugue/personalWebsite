import { SwiperDots } from '../swiper-dots/swiper-dots';
import './swiper.css';

export const Swiper = (images, options = {}) => {
	const {
		autoSlide = true,
		interval = 4000,
		enableSwipe = true,

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
