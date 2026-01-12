import { TestimonialCarousel } from '../../components/testimonial-carousel/testimonial-carousel';
import { testimonials } from '../../data/testimonials';

export function renderTestimonials() {
	return TestimonialCarousel(testimonials);
}
