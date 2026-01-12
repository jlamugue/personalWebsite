import { Card } from '../../components';
import { cards } from '../../data/cards';

export function renderServices() {
	const servicesCards = Card(cards);
	servicesCards.id = 'jlm-services-cards';
	return servicesCards;
}
