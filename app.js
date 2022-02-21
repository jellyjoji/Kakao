const darkMode = document.querySelector("#mode");
let pc_menu_list_one = document.querySelector("#one");
let pc_menu_list_two = document.querySelector("#two");
let pc_menu_list_three = document.querySelector("#three");
let pc_menu_list_four = document.querySelector("#four");

// this is dark mode
darkMode.addEventListener("click", function() {
    document.body.classList.toggle("dark_mode");
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
