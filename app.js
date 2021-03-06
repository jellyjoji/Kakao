const darkMode = document.querySelector("#mode");
const darkMode_mobile = document.querySelector("#mode_mobile");
let pc_menu_list_one = document.querySelector("#one");
let pc_menu_list_two = document.querySelector("#two");
let pc_menu_list_three = document.querySelector("#three");
let pc_menu_list_four = document.querySelector("#four");
const hamburger = document.querySelector('#hamburger');
let small_menu = document.querySelector('.small_menu');
let closed = document.querySelector("#closed");
const logo = document.querySelector('.logo');
const logo_mobile = document.querySelector('#logo_mobile');


// window.onresize = function(){ document.location.reload(); };

// if(matchMedia("screen and (max-width: 360px)").matches){ 
//     console.log("mobile"); 
// }else if(matchMedia("screen and (max-width: 768px)").matches){ 
//     console.log("tablet"); 
// }else if(matchMedia("screen and (min-width: 768px)").matches){ 
//     console.log("desktop"); 
//     small_menu.style.display = "none";
// }

// this is shadow PC & Mobile
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "header_shadow";
        document.getElementById("header_icons_mobile").className = "header_icons_mobile_shadow";

    } else {
        document.getElementById("header").className = "header";
        document.getElementById("header_icons_mobile").className = "header_icons_mobile";

    }
}

// this is mobile hamburger bar button
function hamburger_click() {
    small_menu.style.display = "flex";
}
function closed_click() {
    small_menu.style.display = "none";
}
// but this is effects to pc size...
// this is dark mode
darkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark_mode");
    // i don't know how to deal w white icon...
    // darkMode.style.backgroundImage = "url('./sun-line.svg')";
    logo.classList.toggle("logo_white");
    logo_mobile.classList.toggle("logo_white");
})
// this is dark mode_mobile
darkMode_mobile.addEventListener("click", function() {
    document.body.classList.toggle("dark_mode");
    // i don't know how to deal w white icon...
    // darkMode_mobile.style.backgroundImage = "url('./sun-solid.svg')";
    logo.classList.toggle("logo_white");
    logo_mobile.classList.toggle("logo_white");
})
// this is pc_menu_list
function pc_menu_click_1() {
    if(pc_menu_list_one.style.display == 'flex') {
        pc_menu_list_one.style.display = 'none';
    }
    else {
        pc_menu_list_one.style.display = 'flex';
        pc_menu_list_two.style.display = 'none';
        pc_menu_list_three.style.display = 'none';
        pc_menu_list_four.style.display = 'none';
    }
}
function pc_menu_click_2() {
    if(pc_menu_list_two.style.display == 'flex') {
        pc_menu_list_two.style.display = 'none';
    }
    else {
        pc_menu_list_one.style.display = 'none';
        pc_menu_list_two.style.display = 'flex';
        pc_menu_list_three.style.display = 'none';
        pc_menu_list_four.style.display = 'none';
    }
}
function pc_menu_click_3() {
    if(pc_menu_list_three.style.display == 'flex') {
        pc_menu_list_three.style.display = 'none';
    }
    else {
        pc_menu_list_one.style.display = 'none';
        pc_menu_list_two.style.display = 'none';
        pc_menu_list_three.style.display = 'flex';
        pc_menu_list_four.style.display = 'none';
    }
}
function pc_menu_click_4() {
    if(pc_menu_list_four.style.display == 'flex') {
        pc_menu_list_four.style.display = 'none';
    }
    else {
        pc_menu_list_one.style.display = 'none';
        pc_menu_list_two.style.display = 'none';
        pc_menu_list_three.style.display = 'none';
        pc_menu_list_four.style.display = 'flex';
    }
}
// This is closed outside click 
// menu list ??? ?????? ????????? ?????? ????????? css?????? ?????????????????? ?????????????????? ????????? ?????????
document.addEventListener('click', event=>{
    //console.log('clicked');
    const pc_menu = document.querySelector('.pc_menu');
    // hidden ??? ?????? ????????? hidden ??? ?????? ??????????????? ?????????, ?????? ?????? ????????? hidden ??? ??????????????? ????????? ?????? ???????????????.
    pc_menu.classList.remove('hidden');

    // ????????? ???????????? ???????????? ?????? ????????? ????????? ???????????????.
    // closest ??? ????????? ???????????? ??????????????? ???????????? ????????? ????????? ???????????? ????????? ?????? ? ^^
    if(event.target.closest('.test')) return;
    // return ?????? ???????????? ???????????? ????????? ??????! ????????????

    pc_menu.classList.add('hidden');
});

// this is Mobile_menu_list
const moreIcon_1 = document.querySelector("#moreIcon_1");
const moreIcon_2 = document.querySelector("#moreIcon_2");
const moreIcon_3 = document.querySelector("#moreIcon_3");
const moreIcon_4 = document.querySelector("#moreIcon_4");

let one_mobile = document.querySelector("#one_mobile");
let two_mobile = document.querySelector("#two_mobile");
let three_mobile = document.querySelector("#three_mobile");
let four_mobile = document.querySelector("#four_mobile");

const footer_links_1 = document.querySelector("#footer_links_1");
const footer_links_2 = document.querySelector("#footer_links_2");
const footer_links_3 = document.querySelector("#footer_links_3");
const footer_links_4 = document.querySelector("#footer_links_4");

const search_lists = document.querySelector(".search_lists");
let plus_icon = document.querySelector('.plus_icon')

let dropIcon_1 = document.querySelector("#dropIcon_1");
let dropIcon_2 = document.querySelector("#dropIcon_2");
let dropIcon_3 = document.querySelector("#dropIcon_3");
let dropIcon_4 = document.querySelector("#dropIcon_4");


//this is search_lists in the footer
function plusIcon() {
    search_lists.classList.toggle("search_lists_show");
    plus_icon.classList.toggle("close");
}

function mobile_menu_click_1() {
    one_mobile.classList.toggle("show_mobile_menu_list");
    moreIcon_1.classList.toggle('lessIcon');
};
function mobile_menu_click_2() {
    two_mobile.classList.toggle("show_mobile_menu_list");
    moreIcon_2.classList.toggle('lessIcon');
};
function mobile_menu_click_3() {
    three_mobile.classList.toggle("show_mobile_menu_list");
    moreIcon_3.classList.toggle('lessIcon');
};
function mobile_menu_click_4() {
   four_mobile.classList.toggle("show_mobile_menu_list");
   moreIcon_4.classList.toggle('lessIcon');
};
// this is go back to top button 
function topFunction() {
    document.body.scrollTop = 0;// For Safari
    document.documentElement.scrollTop = 0;// For Chrome, Firefox, IE and Opera
}
// this is footer_menu toggle 
function footer_menu_1() {
    footer_links_1.classList.toggle("show_footer_links");
    dropIcon_1.classList.toggle('upIcon');
}
function footer_menu_2() {
    footer_links_2.classList.toggle("show_footer_links");
    dropIcon_2.classList.toggle('upIcon');
}
function footer_menu_3() {
    footer_links_3.classList.toggle("show_footer_links");
    dropIcon_3.classList.toggle('upIcon');
}
function footer_menu_4() {
    footer_links_4.classList.toggle("show_footer_links");
    dropIcon_4.classList.toggle('upIcon');
}
