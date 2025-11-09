import './main-section.css';

export const MainSection = () => {
	const el = document.createElement('section');
	el.innerHTML = /*html*/ `
<section class="w-100 ph4 flex items-center justify-between mt5 mb5">
  <div class="flex flex-column items-start justify-start w-50">
    <label class="ttu afacad-flux f5 fw4 mb3">Más que diseño, visión</label>
    <h1 class="main-section-tittle line-8 f-headline fw4 ma0 mb4 tl lh-solid afacad-flux">Diseñamos espacios que inspiran</h1>
    <button class="primary-button pointer mb3">Ver proyectos</button>
    <p class="f4 tl ma0 afacad-flux">
      Cada línea, cada forma y cada detalle reflejan una visión<br />
      crear arquitectura que combine estética, funcionalidad y emoción.
    </p>
  </div>
  <div class="flex items-center w-50">
    <img class="w-100" src="/src/assets/images/main_isometric.png" alt="Main Section Image" />
  </div>
</section>
`;
	return el;
};
