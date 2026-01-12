const FORM_SUBMIT_EMAIL = '17775d1b238d8e21bca53c746f76b332'; // 🔴 CAMBIAR

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
