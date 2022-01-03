/** @format */

const homeContent = {
	init: function (rName, banner) {
		const container = document.createElement("div");
		container.classList.add("home-wrapper");

		const greeting = document.createElement("div");
		greeting.classList.add("greeting");
		greeting.style.backgroundImage = `url(${banner})`;

		const about = document.createElement("p");
		about.textContent = `You've found the perfect spot to have a hearty meal for dinner with family and friends. ${rName} is a fusion restaurant where cuisines from all around the world are brought together to create the perfect bite!`;

		container.appendChild(greeting);
		container.appendChild(about);

		return container;
	}
};

const menuContent = {
	init: function (isMobile, images) {
		const menu = document.createElement("div");
		const mealNames = [
			"Fried Wontons",
			"Baked Chicken Wings",
			"Fried Chicken Nuggets",
			"Grilled Steak",
			"Shrimp Noodles",
			"Fruit Dish"
		];
		const mealDesc = [
			"Tender wrappers stuffed with ground pork, mushrooms and seasonings, then deep fried to crispy golden brown perfection. The savory pork filling inside of a crispy outer shell just can't be beat!",
			"Coated in a homemade spice rub, these roasted to crispy perfection! A simple yet satisfying appetizer or meal option that feature a BBQ rub that adds tons of flavor.",
			"Marinated in buttermilk, these fried chicken nuggets are coated in seasoned flour and deep fried to golden brown perfection!",
			"A delicious steak with a nice contrast between the smoky, almost charred exterior and the deeply beefy interior. It is chin-drippingly juicy and melt-in-your-mouth tender!",
			"This shrimp noodle plate is loaded with not just the best flavors, but with veggies and shrimps. Makes a perfectly filling lunch.",
			"It's an incredibly refreshing dish that's made with beautiful blend of delicious fruits and a simple dressing to compliment it."
		];
		const mealPrices = ["1.50", "3.10", "2.80", "8.50", "3.50", "5.60"];
		menu.classList.add("menu");
		if (isMobile) {
			menu.classList.add("mobile");
		}

		for (let i = 0; i < 6; i++) {
			let card = document.createElement("div");
			card.classList.add("card");

			// Background Image Container
			let imageContainer = document.createElement("div");
			imageContainer.classList.add("bg-image");
			imageContainer.style.backgroundImage = `url(${images[i]})`;

			// Description Container
			let desc = document.createElement("div");
			desc.classList.add("description");

			let h2 = document.createElement("h2");
			h2.textContent = mealNames[i];

			let p = document.createElement("p");
			p.textContent = mealDesc[i];

			let price = document.createElement("span");
			price.textContent = `Price: $${mealPrices[i]}`;

			desc.appendChild(h2);
			desc.appendChild(p);
			desc.appendChild(price);

			// Add elements to card
			card.appendChild(imageContainer);
			card.appendChild(desc);

			// Add card to menu
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
