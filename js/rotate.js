document.getElementById('toggle-menu').onmouseenter = function () {
    document.getElementById('nav-dropdown').classList.toggle('w--open');
  }

  document.getElementById('nav-dropdown').onmouseleave = function () {
    document.getElementById('nav-dropdown').classList.remove('w--open');
  }

  var petal = document.getElementById('petal1-dropcard');
  var petal2 = document.getElementById('petal2-dropcard');

  document.getElementById('dropdown-petal1').onmouseenter = function () {
    if (window.innerWidth < 1200) {
      petal.style.transform = "rotate(45deg) translate(-50px, 120px)";
      petal.style.transition = "0.8s ease";
      petal.style.height = "400px";
    }
    else {
      petal.style.transform = "rotate(45deg) translate(-80px, 120px)";
      petal.style.transition = "0.8s ease";
      petal.style.height = "500px";
    }
  }

  document.getElementById('dropdown-petal1').onmouseleave = function () {
    petal.style.transform = "rotate(0deg) translate(0px, 0px)";
    petal.style.transition = "0.8s ease";
    petal.style.height = null;
  }

  document.getElementById('dropdown-petal2').onmouseenter = function () {
    if (window.innerWidth < 1200) {
      petal2.style.transform = "rotate(45deg) translate(-50px, 120px)";
      petal2.style.transition = "0.8s ease";
      petal2.style.height = "400px";
    }
    else {
      petal2.style.transform = "rotate(45deg) translate(-80px, 120px)";
      petal2.style.transition = "0.8s ease";
      petal2.style.height = "500px";
    }
  }

  document.getElementById('dropdown-petal2').onmouseleave = function () {
    petal2.style.transform = "rotate(0deg) translate(0px, 0px)";
    petal2.style.transition = "0.8s ease";
    petal2.style.height = null;
  }