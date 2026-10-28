import { cards } from './cards';

// La galería muestra un slide por servicio, con sus 4 imágenes (las mismas de cada modal)
export const carouselImages = cards.map((card) => ({
	title: card.title,
	images: card.images,
}));
