import { ProjectGrid } from '../../components/project/project';
import { projects } from '../../data/projects';

export function renderProjects() {
	return ProjectGrid(projects);
}
