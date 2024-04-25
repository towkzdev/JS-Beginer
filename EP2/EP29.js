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

/* -----------EP33-ฟังก์ชั่นแบบกำหนดค่าเริ่มต้น------------ */
let ep_33 ="--------------EP33---------------"
console.log(ep_33)

function fullName_1(fname , lname="ใส่นามสกุลด้วย"){
    console.log("ชื่อจริง",fname,"นามสกุล",lname)
}

fullName_1("Kla","Satjaphon");
fullName_1("Kla");

/* -----------EP34-ขอบเขตของตัวแปร------------ */
let ep_34 ="--------------EP34---------------"
console.log(ep_34)

let a_33 = 100; //Global

function display(){
    let a_33 = 50;//local
    console.log("ตัวแปร",a_33);
    console.log("ค่าอื่นๆ",a_33);
}

console.log("Global =",a_33)
console.log("Global =",a_33)
display();

/* -----------EP35-Array Properties------------ */
let ep_35 ="--------------EP35---------------"
console.log(ep_35)

let ep35_colors = ['แดง','ขาว','ฟ้า','เหลือง','ม่วง'];
let ep35_count = ep35_colors.length;

console.log("Befor:",ep35_colors);

let result_1 = ep35_colors.sort();
console.log("After",result_1);

let ffruit = ['มะม่วง','ทุเรียน','กล้วย','แอปเปิ้ล','เงาะ'];
let ffruit_count = ep35_colors.length;

console.log("Befor:",ffruit);

let result_2 = ffruit.sort();
console.log("After",result_2);

let result_3 = ffruit.reverse();
console.log("After",result_3);

console.log(ep35_colors[0]); //ตัวแรก
console.log(ep35_colors[ep35_colors.length-1]); //ตัวสุดท้าย

console.log("Befor",ep35_colors);
ep35_colors.push('เทา');
console.log("After",ep35_colors);

/* -----------EP36-เข้าถึงสมาชิกใน Array ด้วย For Loop------------ */
let ep_36 ="--------------EP36---------------"
console.log(ep_36)

let ep36_colors = ['แดง','ขาว','ฟ้า','เหลือง','ม่วง'];
let ep36_count = ep36_colors.length;

for(let i_ep36 =0;i_ep36<ep36_count;i_ep36++){
    console.log("ลำดับที่ :",i_ep36+1,"มีค่า :",ep36_colors[i_ep36])
}

/* -----------EP37-เข้าถึงสมาชิกใน Array ด้วย ForEach------------ */
let ep_37 ="--------------EP37---------------"
console.log(ep_37)

let ep37_colors = ['แดง','ขาว','ฟ้า','เหลือง','ม่วง'];

ep37_colors.forEach(myData);

function myData(item){
    console.log("สี",item);
}

/* -----------EP38-แปลง Array เป็น String------------ */
let ep_38 ="--------------EP38---------------"
console.log(ep_38)

let ep38_colors = ['แดง','ขาว','ฟ้า','เหลือง','ม่วง'];

console.log("typeof:",typeof(ep38_colors));
console.log("tostring:",ep38_colors.toString());
console.log("pop:",ep38_colors.pop());

let x_ep38=ep38_colors.join("|");
console.log("join:",x_ep38)

let y_ep38=ep38_colors.pop();
console.log("let pop:",y_ep38)

/* -----------EP39-การรวม Array------------ */
let ep_39 ="--------------EP39---------------"
console.log(ep_39)

let fffruit = ["ส้ม","องุ่น"];
let vegan = ["ผักกาด","ผักคะน้า"];
let hardwere = ["คีย์บอร์ด","เมาส์"];

con_ep39 = fffruit.concat(vegan,hardwere);
console.log(con_ep39);

/* -----------EP40-การเรียงลำดับสมาชิกใน Array------------ */
let ep_40 ="--------------EP40---------------"
console.log(ep_40)

let points = [20,-5,-2,40,100,-500,150];

console.log("Before:",points);
//น้อยไปมาก

points.sort(function(a,b){
    return a-b;
});

console.log("น้อยไปมาก:",points);



