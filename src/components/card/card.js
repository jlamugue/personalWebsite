import './card.css';

export const Card = (cardsData = []) => {
	const container = document.createElement('div');
	container.classList.add('card-grid');

	cardsData.forEach(({ icon, title, description }) => {
		const card = document.createElement('div');
		card.classList.add('card');

		const iconEl = document.createElement('img');
		iconEl.src = icon;
		iconEl.alt = title;
		iconEl.classList.add('card-icon');

		const titleEl = document.createElement('h3');
		titleEl.textContent = title;
		titleEl.classList.add('card-title');

		const overlay = document.createElement('div');
		overlay.classList.add('card-overlay');

		const descEl = document.createElement('p');
		descEl.textContent = description;
		overlay.appendChild(descEl);

		card.append(iconEl, titleEl, overlay);
		container.appendChild(card);
	});

	return container;
};
