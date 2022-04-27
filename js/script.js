// Récupération des liens pour écouter les events
const frenchLang = document.getElementById('fr')
const engLang = document.getElementById('en')

// Récupération des div à traduire
const quiLang = document.getElementById('quilang')
const skillsLang = document.getElementsByClassName('skillslang')
const projetLang = document.getElementById('projetlang')
const verticalLine = document.getElementById('verticalline')
const hiPresent = document.getElementById('hi-p')
const unText = document.getElementById('un')
const jobText = document.getElementById('job')
const deText = document.getElementById('de')
const longText = document.getElementById('presentation')
const ocForma = document.getElementById('ocforma')
const freeForma = document.getElementById('freeforma')
const udeForma = document.getElementById('udeforma')
const manuForma = document.getElementById('manuforma')
const certBadge = document.getElementsByClassName('certbadge')
const autoBadge = document.getElementsByClassName('autobadge')
const titleBadge = document.getElementById('titlebadge')
const lidPresent = document.getElementById('lidpresent')
const lmjPresent = document.getElementById('lmjpresent')
const viewProject = document.getElementsByClassName('viewproject')
const nameLabel = document.getElementById('namelabel')
const mailLabel = document.getElementById('maillabel')
const msgLabel = document.getElementById('message')
const submitBtn = document.getElementById('submitButton')


const language = {
    en: {
        firstNav: "Who i am",
        twoNav: "Skills",
        thirdNav: "Projects",
        firstLine: "Online resume",
        firstPresent: "Hello i'm",
        twoPresent: "A",
        thirdPresent: "web developer",
        fourPresent: "from",
        lastPresent: "I have 21 years old and i'm creative front-end web developer based in Clermont-de-l'Oise, and I'm very passionate and dedicated to my work.",
        firstexpTitle: "OpenClassroom training",
        twoexpTitle: "freeCodeCamp training",
        thirdexpTitle: "Udemy training",
        fourexpTitle: "La Manu training",
        allCertif: "certificate",
        allAuto: "self-taught",
        lastBadge: "professional degree",
        firstBox: "Application who allows the connection<br> between web developers apprentice<br> to create mutual aid.",
        twoBox: "User interface of an online store,<br> you can add, remove, delete and save your cart.",
        viewBtn: "Overview",
        nameLbl: "Name",
        mailLab: "Email address",
        msgLab: "Hello Younès, I would like to schedule an interview with you...",
        subMit: "Send"
    },
    fr: {
        firstNav: "Qui suis-je",
        twoNav: "Compétences",
        thirdNav: "Projets",
        firstLine: "CV en ligne",
        firstPresent: "Je m'appelle",
        twoPresent: "Un",
        thirdPresent: "développeur web",
        fourPresent: "de",
        lastPresent: "Je suis un développeur web front-end de 21 ans basé à Clermont-de-l'Oise, je suis également quelqu'un de très créatif et passionné par mon travail.",
        firstexpTitle: "Formation OpenClassroom",
        twoexpTitle: "Formation freeCodeCamp",
        thirdexpTitle: "Formation Udemy",
        fourexpTitle: "Formation La Manu",
        allCertif: "certificat",
        allAuto: "autodidacte",
        lastBadge: "titre professionnel",
        firstBox: "Application qui met en relation<br> des apprentis développeurs web<br> pour créer de l'entraide",
        twoBox: "Vous pouvez ajouter, enlever,<br> supprimer et sauvegarder votre panier.",
        viewBtn: "Aperçu",
        nameLbl: "Nom",
        mailLab: "Adresse e-mail",
        msgLab: "Bonjour Younès, je souhaiterais organiser un entretien avec vous...",
        subMit: "Envoyer"
    }
};

frenchLang.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    quiLang.textContent = language.fr.firstNav;
    for(let i = 0; i < skillsLang.length; i++) {
        skillsLang[i].textContent = language.fr.twoNav;
    }
    projetLang.textContent = language.fr.thirdNav;
    verticalLine.textContent = language.fr.firstLine;
    hiPresent.textContent = language.fr.firstPresent;
    unText.textContent = language.fr.twoPresent;
    jobText.textContent = language.fr.thirdPresent;
    deText.textContent = language.fr.fourPresent;
    longText.textContent = language.fr.lastPresent;
    ocForma.textContent = language.fr.firstexpTitle;
    freeForma.textContent = language.fr.twoexpTitle;
    udeForma.textContent = language.fr.thirdexpTitle;
    manuForma.textContent = language.fr.fourexpTitle;
    for(let i = 0; i < certBadge.length; i++) {
        certBadge[i].textContent = language.fr.allCertif;
    }
    for(let i = 0; i < autoBadge.length; i++) {
        autoBadge[i].textContent = language.fr.allAuto;
    }
    titleBadge.textContent = language.fr.lastBadge;
    lidPresent.innerHTML = language.fr.firstBox;
    lmjPresent.innerHTML = language.fr.twoBox;
    for(let i = 0; i < viewProject.length; i++) {
        viewProject[i].textContent = language.fr.viewBtn;
    }
    nameLabel.textContent = language.fr.nameLbl;
    mailLabel.textContent = language.fr.mailLab;
    msgLabel.placeholder = language.fr.msgLab;
    submitBtn.textContent = language.fr.subMit;
});


engLang.addEventListener('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    quiLang.textContent = language.en.firstNav;
    for(let i = 0; i < skillsLang.length; i++) {
        skillsLang[i].textContent = language.en.twoNav;
    }
    projetLang.textContent = language.en.thirdNav;
    verticalLine.textContent = language.en.firstLine;
    hiPresent.textContent = language.en.firstPresent;
    unText.textContent = language.en.twoPresent;
    jobText.textContent = language.en.thirdPresent;
    deText.textContent = language.en.fourPresent;
    longText.textContent = language.en.lastPresent;
    ocForma.textContent = language.en.firstexpTitle;
    freeForma.textContent = language.en.twoexpTitle;
    udeForma.textContent = language.en.thirdexpTitle;
    manuForma.textContent = language.en.fourexpTitle;
    for(let i = 0; i < certBadge.length; i++) {
        certBadge[i].textContent = language.en.allCertif;
    }
    for(let i = 0; i < autoBadge.length; i++) {
        autoBadge[i].textContent = language.en.allAuto;
    }
    titleBadge.textContent = language.en.lastBadge;
    lidPresent.innerHTML = language.en.firstBox;
    lmjPresent.innerHTML = language.en.twoBox;
    for(let i = 0; i < viewProject.length; i++) {
        viewProject[i].textContent = language.en.viewBtn;
    }
    nameLabel.textContent = language.en.nameLbl;
    mailLabel.textContent = language.en.mailLab;
    msgLabel.placeholder = language.en.msgLab;
    submitBtn.textContent = language.en.subMit;
});

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navBar = document.getElementsByClassName('nav-bar')[0]
const navLinks = document.getElementsByClassName('item')

toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
})

navLinks.addEventListener('click', () => {
    navBar.collapse('hide')
})