import './section-title.css';

export const SectionTitle = (title) => {
	const h2 = document.createElement('h2');
	h2.className = 'section-title';
	h2.textContent = title;
	return h2;
};
