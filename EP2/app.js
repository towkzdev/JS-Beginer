//แสดงข้อความในหน้า web

document.write("<h1>Hi</h1>");



/*
    แสดงข้อความในแถบ console ของ web
 */

//alert("Hello")
console.log("Hello javascript")
console.error("error virus")
console.warn("เจอข้อผิดพลาด")


/* ตัวแปล EP5*/
let ep_5 ="--------------EP5---------------"
console.log(ep_5)

let name,Name ="Satjaphon"; //สร้างตัวแปลแต่ไม่มีการกำหนดค่า
name = "Dev Grrr" //การกำหนดค่าลงไปในตัวแปล name
let age = 20

console.log(name);
document.write(name);
console.log(Name);
document.write(Name);
console.log("อายุ =",age);

let _for ="Kla Satjaphon";
console.log("Befor = ",_for)

_for = "Grrrrrr DevTowkz";
console.log("After = ",_for)

/* ค่าคงที่ const */
const vat =0.07; //ค่าคงที่
console.log("Befor = ",vat);

//vat = 0.089
console.log("After = ",vat);


/* -----------EP6------------- */
let ep_6 ="--------------EP6---------------"
console.log(ep_6)

let money = 500+500 ; //number (integer)
let price = 99.98 ; //number (float)
let message = "Dev Grrr";
let NAME = "Gr Satajphon";

let checkName = false ;
let checkProduct = true ;

let AGE_1 = "20" //string
let AGE_2 = "20"+10 //string

console.log(typeof(money),(money));
console.log(typeof(price),(price));
console.log(typeof(message),(message));
console.log(typeof(NAME),(NAME));

console.log(typeof(checkName),(checkName))
console.log(typeof(checkProduct),(checkProduct))
console.log(typeof(AGE_1),(AGE_1))
console.log(typeof(AGE_2),(AGE_2))


/* -----------EP7------------- */
let ep_7 ="--------------EP7---------------"
console.log(ep_7)

let NTS_1 ="ep7_NumberToString"
console.log(NTS_1)

let NTS_3 = "20"
let NTS_4 = parseInt("20")
let NTS_5 = parseFloat("20")
let NTS_6 = +"20"


console.log(typeof(NTS_3),(NTS_3))
console.log(typeof(NTS_4),(NTS_4))
console.log(typeof(NTS_5),(NTS_5))
console.log(typeof(NTS_6),(NTS_6)+100)

let STN_1 ="ep7_StringToNumber"
console.log(STN_1)

let STN_2 = 99+""
let STN_3 = 99.98.toString()



console.log(typeof(STN_2),(STN_2))
console.log(typeof(STN_3),(STN_3))

/* -----------EP8-Array------------- */
let ep_8 ="--------------EP8---------------"
console.log(ep_8)

//วิธีการสร้าง Array
//วิธีที่ 1

let number1 = Array(100,200,300,400,500,600);
let number2 = Array("100","200","300","400","500","600");

//index เริ่มต้นที่เลข 0 หมายถึงสมาขิกตัวแรก
console.log(number1)
console.log(number1[0])
console.log(number1[4])

//วิธีที่ 2
let colors = ["แดง","เขียว","ชมพู","ขาว"]

colors[1]="เหลือง"

console.log(colors)

let days = ["วันอาทิตย์","วันจันทร์","วันอังคาร"]

console.log(days)

/* -----------EP9-Operators-math------------ */
let ep_9 ="--------------EP9---------------"
console.log(ep_9)

let a=20,b=4

console.log("ผลบวก = ",10+5)
console.log("ผลลบ = ",20-4)
console.log("ผลคูณ = ",5*2)
console.log("ผลหาร = ",a/b)
console.log("หารเอาเศษ = ",22%4)
console.log("ยกกำลัง = ",2**2)

/* -----------EP10-Operators-boolean------------ */
let ep_10 ="--------------EP10---------------"
console.log(ep_10)

let c=5,d=10
let check=true

console.log("เท่ากัน",a == b)
console.log("ไม่เท่ากัน",a != b)
console.log("มากกว่า",a > b)
console.log("น้อยกว่า",a < b)
console.log("มากกว่าหรือเท่ากับ",a >= b)
console.log("น้อยว่าหรือเท่ากับ",a <= b)

console.log(!check)

/* -----------EP11-Operators-logic------------ */
let ep_11 ="--------------EP11---------------"
console.log(ep_11)

//ตัดเกรด
//and => และ

//ชื้อมะ่วงและเงาะหรือไม่? =>กลับบ้านได้หรือไม่

//a=ชื้อมะม่วงหรือเปล่า and b=ซื้อเงาะหรือเปล่า

//a=true && b = false => a && b = true (กลับบ้าน)


//or => หรือ

//ชื้อมะ่วงหรือเงาะหรือไม่? =>กลับบ้านได้หรือไม่
//a=ชื้อมะม่วงหรือเปล่า or b=ซื้อเงาะหรือเปล่า

/** --------------------------------------------- */

/**
    70-80 =>A
    50-60 =>B
    <49> =>F
 */

let score =80

console.log(score >=70 && score<= 80,"A")
console.log(score >=50 && score<= 60,"B")
console.log(score <49,"F")

console.log(score >=70 || score<= 80)

//and(true)=> ซ้าย && ขวา เป็นจริงคู่
//or(true)=> ซ้าย || ขวา เป็นจริง


/* -----------EP12-Prefix-Postfix------------ */
let ep_12 ="--------------EP12---------------"
console.log(ep_12)

/**
    ++(prefix)  ++a     เพิ่มค่าก่อนเเล้วนำไปใช้
    ++(postfix) a++     นำค่าปัจุบันไปใช้ก่อนเเล้วค่อยเพิ่มค่า
    --(prefix)  --a     ลดค่าค่าก่อนเเล้วนำไปใช้
    --(postfix) a--     นำค่าปัจุบันไปใช้ก่อนเเล้วค่อยลดค่า
 */

let ep12_1 = 5, ep12_2 = 10

//การลดค่า
//เพื่มค่าแบบ prefix
console.log("ค่าเริ่มต้น = ",ep12_1)
console.log("ค่าprefix = ",++ep12_1)
console.log("ค่าปัจจุบัน = ",ep12_1)

ep12_1 = 5 //reset
//เพื่มค่าแบบ postfix
console.log("ค่าค่าเริ่มต้น = ",ep12_1)
console.log("ค่าprefix = ",ep12_1++)
console.log("ค่าปัจจุบัน = ",ep12_1)

//การลดค่า
//ลดค่าแบบ prefix
console.log("ค่าเริ่มต้น = ",ep12_1)
console.log("ค่าprefix = ",--ep12_1)
console.log("ค่าปัจจุบัน = ",ep12_1)

ep12_1 = 5 //reset
//ลดค่าแบบ postfix
console.log("ค่าค่าเริ่มต้น = ",ep12_1)
console.log("ค่าprefix = ",ep12_1--)
console.log("ค่าปัจจุบัน = ",ep12_1)

/* -----------EP13-Compound-Assignment------------ */
let ep_13 ="--------------EP13---------------"
console.log(ep_13)

let num_a = 10 , num_b = 20

console.log("ก่อน = ",num_a)
num_a+=num_b
console.log("+หลัง = ",num_a)

console.log("ก่อน = ",num_a)
num_a-=num_b
console.log("-หลัง = ",num_a)

console.log("ก่อน = ",num_a)
num_a*=num_b
console.log("*หลัง = ",num_a)

num_a = 10//reset
console.log("ก่อน = ",num_a)
num_a/=num_b
console.log("/หลัง = ",num_a)

num_a = 10//reset
console.log("ก่อน = ",num_a)
num_a%=num_b
console.log("/หลัง = ",num_a)

/* -----------EP14-ลำดับความสำคัญของตัวดพเนินการ------------ */
let ep_14 ="--------------EP14---------------"
console.log(ep_14)

console.log(5+8*9)
console.log(10-4+2)
console.log(10-(2+1))
console.log(5*2-40/5)
console.log(7+8/2+25)

/* -----------EP15-Control-Sructure------------ */
let ep_15 ="--------------EP15---------------"
console.log(ep_15)

//if
age = 50
if(age >=15 || age<=25){
    console.log("คำนำหน้าเป็นนาย นางสาว")
}
else{
    console.log("อายุตำกว่า 15 ปี")
}


let balancre = 10000
let withdraw = 100

if(withdraw<=balancre){
    console.log("ดำเนินการถอนเงิน = ",withdraw)
    balancre-=withdraw
    console.log("ยอดเงินคงเหลือ = ",balancre)
}
else{
    console.log("ยอดเงินในบัญชีไม่พอ")
}

/* -----------EP16-If-Else------------ */
let ep_16 ="--------------EP16---------------"
console.log(ep_16)


let balancre_2 = 10000
let withdraw_2 = 100000

if(withdraw_2<=balancre_2){
    console.log("ดำเนินการถอนเงิน = ",withdraw_2)
    balancre_2-=withdraw_2
    console.log("ยอดเงินคงเหลือ = ",balancre_2)
}
else{
    console.log("ยอดเงินในบัญชีไม่พอ")
}

/* -----------EP17-If-หลายเงื่อนเงื่อนไข------------ */
let ep_17 ="--------------EP17---------------"
console.log(ep_17)

let score_ep17 = 70

if(score_ep17>70){
    console.log("เกรด A")
}
if(score_ep17>60){
    console.log("เกรด B")
}
if(score_ep17>50){
    console.log("เกรด C")
}
if(score_ep17>40){
    console.log("เกรด D")
}

/* -----------EP18-Ternary Operator------------ */
let ep_18 ="--------------EP18---------------"
console.log(ep_18)

let score_18 =40;
let pass;
/*
if(score>50){
    pass = "ผ่านเกณฑ์"
}else{
    pass = "ไม่ผ่านเกณฑ์"
}
*/

pass = score_18>50 ? "ผ่านเกณฑ์" : "ไม่ผ่านเกณฑ์"
console.log(pass);

/* -----------EP19-การเขียนเงื่อนไขซ้อนกัน------------ */
let ep_19 ="--------------EP19---------------"
console.log(ep_19)

let age_19 = 17

if(age_19<=15){
    if(age_19==15){
        console.log("ม.3")
    }else if(age_19==14){
        console.log("ม.2")
    }else if(age_19==13){
        console.log("ม.1")
    }
}else{
    console.log("ม.ปลาย")
}

/* -----------EP20-Switch..Case------------ */
let ep_20 ="--------------EP20---------------"
console.log(ep_20)

let status_20 = 0;

let light;

/*if(status_20 == 0){
    light="ปิดไฟ";
}else if(status_20 == 1){
    light="เปิดไฟ";
}else{
    light = "ไม่พบข้อมูล"
}*/

switch(status_20){
    case 0 : light="ปิดไฟ"
        break;
    case 1 : light="เปิดไฟ"
        break;
}

console.log(light)

/* -----------EP21-โปรแกรมคำนวณเลขคู่ - เลขคี่------------ */
let ep_21 ="--------------EP21---------------"
console.log(ep_21)

let x=51

if(x%2==0){
    console.log("เลขคู่");
}else{
    console.log("เลขคี่");
}

/* -----------EP22-โปรแกรมเปรียบเทียบตัวเลข------------ */
let ep_22 ="--------------EP21---------------"
console.log(ep_22)

let xx=50,yy=100

if(xx>yy){
    console.log("x มีค่ามากที่สุด")
}else if(xx<yy){
    console.log("y มีค่ามากที่สุด")
}else{
    console.log("มีค่าเท่ากัน")
}

/* -----------EP23-While Loop------------ */
let ep_23 ="--------------EP23---------------"
console.log(ep_23)

let count = 1;
while(count<=5){
    console.log("ผลิตสินค้าในโรงงาน =",count);
    if(count==4){
        break;
    }
    count++;
}

/* -----------EP24-For Loop------------ */
let ep_24 ="--------------EP24---------------"
console.log(ep_24)

for(let count = 1;count<=5;count+=2){
    console.log(count);
}

/*
count = 1,2,3,4,5,6

1,2,3,4,5

*/

/* -----------EP25-Do..While------------ */
let ep_25 ="--------------EP23---------------"
console.log(ep_25)

let count_25 = 0;

do{                             //ทำก็ต่อเมื่อ while ทำก่อน
    console.log(count)
    count++;
}while(count<=5);

/**
 * while(count>5){
 * console.log(count);
 * count++;
 */

/* -----------EP26-การใช้งาน Loop แต่ละแบบ------------ */
let ep_26 ="--------------EP26---------------"
console.log(ep_26)

/* -----------EP27-Break & Continue------------ */
let ep_27 ="--------------EP27---------------"
console.log(ep_27)

for(let count=1;count<=10;count++){
    if(count==5)break;
    console.log(count);
}
console.log("จบโปรแกรม_break");

for(let count=1;count<=10;count++){
    if(count==5)continue;
    console.log(count);
}
console.log("จบโปรแกรม_continue");

/* -----------EP28-Null , Undefined , NaN------------ */
let ep_28 ="--------------EP28---------------"
console.log(ep_28)

//undifind
let a_uni;
console.log(a_uni)

//null
let a_null=null;
if(a_null){
    console.log("a is null");
}else{
    console.log("a not null");
}

//nan
let a_nan=10*"ก";
console.log(a_nan);
