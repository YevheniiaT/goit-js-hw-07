// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input) підставляє його поточне значення в span#name-output як ім’я для привітання. Обов’язково очищай значення в інпуті по краях від пробілів . Якщо інпут порожній або містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

// const form = document.querySelector('#name-input');
// const text = document.querySelector('h1');
// const span = document.querySelector('#name-output');

// form.addEventListener('input', e => {
//     e.preventDefault();
    
//     const formInput = e.target.value.trim();
    
//   if (formInput === '') {
//     console.log(text.textContent);
//   } else {
//     span.textContent = `${formInput}`;
//     console.log(span);
//   }
// });


const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    if (event.currentTarget.value.trim() == "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value.trim();
    }
});