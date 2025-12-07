import './project.css';

export const ProjectGrid = (projects = []) => {
	const container = document.createElement('section');
	container.className = 'project-grid';
	container.id = 'jlm-projects';

	projects.forEach((project) => {
		const el = document.createElement('div');
		el.className = 'project-card';
		el.innerHTML = `
      <img src="${project.image}" alt="${project.title}" class="project-img" />
      <div class="project-content">
        <h3 class="project-title">${project.title}</h3>
        <p class="project-text">${project.text}</p>
      </div>
    `;
		container.appendChild(el);
	});

	return container;
};
