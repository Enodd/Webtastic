const notification = document.querySelector("#notification");
const close = document.querySelector("#close");

close.addEventListener("click", function () {
	notification.style.animation = "hide 0.3s ease-in-out"
	setTimeout(() => {
		notification.remove();
	}, 300)
});