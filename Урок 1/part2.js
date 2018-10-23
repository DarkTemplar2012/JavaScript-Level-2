var config = [{
	href: '/',
	name: "Главная"
}, {
	href: '/catalog',
	name: "Каталог"
}, {
	href: '/gallery',
	name: "Галерея",
	items: [{
		href: '/1',
		name: "Фото 1"
	}, {
		href: '/2',
		name: "Фото 2"
	}]
}, {
	href: '/job',
	name: "Работы",
	items: [{
		href: '/j1',
		name: "Работа 1"
	}, {
		href: '/j2',
		name: "Работа 2"
	}, {
		href: '/j3',
		name: "Работа 3"
	}]
}];

class Container {};

class Menu extends Container {
	static info() {
		console.log('show info');
	}
	constructor(id, config) {
		super();
		this.id = id;
		this.items = [];
		this.createItems(config);
	}
	createItems(config) {
		for (let i = 0; i < config.length; i++) {
			this.items.push(new MenuItem(config[i].href, config[i].name));
			if (config[i].items) {
				for (let j = 0; j < config[i].items.length; j++) {
					this.items.push(new MenuItemNested(config[i].items[j].href, config[i].items[j].name));
				};
			};
		};
	}
	create() {
		document.write(this.render());
	}
	render() {
		let result = '<ul id="' + this.id + '">';

		for (let i = 0; i < this.items.length;) {
			if (this.items[i] instanceof MenuItem) {
				result += this.items[i].render();
				i++;
			} else if (this.items[i] instanceof MenuItemNested) {
				result += '<ul>';
				for (; this.items[i] instanceof MenuItemNested; i++) {
					result += this.items[i].render();
				};
				result += '</ul>';
			};
		};

		result += '</ul>';
		return result;
	}
	remove() {
		let remove = document.getElementById(this.id);
		remove.parentNode.removeChild(remove);
	}
};

class MenuItem extends Container {
	constructor(href, name) {
		super();
		this.href = href;
		this.name = name;
	}
	render() {
		return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
	}
}

class MenuItemNested extends Container {
	constructor(href, name) {
		super();
		this.href = href;
		this.name = name;
	}
	render() {
		return '<li><a href="' + this.href + '">' + this.name + '</a></li>';
	}
}

let menu = new Menu("main-menu", config);
menu.create();
// menu.remove();
// Menu.info();