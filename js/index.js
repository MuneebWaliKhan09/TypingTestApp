const indicator = document.querySelector('.nav-indicator');
const items = document.querySelectorAll('.nav-item');

function handleIndicator(el) {
  items.forEach(item => {
    item.classList.remove('is-active');
    item.removeAttribute('style');
  });

  indicator.style.width = `${el.offsetWidth}px`;
  indicator.style.left = `${el.offsetLeft}px`;
  indicator.style.backgroundColor = el.getAttribute('active-color');

  el.classList.add('is-active');
  el.style.color = el.getAttribute('active-color');
}


items.forEach((item, index) => {
  item.addEventListener('click', (e) => { handleIndicator(e.target) });
  item.classList.contains('is-active') && handleIndicator(item);
});




window.addEventListener("scroll", function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop < 20) {
    document.getElementById("scroll").style.display = "none";
  }

  else {
    document.getElementById("scroll").style.display = "block";
  }
})

let myfunction = () => {
  document.documentElement.scrollTop = "0";
}



let shownav = document.querySelector("#shownav");

let nav3 = document.querySelector("#nav3");

shownav.addEventListener("click", function () {
  nav3.classList.toggle("off");


});






