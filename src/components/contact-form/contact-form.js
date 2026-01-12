import { sendContactForm } from '../../services/contact-service';

export function ContactForm({ className = '' } = {}) {
	const form = document.createElement('form');
	form.className = `footer-form ${className}`;

	form.innerHTML = `
    <input type="text" name="name" placeholder="Nombre" required />
    <input type="email" name="email" placeholder="Correo electrónico" required />
    <input type="tel" name="phone" placeholder="Teléfono" required />
    <textarea name="message" placeholder="Cuéntame sobre tu proyecto..." required></textarea>

    <!-- FormSubmit extras -->
    <input type="hidden" name="_subject" value="Nuevo contacto desde la web" />
    <input type="hidden" name="_captcha" value="false" />
    <input type="text" name="_honey" style="display:none" />

    <button type="submit">Enviar mensaje</button>
    <p class="contact-status" aria-live="polite"></p>
  `;

	const btn = form.querySelector('button');
	const statusEl = form.querySelector('.contact-status');

	form.addEventListener('submit', async (e) => {
		e.preventDefault();

		btn.disabled = true;
		const originalText = btn.textContent;
		btn.textContent = 'Enviando...';
		statusEl.textContent = '';

		try {
			await sendContactForm(form);
			statusEl.textContent = '✅ Mensaje enviado correctamente.';
			form.reset();
		} catch (err) {
			console.error(err);
			statusEl.textContent = '❌ No se pudo enviar. Intentá nuevamente.';
		} finally {
			btn.disabled = false;
			btn.textContent = originalText;
		}
	});

	return form;
}
