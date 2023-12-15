let year = new Date().getFullYear();
document.getElementById("year").textContent = year;

function delayOpen(URL, ms=500) {
  setTimeout(function () {
    window.open(URL, "_blank");
  }, ms);
}

const boyowa = $('.boyowa');
const num = boyowa.length;

let i = 0;
function slideShow() {
  boyowa.eq(i%num).fadeOut(500);
  boyowa.eq((i+1)%num).fadeIn(500);
  // setTimeout(boyowa.eq((i+1)%3).fadeIn(500), 1000)
  
  // console.log(i)
  i++;
}
setInterval(slideShow, 5000);

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

function handleSubmit(event) {
  // event.preventDefault();
  const first = document.getElementById('first-name').value;
  const last = document.getElementById('last-name').value;
  const name = first + ' ' + last;
  document.getElementById('name-to-send').value = name;

  const subject = document.getElementById('form-subject');
  subject.value = "website #connect:  " + subject.value;
  // event.preventDefault();
}
