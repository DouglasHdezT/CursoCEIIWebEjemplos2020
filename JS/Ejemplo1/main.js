const switchButton = document.querySelector("button#switch-theme");
let stateLight = true;

switchButton.addEventListener("click", (event) => { 
	const body = document.querySelector("body");
	body.classList.remove("dark");
	body.classList.remove("light");
	
	if (stateLight) { 
		body.classList.add("dark")
	} else {
		body.classList.add("light")
	}

	stateLight = !stateLight;

	const nav = document.querySelector("section");
	console.log(nav.offsetTop);
	window.scrollTo({top: nav.offsetTop - 175, behavior: "smooth"});
}); 