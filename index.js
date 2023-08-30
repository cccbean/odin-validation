const email = document.querySelector('#mail');
email.addEventListener('blur', () => {
  const label = email.parentElement;
  const error = label.querySelector('.error');
  if (!email.validity.valid) {
    error.classList.remove('hidden');
    showEmailError(error);
  } else {
    error.classList.add('hidden');
  }
});

const showEmailError = (error) => {
  if (email.validity.valueMissing) {
    error.textContent = 'You must enter an email address';
  } else {
    error.textContent = 'You must enter a valid email address (i.e. test@test)';
  }
};

const zipCode = document.querySelector('#zip');
zipCode.addEventListener('blur', () => {
  const label = zipCode.parentElement;
  const error = label.querySelector('.error');
  if (!zipCode.validity.valid) {
    error.classList.remove('hidden');
    showZipError(error);
  } else {
    error.classList.add('hidden');
  }
});

const showZipError = (error) => {
  if (zipCode.validity.valueMissing) {
    error.textContent = 'You must enter a zip code';
  } else if (zipCode.validity.patternMismatch) {
    error.textContent = 'You must enter a valid zip code (i.e. 12345)';
  }
};

const pwd = document.querySelector('#pwd');
pwd.addEventListener('blur', () => {
  const label = pwd.parentElement;
  const error = label.querySelector('.error');
  if (!pwd.validity.valid) {
    error.classList.remove('hidden');
    showPwdError(error);
  } else {
    error.classList.add('hidden');
  }
});

const showPwdError = (error) => {
  if (pwd.validity.valueMissing) {
    error.textContent = 'You must enter a password';
  } else if (pwd.validity.patternMismatch) {
    error.textContent =
      'Password must include at least one uppercase, one lowercase, one number, and one special character';
  }
};

const cpwd = document.querySelector('#cpwd');
cpwd.addEventListener('blur', () => {
  const label = cpwd.parentElement;
  const error = label.querySelector('.error');
  if (cpwd.value !== pwd.value) {
    error.classList.remove('hidden');
    showCpwdError(error);
  } else {
    error.classList.add('hidden');
  }
});

const showCpwdError = (error) => {
  if (cpwd.validity.valueMissing) {
    error.textContent = 'You must reenter your password';
  } else {
    error.textContent = 'Passwords do not match';
  }
};

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  if (
    !email.validity.valid ||
    !zipCode.validity.valid ||
    !pwd.validity.valid ||
    cpwd.value !== pwd.value
  ) {
    console.log('nope');
    event.preventDefault();
  }
});
