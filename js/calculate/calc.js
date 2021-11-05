const result = document.querySelector("#result");
const form = document.querySelector("#priceform");
const graphics = form.querySelectorAll('input[name="graphics"]');
const radios = form.querySelectorAll('input[name="model"]');
const addedaddons = form.querySelectorAll(".checkbox__outerbox");

form.addEventListener("submit", function(e) {
	e.preventDefault();
	let cena = 0;
	for (let x = 0; x < graphics.length; x++) {
		if (graphics[x].checked) {
			cena += parseInt(graphics[x].value);
		}
	}
	for (let i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			cena += parseInt(radios[i].value);
		}
	}
	for (let j = 0; j < addedaddons.length; j++) {
		const fbx = addedaddons[j].querySelector(".fbx");
		if (addedaddons[j].contains(fbx)) {
			const val = addedaddons[j].querySelector('input[type="hidden"]');
			cena += parseInt(val.value);
		}
	}
	result.innerHTML = ` ${cena}zł`;
});
