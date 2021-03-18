let input = document.getElementById('textarea');
let output = document.getElementById('output');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let liEmpty = document.createElement('li');
let li = document.createElement('li');
const data = JSON.parse(localStorage.getItem('items'));

let timesArray = localStorage.getItem('times') ? JSON.parse(localStorage.getItem('times')) : [];
const dataTime = JSON.parse(localStorage.getItem('times'));

function getFormattedDate(dateObject) {
    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1;
    let year = dateObject.getFullYear();
    let hours = dateObject.getHours();
    let minutes = dateObject.getMinutes();
    let seconds = dateObject.getSeconds();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;
    if (year = 2020) year = 20;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return `[${day}.${month}.${year}, ${hours}:${minutes}:${seconds}]`
}
let date0 = new Date();

function emptyChecker() {
    if ((localStorage.getItem('items') == null) || (localStorage.getItem('items') == '[]')) {
        let liEmpty = document.createElement('li');
        liEmpty.setAttribute('id', 'empty');
        liEmpty.textContent = '[Empty]';
        output.appendChild(liEmpty);
    }
}
emptyChecker();

function liMaker(text, time) {
    let li = document.createElement('li');
    li.setAttribute('class', 'full');
    li.textContent = `--->${text} ${getFormattedDate(time)}`;
    output.appendChild(li);
}

function addStorage() {
    if (!document.getElementById('textarea').value) {
        alert(`It's empty. Try to input something in "Text input".`);
    } else {
        liEmpty = document.getElementById('empty');
        if (liEmpty != null) {
            liEmpty.remove();
        }
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        const date0 = new Date();
        timesArray.push(date0);
        localStorage.setItem('times', JSON.stringify(timesArray));
        liMaker(input.value, date0);
        input.value = '';
        return date0;
    }
}

if (data) {
    data.forEach(item => {
        liMaker(item, date0);
    });

}

function clearStorage() {
    let conf = confirm("Are you sure?");
    if (conf) {
        localStorage.clear();
        li = document.getElementsByClassName('full');
        for (let k = li.length; k != 0; k--) {
            li[0].remove();
        }
        emptyChecker();
    }
}
