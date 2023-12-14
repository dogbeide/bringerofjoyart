let year = new Date().getFullYear();
document.getElementById("year").textContent = year;

function delay(URL) {
  setTimeout(function () {
    window.open(URL, "_blank");
  }, 500);
}

const whoami = document.getElementById("whoami");
const showMoreBtns = whoami.getElementsByClassName("show-more");
const ellipsisArr = whoami.getElementsByClassName("ellipsis");
const moreToShowQuery = $(".more-to-show");

function showMore(num) {
  showMoreBtns[num - 1].style.display = "none";
  ellipsisArr[num - 1].style.display = "none";
  moreToShowQuery.eq(num - 1).fadeIn(700);
  // moreToShowArr[num - 1].style.display = "inline";
}

function showLess() {
  moreToShowQuery.hide(1000);
  
  for (let i = 0; i < showMoreBtns.length; i++) {
    showMoreBtns[i].style.display = "block";
    ellipsisArr[i].style.display = "inline";
    // moreToShowArr[i].style.display = "none";
  }
}
