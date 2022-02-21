/** @format */
const cube = document.querySelector(".circle");

const randomize = async () => {
	const quote_id = document.querySelector("#adviceNumber");
	const quote_text = document.querySelector("#adviceText");

	const data = await fetch("https://api.adviceslip.com/advice");
	const json = await data.json();

	quote_id.textContent = `# ${json.slip.id}`;
	quote_text.textContent = json.slip.advice;
};

randomize();

cube.addEventListener("click", randomize);
