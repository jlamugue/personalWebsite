import { Tab } from '../../components';
import { tabs } from '../../data/tabs';

export function renderHistoryTabs() {
	const historyTab = Tab(tabs);
	historyTab.id = 'jlm-history-tab';
	return historyTab;
}
