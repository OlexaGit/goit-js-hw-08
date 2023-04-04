const form = document.querySelector('.feedback-form');

form.addEventListener('input', event => {
  event.preventDefault();
  const {
    elements: { username, password },
  } = event.currentTarget;
  console.log(username.value, password.value);
});
