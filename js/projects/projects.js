const projects = [
	{
		name: "Gamenacity",
		description: "Gamenacity jest to serwis recenzencki tworzący artykuły na tematy ogólnogrowe. Recenzje najnowszych gier, konsol, akcesoriów i wiele więcej.",
		bannerPath: "./images/gamenacity.png",
		link: "https://github.com/gamenacity/gamenacity.github.io/"
	},
	{
		name: "Foodnacity",
		description: "Foodnacity jest to wiodąca firma cateringowa, która dostarcza najwyższej jakości potrawy na wesela, przyjęcia, imprezy okolicznościowe, imprezy urodzinowe, a także posiada liczne restauracje na terenie Polski.",
		bannerPath: "./images/foodnacity.png",
		link: "https://github.com/4BDN16/foodnacity/"
	}
];

const output = document.querySelector("#projects");

projects.forEach(project => {
	const { name, description, bannerPath, link } = project;
	const box = document.createElement("a");
	box.setAttribute("class", "projects__wrapper");
	box.setAttribute("href", link);
	const head = document.createElement("h3");
	head.setAttribute("class", "projects__title");
	const desc = document.createElement("p");
	desc.setAttribute("class", "projects__content");
	const contentbox = document.createElement("div");
	contentbox.setAttribute("class", "projects__contentwrapper");
	const image = document.createElement("div");
	image.setAttribute("class", "projects__image");
	image.style.backgroundImage = `url(${bannerPath})`;
	head.innerText = name;
	desc.innerText = description;
	contentbox.appendChild(head);
	contentbox.appendChild(desc);
	box.appendChild(image);
	box.appendChild(contentbox);
	output.appendChild(box);
});
