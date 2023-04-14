anim = document.getElementById('main-animation');
  let i = 1;
  function Loop() {
    if (i == 1) {
      anim.style.transform = "rotate(180deg) translate(-60px, 0px)";
      anim.style.transition = "10s cubic-bezier(0, 0, 1, 1)";
      i++;
    }
    else {
      anim.style.transform = "rotate(0deg) translate(0px, 0px)";
      anim.style.transition = "10s cubic-bezier(0, 0, 1, 1)";
      i--;
    }
    setTimeout(Loop, 10010);
  }
  window.onload = Loop;