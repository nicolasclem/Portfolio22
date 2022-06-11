// TYPING ANIMATION


const typed = new Typed(".typing",{
    strings:["","Developer Trainee",],
    backSpeed:80,
    typeSpeed:80,
    loop:true
})

// ACTIVE ASIDE scroll

const links = document.querySelectorAll('li a')
const sec = document.querySelectorAll('section')

function isActive(){
    let len = sec.length;
    while(--len && window.scrollY+97 < sec[len].offsetTop){}
    links.forEach(link=>link.classList.remove('active'))
    links[len].classList.add('active')
    
}
isActive()
window.addEventListener('scroll',isActive)