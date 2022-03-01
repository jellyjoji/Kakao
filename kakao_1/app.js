const darkMode = document.querySelector("#mode");
const darkMode_mobile = document.querySelector("#mode_mobile");
let pc_menu_list_one = document.querySelector("#one");
let pc_menu_list_two = document.querySelector("#two");
let pc_menu_list_three = document.querySelector("#three");
let pc_menu_list_four = document.querySelector("#four");
const hamburger = document.querySelector('#hamburger');
let small_menu = document.querySelector('.small_menu');
let closed = document.querySelector("#closed");
// window.onresize = function(){ document.location.reload(); };

// if(matchMedia("screen and (max-width: 360px)").matches){ 
//     console.log("mobile"); 
// }else if(matchMedia("screen and (max-width: 768px)").matches){ 
//     console.log("tablet"); 
// }else if(matchMedia("screen and (min-width: 768px)").matches){ 
//     console.log("desktop"); 
//     small_menu.style.display = "none";
// }

// this is shadow 
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").className = "header_shadow";
    } else {
        document.getElementById("header").className = "header"
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
})
// this is dark mode_mobile
darkMode_mobile.addEventListener("click", function() {
    document.body.classList.toggle("dark_mode");
    // i don't know how to deal w white icon...
    // darkMode.style.backgroundImage = "url('./sun-line.svg')";
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
// menu list 는 항상 처음에 뜨지 않도록 css에서 설정하였기에 첫화면에서는 보이지 않는다
document.addEventListener('click', event=>{
    //console.log('clicked');
    const pc_menu = document.querySelector('.pc_menu');
    // hidden 이 한번 먹히면 hidden 이 계속 먹혀버리기 때문에, 매번 한번 사용후 hidden 을 없애준다는 함수를 넣어 반복시킨다.
    pc_menu.classList.remove('hidden');

    // 최하위 선택자를 호출하여 클릭 영역이 최소로 되도록한다.
    // closest 의 부모를 안부르고 자기자신을 호출해서 필요가 없는데 바꾸지를 못하고 있네 ? ^^
    if(event.target.closest('.test')) return;
    // return 이란 이전까지 작동하고 여기서 중단! 시키는것

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