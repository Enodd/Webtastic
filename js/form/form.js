const addons = [{
		id: "resp",
		name: "Pełna rosponsywność - 150zł",
		price: 150
	},
	{
		id: "contactform",
		name: "Formularz kontaktowy - 50zł",
		price: 50
	},
	{
		id: "wordpress",
		name: "Integracja z Wordpressem - 30zł",
		price: 30
	},
	{
		id: "newsletter",
		name: "Funkcjonalny newsletter - 120zł",
		price: 120
	},
	{
		id: "login",
		name: "Pełna System logowania się do serwisu - 60zł",
		price: 60
	},
	{
		id: "other",
		name: "Inne wybrane przez użytkownika",
		price: 0
	}
];

const addonsfield = document.querySelector("#addons");
const list = document.createElement("ul");
list.setAttribute("class", "addons__list");
addons.forEach(addon => {
	const {
		id,
		name,
		price
	} = addon;
	const field = document.createElement("li");
	const label = document.createElement("label");
	field.setAttribute("class", "checkbox");
	field.style.userSelect = "none";
	label.innerText = name;
	const check = document.createElement("div");
	check.setAttribute("class", "checkbox__outerbox");
	const input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("name", id);
	input.setAttribute("id", id);
	input.setAttribute("value", price);
	check.appendChild(input);
	field.appendChild(label);
	field.appendChild(check);
	list.appendChild(field);
});
addonsfield.appendChild(list);