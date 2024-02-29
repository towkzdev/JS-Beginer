//แสดงข้อความในหน้า web

document.write("<h1>Love YOU 🩷</h1>");



/*
    แสดงข้อความในแถบ console ของ web
 */

//alert("Hello MP 🩷🩷🩷")
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
