import './carousel.css';

export const Carousel = (images, options = {}) => {
	const {
		visibleCount = 3,
		gap = 16,
		autoSlide = true,
		interval = 4000,
		enableSwipe = true,
		showArrows = false,
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

	// Slides: cada elemento puede ser una imagen suelta o un grupo
	// { title, images }, que se muestra con su título y un cuadro de 2 por 2.
	fullImages.forEach((item) => {
		const slide = document.createElement('div');
		slide.classList.add('carousel-slide');

		if (item && Array.isArray(item.images)) {
			slide.classList.add('carousel-slide--group');

			if (item.title) {
				const title = document.createElement('h3');
				title.classList.add('carousel-group-title');
				title.textContent = item.title;
				slide.appendChild(title);
			}

			const grid = document.createElement('div');
			grid.classList.add('carousel-group-grid');
			item.images.forEach((src) => {
				const cell = document.createElement('div');
				cell.classList.add('carousel-cell');
				cell.appendChild(createImage(src));
				grid.appendChild(cell);
			});
			slide.appendChild(grid);
		} else {
			slide.appendChild(createImage(item));
		}

		track.appendChild(slide);
	});

	function createImage(src) {
		const img = document.createElement('img');
		img.src = src;
		img.alt = '';
		img.loading = 'lazy';
		img.draggable = false;
		return img;
	}

	container.appendChild(track);

	// Arrows
	if (showArrows) {
		container.appendChild(createArrow('prev', () => prev()));
		container.appendChild(createArrow('next', () => next()));
	}

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
		// Si todavía no está en la página no hay ancho que medir
		if (!container.clientWidth) return;

		const slideWidth =
			(container.clientWidth - gap * (visibleCount - 1)) / visibleCount;

		// Aplicar width exacto a cada slide
		track.querySelectorAll('.carousel-slide').forEach((s) => {
			s.style.width = slideWidth + 'px';
		});
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
		if (isAnimating()) return;
		current++;
		update();
		handleLoop();
	}

	function prev() {
		if (isAnimating()) return;
		current--;
		update();
		handleLoop();
	}

	function goTo(index) {
		if (isAnimating() || index === current) return;
		current = index;
		update();
		handleLoop();
	}

	// Evita clics rápidos que rompen el salto infinito
	let animating = false;
	function isAnimating() {
		return animating;
	}

	function handleLoop() {
		animating = true;
		// Wait for transition to end, then jump seamlessly
		const onEnd = (e) => {
			// Ignorar transiciones de las imágenes (zoom en hover)
			if (e.target !== track) return;
			track.removeEventListener('transitionend', onEnd);
			animating = false;
			if (current >= images.length + visibleCount) {
				current = visibleCount;
				update(false);
			} else if (current < visibleCount) {
				current = images.length + visibleCount - 1;
				update(false);
			}
		};
		track.addEventListener('transitionend', onEnd);
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

		// Deslizar con el dedo en móvil
		container.addEventListener(
			'touchstart',
			(e) => {
				startX = e.touches[0].clientX;
				isDragging = true;
			},
			{ passive: true }
		);

		container.addEventListener(
			'touchmove',
			(e) => {
				if (!isDragging) return;
				const diff = e.touches[0].clientX - startX;
				if (Math.abs(diff) > 50) {
					diff > 0 ? prev() : next();
					isDragging = false;
				}
			},
			{ passive: true }
		);

		container.addEventListener('touchend', () => {
			isDragging = false;
		});
	}

	function createArrow(direction, onClick) {
		const btn = document.createElement('button');
		btn.type = 'button';
		btn.classList.add('carousel-arrow', `carousel-arrow--${direction}`);
		btn.setAttribute(
			'aria-label',
			direction === 'prev' ? 'Imagen anterior' : 'Imagen siguiente'
		);
		btn.innerHTML =
			direction === 'prev'
				? '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M15 6l-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'
				: '<svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
		btn.addEventListener('mousedown', (e) => e.stopPropagation());
		btn.addEventListener('touchstart', (e) => e.stopPropagation(), {
			passive: true,
		});
		btn.addEventListener('click', onClick);
		return btn;
	}

	// Tamaño inicial por CSS, para que las imágenes no salgan gigantes antes de medir
	container.style.setProperty('--carousel-visible', visibleCount);
	container.style.setProperty('--carousel-gap', gap + 'px');

	// Medir cuando el carrusel entra a la página y cada vez que cambia de ancho
	const resizeObserver = new ResizeObserver(() => update(false));
	resizeObserver.observe(container);

	return container;
};
