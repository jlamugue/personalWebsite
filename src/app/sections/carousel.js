import { Carousel, SectionTitle } from '../../components';
import { carouselImages } from '../../data/carousel-images';
import { isMobile } from '../../utils/is-mobile';

export function renderResponsiveCarousel() {
	const container = document.createElement('section');
	container.append(SectionTitle('Galería'));

	// Cada slide es un servicio con sus 4 imágenes en un cuadro de 2 por 2.
	// En escritorio se ven 2 servicios a la vez y en móvil uno.
	const node = Carousel(carouselImages, {
		visibleCount: isMobile() ? 1 : 2,
		gap: 16,
		autoSlide: false,
		enableSwipe: true,
		showArrows: true,
	});

	node.id = 'jlm-carousel';
	container.append(node);
	return container;
}
