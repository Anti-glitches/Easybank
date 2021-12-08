const body = document.querySelector("body");
const header = document.querySelector(".header");
const btnHamburger = document.querySelector("#btnHamburger");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
	header.classList.toggle("open");

	// menu overlay animations delay cause display can't be animated
	if (!header.classList.contains("open")) {
		fadeElems.forEach((elem) => {
			elem.classList.add("fade-out");
			elem.classList.remove("fade-in");
			setTimeout(() => {
				elem.style.display = "none";
			}, 150);
		});
		body.classList.remove("noScroll");
	} else {
		fadeElems.forEach((elem) => {
			elem.classList.add("fade-in");
			elem.classList.remove("fade-out");
			elem.style.display = "block";
		});
		body.classList.add("noScroll");
	}
});
