
import throttle from 'lodash.throttle';

const ref ={
    form: document.querySelector('.feedback-form'),
    texterea: document.querySelector('textarea'),
    button: document.querySelector('button'),
}

ref.form.addEventListener('submit',onFormSabmit);
ref.texterea.addEventListener('input',onTextareaInput);

function onTextareaInput(evt) {
   const message = evt.currentTarget.value;
   
   localStorage.setItem('message', message);
   
}

function onFormSabmit(evt) {
   evt.preventDefault();
   console.log('sabmit')
   evt.currentTarget.reset();
}

function populateTextarea() {
   const saveMessage = localStorage.getItem('message');
   if (saveMessage) {
    console.log(saveMessage);
   }
   
}
// console.log(ref.button)
// console.log(ref.form)
// console.log(ref.texterea);
