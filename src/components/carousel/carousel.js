import './carousel.css';

export const Carousel = (images, options = {}) => {
	const {
		visibleCount = 3,
		gap = 16,
		autoSlide = true,
		interval = 4000,
		enableSwipe = true,
	} = options;

	let current = visibleCount; // start after clones
	let timer = null;
	let startX = 0;
	let isDragging = false;

	// Infinite clone trick
	const clonesBefore = images.slice(-visibleCount);
	const clonesAfter = images.slice(0, visibleCount);
	const fullImages = [...clonesBefore, ...images, ...clonesAfter];

	// Container
	const container = document.createElement('div');
	container.classList.add('carousel-container');

	// Track
	const track = document.createElement('div');
	track.classList.add('carousel-track');

	// Slides
	fullImages.forEach((src) => {
		const slide = document.createElement('div');
		slide.classList.add('carousel-slide');
		const img = document.createElement('img');
		img.src = src;
		img.draggable = false;
		slide.appendChild(img);
		track.appendChild(slide);
	});

	container.appendChild(track);

	// Dots
	const dotsContainer = document.createElement('div');
	dotsContainer.classList.add('carousel-dots');
	const dots = [];

	const totalPages = Math.ceil(images.length / visibleCount);

	for (let i = 0; i < totalPages; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === 0) dot.classList.add('active');
		dot.addEventListener('click', () => goTo(i * visibleCount + visibleCount));
		dots.push(dot);
		dotsContainer.appendChild(dot);
	}
	container.appendChild(dotsContainer);

	// --- Functions ---
	function update(animate = true) {
		const slideWidth = container.clientWidth / visibleCount;
		const offset = -(current * (slideWidth + gap));
		track.style.transition = animate ? 'transform 0.6s ease' : 'none';
		track.style.transform = `translateX(${offset}px)`;

		// Update dots
		const realIndex =
			(((current - visibleCount) % images.length) + images.length) %
			images.length;
		const activePage = Math.floor(realIndex / visibleCount);
		dots.forEach((d, i) => d.classList.toggle('active', i === activePage));
	}

	function next() {
		current++;
		update();
		handleLoop();
	}

	function prev() {
		current--;
		update();
		handleLoop();
	}

	function goTo(index) {
		current = index;
		update();
		handleLoop();
	}

	function handleLoop() {
		// Wait for transition to end, then jump seamlessly
		track.addEventListener(
			'transitionend',
			() => {
				if (current >= images.length + visibleCount) {
					current = visibleCount;
					update(false);
				} else if (current < visibleCount) {
					current = images.length + visibleCount - 1;
					update(false);
				}
			},
			{ once: true }
		);
	}

	// --- Auto Slide ---
	if (autoSlide) {
		timer = setInterval(next, interval);
		container.addEventListener('mouseenter', () => clearInterval(timer));
		container.addEventListener('mouseleave', () => {
			timer = setInterval(next, interval);
		});
	}

	// --- Swipe ---
	if (enableSwipe) {
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

	// Initial setup
	update(false);

	window.addEventListener('resize', () => update(false));

	return container;
};
