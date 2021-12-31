/** @format */
import bannerImg from "./banner.jpg";
import "./style.css";
import { loadPageContent } from "./loadPageContent.js";

const contentArea = loadPageContent(bannerImg);

// Tab switching
const tabs = contentArea.querySelectorAll(".tab");
for (let tab of tabs) {
	tab.addEventListener("click", function (e) {
		[...tabs].map(function (tab) {
			tab.classList.remove("active-tab");
			return;
		});
		e.target.classList.add("active-tab");
	});
}
