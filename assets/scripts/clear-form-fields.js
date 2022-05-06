const formSubmit = document.querySelector('[data-form-submit]')

function clearText(field) {
  field.value = ""
}

function clearFormFields() {
  const formFields = document.querySelectorAll('[data-form-text]')
  formFields.forEach(clearText)
}

formSubmit.addEventListener('submit', clearFormFields)