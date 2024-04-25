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

/* -----------EP31-ฟังก์ชั่น Return ค่า------------ */
let ep_31 ="--------------EP31---------------"
console.log(ep_31)

function getComputerIP(){
    return "127.0.0.1";
}
let myIp=getComputerIP();
console.log("IP :",myIp);

function getNumber(){
    return 100*10;
}
console.log("Total :",getNumber());

/* -----------EP32-ฟังก์ชั่นรับค่าและ Return ค่า------------ */
let ep_32 ="--------------EP32---------------"
console.log(ep_32)

function setSalary(salary){
    let bonus = 1000;
    return salary + bonus;
}

let a_32 = setSalary(15000);
a_32-=500;
console.log("เงินเดือนรวม:",a_32);

let b_32 = setSalary(20000);
console.log("เงินเดือนรวม:",b_32);

function sumNumber(x_32,y_32){
    return x_32+y_32;
}

c_32 = sumNumber(10,5);
console.log("ผลรวม",c_32);

/* -----------EP33-ฟังก์ชั่นรับค่าและ Return ค่า------------ */
let ep_33 ="--------------EP32---------------"
console.log(ep_33)
