'use strict';

//Set Vertical or Horizontal Images for Landing Page Slider
let mobileMediaQuery = window.matchMedia("(max-width: 550px)");
let bg_image_source;
let bg_image_style;

if(mobileMediaQuery.matches){
   bg_image_style = [
      /* maestro */'50% 20%/cover no-repeat',
      /* soldat */'50% 50%/cover no-repeat',
      /* september */'50% 60%/cover no-repeat',
      /* metel */'60% 35%/cover no-repeat',
      /* sisters */'50% 40%/cover no-repeat',
      /* prof */'50% 25%/cover no-repeat',
      /* oma */'50% 50%/cover no-repeat',
      /* denker */'30% 20%/cover no-repeat',
      /* jesus */'50% 35%/cover no-repeat',
      /* JMR */'35% 20%/cover no-repeat'

   ];
   bg_image_source = [
      /* maestro */'images/Karajan-min_Nikita_Schomerus.jpg',
      /* soldat */'images/Mama,Papa,Bruder-min_Nikita_Schomerus.jpg',
      /* september */'images/September-min_Nikita_Schomerus.jpg',
      /* metel */'images/Metel-min_Nikita_Schomerus.jpg',
      /* sisters */'images/Vater-min_Nikita_Schomerus.jpg',
      /* prof */'images/Hans-min_Nikita_Schomerus.jpg',
      /* oma */'images/Oma-min_Nikita_Schomerus.jpg',
      /* denker */'images/Denker-min_Nikita_Schomerus.jpg',
      /* jesus */'images/StabatMater-min_Nikita_Schomerus.jpg',
      /* JMR */'images/JMR-min_Nikita_Schomerus.jpg'
   ];
} else {bg_image_style = [
      /* maestro */'50% 20%/cover no-repeat',
      /* soldat */'50% 50%/cover no-repeat',
      /* september top */'50% 0%/cover no-repeat',
      /* september */'50% 60%/cover no-repeat',
      /* metel */'60% 35%/cover no-repeat',
      /* matrosen */'50% 0%/auto 100% no-repeat',
      /* sisters */'50% 40%/cover no-repeat',
      /* prof */'50% 25%/cover no-repeat',
      /* oma */'50% 50%/cover no-repeat',
      /* JMR */'50% 20%/cover no-repeat'
      ];
      bg_image_source = [
      /* maestro */'images/Karajan-min_Nikita_Schomerus.jpg',
      /* soldat */'images/Mama,Papa,Bruder-min_Nikita_Schomerus.jpg',
      /* september top */'images/September-min_Nikita_Schomerus.jpg',
      /* september */'images/September-min_Nikita_Schomerus.jpg',
      /* metel */'images/Metel-min_Nikita_Schomerus.jpg',
      /* matrosen */'images/Matrosen-min_Nikita_Schomerus.jpg',
      /* sisters */'images/Vater-min_Nikita_Schomerus.jpg',
      /* prof */'images/Hans-min_Nikita_Schomerus.jpg',
      /* oma */'images/Oma-min_Nikita_Schomerus.jpg',
      /* JMR */'images/JMR-min_Nikita_Schomerus.jpg'
      ]

   }


// LANDING PAGE SLIDER
let slider_arrow_buttons = [document.querySelector(".slider__left-arrow-btn"),document.querySelector(".slider__right-arrow-btn")];
let bg_image = document.querySelector("#bg-image");
let image_tracker = 0;

for(let arrow_button of slider_arrow_buttons){
   arrow_button.addEventListener("click", switch_slideShow_image)
}

function switch_slideShow_image(event) {
   event.target.classList.add("clicked-arrowButton-animation");
   setTimeout(() => {event.target.classList.remove("clicked-arrowButton-animation")}, 900);
   bg_image.classList.add("fadeOut-1s");
   if(event.target.classList.contains("right-arrow-btn__img")){
      if(image_tracker == bg_image_source.length - 1){
         image_tracker = 0;
      }
      else{
         image_tracker += 1;
      }
      fadeIn_next_image();
   }
   else if(event.target.classList.contains("left-arrow-btn__img")){
      if(image_tracker == 0){
         image_tracker = bg_image_source.length - 1;
      }
      else {
         image_tracker -= 1;
      }
      fadeIn_next_image();
   }
}

function fadeIn_next_image() {
   setTimeout(() => {
      bg_image.classList.add("no-display");
      bg_image.classList.remove("fadeOut-1s");
      bg_image.style.background = "url(" + bg_image_source[image_tracker] + ")" + bg_image_style[image_tracker];
      bg_image.classList.add("fadeIn");
      bg_image.classList.remove("no-display");
      setTimeout(() => {
         bg_image.classList.remove("fadeIn");
      },1500)
   },900);
}


// ENTER PAGE BUTTON
let enter_button = document.querySelector("#enter-page-btn");
let black_bg_container = document.querySelector(".black-bg-container");
let logo = document.querySelector(".logo");
let impressum = document.querySelector(".impressum");
let mobile_menuItems_container = document.querySelector(".mobile-menu-items-container");
let middle_line = document.querySelector(".middle-line");
var mobile_title = document.querySelector(".mobile-title");

enter_button.addEventListener("click", enter_menuPage);

function enter_menuPage() {
   fadeOut_landigPage_slideShow();
   setTimeout(()=> {
      logo.classList.remove("logo__enter-page");
      logo.classList.add("logo__menu");   
      logo.classList.remove("fadeOut-1s");
      logo.classList.add("fadeIn-2s");
      black_bg_container.classList.add("fadeIn-2s");
      black_bg_container.classList.add("black-bg-container__menu");
      black_bg_container.classList.remove("no-display");
      mobile_title.classList.add("fadeIn-2s");
      mobile_title.classList.add("black-bg-container__menu");
      mobile_title.classList.remove("no-display");
      mobile_menuItems_container.classList.add("fadeIn-2s");
      mobile_menuItems_container.classList.remove("no-display");
      middle_line.classList.add("fadeIn-2s");
      middle_line.classList.remove("no-display");
      setTimeout(() => {
      impressum.classList.add("fadeIn");
      impressum.classList.remove("no-display");
      logo.style.removeProperty("transition");
      },1200);
   },1000);
}

function fadeOut_landigPage_slideShow () {
   for(let arrow_button of slider_arrow_buttons){
      arrow_button.style.animation = "fadeOut 0.5s both ease-out";
   } 
   logo.classList.add("fadeOut-1s");
   logo.style.transition = "none";
   enter_button.style.animation = "fadeOut 0.5s both ease-out";
}


// OPEN & CLOSE CONTENT PAGE
let menu_items = document.querySelectorAll(".menu-item");
let content_page__title = document.querySelector(".content-page__title");
let close_icon = document.querySelector(".content-page__close-icon");
let menu_title = document.querySelector(".menu-title");
let menu_items_container = document.querySelector(".menu-items-container");
let content_page = document.querySelectorAll(".content-page");

for(let menu_item of menu_items){
   menu_item.addEventListener("click", open_contentPage)
}
close_icon.addEventListener("click", close_contentPage);

function open_contentPage(event) {
   transform_middleLine();
   hide_menu();
   fadeIn_contentPage(event);
}

function close_contentPage() {
   transform_middleLine();
   content_page__title.classList.toggle("no-display");
   content_page__title.classList.toggle("fadeIn");
   close_icon.classList.toggle("no-display");
   close_icon.classList.toggle("fadeIn06opacity");
   for (let page of content_page){
      if(!page.classList.contains("no-display")){
         page.classList.add("no-display");
         page.classList.remove("fadeIn");
      }
   }
   fadeAnim_switch_menu_and_impressum();
   switch_display_menu_and_impressum();
   menu_title.classList.add("fadeIn");
   menu_items_container.classList.add("fadeIn");
   content_page__title.textContent = "";
}

   function transform_middleLine() {
      black_bg_container.classList.toggle("black-bg-container__menu");
      black_bg_container.classList.toggle("black-bg-container__content-page");
      middle_line.classList.toggle("middle-line__menu");
      middle_line.classList.toggle("middle-line__content-page");
      logo.classList.toggle("logo__menu");
      logo.classList.toggle("logo__open-page");
   }

   function hide_menu () {
      fadeAnim_switch_menu_and_impressum();
      setTimeout(()=> {
         switch_display_menu_and_impressum();
      },1000)
   }

   function fadeIn_contentPage (event) {
      content_page__title.textContent = event.target.textContent;
      setTimeout(function () {
         content_page__title.classList.toggle("no-display");
         content_page__title.classList.toggle("fadeIn");
         close_icon.classList.toggle("no-display");
         close_icon.classList.toggle("fadeIn06opacity");
         content_page[[...menu_items].indexOf(event.target)].classList.remove("no-display");
         content_page[[...menu_items].indexOf(event.target)].classList.add("fadeIn");
         setTimeout(() => {
            close_icon.classList.remove("fadeIn06opacity");
         }, 1000)
         }, 1000);
   }

   function fadeAnim_switch_menu_and_impressum() {
      menu_title.classList.toggle("fadeOut-1s");
      menu_items_container.classList.toggle("fadeOut-1s");
      impressum.classList.toggle("fadeIn");
      impressum.classList.toggle("fadeOut-1s");
   }

   function switch_display_menu_and_impressum() {
      menu_title.classList.toggle("no-display");
      menu_items_container.classList.toggle("no-display");
      impressum.classList.toggle("no-display");
   }


//MOBILE OPEN & CLOSE CONTENT PAGE
let mobile_menu_container = document.querySelector(".mobile-menu-items-container");
let mobile_title__closeIcon = document.querySelector(".mobile-title__closeIcon");
let mobile_menu_items = document.querySelectorAll(".mobile-menu-item");
let mobile_title__text = document.querySelector(".mobile-title__text");
let mobile_title__text__open = document.querySelector(".mobile-title__text__open");
let mobile_title__logo = document.querySelector(".mobile-title__logo");
let clicked_contentPage_tracker;

mobile_menu_container.addEventListener("click", open_mobileContentPage);
mobile_title__closeIcon.addEventListener("click", close_mobileContentPage);

function open_mobileContentPage (event) {
   if(event.target.classList.contains("mobile-menu-item")){
      black_bg_container.classList.add("fadeOut-1s"); 
      mobile_title.classList.add("fadeOut-1s"); 
      impressum.classList.add("fadeOut-1s"); 
      for(let menu_item of mobile_menu_items){
         menu_item.classList.add("fadeOut-1s");
         if(event.target == menu_item){
            clicked_contentPage_tracker = [...mobile_menu_items].indexOf(menu_item);
         }
      }
      setTimeout(()=>{
         mobile_title.style = "background-color: rgba(0, 0, 0, 0.6)";
         switch_mobileMenu_display();
         mobile_title__text__open.textContent = event.target.textContent;
         black_bg_container.classList.remove("fadeOut-1s");
         black_bg_container.classList.remove("fadeIn-2s");
         mobile_title.classList.remove("fadeOut-1s");
         mobile_title.classList.remove("fadeIn-2s");
         black_bg_container.classList.add("fadeIn");
         mobile_title.classList.add("fadeIn");
         content_page[clicked_contentPage_tracker].classList.remove("no-display");
         content_page[clicked_contentPage_tracker].classList.remove("fadeOut-1s");
         content_page[clicked_contentPage_tracker].classList.add("fadeIn");
      }, 1000)
   }
}

function close_mobileContentPage () {
   black_bg_container.classList.add("fadeOut-1s");
   mobile_title.classList.add("fadeOut-1s");
   for(let i = 0; i < mobile_menu_items.length; i++){
      if(!content_page[i].classList.contains("no-display")) {     
         content_page[i].classList.remove("fadeIn");
         content_page[i].classList.add("fadeOut-1s");
         setTimeout(() => {
            content_page[i].classList.add("no-display");
            content_page[i].classList.remove("fadeOut-1s");
         },1000)
      }
   }
   setTimeout(() => {
      mobile_title.style.removeProperty("background-color");
      switch_mobileMenu_display ();

      black_bg_container.classList.remove("fadeOut-1s");
      black_bg_container.classList.add("fadeIn-1s");
      mobile_title.classList.remove("fadeOut-1s");
      mobile_title.classList.add("fadeIn-1s");
      impressum.classList.add("fadeIn");     
      impressum.classList.remove("fadeOut-1s");   
      for(let i = 0; i < mobile_menu_items.length; i++){
         mobile_menu_items[i].classList.remove("fadeOut-1s");
         mobile_menu_items[i].classList.add("fadeIn");
      }
   },1000)
}

   function switch_mobileMenu_display () {
      mobile_title__logo.classList.toggle("no-display");
      mobile_title__text.classList.toggle("no-display");
      mobile_title__text__open.classList.toggle("no-display");
      mobile_title__closeIcon.classList.toggle("no-display");
      black_bg_container.classList.toggle("black-bg-container__content-page");
   }


// IMPRESSUM

var impressum_container = document.querySelector(".impressum-container");
var clicked_impressum = document.querySelector(".clicked-impressum");
var impressum_closeIcon = document.querySelector(".impressum-closeIcon");

impressum_container.addEventListener("click", open_impressum);
impressum_closeIcon.addEventListener("click", close_impressum);

function open_impressum () {
   switch_nonImpressumItems();
   impressum_container.classList.add("no-display");
   impressum.classList.add("impressum__open");
   setTimeout(() => {
      show_impressumPage();
      black_bg_container.classList.add("no-display");
   },750)
   function show_impressumPage () {
      clicked_impressum.classList.add("fadeIn");
      clicked_impressum.classList.remove("no-display");
      impressum_closeIcon.classList.add("fadeIn");
      impressum_closeIcon.classList.remove("no-display");
      mobile_title.classList.add("no-display");
      document.querySelector(".cc-revoke").style.display = "block";
   }
}

function close_impressum() {
   clicked_impressum.classList.add("no-display");
   clicked_impressum.classList.remove("fadeIn");
   impressum_closeIcon.classList.add("no-display");
   impressum_closeIcon.classList.remove("fadeIn");
   impressum.classList.remove("impressum__open");
   document.querySelector(".cc-revoke").removeAttribute("style");
   setTimeout(() => {
      switch_nonImpressumItems();
      black_bg_container.classList.remove("no-display");
      mobile_title.classList.remove("no-display");
      mobile_title.classList.add("fadeIn");
      mobile_menuItems_container.classList.add("fadeIn");
      middle_line.classList.add("fadeIn");
      logo.classList.add("fadeIn");
   },250)
   setTimeout(() => {
      impressum_container.classList.add("fadeIn");
      impressum_container.classList.remove("no-display");
   },750)
}

function switch_nonImpressumItems() {
   mobile_title.classList.toggle("fadeOut-04s");
   mobile_menuItems_container.classList.toggle("fadeOut-04s");
   black_bg_container.classList.toggle("fadeOut-04s");
   black_bg_container.classList.toggle("fadeIn");
   middle_line.classList.toggle("fadeOut-04s");
   logo.classList.toggle("fadeOut-04s");
}


// ROTATE DEVICE - Switch from Landscape to Horizontal and other way round

mobileMediaQuery.addListener(rotate_device);

function rotate_device(screen_width){
   for(let page of content_page){
      if(!page.classList.contains("no-display") && !screen_width.matches){
         //Returning Mobile-Content-Page Elements to Original State
         mobile_title.classList.remove("black-bg-container__menu");
         mobile_title.classList.remove("fadeIn");
         mobile_title.removeAttribute("style");
         mobile_title__logo.classList.remove("no-display");
         mobile_title__text.classList.remove("no-display");
         mobile_title__text__open.classList.add("no-display");
         mobile_title__text__open.textContent="";
         mobile_title__closeIcon.classList.add("no-display");
         // Activating Desktop-Content-Page Elements
         black_bg_container.classList.remove("black-bg-container__menu");
         black_bg_container.classList.add("black-bg-container__content-page");
         middle_line.classList.add("middle-line__content-page");
         middle_line.classList.remove("middle-line__menu");
         middle_line.classList.add("fadeIn-2s");
         logo.classList.remove("logo__menu");
         logo.classList.add("logo__open-page");
         menu_title.classList.add("fadeOut-1s");
         menu_items_container.classList.add("fadeOut-1s");
         impressum.classList.remove("fadeIn");
         menu_title.classList.add("no-display");
         menu_items_container.classList.add("no-display");
         impressum.classList.add("no-display");
         content_page__title.classList.remove("no-display");
         content_page__title.textContent = menu_items[[...content_page].indexOf(page)].textContent;
         close_icon.classList.remove("no-display");
         for(let item of mobile_menu_items){
            item.classList.remove("fadeOut-1s");
         }
      }
      else if(page.classList.contains("fadeIn") && screen_width.matches){
         // Activating Mobile-Content-Page Elements
         mobile_title.classList.add("black-bg-container__menu");
         mobile_title.classList.add("fadeIn");
         mobile_title.style = "background-color: rgba(0, 0, 0, 0.6)";
         mobile_title.classList.remove("fadeIn-2s");
         mobile_title__text.classList.add("no-display");
         mobile_title__text__open.classList.remove("no-display");
         mobile_title__text__open.textContent = content_page__title.textContent;
         mobile_title__closeIcon.classList.remove("no-display");
         mobile_title__logo.classList.add("no-display");
         // Returning Desktop-Content-Page Elements to Original State
         middle_line.classList.remove("middle-line__content-page");
         middle_line.classList.add("middle-line__menu");
         logo.classList.add("logo__menu");
         logo.classList.remove("logo__open-page");
         black_bg_container.classList.add("black-bg-container__menu")
         menu_title.classList.remove("fadeOut-1s");
         menu_items_container.classList.remove("fadeOut-1s");
         impressum.classList.add("fadeIn");
         menu_title.classList.remove("no-display");
         menu_items_container.classList.remove("no-display");
         impressum.classList.remove("no-display");
         content_page__title.classList.add("no-display");
         content_page__title.textContent = "";
         close_icon.classList.add("no-display");
         for(let item of mobile_menu_items){
            item.classList.add("fadeOut-1s")
         }
      }
   }
}