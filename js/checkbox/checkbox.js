const checkboxes = document.querySelectorAll(".checkbox");

checkboxes.forEach(check => {
	check.addEventListener("click", function() {
		const outerbox = check.querySelector(".checkbox__outerbox");
		const box = outerbox.querySelector(".fbx");
		if (outerbox.contains(box)) {
			box.style.animation = "uncheck 0.1s ease-out";
			setTimeout(function() {
				box.remove();
			}, 100);
		} else {
			const fillbox = document.createElement("div");
			fillbox.setAttribute("class", "fbx");
			outerbox.appendChild(fillbox);
		}
	});
});
