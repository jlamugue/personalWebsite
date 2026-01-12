import { Modal } from '../modal/modal';
import { Swiper } from '../swiper/swiper'; // ajustá el path según tu proyecto
import './card.css';

export const Card = (cardsData = []) => {
	const container = document.createElement('div');
	container.classList.add('card-grid');

	function openCardModal({ title, images = [] }) {
		// Contenido del modal
		const content = document.createElement('div');

		// Si no hay imágenes, mostrás un fallback
		if (!images.length) {
			const p = document.createElement('p');
			p.textContent = 'No hay imágenes para mostrar.';
			content.append(p);
		} else {
			const swiper = Swiper(images, {
				autoSlide: true,
				interval: 4000,
				enableSwipe: true,

				dotsPosition: 'bottom',
				dotsDirection: 'horizontal',
				dotsColor: '#111',

				aspectRatio: '16 / 9',
			});
			swiper.id = 'jlm-modal-swiper';
			content.append(swiper);
		}

		const { overlay } = Modal({
			title,
			content,
		});

		document.body.append(overlay);
	}

	cardsData.forEach(({ icon, title, description, images }) => {
		const card = document.createElement('div');
		card.classList.add('card');
		card.setAttribute('role', 'button');
		card.setAttribute('tabindex', '0');

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

		// Click abre modal
		card.addEventListener('click', () => {
			openCardModal({ title, images });
		});

		// Enter/Space abre modal (accesibilidad)
		card.addEventListener('keydown', (e) => {
			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				openCardModal({ title, images });
			}
		});
	});

	return container;
};
