class Container {
	remove() {
		document.getElementById(this.id).remove();
	}
};

class Menu extends Container {
	constructor(id, config) {
		super();
		this.id = id;
		this.items = [];
		if (!config) {
			this.fetchMenu();
		} else {
			this.createItems(config);
		}
	}

	fetchMenu() {
		var urlSuc = "http://mytest/succes.json";
		var urlErr = "http://mytest/error.json";
		var url = "http://mytest/gallery.json";

		var xhrSuc = new XMLHttpRequest();
		var xhrErr = new XMLHttpRequest();
		var xhr = new XMLHttpRequest();


		xhrSuc.open('GET', urlSuc);
		xhrSuc.send();
		xhrErr.open('GET', urlErr);
		xhrErr.send();
		xhr.open('GET', url);
		xhr.send();
		var self = this;

		xhr.onreadystatechange = function () {
			var succes = JSON.parse(xhrSuc.responseText);
			var error = JSON.parse(xhrErr.responseText);
			if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					var config = JSON.parse(xhr.responseText);
					console.log(succes.result);
					self.createItems(config);
					self.create();
				} else {
					console.log(error.result);

				}
			};
		};
	}
	createItems(config) {
		for (let i = 0; i < config.length; i++) {
			this.items.push(new MenuItem(config[i].preview, config[i].full));
		};
	}
	create() {
		let div = document.getElementById('gallery');
		div.innerHTML = this.render();
	}
	render() {
		let result = '<div id="gallery">';

		for (let i = 0; i < this.items.length; i++) {
			result += this.items[i].render();
		}

		result += '</div>';
		return result;
	}


};

class MenuItem extends Container {
	constructor(preview, full) {
		super();
		this.preview = preview;
		this.full = full;
	}
	render() {
		return '<a href="' + this.full + '"><img src="' + this.preview + '" alt="" class="smallPicture"></a>';
	}
}

let menu = new Menu("main-menu");