let nameSuperhero = ["Captain America", "Hulk", "Iron Man", "Captain Marvel", "Spider-Man", "Thor", "Yon-Rogg", "Thanos", "Black Panter"];
let strength = [66, 79, 97, 80, 88, 78, 99, 95, 73];
let age = [53, 137, 26, 49, 48, 16, 1000, 1000, 52];
let heder = ["Name", "Strenght", "Age"];
let funcArray = ["nameSuperhero", "strength", "age"];
let counter = true;

let main = document.body.children[0];
let table = document.createElement("TABLE");

main.appendChild(table);
table.setAttribute('class', 'table');

let tr = document.createElement("TR");
table.appendChild(tr);

for (let k = 0; k < 3; k++) {
    let th = document.createElement("TH");
    tr.appendChild(th);
    th.innerHTML = `<input id="btn" type="button" onclick="sortArray(${funcArray[k]})" value=${heder[k]}></input>`;
}

for (let i = 0; i < nameSuperhero.length; i++) {
    let tr = document.createElement("TR");
    table.appendChild(tr);
    for (let j = 1; j < 4; j++) {
        let td = document.createElement("TD");
        tr.appendChild(td);
        if (j % 2 == 0) {
            td.innerHTML = `${strength[i]}`;
            td.setAttribute('class', 'strength');
        } else if (j % 3 == 0) {
            td.innerHTML = `${age[i]}`;
            td.setAttribute('class', 'age');
        } else {
            td.innerHTML = `${nameSuperhero[i]}`;
            td.setAttribute('class', 'nameSuperhero');
        }
    }
}

function makeTable(par1, par2) {
    for (i = 0; i < 9; i++) {
        let tdName = document.getElementsByClassName('nameSuperhero');
        tdName[i].innerHTML = `${nameSuperhero[i]}`;
    }
    for (k = 0; k < 9; k++) {
        let tdStrength = document.getElementsByClassName('strength');
        tdStrength[k].innerHTML = `${strength[k]}`;
    }
    for (j = 0; j < 9; j++) {
        let tdage = document.getElementsByClassName('age');
        tdage[j].innerHTML = `${age[j]}`;

    }
    document.getElementById('notification').setAttribute('class', 'notifi');
    document.getElementById('notification').innerHTML = `Sorting by ${par1}, order: ${par2}`;
}

function sortArray(arrs) {
    let target = event.target;
    if (counter) {
        if (target.getAttribute('value') == 'Strenght') {
            arrs.sort((a, b) => (a - b));
            counter = false;
            return makeTable("Strenght", "ASC");
        }
        if (target.getAttribute('value') == 'Age') {
            arrs.sort((a, b) => (a - b));
            counter = false;
            return makeTable("Age", "ASC");
        } else {
            arrs.sort();
            counter = false;
            return makeTable("Name", "ASC");
        }
    } else {
        if (target.getAttribute('value') == 'Strenght') {
            arrs.sort((a, b) => (b - a));
            counter = true;
            return makeTable("Strenght", "DESC");
        }
        if (target.getAttribute('value') == 'Age') {
            arrs.sort((a, b) => (b - a));
            counter = true;
            return makeTable("Age", "DESC");
        } else {
            arrs.reverse();
            counter = true;
            return makeTable("Name", "DESC");
        }
    }
}
