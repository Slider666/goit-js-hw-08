import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('.feedback-form input');
const messageRef = document.querySelector('.feedback-form textarea');

const formData = {};

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  console.log({
    email: emailRef.value,
    message: messageRef.value,
  });
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

formRef.addEventListener('input', throttle(onFormData, 500));

function onFormData(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (data) {
    emailRef.value = data.email;
    messageRef.value = data.message;
  }
}

populateTextarea();
