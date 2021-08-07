const titleEl = document.querySelectorAll('h2')
console.log(`Категорий ${titleEl.length}` )

const addLiEl = document.querySelectorAll('.item');
[...addLiEl].forEach(item => {
    console.log(`категория: '${item.firstElementChild.textContent}'
количество элементов: ${item.lastElementChild.children.length}`)
})