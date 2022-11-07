import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

const formData = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(onFormData, 500));

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const email = document.querySelector('.feedback-form input');
  const message = document.querySelector('.feedback-form textarea');
  if (data) {
    email.value = data.email;
    message.value = data.message;
  }
}

populateTextarea();

// const textarea = document.querySelector('.feedback-form textarea');

// textarea.addEventListener('input', throttle(onTextareaInput, 500));

// function onTextareaInput(event) {
//     const message = event.target.value;

//     localStorage.setItem(STORAGE_KEY, message);
//   }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem(STORAGE_KEY);
//   if (savedMessage) {
//     textarea.value = savedMessage;
//   }
// }
