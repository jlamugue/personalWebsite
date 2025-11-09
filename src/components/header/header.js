import './header.css';

export const header = () => {
	const el = document.createElement('header');
	el.className = 'app-header';

	el.innerHTML = /*html*/ `
<div class="header-inner">
  <img class="app-logo" src="/src/assets/images/logo.webp" alt="Logo" />
  <button class="menu-toggle" aria-label="Abrir menú">
    <span></span><span></span><span></span>
  </button>

  <nav class="nav">
    <ul class="nav-list">
      <li><a class="nav-item mr3" href="#projects" href="#projects">Proyectos</a></li>
      <li><a class="nav-item mr3" href="#history" href="#history">Nuestra historia</a></li>
      <li><a class="nav-item mr3" href="#services" href="#services">Servicios</a></li>
      <li><a class="nav-item mr3" href="#about" href="#about">Acerca de</a></li>
      <li><a class="nav-item mr3" href="#contact" href="#contact">Contacto</a></li>
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
