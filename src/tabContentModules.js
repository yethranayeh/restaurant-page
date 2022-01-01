/** @format */

const homeContent = {
	init: function () {
		let p = document.createElement("p");
		p.textContent = "Home";
		return p;
	}
};

const menuContent = {
	init: function () {
		let p = document.createElement("p");
		p.textContent = "Menu";
		return p;
	}
};

const contactContent = {
	init: function () {
		let p = document.createElement("p");
		p.textContent = "Contact";
		return p;
	}
};

export { homeContent, menuContent, contactContent };
