import { Carousel, SectionTitle, Swiper } from '../../components';
import { carouselImages } from '../../data/carousel-images';
import { isMobile } from '../../utils/is-mobile';

export function renderResponsiveCarousel() {
	const container = document.createElement('section');
	container.append(SectionTitle('Galería'));
	
	const node = isMobile()
		? Swiper(carouselImages, {
				autoSlide: false,
				enableSwipe: true,
				showArrows: true,
		  })
		: Carousel(carouselImages, {
				visibleCount: 2,
				gap: 16,
				autoSlide: false,
				showArrows: true,
		  });

	node.id = 'jlm-carousel';
	container.append(node);
	return container;
}
