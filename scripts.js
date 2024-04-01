document.querySelectorAll(".accordion-heading").forEach((item) => {
	item.addEventListener("click", function () {
		this.parentNode.classList.toggle("active");
	});
});
