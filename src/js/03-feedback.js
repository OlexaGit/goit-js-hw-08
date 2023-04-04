import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputElement = document.querySelector('input');
const messageElement = document.querySelector('textarea');

inputElement.addEventListener('input', throttle(addStorageItemEmail, 500));
messageElement.addEventListener('input', throttle(addStorageItemEmail, 500));

function addStorageItemEmail() {
  const emailValue = inputElement.value;
  console.dir(emailValue);
  const messageValue = messageElement.value;
  console.dir(messageValue);
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
// readStorageItemEmail();
// function onFormSubmit(event) {
//   event.preventDefault();

//   const formElements = event.currentTarget.elements;

//   const email = formElements.email.value;
//   console.log(email);
//   const message = formElements.message.value;
//   console.log(message);
//   localStorage.setItem('feedback-form-state', email);
//   if (email.length === 0 || message.length === 0) {
//     alert('Please fill in all fields');
//   } else {
//     const formData = {
//       email,
//       message,
//     };
//     console.log(formData);
//     form.reset();
//   }
// }

// ======

// const form = document.querySelector(`.feedback-form`);
// const emailInput = form.querySelector(`input[name="email"]`);
// const messageInput = form.querySelector(`textarea[name="message"]`);
// const saveStateToLocalStorage = () => {
//   const state = {
//     email: emailInput.value,
//     message: messageInput.value,
//   };
//   localStorage.setItem(`feedback-form-state`, JSON.stringify(state));
// };
// const loadStateFromLocalStorage = () => {
//   const savedState = localStorage.getItem('feedback-form-state');
//   if (savedState) {
//     const state = JSON.parse(savedState);
//     emailInput.value = state.email;
//     messageInput.value = state.message;
//   }
// };
// const clearFormAndLocalStorage = () => {
//   const state = {
//     email: ' ',
//     message: ' ',
//   };
//   localStorage.removeItem('feedback-form-state');
//   emailInput.value = state.email;
//   messageInput.value = state.message;
//   console.log('Form submitted with values:', {
//     email: emailInput.value,
//     message: messageInput.value,
//   });
// };
// form.addEventListener('input', throttle(saveStateToLocalStorage, 500));
// form.addEventListener('submit', event => {
//   event.preventDefault();
//   if (emailInput.value.trim() === '' || messageInput.value.trim() === '') {
//     alert('Будь ласка, заповніть усі поля.');
//     return;
//   }
//   clearFormAndLocalStorage();
// });
// loadStateFromLocalStorage();
