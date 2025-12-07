import { SwiperDots } from '../swiper-dots/swiper-dots';
import './swiper.css';

export const Swiper = (images, options = {}) => {
	const { autoSlide = true, interval = 4000, enableSwipe = true } = options;

	let current = 0;
	let timer = null;
	let startX = 0;
	let isDragging = false;

	// Swiper container
	const container = document.createElement('div');
	container.classList.add('swiper-container');

	// Two overlapping images for smooth crossfade
	const img1 = document.createElement('img');
	const img2 = document.createElement('img');
	img1.classList.add('swiper-image');
	img2.classList.add('swiper-image');
	img1.src = images[current];
	img1.draggable = false;
	img2.draggable = false;
	img2.style.opacity = 0;

	container.append(img1, img2);

	// Overlay for dots
	const overlay = document.createElement('div');
	overlay.classList.add('swiper-overlay');

	const { element: dotsEl, updateDots } = SwiperDots(
		images.length,
		goTo,
		current
	);
	overlay.appendChild(dotsEl);
	container.appendChild(overlay);

	// Go to specific slide
	function goTo(index) {
		const next = (index + images.length) % images.length;

		const top = current % 2 === 0 ? img1 : img2;
		const bottom = current % 2 === 0 ? img2 : img1;

		bottom.src = images[next];
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

	// Swipe gestures
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

		// Mouse drag
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
