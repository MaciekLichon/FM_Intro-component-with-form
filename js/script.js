
const form = document.querySelector('.form');
const inputContainers = document.querySelectorAll('.form__inputContainer');
const emailTemplate = /.+\@.+\..+/;

form.addEventListener('submit', function(e) {
  e.preventDefault();

  for (let container of inputContainers) {
    container.classList.remove('error');

    const input = container.querySelector('.form__input');
    const isInputEmpty = input.type !== 'email' && !input.value;
    const isEmailInvalid = input.type === 'email' && !input.value.match(emailTemplate);

    if (isInputEmpty || isEmailInvalid) {
      container.classList.add('error');
    }
  }

})