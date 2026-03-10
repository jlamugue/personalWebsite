import { Card, SectionTitle } from '../../components';
import { cards } from '../../data/cards';

export function renderServices() {
	const container = document.createElement('section');
	container.append(SectionTitle('Servicios'));
	
	const servicesCards = Card(cards);
	servicesCards.id = 'jlm-services-cards';
	container.append(servicesCards);
	
	return container;
}
