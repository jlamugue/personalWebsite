import {
	Card,
	Carousel,
	Footer,
	header,
	HorizontalTimeline,
	Swiper,
	Tab,
	Text,
	VerticalTimeline,
} from './components';
import { ProjectGrid } from './components/project/project';
import { TestimonialCarousel } from './components/testimonial-carousel/testimonial-carousel';
import './fonts.css';
import './style.css';

function isMobile() {
	return window.matchMedia('(max-width: 1024px)').matches;
}

const imagesSwiper = [
	'/src/assets/images/swiper/swiper1.webp',
	'/src/assets/images/swiper/swiper2.webp',
	'/src/assets/images/swiper/swiper3.webp',
	'/src/assets/images/swiper/swiper4.webp',
	'/src/assets/images/swiper/swiper5.webp',
	'/src/assets/images/swiper/swiper6.webp',
	'/src/assets/images/swiper/swiper7.webp',
];

const cards = [
	{
		icon: '/src/assets/icons/arch_concept.svg',
		title: 'Coneptualización Arquitectónica',
		description:
			'Trasnformamos ideas en conceptos solidos y funcionales. Cada proyecto nace de una comprensión profunda del contexto, las necesidades y la identidad del cliente.',
	},
	{
		icon: '/src/assets/icons/project_management.svg',
		title: 'Gestión de Proyectos',
		description:
			'Acompañamos cada etapa del proyecto, asegurando una coordinación efectiva entre diseño, presupuesto y construcción.',
	},
	{
		icon: '/src/assets/icons/interior_design.svg',
		title: 'Diseño de Interiores',
		description:
			'Creamos ambientes que reflejan personalidad, confort y funcionalidad. Cada detalle, desde la iluminación hasta los materiales, se piens para generar armonía y coherencia con la arquitectura del espacio.',
	},
	{
		icon: '/src/assets/icons/supervision.svg',
		title: 'Supervisión de Obra',
		description:
			'Monitoreamos la construcción en sitio, verificamos calidad de materiales y cumplimiento de estándares, garantizando que la visión del diseño se materialice fielmente.',
	},
];

const carouselImages = [
	'/src/assets/images/carousel/c0.webp',
	'/src/assets/images/carousel/c1.webp',
	'/src/assets/images/carousel/c2.webp',
	'/src/assets/images/carousel/c3.webp',
	'/src/assets/images/carousel/c4.webp',
	'/src/assets/images/carousel/c5.webp',
	'/src/assets/images/carousel/c6.webp',
	'/src/assets/images/carousel/c7.webp',
	'/src/assets/images/carousel/c8.webp',
	'/src/assets/images/carousel/c9.webp',
];

const tabs = [
	{
		title: 'Historia',
		content:
			'Mi trayectoria como arquitecto independiente nace del deseo de crear espacios que realmente conecten con las personas y respondan a sus necesidades. A lo largo de los años he desarrollado proyectos habitacionales, comerciales y sociales que combinan aspectos estéticos y funcionales, respetando siempre su entorno. Para mí cada obra representa un proceso de escucha y traducción: entender cómo viven, trabajan o sueñan las personas, y transformar esas ideas en espacios coherentes, eficientes y con identidad. Mi enfoque se basa en un diseño integral, donde cada decisión, desde el concepto hasta la construcción, busca equilibrio entre estética, uso y entorno.',
	},
	{
		title: 'Misión',
		content:
			'Crear arquitectura que conecte con las personas y su entorno. Mi propósito es transformar ideas en espacios auténticos, funcionales y significativos, donde cada detalle contribuya a mejorar la vida cotidiana.',
	},
	{
		title: 'Visión',
		content:
			'Ser un referente en arquitectura consciente y sensible al contexto, donde el diseño se convierta en una herramienta para generar bienestar, comunidad y conexión entre las personas y los espacios que habitan.',
	},
];

const steps = [
	{
		title: 'Creación conceptual',
		icon: '🧭',
		text: 'Todo inicia con una idea. En esta etapa se escuchan, observan y analizan las necesidades del proyecto para definir una visión clara. El objetivo es dar forma a un concepto arquitectónico que conecte con el entorno y las personas que lo habitarán.',
	},
	{
		title: 'Planificación del diseño',
		icon: '⚙️',
		text: 'El concepto se transforma en propuesta. Se desarrollan esquemas espaciales, estrategias constructivas y selección de materiales, garantizando equilibrio entre estética, funcionalidad y presupuesto.',
	},
	{
		title: 'Presentación visual',
		icon: '🧪',
		text: 'A través de visualizaciones 3D, planos y material gráfico, el proyecto cobra vida. Esta etapa permite comprender el espacio antes de construirlo y ajustar detalles junto al cliente de manera colaborativa.',
	},
	{
		title: 'Coordinación del proyecto',
		icon: '🚀',
		text: 'Supervisión de la correcta ejecución del diseño, coordinando profesionales, tiempos y recursos. El propósito es asegurar que la obra refleje fielmente la intención arquitectónica y alcance la calidad esperada.',
	},
];

const testimonials = [
	{
		quote:
			'Desde el primer día sentimos que Jean entendió exactamente lo que queríamos: una casa funcional, acogedora y llena de luz. Nos acompañó en cada decisión con paciencia y criterio, cuidando el presupuesto sin sacrificar diseño. El resultado superó nuestras expectativas; el resultado, un espacio que realmente responde a nuestras necesidades.',
		author: 'Eduardo Casa Provenza',
	},
	{
		quote:
			'Lo que más agradezco es la claridad con la que Jean explicó todo el proceso. Supo transformar una casa antigua en un espacio moderno, cómodo y lleno de detalles que reflejan mi personalidad. Su supervisión constante hizo que la obra fluyera sin complicaciones.',
		author: 'Andrés Remodelación Casa Tejar',
	},
	{
		quote:
			'Buscábamos construir nuestra primera casa y Jean nos guió paso a paso, desde el diseño hasta la entrega final. Su enfoque fue siempre práctico, estético y humano. Hoy disfrutamos de un hogar bien pensado, con espacios amplios y ventilados que se adaptan perfectamente a nuestra rutina.',
		author: 'Familia Soto Casa X0',
	},
];

const projects = [
	{
		image: '/src/assets/images/projects/project1.webp',
		title: 'Solución Arquitectónica Comercial para tienda de Camisetas',
		text: 'El proyecto optimiza recursos mediante soluciones constructivas eficientes y un diseño que prioriza la especialidad, la iluminación natural y la calidad percibida. Un enfoque de lujo racional y accesible.',
	},
	{
		image: '/src/assets/images/projects/project2.webp',
		title:
			'Intervención Urbana para la Movilización Social en El Dique de Taras',
		text: 'La propuesta optimiza el área disponible mediante un layout funcional y uan materialidad sencilla pero expresiva. El resultado es un espacio flexible, atractivo y alineado con la identidad visual de la marca.',
	},
	{
		image: '/src/assets/images/projects/project3.webp',
		title: 'Proyecto Habitacional Casa Provenza',
		text: 'Más que un espacio, una oportunidad para reconectar a la comunidad. Esta intervención urbana transforma el Dique de Taras en un punto de encuentro y aprendizaje colectivo, donde el campo ferial y las huertas urbanas impulsan el trabajo colaborativo y el sentido de pertenencia.',
	},
];

document.querySelector('#app').append(header());
document.querySelector('#app').append(
	Swiper(imagesSwiper, {
		autoSlide: true,
		interval: 4000,
		enableSwipe: true,
	})
);
document
	.querySelector('#app')
	.append(
		Text(
			'Concebimos la arquitectura como un puente entre las personas y su entorno. Cada espacio que diseñamos busca generar conexión, confort y significado, transformando necesidades cotidianas en lugares que inspiran y perduran en el tiempo.'
		)
	);

const servicesCards = Card(cards);
servicesCards.id = 'jlm-services-cards';
document.querySelector('#app').append(servicesCards);

function renderCarousel() {
	if (!isMobile()) {
		const carousel = Carousel(carouselImages, {
			visibleCount: 2,
			gap: 16,
			autoSlide: true,
			interval: 2000,
		});
		carousel.id = 'jlm-carousel';
		document.querySelector('#app').append(carousel);
	} else {
		const swiper = Swiper(carouselImages, {
			autoSlide: true,
			interval: 4000,
			enableSwipe: true,
		});
		swiper.id = 'jlm-carousel';
		document.querySelector('#app').append(swiper);
	}
}

renderCarousel();

const historyTab = Tab(tabs);
historyTab.id = 'jlm-history-tab';
document.querySelector('#app').append(historyTab);

const timelineContainer = document.createElement('div');
timelineContainer.id = 'jlm-timeline';
document.querySelector('#app').append(timelineContainer);
let currentTimeline = HorizontalTimeline(steps);
window.addEventListener('resize', () => {
	renderTimeline();
});

// 4️⃣ Configurar el IntersectionObserver (definición de callback)
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) entry.target.classList.add('visible');
	});
});

renderTimeline();

// 5️⃣ Observar los elementos visibles DESPUÉS de renderizarlos
function observeCards() {
	// limpiar observadores previos
	observer.disconnect();

	document
		.querySelectorAll('.timeline-card, .vt-card')
		.forEach((el) => observer.observe(el));
}

// 6️⃣ Ejecutar el observer la primera vez
observeCards();

// 7️⃣ Y volver a ejecutar el observer cada vez que el timeline se vuelve a renderizar
function renderTimeline() {
	timelineContainer.innerHTML = '';

	if (isMobile()) {
		currentTimeline = VerticalTimeline(steps);
	} else {
		currentTimeline = HorizontalTimeline(steps);
	}

	timelineContainer.append(currentTimeline);

	// <-- MUY IMPORTANTE: volver a observar los nuevos elementos
	observeCards();
}

document.querySelector('#app').append(TestimonialCarousel(testimonials));
document.querySelector('#app').append(ProjectGrid(projects));
document.querySelector('#app').append(Footer());

// Scroll suave con offset para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', function (e) {
		e.preventDefault();

		const target = document.querySelector(this.getAttribute('href'));

		const offset = -150; // Ajustá este valor para mover el elemento (negativo lo baja un poco)

		const topPosition =
			target.getBoundingClientRect().top + window.pageYOffset + offset;

		window.scrollTo({
			top: topPosition,
			behavior: 'smooth',
		});
	});
});
