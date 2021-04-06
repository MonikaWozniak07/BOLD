function readmoref(number) {
    const clickReadMore = document.getElementById(`click-more${number}`);
    const readmoreText = document.getElementById(`readmore${number}`);
    const setReadMoreStyle = (readmore, display) => {
      readmore.style.display = display;
    };
    if (clickReadMore.style.display === "none") {
      setReadMoreStyle(clickReadMore, "inline");
      setReadMoreStyle(readmoreText, "none");
    } else {
      setReadMoreStyle(clickReadMore, "none");
      setReadMoreStyle(clickReadMore, "none");
      setReadMoreStyle(readmoreText, "inline");
}
}

const hamburgerNav = document.getElementById('hamburger-nav');
const overviewLink = document.querySelector('.overview');
const featuresLink = document.querySelector('.features');
const technologyLink = document.querySelector('.technology');
const contactLink = document.querySelector('.contact');
const sign_upLink = document.querySelector('.sign_up');
const showHamburger = () => {
    hamburgerNav.classList.add("show");
    overviewLink.classList.add('left');
    setTimeout(function () {
        featuresLink.classList.add("left");
      }, 40);
      setTimeout(function () {
        technologyLink.classList.add("left");
      }, 120);
      setTimeout(function () {
        contactLink.classList.add("left");
      }, 160);
      setTimeout(function () {
        sign_upLink.classList.add("left");
      }, 200);
    };
const removeHamburger = () => {
    hamburgerNav.classList.remove("show");
    document.querySelectorAll('.hamburger-nav_link a').forEach(link => {
        link.classList.remove('left');
    })
}

document.querySelectorAll('.hamburger-nav_link a').forEach(link => {
    link.addEventListener('click', removeHamburger);
})

const contactBtn = document.getElementById('contact_btn');
const inputFirstName = document.getElementById('input-first-name');
const inputLastName = document.getElementById('input-last-name');
const phoneInput = document.getElementById('input-phone')
const select = document.getElementById('service');

contactBtn.addEventListener('click', e => {
    e.preventDefault();
    if(inputFirstName.value.length >= 2 && inputLastName.value.length >=3 && phoneInput.value.length >=9 && select.value !== ''){
        alert('Sent')
    } else {
        alert('Please fill in all fields in the form')
    }
})
