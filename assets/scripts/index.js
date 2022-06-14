import { clearFormFields } from "./clear-form-fields.js"
import { getGithubUserProfile } from "./get-github-user-bio.js"

const formSubmit = document.querySelector('[data-form-submit]')
formSubmit.addEventListener('submit', clearFormFields)

getGithubUserProfile()