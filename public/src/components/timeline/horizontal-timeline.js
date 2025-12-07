import './horizontal-timeline.css';
export const HorizontalTimeline = (steps = []) => {
	const container = document.createElement('div');

	container.classList.add('timeline-horizontal');

	steps.forEach((step, index) => {
		const item = document.createElement('div');
		item.classList.add('timeline-step');
		item.classList.add(index % 2 === 0 ? 'top' : 'bottom');

		// Card (content)
		const card = document.createElement('div');
		card.classList.add('timeline-card');
		card.innerHTML = `
      <div class="timeline-icon">${step.icon || '⬤'}</div>
      <h3>${step.title}</h3>
      <p>${step.text}</p>
    `;

		// Marker (number)
		const marker = document.createElement('div');
		marker.classList.add('timeline-marker');
		marker.textContent = index + 1;

		item.append(card, marker);
		container.appendChild(item);
	});

	return container;
};
