dark_theme_btn = document.getElementById("dark_theme_toggle");
dark_theme_img = document.getElementById("dark_theme_image");
dark_theme_btn1 = document.getElementById("dark_theme_toggle1");
dark_theme_img1 = document.getElementById("dark_theme_image1");
css_link = document.getElementById("css_link");
var isThemeDark=0;
function dark(){
  if (isThemeDark==0){
    css_link.href = "css/dark.css";
    dark_theme_img.src = "img/sun.png";
    dark_theme_img1.src = "img/sun.png";
    isThemeDark = 1;
  } else {
    css_link.href = "css/style.css";
    dark_theme_img.src = "img/moon.png";
    dark_theme_img1.src = "img/moon.png";
    isThemeDark = 0;
  }
}