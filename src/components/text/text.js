import './text.css';

export const Text = (text) => {
	const el = document.createElement('div');
	el.innerHTML = /*html*/ `
<p class="ma0 f1 line-full lh-title afacad-flux ph4 mb6 j-text-spacing"></p>
`;
	el.querySelector('p').textContent = text;
	return el.firstElementChild;
};
