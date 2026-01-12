import { renderApp } from './app';

export function mountApp(selector = '#app') {
	const root = document.querySelector(selector);
	if (!root) throw new Error(`Root element not found: ${selector}`);

	renderApp(root);
}
