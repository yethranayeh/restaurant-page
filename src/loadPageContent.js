/** @format */

function loadPageContent(rName, rSlogan) {
	let header = (function () {
		let header = document.createElement("header");
		header.classList.add("container", "disable-select");
		// header.style.backgroundImage = `url(${image})`;

		let headingText = document.createElement("h1");
		headingText.classList.add("retroshadow");
		headingText.textContent = rName;

		let slogan = document.createElement("p");
		slogan.textContent = rSlogan;

		// header.appendChild(bannerImg);
		header.appendChild(headingText);
		header.appendChild(slogan);

		return header;
	})();

	let navbar = (function () {
		let navbar = document.createElement("nav");
		navbar.classList.add("disable-select");
		let navLinks = [];

		let homeTab = document.createElement("a");
		homeTab.textContent = "Home";
		homeTab.classList.add("active-tab");

		let menuTab = document.createElement("a");
		menuTab.textContent = "Menu";

		let contactTab = document.createElement("a");
		contactTab.textContent = "Contact";

		navLinks.push(homeTab, menuTab, contactTab);

		navLinks.forEach((link) => {
			link.href = "javascript:void(0)";
			link.classList.add("tab");
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
		paragraph.textContent = "Copyright © 2021 Alper Aktaş | Made with 🖤 for The Odin Project";
		footer.appendChild(paragraph);

		return footer;
	})();

	let contentArea = document.querySelector("#content");
	let pageContent = document.createElement("div");
	pageContent.appendChild(header);
	pageContent.appendChild(navbar);
	pageContent.appendChild(main);
	contentArea.appendChild(pageContent);
	contentArea.appendChild(footer);

	return contentArea;
}

export { loadPageContent };
