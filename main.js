/* sub_nav display */
document.addEventListener("DOMContentLoaded", function () {

  var mainNav = document.querySelector(".main_nav");
  var firstLink = mainNav.firstElementChild;
  var firstPhoto = document.getElementById("first_div");
  var secondPhoto = document.getElementById("second_div");
  var firstTab = document.getElementById("tab1");
  var secondTab = document.getElementById("tab2");
  var subNav = document.querySelector(".sub_nav");

  firstLink.addEventListener("mouseover", function () {
    subNav.style.display = "block";
  });
  subNav.addEventListener("mouseout", function () {
    this.style.display = "none";
  });

  firstPhoto.addEventListener("mouseover", function () {
    firstTab.style.display = "none";
  });
  firstPhoto.addEventListener("mouseout", function () {
    firstTab.style.display = "block";

  });

  secondPhoto.addEventListener("mouseover", function () {
    secondTab.style.display = "none";
  });
  secondPhoto.addEventListener("mouseout", function () {
    secondTab.style.display = "block";
  });

/*  ##### slider ##### */
var slider = document.querySelector(".slider_photo");
var sliderImages = document.querySelectorAll(".slide");
var next = document.querySelector(".right");
var prev = document.querySelector(".left");
var current = 0;

// Clear all images
  function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].style.display = "none";
    }
  }
// Init slider
  function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
  }
// Show prev
  function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
  }
// Show next
  function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
  }
// Left arrow click
  prev.addEventListener("click", function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });
// Right arrow click
  next.addEventListener("click", function() {
    if (current === sliderImages.length - 1) {
      current = -1;
    }
    slideRight();
  });
  startSlide();

  /*#########  dropdown lists  ####### */
  //lists
  var allLists = document.querySelectorAll(".drop_down_list"),
    type = allLists[0],
    color = allLists[1],
    material = allLists[2];
  var listElements = document.querySelectorAll(".list_panel"),
    typeElements = listElements[0],
    colorElements = listElements[1],
    materialElements = listElements[2];
  console.log(listElements);

  //arrows in lists
  var arrow1 = type.querySelector(".list_arrow");
  console.log(arrow1);
  var arrow2 = color.querySelector(".list_arrow");
  console.log(arrow2);
  var arrow3 = material.querySelector(".list_arrow");
  console.log(arrow3);

function displayStyle(element){
  if(element.style.display === "none"){
    element.style.display = "block";
  }else{
    element.style.display = "none";}
}

/* LISTS STYLE DISPLAY CHANGES */
  arrow1.addEventListener("click", function () {
    displayStyle(typeElements);
  });
  arrow2.addEventListener("click", function () {
    displayStyle(colorElements);
  });
  arrow3.addEventListener("click", function () {
    displayStyle(materialElements);
  });

/*adding element to the shopping list*/
  var chairItems = listElements[0].children;
  var colorItems = listElements[1].children;
  var materialItems = listElements[2].children;
  var transport = document.getElementById("transport");

  var leftPanel = document.querySelector(".panel_left");
  var rightPanel = document.querySelector(".panel_right");

  var titleList = leftPanel.querySelector(".title");
  var titlePrice= rightPanel.querySelector(".title");

  var colorList = leftPanel.querySelector(".color");
  var colorPrice = rightPanel.querySelector(".color");

  var materialList = leftPanel.querySelector(".pattern");
  var materialPrice = rightPanel.querySelector(".pattern");

  var transportList = leftPanel.querySelector(".transport");
  var transportPrice = rightPanel.querySelector(".transport");

  /*chair Type*/
  function choseChair(element){
    titleList.innerHTML = element.innerText;
    titlePrice.innerHTML = element.dataset.chairPrice;
  }
  for(var i = 0; i < chairItems.length; i++){
    console.log(chairItems[i]);
    chairItems[i].addEventListener("click", function () {
      choseChair(this);
      showPrice();
    });
  }

  /*color Type*/
  function choseColor(element){
    colorList.innerHTML = element.innerText;
    colorPrice.innerHTML = element.dataset.colorPrice;
  }
  for(var i = 0; i < colorItems.length; i++){
    console.log(colorItems[i]);
    colorItems[i].addEventListener("click", function () {
      choseColor(this);
      showPrice();

    });
  }

  /*material Type*/
  function choseMaterial(element) {
    materialList.innerHTML = element.innerText;
    materialPrice.innerHTML = element.dataset.materialPrice;
  }
  for(var i = 0; i < materialItems.length; i++){
    console.log(materialItems[i]);
    materialItems[i].addEventListener("click", function () {
      choseMaterial(this);
      showPrice();
    });
  }

  /*  transport Y/N */
  transport.addEventListener("click", function () {
    if(transport.checked = true){
      transportList.innerHTML = "Transport";
      transportPrice.innerHTML = this.dataset.transportPrice;
      showPrice();
    }
  });

  /* sum */
  var elementPrice =  document.querySelectorAll(".panel_right span");
  console.log(elementPrice);
  var totalCost = document.getElementById("sum");
  function showPrice() {
    totalCost.innerHTML =  Number(titlePrice.innerHTML) + Number(colorPrice.innerHTML) + Number(materialPrice.innerHTML) + Number(transportPrice.innerHTML) + " PLN";
  }
});

