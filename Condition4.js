// Condition State(If statement)
//Voter age
let age =19;

if(age > 18){
    console.log("You can vote");
}
else{
    console.log("You can not vote");
}

//Find Even or Odd
let no=14;

if(no%2==0){
    console.log("even");
}
else{
    console.log("odd");
}

//Dark mode 
let mode ="light";
let color; //(agar value bad me add krna ho to)

if(mode === "dark"){
    color = "black";
}

if(mode === "light"){
    color = "grey";   
}

console.log(color); //ans grey
//---------------------------------------------------------------------

//Else statement
//Dark mode 
let mode1 ="dark";
let color1; //(agar value bad me add krna ho to)(value assigned)

if(mode1 === "dark"){
    color1 = "black";
}
else{
    color1 = "grey";   
}

console.log(color1); //ans black
//------------------------------------------------------------------------

//Else if(check multiple condition at a time)

age =25;

if(age < 18){
    console.log("junior");
}else if(age > 60){
    console.log("senior")
}
else{
    console.log("middle")
}

//50:54

let mode2="dark";
let color2;

if(mode2==="dark"){
    color2="black";
}else if(mode2 ==="blue"){
    color2="blue";
}else if(mode2 === "pink"){
    color2="pink";
}else{
    color2="white";
}

console.log(color2); //ans black

//----------------------------------------------------------

//Ternory Opt(working at 3 operands)

// condition ? true output :false output

//continuded 54:41

let age2 = 17;

let result= age2 >= 18 ? "adult" : "not adult";
//age2 >= 18 ? console.log("adult") :console.log("not adult"); //Method 2 for concole

console.log(result); //ans not adult

//------------------------------------------------------------------------

//Prompt(Use for showing message and giving any input data for users)
// let Rasik =prompt("hi");
// console.log(Rasik);

// let b = prompt("Enter Value");

//Method 1
// if(b%5 === 0){
//     console.log(b,"Is multiple of 5");
// }else{
//     console.log(b,"Is not multiple of 5");
// }

//Method 2

// let c =prompt("Enter number");

// let d =c%3===0 ? "number divded by 3" : "number not divided by 3";
// console.log(d);


//Practice

// let marks =prompt("Enter Your Marks");
// let grade;

// if (marks >= 90 && marks <= 100){
//     grade="A";
//     console.log(grade);
// }else if(marks >= 70 && marks <= 89){
//     grade ="B";
//     console.log(grade);
// }else if(marks >=60 && marks <= 69){
//     grade ="c";
//     console.log(grade);
// }else if(marks >=50 && marks <= 59){
//     grade="d";
//     console.log(grade); 
// }else{
//     grade="Failed"
//     console.log(grade);
// }

// find gratet two number

// let num1 =5; //prompt("Enter Your First Value");
// let num2 =10; //prompt("Enter Your second Value");

// if(num1 > num2) {
//     console.log("It is Big Value");
// }else i=
// else{
//     console.log("num1 === num2")













