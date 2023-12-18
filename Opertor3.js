//Arthmetic Opt

// + - * / % **

let a  =5;
let b  =20;
console.log(a*b);
console.log(a%b);

//find remaindas 
let d=5;
let e=2;
console.log(d%e)
//ans 1

// ** n power 

let f=5;
let g=3;
//5*5*5=125
console.log(f**g);
//ans 125

// ----------------------------------------

//Unnary opt 
// ++ || --

//a++ = a+1 || a-- = a-1

let h=10;
let i=20;

h++;
// h=h+1
console.log(h);
//ans 11

i--;
//i = i - 1;
console.log(i);
//ans 19

//--------------------------------------------

//post & pre increment ++a --b

let j=10;
console.log('++j',++j); //ans 11 

let k=10;

console.log('k++',k++); //ans 10

//-----------------------------------------------

//Assigment opt

//= += -= *= %= **=

//a = a+1    a+=1;
//a = a-1    a-=1;

let xyz = 5;
let yxz = 6;

xyz += 1;
console.log(xyz); //ans 6

yxz -= 3;
console.log(yxz); //ans 3
//---------------------------------------------------

//Comparison opt (2compare 2values) (return always boolean value)
// Equal to ==       ||      Equal to type ===
// Not equal to !=   ||      Not equal to & type !==  

let Ram = 5;
let shyam = 5;

console.log(Ram==shyam); // true
console.log(Ram!=shyam); // false

let shantnu = 2;
let sagar =1;
console.log(shantnu==sagar); // false
console.log(shantnu!=sagar); // true

//*******************************************

//Compraion with Type

let viraj = 6; //Number
let tejas = "6"; // String -> Number

console.log('viraj === tejas',viraj === tejas); //false

let sujit =3;
let kunal ="3";

console.log(sujit===kunal); //false
//29 minn done

// > GRETER THAN || >= GRATER THAN QUAL TO || < LESER THAN || <== LESER THAN QUAL TO

let harry = 20;
let bravo = 10;

console.log(harry>bravo); //true
console.log(harry<bravo); //false

let macho = 15;
let sunil = 15;
console.log(macho>=sunil); //true
//------------------------------------------------------------------------

// Logical Opt
// ***&&***(and and opt)
// (true && true) //ans true
// (true && false) //ans false
// (false && true) //ans false
// (false && false) //ans false

let pnkaj = 8;
let bharat = 9;

let nilesh = pnkaj > bharat; //ans false
let pritesh = pnkaj === bharat; //ans false
console.log(nilesh&&pritesh);


// *************************

// ***||***(or or opt)
// (true || true) //ans true
// (true || false) //ans true
// (false || true) //ans true
// (false || false) //ans false

let pnkaj1 = 19;
let bharat1 = 9;

let nilesh1 = pnkaj1 > bharat1; //ans true
let pritesh1 = pnkaj1 === bharat1; //ans false
console.log(nilesh1 || pritesh1);
//-----------------------------------

//***!***(Not) (use the bracket before using not operator)
let x=5;
let z=6;

console.log(x<z);//true
console.log(!(x<z))//false