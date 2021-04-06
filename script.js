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