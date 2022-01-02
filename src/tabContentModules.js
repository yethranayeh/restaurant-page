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
		let form = document.createElement("form");

		// Name
		let labelName = document.createElement("label");
		labelName.setAttribute("for", "inputName");
		labelName.textContent = "Your name:";
		let inputName = document.createElement("input");
		inputName.id = "inputName";
		inputName.required = true;

		// E-mail
		let labelEmail = document.createElement("label");
		labelEmail.setAttribute("for", "inputEmail");
		labelEmail.textContent = "E-mail:";
		let inputEmail = document.createElement("input");
		inputEmail.type = "email";
		inputEmail.id = "inputEmail";
		inputEmail.required = true;

		// Message
		let labelMessage = document.createElement("label");
		labelMessage.setAttribute("for", "inputMessage");
		labelMessage.textContent = "Message:";
		let inputMessage = document.createElement("textarea");
		inputMessage.id = "inputMessage";
		inputMessage.required = true;

		// Send Button
		let btn = document.createElement("button");
		btn.textContent = "Send";
		let btnWrapper = document.createElement("div");
		btnWrapper.classList.add("btn-wrapper");
		btnWrapper.appendChild(btn);

		form.appendChild(labelName);
		form.appendChild(inputName);
		form.appendChild(labelEmail);
		form.appendChild(inputEmail);
		form.appendChild(labelMessage);
		form.appendChild(inputMessage);
		form.appendChild(btnWrapper);

		return form;
	}
};

export { homeContent, menuContent, contactContent };
