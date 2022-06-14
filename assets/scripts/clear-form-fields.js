export function clearFormFields() {
  const formFields = document.querySelectorAll('[data-form-text]')
  formFields.forEach((field) => {
    field.value = "";
  })
}