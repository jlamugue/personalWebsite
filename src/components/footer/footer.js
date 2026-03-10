import {
  ContactForm
} from '../contact-form/contact-form';
import './footer.css';

export const Footer = () => {
  const footer = document.createElement('footer');
  footer.className = 'site-footer';

  footer.innerHTML = /*html*/ `
<div class="footer-content" id="jlm-footer">
  <div class="footer-left">
    <h2 class="footer-heading">Diseñemos juntos nuestro siguiente proyecto</h2>
    <p class="footer-subtext">
      Ponte en contacto hoy mismo conmigo para hablar de tus ideas, comenzar tu proyecto y transformar espacios de una forma espectacular.
    </p>

    <div class="footer-contact">
      <p><strong>Email:</strong> <a href="mailto:jl.arqdi@gmail.com">jl.arqdi@gmail.com</a></p>
      <p><strong>Teléfono:</strong> <a href="tel:+50688670577">+506 8867-0577</a></p>
    </div>

    <div class="footer-social">
      <a href="https://www.instagram.com/jean.lamugue/" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://wa.me/50688670577" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/share/19hjEzPDqM/" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="https://www.tiktok.com/@jlamuguearquitectura" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
      <a href="https://youtube.com/@jlamuguearquitectura?si=hyLv3fgDeFivGq_E" aria-label="Youtube"><i class="fab fa-youtube"></i></a>
    </div>
  </div>

  <div class="footer-right" id="footer-form-slot"></div>
</div>

<div class="footer-bottom">
  <p>© ${new Date().getFullYear()} Jean Lamugue — Todos los derechos reservados.</p>
</div>
`;

  // 🔥 montar el form AJAX
  const slot = footer.querySelector('#footer-form-slot');
  slot.append(ContactForm());

  return footer;
};