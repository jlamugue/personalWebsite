import { SectionTitle } from '../../components';
import { ProjectGrid } from '../../components/project/project';
import { projects } from '../../data/projects';

export function renderProjects() {
	const container = document.createElement('section');
	container.append(SectionTitle('Proyectos'));
	container.append(ProjectGrid(projects));
	return container;
}
