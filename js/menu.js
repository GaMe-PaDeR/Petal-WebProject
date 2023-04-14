var isMenuShow = false;
  var menu_button = document.getElementById('menu-button');
  var link1 = document.getElementById('link1');
  var link2 = document.getElementById('link2');
  var link3 = document.getElementById('link3');
  var link4 = document.getElementById('link4');
  var link5 = document.getElementById('link5');
  var rem_menu = document.getElementById('removable-menu');
  var rem_button = document.getElementById('removable-button');
  var rem_brand = document.getElementById('removable-brand');
  var nav_block = document.getElementById('nav-block');
  var nav_overlay = document.getElementById('w-nav-overlay-0');
  var nav_menu = document.getElementById('nav-menu');
  var body = document.getElementById("body");
  document.getElementById('menu-button').addEventListener("click", function () {
    if (isMenuShow) {
      isMenuShow = false;
      link3.style.display = "inline-block";
      link5.style.display = "inline-block";
      rem_menu.style.display = "inline-block";
      nav_block.style.display = "none";
      nav_block.style.top = "100%";
      nav_block.style.height = "100%";
      menu_button.classList.remove('w--open');
      nav_overlay.style.display = "none";
      nav_overlay.style.height = null;
      rem_button.style.display = null;
      rem_brand.style.display = null;
      nav_menu.style.display = null;
      body.style = "none";
    }
    else {
      isMenuShow = true;
      nav_block.style.display = "block";
      nav_block.style.top = "0%";
      nav_block.style.height = "100%"
      link1.style.display = "none";
      link2.style.display = "none";
      link3.style.display = "none";
      link4.style.display = "none";
      link5.style.display = "none";
      rem_button.style.display = "none";
      rem_brand.style.display = "block";
      rem_menu.style.display = "none";
      menu_button.classList.add('w--open');
      nav_overlay.style.display = "block";
      nav_overlay.style.height = "2000%";
      nav_menu.style.display = "block";
      body.style.overflowY = "hidden";
    }
  })