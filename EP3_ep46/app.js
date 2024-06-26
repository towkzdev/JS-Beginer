/* -----------EP46-DOM Nodes------------ */
let ep_46 ="--------------EP46---------------"
console.log(ep_46)

const textAll = document.querySelectorAll('p');
let message = textAll[1].innerHTML;
console.log(textAll);
console.log(message);

const menu = document.getElementById('menu');
const item = document.getElementById('item-3');
const itemB = document.getElementById('item-2');

const newItem = document.createElement('li');
newItem.innerText="X";
let count = 1;

function addItem(){
    const item = document.createElement('li');
    item.innerText = "Item"+ (count++);
    menu.appendChild(item);
}

function deleteItem(){
    menu.removeChild(item);
}

function replaceItem(){
    menu.replaceChild(newItem,itemB);
}

/* -----------EP47-DOM CSS (classList)------------ */
let ep_47 ="--------------EP47---------------"
console.log(ep_47)

const box=document.getElementById('box');
let status;

function addDarkMode(){
    box.classList.add("darkMode");
}
function removeDarkMode(){
    box.classList.remove("darkMode");
}
function switchDarkMode(){
    box.classList.toggle("darkMode");
    if(status = box.classList.contains("darkMode")){
        box.style.color="yellow";
    }else{
        box.style.color="red";
    }
}

/* -----------EP48-DOM Event (อีเวนต์)------------ */
let ep_48 ="--------------EP48---------------"
console.log(ep_48)

function wellcome(){
    alert("ยินดีต้อนรับเข้าสู่หน้าเว็บ");
}

function hightLight(obj){
    obj.style.background="yellow";
}

function unhightLight(obj){
    obj.style.background="black";
}

function getMenu(){
    const menu = document.getElementById('menu');
    const display = document.getElementById('display');
    console.log(menu.value.toUpperCase());
    display.innerText = menu.value;
}