import { setupSmoothScroll } from '../utils/smooth-scroll';
import { renderResponsiveCarousel } from './sections/carousel';
import { renderFooter } from './sections/footer';
import { renderHero } from './sections/hero';
import { renderHistoryTabs } from './sections/history-tabs';
import { renderIntroText } from './sections/intro-text';
import { renderProjects } from './sections/projects';
import { renderServices } from './sections/services';
import { renderTestimonials } from './sections/testimonials';
import { renderTimeline } from './sections/timeline';

export function renderApp(root) {
	root.append(renderHero());
	root.append(renderIntroText());
	root.append(renderServices());
	root.append(renderResponsiveCarousel());
	root.append(renderHistoryTabs());
	root.append(renderTimeline()); // incluye resize + observer
	root.append(renderTestimonials());
	root.append(renderProjects());
	root.append(renderFooter());

	setupSmoothScroll({ offset: -150 });
}
