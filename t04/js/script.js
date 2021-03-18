class Movie {
    constructor(title, poster, date, info, actors) {
        this.title = title;
        this.poster = poster;
        this.date = date;
        this.info = info;
        this.actors = actors;
    }
}

let johnWick = new Movie("John Wick",
    "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5ebc7d3f8ea40d24c6b2967263d2b0389d174c5f44177b357595190ce1b6d1d8._RI_V_TTW_.jpg", "May 9, 2019",
    `The story focuses on John Wick (Reeves) searching 
    for the men who broke into his home, stole his
    vintage car and killed his puppy, which was a
    last gift to him from his recently deceased wife
    (Moynahan). Stahelski and David Leitch directed 
    the film together,though only 
    Stahelski was credited.`, ["Keanu Reeves", "Michael Nyqvist", "Alfie Allen", "Adrianne Palicki"]);

let avengers = new Movie("Avengers: Endgame",
    "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY1200_CR90,0,630,1200_AL_.jpg", "April 25, 2019",
    `Twenty-three days after Thanos used the Infinity 
    Gauntlet to kill half of all life in the universe,
    Carol Danvers rescues Tony Stark and Nebula from deep 
    space and they reunite with the remaining Avengers—Bruce 
    Banner, Steve Rogers, Thor, Natasha Romanoff, and James 
    Rhodes—and Rocket on Earth. Locating Thanos on an uninhabited
    planet, they plan to use the Infinity Stones to reverse "the Snap",
    but Thanos destroyed the Stones to prevent further use. Enraged,
    Thor decapitates Thanos.`, ["Robert Downey Jr", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"]);

let inception = new Movie("Inception",
    "https://flxt.tmsimg.com/assets/p7825626_p_v10_af.jpg", "July 8, 2010",
    `Dominick "Dom" Cobb and Arthur are "extractors": 
    they perform corporate espionage using experimental
    military technology to infiltrate their targets' 
    subconscious and extract information through a 
    shared dream world. Their latest target, Saito, 
    reveals he arranged their mission to test Cobb for a seemingly 
    impossible job: implanting an idea in a person's subconscious, 
    or "inception". Saito wants Cobb to convince Robert, the son of
    Saito's competitor Maurice Fischer, 
    to dissolve his father's company.`, ["Leonardo DiCaprio", "Joseph Gordon", "Elliot Page", "Tom Hardy"]);

let all = new Set([johnWick, avengers, inception]);
let favorite = new Set();


function chooseFilm() {
    let target = this.dataset.id;
    render(target);
}

let firstStart = true;
let movieFromSet;
let list;

function render(data_id, allorFav = all) {
    list = document.querySelector('.list');
    list.innerHTML = '';
    let i = 0;

    for (let movie of allorFav) {
        list.innerHTML += `<p data-id=${i} class="title">${movie.title}</p>`;
        i++;
    }

    let title = document.getElementsByClassName("title");

    if (firstStart == true) {
        title[0].setAttribute("id", "activeTitle");
    } else {
        title[data_id].setAttribute("id", "activeTitle");
    }

    for (let i = 0; i < title.length; i++) {
        title[i].addEventListener("click", chooseFilm);
    }

    movieFromSet = Array.from(allorFav)[data_id];
    let poster = document.getElementById("poster");
    let description = document.getElementById("description");

    description.innerHTML = "";
    poster.src = movieFromSet.poster;
    description.innerHTML += `<h2>${movieFromSet.title}</h2>`;
    description.innerHTML += `<p>${movieFromSet.date}</p>`;

    for (let i = 0; i < movieFromSet.actors.length; i++) {
        description.innerHTML += `<li class="actorsList">${movieFromSet.actors[i]}</li>`;
    }

    description.innerHTML += `<div class="info">${movieFromSet.info}</ class="info">`;
    firstStart = false;
}
render(0);
