const decrementBtm = document.querySelector('[data-action="decrement"]');
const incrementBtm = document.querySelector('[data-action="increment"]');
let counterValue = document.querySelector('#value');

const createCounter = {
  value : 0,
  increment() {
    this.value += 1
  },
  decrement() {
    this.value -= 1 
},
}

decrementBtm.addEventListener('click', function(){
    createCounter.decrement();
    counterValue.textContent = createCounter.value;

});

incrementBtm.addEventListener('click', function(){
    createCounter.increment();
    counterValue.textContent = createCounter.value;

});

