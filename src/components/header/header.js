import './header.css';

export const header = () => {
	const el = document.createElement('header');
	el.className = 'app-header';

	el.innerHTML = /*html*/ `
<div class="header-inner">
  <div class="header-line-social">
    <img class="app-logo" src="/src/assets/images/logo.webp" alt="Logo" />
    <div class="header-social">
      <a href="https://www.instagram.com/jlamugue.arquitecto?igsh=djlqejFuZjBmNGQy" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
      <a href="https://wa.me/50688670577" aria-label="WhatsApp"><i class="fab fa-whatsapp"></i></a>
      <a href="https://www.facebook.com/share/19hjEzPDqM/" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
      <a href="https://www.tiktok.com/@jean.lamugue?_r=1&_t=ZM-91FCAAA1A8R" aria-label="TikTok"><i class="fab fa-tiktok"></i></a>
      <a href="https://youtube.com/@jlamuguearquitectura?si=hyLv3fgDeFivGq_E" aria-label="Youtuve"><i class="fab fa-youtube"></i></a>
    </div>
  </div>
  <button class="menu-toggle" aria-label="Abrir menú">
    <span></span><span></span><span></span>
  </button>

  <nav class="nav">
    <ul class="nav-list">
      <li><a class="nav-item mr3" href="#jlm-services-cards">Servicios</a></li>
      <li><a class="nav-item mr3" href="#jlm-history-tab">Nuestra historia</a></li>
      <li><a class="nav-item mr3" href="#jlm-timeline">Planificación</a></li>
      <li><a class="nav-item mr3" href="#jlm-testimonial-carousel">Testimonios</a></li>
      <li><a class="nav-item mr3" href="#jlm-projects">Proyectos</a></li>
      <li><a class="nav-item mr3" href="#jlm-footer">Contacto</a></li>
    </ul>
  </nav>
</div>
`;

	// lógica del botón hamburguesa
	const btn = el.querySelector('.menu-toggle');
	const nav = el.querySelector('.nav');

	btn.addEventListener('click', () => {
		nav.classList.toggle('open');
		btn.classList.toggle('active');
	});

	return el;
};
