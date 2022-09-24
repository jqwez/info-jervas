

const hamburger = document.getElementsByClassName('hamburger')[0];
const navlinks = document.getElementsByClassName('navlist')[0];
const sun = document.querySelector('#sun');

const homeLink = document.getElementById('homeLink');
const about = document.getElementById('about');
const aboutLink = document.getElementById('aboutLink');
const skills = document.getElementById('skills');
const skillsLink = document.getElementById('skillsLink');
const projects = document.getElementById('projects');
const projectsLink = document.getElementById('projectsLink');
const contact = document.getElementById('contact');
const contactLink = document.getElementById('contactLink');
const socials = document.getElementsByClassName('socials')[0];
const socialsLink = document.getElementById('socialsLink');
const bottom = document.getElementById('bottom');
const begin = document.getElementById('top');



const toggleTheme = () => {
    if (localStorage.getItem("theme") == "dark") {
        document.getElementById('theme_css').href = '../style.css'
        localStorage.setItem("theme", "light")
        return console.log("these set light")
    }
    else {
        document.getElementById('theme_css').href = '../dark.css'
        localStorage.setItem("theme", "dark")
        return console.log("these set dark")
}
}


sun.onclick = toggleTheme

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}


window.addEventListener('scroll', () => {
    if (socials.classList.contains('appear')) {
        return
    }
    if (isInViewport(socials) == true) {
        socials.classList.remove('invisible');
        socials.classList.add('appear')
    }
})



hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active');

}
)



// scrolls into view
aboutLink.onclick = () =>  {navlinks.classList.toggle('active'); about.scrollIntoView({ behavior: 'smooth' })}
socialsLink.onclick = () => {navlinks.classList.toggle('active'); socials.scrollIntoView({ behavior: 'smooth' })}
skillsLink.onclick = () => {navlinks.classList.toggle('active'); skills.scrollIntoView({ behavior: 'smooth' })}
contactLink.onclick = () => {navlinks.classList.toggle('active'); contact.scrollIntoView({ behavior: 'smooth' })}
projectsLink.onclick = () => {navlinks.classList.toggle('active'); projects.scrollIntoView({ behavior: 'smooth' })}
homeLink.onclick = () => {navlinks.classList.toggle('active'); begin.scrollIntoView({ behavior: 'smooth' })}
bottom.onclick = () => begin.scrollIntoView({ behavior: 'smooth' });

