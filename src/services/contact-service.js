const FORM_SUBMIT_EMAIL = '19bf39ac57379f3f4bb3277a6c5e30e1'; // 🔴 CAMBIAR

export async function sendContactForm(formEl) {
	const formData = new FormData(formEl);
	formData.append('_format', 'json');

	const resp = await fetch(`https://formsubmit.co/ajax/${FORM_SUBMIT_EMAIL}`, {
		method: 'POST',
		body: formData,
		headers: {
			Accept: 'application/json',
		},
	});

	if (!resp.ok) {
		const txt = await resp.text();
		throw new Error(txt || 'Error enviando formulario');
	}

	return resp.json();
}
