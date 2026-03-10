import { SectionTitle, Tab } from '../../components';
import { tabs } from '../../data/tabs';

export function renderHistoryTabs() {
	const container = document.createElement('section');
	container.append(SectionTitle('Nuestra historia'));
	
	const historyTab = Tab(tabs);
	historyTab.id = 'jlm-history-tab';
	container.append(historyTab);
	
	return container;
}
