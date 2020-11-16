let display = document.getElementById('num-display');

let num = '';
let but = document.getElementById('butt');
but.onclick = () => {
    num = '';
    a();
}

function a() {

    let temp = '';
    temp += Math.floor(Math.random() * 10);
    while (num.indexOf(temp) != -1) {
        temp = '';
        temp += Math.floor(Math.random() * 10);
    }
    num += temp;
    if (num.length < 8) {
        a();
    } else { display.value = num; }
}