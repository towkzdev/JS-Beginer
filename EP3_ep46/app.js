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