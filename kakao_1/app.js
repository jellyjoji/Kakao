const darkMode = document.querySelector("#mode");
let pc_menu_list_one = document.querySelector("#one");
let pc_menu_list_two = document.querySelector("#two");
let pc_menu_list_three = document.querySelector("#three");
let pc_menu_list_four = document.querySelector("#four");

// this is dark mode
darkMode.addEventListener("click", function() {
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