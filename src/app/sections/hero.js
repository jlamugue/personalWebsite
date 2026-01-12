import { header, Swiper } from '../../components';
import { imagesSwiper } from '../../data/images-swiper';

export function renderHero() {
	const frag = document.createDocumentFragment();

	frag.append(header());
	frag.append(
		Swiper(imagesSwiper, {
			autoSlide: true,
			interval: 4000,
			enableSwipe: true,
		})
	);

	const wrapper = document.createElement('div');
	wrapper.append(frag);
	return wrapper;
}
