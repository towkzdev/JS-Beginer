/* -----------EP29-ฟังก์ชั่น (Function)------------ */
let ep_29 ="--------------EP29---------------"
console.log(ep_29)

function printep_29(){
    console.log("Helo world");
}
function Nameep_29(){
    console.log("Helo DevTowkGr");
}
function Loveep_29(){
    alert("Love YOU 🩷");
}

printep_29();
Nameep_29();

/* -----------EP30-ฟังก์ชั่นที่มีการรับค่า------------ */
let ep_30 ="--------------EP30---------------"
console.log(ep_30)

function runNumber(x){
    console.log("เลขที่ส่งเข้ามา:",x);
}

runNumber(5);
runNumber(10);

let number = "DevGrr";
runNumber(number);

function fullName(fname , lname){
    console.log("ชื่อจริง",fname,"นามสกุล",lname)
}

fullName("Dev","TowkzGrrr");

function summationNumber(x,y){
    let total = x+y;
    console.log("ผลรวม :",total);
}

summationNumber(10,5);