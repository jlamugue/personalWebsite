import { cards } from './cards';

// La galería muestra todas las imágenes de los servicios (las mismas de cada modal)
export const carouselImages = cards.flatMap((card) => card.images);
