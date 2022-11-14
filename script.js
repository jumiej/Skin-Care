const _ = (string)=> document.querySelector(string)
const __ = (string)=> document.querySelectorAll(string)

const navItems = _('#nav-items')
const hamburger = _('#hamburger')

hamburger.addEventListener('click', ()=> {
    navItems.classList.toggle('show')
})