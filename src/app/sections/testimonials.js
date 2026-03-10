import { SectionTitle } from '../../components';
import { TestimonialCarousel } from '../../components/testimonial-carousel/testimonial-carousel';
import { testimonials } from '../../data/testimonials';

export function renderTestimonials() {
	const container = document.createElement('section');
	container.append(SectionTitle('Testimonios'));
	container.append(TestimonialCarousel(testimonials));
	return container;
}
