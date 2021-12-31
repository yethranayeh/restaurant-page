/** @format */

function loadPageContent(image) {
	let header = (function () {
		let header = document.createElement("header");
		header.classList.add("container");
		header.style.backgroundImage = `url(${image})`;
		// let bannerImg = document.createElement("img");
		// bannerImg.src = image;

		let headingText = document.createElement("h1");
		headingText.textContent = "Coffee & Inspiration: The Restaurant";

		let slogan = document.createElement("p");
		slogan.textContent = "Really cool restaurant slogan";

		// header.appendChild(bannerImg);
		header.appendChild(headingText);
		header.appendChild(slogan);

		return header;
	})();

	let navbar = (function () {
		let navbar = document.createElement("nav");
		let navLinks = [];

		let homeTab = document.createElement("a");
		homeTab.textContent = "Home";

		let menuTab = document.createElement("a");
		menuTab.textContent = "Menu";

		let contactTab = document.createElement("a");
		contactTab.textContent = "Contact";

		navLinks.push(homeTab, menuTab, contactTab);

		navLinks.forEach((link) => {
			link.href = "#";
			navbar.appendChild(link);
		});

		return navbar;
	})();

	let main = (function () {
		let main = document.createElement("main");
		main.classList.add("container");

		return main;
	})();

	let footer = (function () {
		let footer = document.createElement("footer");
		footer.classList.add("container");
		let paragraph = document.createElement("p");
		paragraph.textContent = "Lorem ipsum bla bla bla";
		footer.appendChild(paragraph);

		return footer;
	})();

	let contentArea = document.querySelector("#content");
	contentArea.appendChild(header);
	contentArea.appendChild(navbar);
	contentArea.appendChild(main);
	contentArea.appendChild(footer);
}

export { loadPageContent };
