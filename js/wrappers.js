var wrapper1 = document.getElementById('wrapper1');
var arrow1 = document.getElementById("footer_arrow1");
var wrapper2 = document.getElementById('wrapper2');
var arrow2 = document.getElementById("footer_arrow2");
var wrapper3 = document.getElementById('wrapper3');
var arrow3 = document.getElementById("footer_arrow3");
var iswrapopen1 = 0;
var iswrapopen2 = 0;
var iswrapopen3 = 0;
var footer_links1 = document.getElementsByClassName("footer-links");
var footer_links2 = document.getElementsByClassName("footer-links");
var footer_links3 = document.getElementsByClassName("footer-links");

var w = window.innerWidth;
if (w < 479) {
  arrow1.style.display = "inline-block";
  arrow2.style.display = "inline-block";
  arrow3.style.display = "inline-block";
  document.querySelectorAll('.footer-links1').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('.footer-links2').forEach(c => c.classList.add('hidden'));
  document.querySelectorAll('.footer-links3').forEach(c => c.classList.add('hidden'));
} else {
  arrow1.style.display = "none";
  arrow2.style.display = "none";
  arrow3.style.display = "none";
  document.querySelectorAll('.footer-links1').forEach(c => c.classList.remove('hidden'));
  document.querySelectorAll('.footer-links2').forEach(c => c.classList.remove('hidden'));
  document.querySelectorAll('.footer-links3 ').forEach(c => c.classList.remove('hidden'));
}

wrapper1.addEventListener("click", function() {
  if (iswrapopen1 == 0){
    arrow1.style.transform = "rotate(180deg)";
    iswrapopen1 = 1;
    document.querySelectorAll('.footer-links1').forEach(c => c.classList.remove('hidden'));
    wrapper1.style.marginBottom = "24px";
  } else {
    arrow1.style.transform = "rotate(0deg)";
    iswrapopen1 = 0;
    document.querySelectorAll('.footer-links1').forEach(c => c.classList.add('hidden'));
    wrapper1.style.marginBottom = "0";
  }
})
wrapper2.addEventListener("click", function() {
  if (iswrapopen2 == 0){
    arrow2.style.transform = "rotate(180deg)";
    iswrapopen2 = 1;
    document.querySelectorAll('.footer-links2').forEach(c => c.classList.remove('hidden'));
    wrapper2.style.marginBottom = "24px";
  } else {
    arrow2.style.transform = "rotate(0deg)";
    document.querySelectorAll('.footer-links2').forEach(c => c.classList.add('hidden'));
    iswrapopen2 = 0;
    wrapper2.style.marginBottom = "0";
  }
  
})
wrapper3.addEventListener("click", function() {
  if (iswrapopen3 == 0){
    arrow3.style.transform = "rotate(180deg)";
    iswrapopen3 = 1;
    document.querySelectorAll('.footer-links3 ').forEach(c => c.classList.remove('hidden'));
    wrapper3.style.marginBottom = "24px";
  } else {
    arrow3.style.transform = "rotate(0deg)";
    document.querySelectorAll('.footer-links3').forEach(c => c.classList.add('hidden'));
    iswrapopen3 = 0;
    wrapper3.style.marginBottom = "0";
  }
})