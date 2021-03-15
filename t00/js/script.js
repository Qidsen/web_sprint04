let click = 0;

function transformation() {
	let hero = document.getElementById("hero")
	let lab = document.getElementById("lab")
	
	if(click % 2 == 0) {
		hero.innerHTML = "HULK"
		hero.style.font = "130px 'Bowlby One', cursive"
		hero.style.letterSpacing = "6px"
		lab.style.background = "#70964b"
	}
	else if(click % 2 == 1) {
		hero.innerHTML = "Bruce Banner"
		hero.style.font = "60px 'Bowlby One', cursive"
		hero.style.letterSpacing = "2px"
		lab.style.background = "#ffb300"
	}
	click++;
}
