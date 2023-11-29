function disp(value) {
    document.getElementById('num').value += value;
}

function clr() {
    document.getElementById('num').value = '';
}

function calc() {
    let expression = document.getElementById('num').value;
    let result = eval(expression);

    document.getElementById('num').value = result;
}