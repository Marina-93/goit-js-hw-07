const fone = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const foneSize = function () {
    text.style.fontSize = fone.value + "px";
}

fone.addEventListener("input", foneSize);
