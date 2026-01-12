import './modal.css';

export function Modal({ title = '', content, onClose } = {}) {
	const overlay = document.createElement('div');
	overlay.className = 'jlm-modal-overlay';

	const dialog = document.createElement('div');
	dialog.className = 'jlm-modal';

	const header = document.createElement('div');
	header.className = 'jlm-modal-header';

	const h = document.createElement('h3');
	h.className = 'jlm-modal-title';
	h.textContent = title;

	const closeBtn = document.createElement('button');
	closeBtn.className = 'jlm-modal-close';
	closeBtn.type = 'button';
	closeBtn.setAttribute('aria-label', 'Cerrar');
	closeBtn.textContent = '✕';

	const body = document.createElement('div');
	body.className = 'jlm-modal-body';

	if (content) body.append(content);

	header.append(h, closeBtn);
	dialog.append(header, body);
	overlay.append(dialog);

	const prevOverflow = document.body.style.overflow;
	document.body.style.overflow = 'hidden';

	function cleanup() {
		document.body.style.overflow = prevOverflow;
		document.removeEventListener('keydown', onKeyDown);
	}

	function close() {
		cleanup();
		overlay.remove();
		onClose?.();
	}

	function onKeyDown(e) {
		if (e.key === 'Escape') close();
	}

	// click afuera cierra
	overlay.addEventListener('click', (e) => {
		if (e.target === overlay) close();
	});

	closeBtn.addEventListener('click', close);
	document.addEventListener('keydown', onKeyDown);

	return { overlay, close };
}
