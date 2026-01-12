import { Carousel, Swiper } from '../../components';
import { carouselImages } from '../../data/carousel-images';
import { isMobile } from '../../utils/is-mobile';

export function renderResponsiveCarousel() {
	const node = isMobile()
		? Swiper(carouselImages, {
				autoSlide: true,
				interval: 4000,
				enableSwipe: true,
		  })
		: Carousel(carouselImages, {
				visibleCount: 2,
				gap: 16,
				autoSlide: true,
				interval: 2000,
		  });

	node.id = 'jlm-carousel';
	return node;
}
