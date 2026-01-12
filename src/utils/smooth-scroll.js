export function setupSmoothScroll({ offset = -150 } = {}) {
	document.querySelectorAll('a[href^="#"]').forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();

			const target = document.querySelector(this.getAttribute('href'));
			if (!target) return;

			const topPosition =
				target.getBoundingClientRect().top + window.pageYOffset + offset;

			window.scrollTo({ top: topPosition, behavior: 'smooth' });
		});
	});
}
