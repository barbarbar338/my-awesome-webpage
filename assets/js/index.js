const loading = document.getElementById("loading");

const rickroll_url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
const loading_texts = [
	"Loading...",
	"Still loading...",
	"Please wait...",
	"Almost done...",
	"Getting ready...",
];

const second = 1000;
const minute = second * 60;

window.onload = main;

function main() {
	setTimeout(() => {
		window.location.href = rickroll_url;
	}, minute);

	setInterval(() => {
		const random = Math.floor(Math.random() * loading_texts.length);
		loading.innerHTML = loading_texts[random];
	}, second * 5);
}
