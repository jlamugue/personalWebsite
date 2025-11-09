export const SwiperDots = (count, onClick, activeIndex = 0) => {
	const container = document.createElement('div');
	container.classList.add('swiper-dots');

	const dots = [];

	for (let i = 0; i < count; i++) {
		const dot = document.createElement('div');
		dot.classList.add('dot');
		if (i === activeIndex) dot.classList.add('active');

		dot.addEventListener('click', () => {
			onClick(i);
			updateDots(i);
		});

		container.appendChild(dot);
		dots.push(dot);
	}

	function updateDots(newIndex) {
		dots.forEach((dot, i) => {
			dot.classList.toggle('active', i === newIndex);
		});
	}

	return { element: container, updateDots };
};
