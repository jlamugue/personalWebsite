export function el(tag, attrs = {}) {
	const node = document.createElement(tag);
	Object.entries(attrs).forEach(([k, v]) => {
		if (k === 'className') node.className = v;
		else if (k === 'text') node.textContent = v;
		else node.setAttribute(k, v);
	});
	return node;
}
