import './tab.css';

export const Tab = (tabsData = []) => {
	const container = document.createElement('div');
	container.classList.add('tabs-container');

	// Header
	const header = document.createElement('div');
	header.classList.add('tabs-header');

	// Underline
	const underline = document.createElement('div');
	underline.classList.add('tabs-underline');
	header.appendChild(underline);

	// Content
	const content = document.createElement('div');
	content.classList.add('tabs-content');

	// State
	let activeIndex = 0;

	// Create tabs
	tabsData.forEach((tab, i) => {
		const btn = document.createElement('button');
		btn.classList.add('tab-btn');
		btn.textContent = tab.title;

		btn.addEventListener('click', () => {
			if (activeIndex === i) return;
			switchTab(i);
		});

		header.appendChild(btn);
	});

	container.append(header, content);

	// Init
	function switchTab(index) {
		const oldContent = content.querySelector('.tab-text');
		if (oldContent) {
			oldContent.classList.add('fade-out');
			setTimeout(() => oldContent.remove(), 300);
		}

		const newText = document.createElement('div');
		newText.classList.add('tab-text', 'fade-in');
		newText.textContent = tabsData[index].content;
		content.appendChild(newText);

		const buttons = header.querySelectorAll('.tab-btn');
		buttons.forEach((b, i) => b.classList.toggle('active', i === index));

		activeIndex = index;
		moveUnderline();
	}

	function moveUnderline() {
		const buttons = header.querySelectorAll('.tab-btn');
		const activeBtn = buttons[activeIndex];
		const rect = activeBtn.getBoundingClientRect();
		const headerRect = header.getBoundingClientRect();

		underline.style.width = `${rect.width}px`;
		underline.style.transform = `translateX(${rect.left - headerRect.left}px)`;
	}

	// Initial setup
	switchTab(0);
	window.addEventListener('resize', moveUnderline);

	return container;
};
