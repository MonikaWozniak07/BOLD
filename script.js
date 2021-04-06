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
const showHamburger = () => {
    hamburgerNav.classList.add("show");
}
const removeHamburger = () => {
    hamburgerNav.classList.remove("show");
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
