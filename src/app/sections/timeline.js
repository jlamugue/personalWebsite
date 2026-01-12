import { HorizontalTimeline, VerticalTimeline } from '../../components';
import { steps } from '../../data/steps';
import { isMobile } from '../../utils/is-mobile';

export function renderTimeline() {
	const container = document.createElement('div');
	container.id = 'jlm-timeline';

	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) entry.target.classList.add('visible');
		});
	});

	function observeCards() {
		observer.disconnect();
		container
			.querySelectorAll('.timeline-card, .vt-card')
			.forEach((el) => observer.observe(el));
	}

	function doRender() {
		container.innerHTML = '';

		const timeline = isMobile()
			? VerticalTimeline(steps)
			: HorizontalTimeline(steps);

		container.append(timeline);
		observeCards();
	}

	// render inicial
	doRender();

	// re-render en resize
	window.addEventListener('resize', () => {
		doRender();
	});

	return container;
}
