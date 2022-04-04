const body = document.querySelector('body');
const a = document.querySelector('a');

const aboutMenu = document.querySelector('.about-menu');
const about = document.querySelector('.about');

const skills = document.querySelector('.skills');
const skillsMenu = document.querySelector('.about-skills');

const code = document.querySelector('.code');
const codeMenu = document.querySelector('.about-code');

const project = document.querySelector('.project');
const projectMenu = document.querySelector('.about-project');

const education = document.querySelector('.education');
const educationMenu = document.querySelector('.about-education');

const contacts = document.querySelector('.contacts');
const contactsMenu = document.querySelector('.about-contacts');

if (aboutMenu) {
    window.addEventListener("load", function (e){
        body.style.backgroundImage="url('./assets/img/bg-1.png')";
        
    about.classList.add('active');
    aboutMenu.classList.add('active');
    aboutMenu.textContent='━━  About';

    });
}

if (aboutMenu) {
    aboutMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-1.png')";
        
    about.classList.add('active');
    aboutMenu.classList.add('active');
    aboutMenu.textContent='━━  About';

    skills.classList.remove('active');
    skillsMenu.classList.remove('active');
    skillsMenu.textContent='Skills';
    code.classList.remove('active');
    codeMenu.classList.remove('active');
    codeMenu.textContent='Code';
    projectMenu.classList.remove('active');
    projectMenu.textContent='Project';
    project.classList.remove('active');
    educationMenu.classList.remove('active');
    educationMenu.textContent='Education';
    education.classList.remove('active');
    contactsMenu.classList.remove('active');
    contactsMenu.textContent='Contacts';
    contacts.classList.remove('active');

    });
}
if (skills) {
    skillsMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-2.png')";
        
    skillsMenu.classList.add('active');
    skillsMenu.textContent='━━  Skills';
    skills.classList.add('active');

    about.classList.remove('active');
    aboutMenu.classList.remove('active');
    aboutMenu.textContent='About';
    code.classList.remove('active');
    codeMenu.classList.remove('active');
    codeMenu.textContent='Code';
    projectMenu.classList.remove('active');
    projectMenu.textContent='Project';
    project.classList.remove('active');
    educationMenu.classList.remove('active');
    educationMenu.textContent='Education';
    education.classList.remove('active');
    contactsMenu.classList.remove('active');
    contactsMenu.textContent='Contacts';
    contacts.classList.remove('active');

    });
}
if (code) {
    codeMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-3.png')";
        
    codeMenu.classList.add('active');
    codeMenu.textContent='━━  Code';
    code.classList.add('active');

    about.classList.remove('active');
    aboutMenu.classList.remove('active');
    aboutMenu.textContent='About';
    skills.classList.remove('active');
    skillsMenu.classList.remove('active');
    skillsMenu.textContent='Skills';
    projectMenu.classList.remove('active');
    projectMenu.textContent='Project';
    project.classList.remove('active');
    educationMenu.classList.remove('active');
    educationMenu.textContent='Education';
    education.classList.remove('active');
    contactsMenu.classList.remove('active');
    contactsMenu.textContent='Contacts';
    contacts.classList.remove('active');

    });
}
if (project) {
    projectMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-4.png')";
        
    projectMenu.classList.add('active');
    projectMenu.textContent='━━  Project';
    project.classList.add('active');

    about.classList.remove('active');
    aboutMenu.classList.remove('active');
    aboutMenu.textContent='About';
    skills.classList.remove('active');
    skillsMenu.classList.remove('active');
    skillsMenu.textContent='Skills';
    code.classList.remove('active');
    codeMenu.classList.remove('active');
    codeMenu.textContent='Code';
    educationMenu.classList.remove('active');
    educationMenu.textContent='Education';
    education.classList.remove('active');
    contactsMenu.classList.remove('active');
    contactsMenu.textContent='Contacts';
    contacts.classList.remove('active');

    });
}
if (education) {
    educationMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-5.png')";
        
    educationMenu.classList.add('active');
    educationMenu.textContent='━━  Education';
    education.classList.add('active');

    about.classList.remove('active');
    aboutMenu.classList.remove('active');
    aboutMenu.textContent='About';
    skills.classList.remove('active');
    skillsMenu.classList.remove('active');
    skillsMenu.textContent='Skills';
    code.classList.remove('active');
    codeMenu.classList.remove('active');
    codeMenu.textContent='Code';
    projectMenu.classList.remove('active');
    projectMenu.textContent='Project';
    project.classList.remove('active');
    contactsMenu.classList.remove('active');
    contactsMenu.textContent='Contacts';
    contacts.classList.remove('active');

    });
}
if (contacts) {
    contactsMenu.addEventListener("click", function (e){
        body.style.backgroundImage="url('./assets/img/bg-6.png')";
        
    contactsMenu.classList.add('active');
    contactsMenu.textContent='━━  Contacts';
    contacts.classList.add('active');

    about.classList.remove('active');
    aboutMenu.classList.remove('active');
    aboutMenu.textContent='About';
    skills.classList.remove('active');
    skillsMenu.classList.remove('active');
    skillsMenu.textContent='Skills';
    code.classList.remove('active');
    codeMenu.classList.remove('active');
    codeMenu.textContent='Code';
    projectMenu.classList.remove('active');
    projectMenu.textContent='Project';
    project.classList.remove('active');
    educationMenu.classList.remove('active');
    educationMenu.textContent='Education';
    education.classList.remove('active');

    });
}