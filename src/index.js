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

function removeAnimations(element) {
	element.classList.remove("slide-out--left", "slide-out--right", "slide-in--left", "slide-in--right");
}

function tabClickHandler(target) {
	removeAnimations(mainContentArea);
	let currentTab = contentArea.querySelector(".active-tab").textContent;
	// Change tab classes
	[...tabs].map(function (tab) {
		tab.classList.remove("active-tab");
		return;
	});
	target.classList.add("active-tab");

	// Change main content, only if it is not already active
	if (target.textContent === "Home" && !(currentTab === "Home")) {
		mainContentArea.classList.add("slide-out--left");
		document.querySelector(".slide-out--left").onanimationend = () => {
			mainContentArea.innerHTML = "";
			mainContentArea.appendChild(homeContent.init());
			removeAnimations(mainContentArea);
			mainContentArea.classList.add("slide-in--right");
		};
	} else if (target.textContent === "Menu" && !(currentTab === "Menu")) {
		if (currentTab === "Home") {
			mainContentArea.classList.add("slide-out--right");
			document.querySelector(".slide-out--right").onanimationend = () => {
				mainContentArea.innerHTML = "";
				mainContentArea.appendChild(menuContent.init());
				removeAnimations(mainContentArea);
				mainContentArea.classList.add("slide-in--left");
			};
		} else {
			mainContentArea.classList.add("slide-out--left");
			document.querySelector(".slide-out--left").onanimationend = () => {
				mainContentArea.innerHTML = "";
				mainContentArea.appendChild(menuContent.init());
				removeAnimations(mainContentArea);
				mainContentArea.classList.add("slide-in--right");
			};
		}
	} else if (target.textContent === "Contact" && !(currentTab === "Contact")) {
		mainContentArea.classList.add("slide-out--right");
		document.querySelector(".slide-out--right").onanimationend = () => {
			mainContentArea.innerHTML = "";
			mainContentArea.appendChild(contactContent.init());
			removeAnimations(mainContentArea);
			mainContentArea.classList.add("slide-in--left");
		};
	}
}

// homeContent.init();
// menuContent.init();
// contactContent.init();
