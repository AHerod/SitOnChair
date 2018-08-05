/* sub_nav display */
document.addEventListener("DOMContentLoaded", function () {


  var mainNav = document.querySelector(".main_nav");

  var firstLink = mainNav.firstElementChild;

  var subNav = document.querySelector(".sub_nav");

  firstLink.addEventListener("mouseover", function () {

    subNav.style.display = "block";

  });

  subNav.addEventListener("mouseout", function () {

    this.style.display = "none";

  });

});