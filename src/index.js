/** @format */
import "./style.css";
import { loadPageContent } from "./loadPageContent.js";
import { homeContent, menuContent, contactContent } from "./tabContentModules";

// Check if mobile,
let isMobile = false;
if (
	/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
		navigator.userAgent
	)
) {
	// true for mobile device
	isMobile = true;
}

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
	// TODO: DRY up the code. A lot of repetition for animation handling.
	if (target.textContent === "Home" && !(currentTab === "Home")) {
		mainContentArea.classList.add("slide-out--right");
		document.querySelector(".slide-out--right").onanimationend = () => {
			mainContentArea.innerHTML = "";
			mainContentArea.appendChild(homeContent.init());
			removeAnimations(mainContentArea);
			mainContentArea.classList.add("slide-in--left");
		};
	} else if (target.textContent === "Menu" && !(currentTab === "Menu")) {
		if (currentTab === "Home") {
			mainContentArea.classList.add("slide-out--left");
			document.querySelector(".slide-out--left").onanimationend = () => {
				mainContentArea.innerHTML = "";
				mainContentArea.appendChild(menuContent.init(isMobile));
				removeAnimations(mainContentArea);
				mainContentArea.classList.add("slide-in--right");
			};
		} else {
			mainContentArea.classList.add("slide-out--right");
			document.querySelector(".slide-out--right").onanimationend = () => {
				mainContentArea.innerHTML = "";
				mainContentArea.appendChild(menuContent.init(isMobile));
				removeAnimations(mainContentArea);
				mainContentArea.classList.add("slide-in--left");
			};
		}
	} else if (target.textContent === "Contact" && !(currentTab === "Contact")) {
		mainContentArea.classList.add("slide-out--left");
		document.querySelector(".slide-out--left").onanimationend = () => {
			mainContentArea.innerHTML = "";
			mainContentArea.appendChild(contactContent.init());
			removeAnimations(mainContentArea);
			mainContentArea.classList.add("slide-in--right");
		};
	}
}
