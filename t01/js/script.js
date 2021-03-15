function launch() {
    let allCharacter = document.getElementsByTagName("li");
    let properties;

    for (let value of allCharacter) {
        properties = value.attributes;
        getErrors(value, properties);
        value.appendChild(document.createElement("br"));
        drawCircle(value, value.getAttribute("data-element"));
    }
}

function drawCircle(value, circles) {
    let char;
    let arrOfCircles = circles.split(" ");

    for (let color of arrOfCircles) {
        char = document.createElement("div");
        char.className = `elem ${color}`;
        if (color == "none") {
            let round = document.createElement("div");
            round.className = `line`;
            char.appendChild(round);
        }
        char.style.border = "2px white solid";
        value.appendChild(char);
    }
}

function getErrors(value, properties) {
	classProps = value.getAttribute("class")
	dataProps = value.getAttribute("data-element")
	if(!properties || (classProps !== "good" && classProps !== "evil" && classProps !== "unknown"))
		value.setAttribute("class", "unknown")
	if(!dataProps)
		value.setAttribute("data-element", "none")
}

launch();
