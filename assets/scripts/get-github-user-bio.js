export async function getGithubUserProfile() {
  let req = await fetch('https://api.github.com/users/Matheus-Pazinati')
  let response = await req.json()
  setAboutMeContainerDescription(response.bio)
}

function setAboutMeContainerDescription(text) {
  let aboutMeContainer = document.querySelector('.about__description')
  aboutMeContainer.innerHTML = text
}