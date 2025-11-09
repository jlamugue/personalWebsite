export * from './vertical-timeline.css';

export const VerticalTimeline = (steps = []) => {
	const container = document.createElement('div');
	container.className = 'vtimeline';

	steps.forEach((step, i) => {
		const side = i % 2 === 0 ? 'left' : 'right'; // alterna lados

		const item = document.createElement('div');
		item.className = `vt-item ${side}`;

		// marker (número)
		const marker = document.createElement('div');
		marker.className = 'vt-marker';
		marker.textContent = i + 1;

		// content card
		const card = document.createElement('div');
		card.className = 'vt-card';

		const icon = document.createElement('div');
		icon.className = 'vt-icon';
		icon.innerHTML = step.icon || '';

		const title = document.createElement('h3');
		title.className = 'vt-title';
		title.textContent = step.title || '';

		const text = document.createElement('p');
		text.className = 'vt-text';
		text.textContent = step.text || '';

		card.append(icon, title, text);

		// estructura: item contiene marker y card
		// el orden no importa mucho porque el marker está centrado con absolute
		item.appendChild(card);
		item.appendChild(marker);

		container.appendChild(item);
	});

	return container;
};
