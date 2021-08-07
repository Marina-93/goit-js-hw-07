const inputEl = document.querySelector("#validation-input")
const dataLength = Number(inputEl.dataset.length)

inputEl.addEventListener('blur', () => {
    if (inputEl.value.length === dataLength){
        return inputEl.className = 'valid'
    }
    return inputEl.className = 'invalid'
})
