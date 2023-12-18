let name ="tony stark";
let age =24;
letTotalPrice =100;
document.write(name);
document.write(age);
document.write(letTotalPrice);

// --------------------------------------------

//Let
let a;
document.write(a);
//ans undefined

// Var use (can't redeclared but vale will be updated)

var ageMale =25;
ageMale =29;

document.write(ageMale);

var fullName="Tony stark";
    fullName="ram lal";

document.write(fullName);

//-----------------------------------------------

// Const use (can't updated value)

const ageFemale =28;
    //   ageFemale =29;

document.write(ageFemale);

const PI = 3.14;
document.write(PI);

// const a;
// document.write(a);
// ans error

// let ageAnimals =15;
// typeof ageAnimals;
//--------------------------------------------------

//BigInt
let x=BigInt("123");
document.write(x);
//---------------------------------------------------

//symobol

let ram=Symbol("Hello!");
// document.write(ram);
//-------------------------------------------------------

//Object use
const student={
    fullName:"Rahul Kumar",
    age :28,
    marks:8.2,
    isPass:true
};
console.log(student);
//Acces particular key or value 
//Two types (object.key || objct["key"])
console.log(student.fullName);
console.log(student["age"]);
console.log(student["isPass"]);

//**How to new value assigned on object
student.age = student.age+1;
console.log(student.age);

student.fullName="Manish kumar"
console.log(student.fullName);

student.isPass =false;
console.log(student.isPass);
//----------------------------------------------------------------

//Practice

const product ={
    name : "Parker",
    price : 270,
    offer :5,
    rating:4,
};
console.log(product);
//particular key access
console.log(product.name);
console.log(product.price);
console.log(product["rating"]);
console.log(product["offer"]);
//New value assigned
// product.name="Trimax";
// console.log(prduct.name);

product.price=product.price+8;
console.log(product.price);

product.name = "trimax";
console.log(product.name);

product.offer = product.offer*2;
console.log(product.offer);

product.rating = product.rating*3;
console.log(product.rating);
//---------------------------------------------------

//Practce 2
const tomatoSoces={
    name:"Catchap",
    veg :true,
    year:1978,
    MRP:1.25,
    Quantity:8,
};

console.log(tomatoSoces);

// new value assigned
tomatoSoces.name="chilliscoce";
console.log(tomatoSoces.name);

tomatoSoces.veg=false;
console.log(tomatoSoces.veg);

tomatoSoces.year=tomatoSoces.year+1;
console.log(tomatoSoces.year);

tomatoSoces.MRP=1.30;
console.log(tomatoSoces.MRP);

tomatoSoces.MRP=tomatoSoces.MRP*2;
console.log(tomatoSoces.MRP);

tomatoSoces.Quantity=tomatoSoces.Quantity*2;
console.log(tomatoSoces.Quantity);
//---------------------------------------------------------

const waterCom={
    Brand:"Bisleri",
    year:1969,
    recyclable:true,
    MRP:20,
    Origin:"India",
}

console.log(waterCom);

waterCom.Brand="acqfina";
console.log(waterCom.Brand);

waterCom.year=waterCom.year+2;
console.log(waterCom.year)

waterCom.Origin="USA";
console.log(waterCom.Origin);

waterCom.MRP=waterCom.MRP*2;
console.log(waterCom.MRP);
//---------------------------------------------------------

const perfum={
    Brand:"Foog",
    Type:"Full Body spray",
    MRP:275,
    year:2023,
    Net_Quantity:150,
}

console.log(perfum);

perfum.Brand="wild stone";
console.log(perfum.Brand);

perfum.Type="only chest";
console.log(perfum.Type);

perfum.MRP=perfum.MRP-5;
console.log(perfum.MRP);

perfum.Net_Quantity=perfum.Net_Quantity*2;
console.log(perfum.Net_Quantity);
//----------------------------------------------------------
