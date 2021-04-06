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