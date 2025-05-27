const storageKey = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');

form.addEventListener('input', handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(storageKey, JSON.stringify(formData));
  console.log('Saved to localStorage:', formData);
}

const savedData = localStorage.getItem(storageKey);
if (savedData) {
  const parseData = JSON.parse(savedData);
  formData = parseData;
  if (parseData.email) {
    form.elements.email.value = parseData.email;
  }
  if (parseData.message) {
    form.elements.message.value = parseData.message;
  }
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem(storageKey);
  formData = { email: '', message: '' };

  form.reset();
}
