let outText = document.getElementsByClassName('output')[0];
let inputText = document.getElementById('inputText');
let count = 1;


let ifSmall = (input) => {return input = input < 10 ? `0${input}` : input};

let getFormattedDate = () => {
    let d = new Date;
    return ' [' + ifSmall(d.getDate()) + '.' + ifSmall(d.getMonth() + 1) + '.'
        + (d.getFullYear() - 2000) + ', ' + ifSmall(d.getHours()) + ':'
        + ifSmall(d.getMinutes()) + ':' + ifSmall(d.getSeconds()) + ']';
}

let getCount = localStorage.getItem("count");
    if (!getCount)
        localStorage.setItem("count", "" + count);
    count = +(localStorage.getItem("count"));

let getInputVal = () => {
    let curDate = new Date();
    if ( !inputText.value)
        alert(`It's empty. Try to input something in "Text input".`);
    else {
        if (outText.value === "[Empty]") {
            outText.value = "";
        }
        outText.value += `--> ${inputText.value}` + `${getFormattedDate()}\n`;
            localStorage.setItem('inputText' + count, inputText.value);
            count++;
            localStorage.setItem("count", "" + count);
        inputText.value = "";
    }
}

let resetOutputVal = () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
        localStorage.clear();
        outText.value = "";
        outText.value = "[Empty]";
    }
}
