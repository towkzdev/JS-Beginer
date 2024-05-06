/* -----------EP48-EventListener------------ */
let ep_49 ="--------------EP49---------------"
console.log(ep_49)

//อ้างอิง

const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn')
//event
menu.addEventListener('change',getMenu);
btn.addEventListener('click',showWellcom);

function getMenu(){
    display.innerText = menu.value;
}

function showWellcom(){
    alert("ยินดีต้อนรับเข้าสูหน้าเว็บไซต์");
}
