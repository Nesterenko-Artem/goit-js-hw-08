import throttle from 'lodash.throttle';
import { ref } from '../js/scripts/refs';

ref.form.addEventListener('submit', handleSubmit);
ref.form.addEventListener('input', throttle(onSaveDateLocalStor, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';
addEventListener('DOMContentLoaded', updateFormFields);

function onSaveDateLocalStor(evt) {
  const storageData = loadData(LOCALSTORAGE_KEY, {});
  //   const message = evt.target.value;
  storageData[evt.target.name] = evt.target.value;
  

  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(storageData));
}

function loadData(key, defaultValue) {
  try {
    const result = JSON.parse(localStorage.getItem(key));
    return result ? result : defaultValue;
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function updateFormFields() {
  const updateData = loadData(LOCALSTORAGE_KEY, {});
  ref.form.email.value = updateData.email || '';
  ref.form.message.value = updateData.message || '';
}

function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.currentTarget);
  const value = Object.fromEntries(data.entries());

  if (value.email === '' || value.message === '') {
    return alert('Поля не могут быть пустыми !');
  }
  console.log(value);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  event.currentTarget.reset();
}
