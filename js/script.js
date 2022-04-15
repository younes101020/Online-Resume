const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('nav-bar')[0]
const navLinks = document.getElementsByClassName('item')

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
    navBar.collapse('hide')
})