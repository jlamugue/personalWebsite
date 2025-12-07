import './testimonial-carousel.css';

export const TestimonialCarousel = (testimonials = []) => {
	const container = document.createElement('div');
	container.className = 'testimonial-carousel';
	container.id = 'jlm-testimonial-carousel';

	const cardsWrapper = document.createElement('div');
	cardsWrapper.className = 'testimonial-cards';

	testimonials.forEach((t) => {
		const card = document.createElement('div');
		card.className = 'testimonial-card';
		card.innerHTML = `
      <p class="quote">“${t.quote}”</p>
      <p class="author">— ${t.author}</p>
    `;
		cardsWrapper.appendChild(card);
	});

	container.appendChild(cardsWrapper);

	// Dots
	const dotsContainer = document.createElement('div');
	dotsContainer.className = 'testimonial-dots';
	testimonials.forEach((_, i) => {
		const dot = document.createElement('span');
		dot.className = 'dot';
		if (i === 0) dot.classList.add('active');
		dot.addEventListener('click', () => showSlide(i));
		dotsContainer.appendChild(dot);
	});
	container.appendChild(dotsContainer);

	let current = 0;
	let interval;

	const showSlide = (index) => {
		const dots = container.querySelectorAll('.dot');
		const total = testimonials.length;

		// mover el contenedor usando transform
		cardsWrapper.style.transform = `translateX(-${index * 100}%)`;

		dots.forEach((d, i) => d.classList.toggle('active', i === index));
		current = index;
	};

	const nextSlide = () => {
		current = (current + 1) % testimonials.length;
		showSlide(current);
	};

	const startAuto = () => (interval = setInterval(nextSlide, 5000));
	const stopAuto = () => clearInterval(interval);

	container.addEventListener('mouseenter', stopAuto);
	container.addEventListener('mouseleave', startAuto);

	showSlide(0);
	startAuto();

	return container;
};
