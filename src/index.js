/** @format */
import "./style.css";
import { loadPageContent } from "./loadPageContent.js";
import { homeContent, menuContent, contactContent } from "./tabContentModules";

const contentArea = loadPageContent();
const mainContentArea = contentArea.querySelector("main");
mainContentArea.appendChild(homeContent.init());

// Tab switching
const tabs = contentArea.querySelectorAll(".tab");
for (let tab of tabs) {
	tab.addEventListener("click", function (e) {
		tabClickHandler(e.target);
	});
}

function tabClickHandler(target) {
	// Change tab classes
	[...tabs].map(function (tab) {
		tab.classList.remove("active-tab");
		return;
	});
	target.classList.add("active-tab");

	// Change main content
	if (target.textContent === "Home") {
		mainContentArea.innerHTML = "";
		mainContentArea.appendChild(homeContent.init());
	} else if (target.textContent === "Menu") {
		mainContentArea.innerHTML = "";
		mainContentArea.appendChild(menuContent.init());
	} else if (target.textContent === "Contact") {
		mainContentArea.innerHTML = "";
		mainContentArea.appendChild(contactContent.init());
	}
}

// homeContent.init();
// menuContent.init();
// contactContent.init();
