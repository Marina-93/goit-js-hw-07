const refs = {
    imput: document.querySelector('#name-input'),
    nameLabel : document.querySelector('#name-output'),
}

refs.imput.addEventListener("input", onInputChange);
function onInputChange(event) {
    if (event.currentTarget.value === "") {
       return refs.nameLabel.textContent = "незнакомец";
    }
    return refs.nameLabel.textContent = event.currentTarget.value;
}