let year = new Date().getFullYear(); 
document.getElementById("year").textContent = year;

const amazon = 'https://www.amazon.com/dp/1738227502';
const music = 'https://linktr.ee/iamboyowa';
const instagram = 'https://www.instagram.com/iamboyowa';
const whatsapp = 'https://wa.me/14374324885';

window.delayOpen = function delayOpen(linkName, ms=500) {
  setTimeout(function () {
    switch(linkName) {
      case 'amazon':
        window.open(amazon, "_blank");
        return;
      case 'music':
        window.open(music, "_blank");
        return;
      case 'instagram':
        window.open(instagram, "_blank");
        return;
      case 'whatsapp':
        window.open(whatsapp, "_blank");
        return;
      default:
        console.log('Error: window open link not defined')
        return;
    }
  }, ms);
}

const boyowa = $('.boyowa');
const num = boyowa.length;

let i = 0;

window.slideShow = function slideShow() {
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

window.showMore = function showMore(num) {
  showMoreBtns[num - 1].style.display = "none";
  ellipsisArr[num - 1].style.display = "none";
  moreToShowQuery.eq(num - 1).fadeIn(700);
}

window.showLess = function showLess() {
  moreToShowQuery.hide(1000);
  
  for (let i = 0; i < showMoreBtns.length; i++) {
    showMoreBtns[i].style.display = "block";
    ellipsisArr[i].style.display = "inline";
  }
}

window.handleSubmit = function handleSubmit(event) {
  // event.preventDefault();
  const first = document.getElementById('first-name').value;
  const last = document.getElementById('last-name').value;
  const name = first + ' ' + last;
  document.getElementById('name-to-send').value = name;
  document.getElementById("connect-form").reset();
}
