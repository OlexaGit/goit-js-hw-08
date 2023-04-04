import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputElement = document.querySelector('input');
const messageElement = document.querySelector('textarea');

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(addStorageItemEmail, 500));

function addStorageItemEmail() {
  const emailValue = inputElement.value;
  // console.log(emailValue);
  const messageValue = messageElement.value;
  // console.log(messageValue);
  const formData = {
    email: emailValue,
    message: messageValue,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function readStorageItemEmail() {
  const saveFormData = localStorage.getItem('feedback-form-state');
  if (saveFormData) {
    const formData = JSON.parse(saveFormData);
    inputElement.value = formData.email;
    messageElement.value = formData.message;
  }
}
readStorageItemEmail();

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const message = formElements.message.value;
  if (email.length === 0 || message.length === 0) {
    alert('Please fill in all fields');
  } else {
    const formData = {
      email,
      message,
    };
    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');
  }
}
