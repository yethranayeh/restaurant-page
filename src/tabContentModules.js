/** @format */

const homeContent = {
	init: function () {
		let p = document.createElement("p");
		p.textContent = "Home";
		return p;
	}
};

const menuContent = {
	init: function (isMobile) {
		let menu = document.createElement("div");
		menu.classList.add("menu");
		if (isMobile) {
			menu.classList.add("mobile");
		}

		for (let i = 0; i < 6; i++) {
			let card = document.createElement("div");
			card.classList.add("card");
			let desc = document.createElement("div");
			desc.classList.add("description");

			let h2 = document.createElement("h2");
			h2.textContent = "Product Name";
			let p = document.createElement("p");
			p.textContent =
				"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
			let price = document.createElement("span");
			price.textContent = "Price: $1.45";
			desc.appendChild(h2);
			desc.appendChild(p);
			desc.appendChild(price);

			card.appendChild(desc);
			menu.appendChild(card);
		}

		return menu;
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
