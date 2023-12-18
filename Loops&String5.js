//Loops

//1) For Loop

//Print 1 to 5 "Apna College"
for(let count=1; count <= 5; count++){
    console.log("Apna College");
}

//Calculate sum of 1 to 5;
let sum = 0;

for(let i=1; i <= 5; i++ ){
    sum = sum+i;
}
console.log(sum); //ans 15

//Print i 5 time
for(let i=1; i <= 5; i++){
    console.log("i =",i);
}

console.log(i); //i is not defined at **error**

for(var i=1; i <= 5; i++){
    console.log("i =",i);
}

console.log(i); //ans 6

//-----------------------------------------------------------------

//2) While Loop

//While loop initlization loop ke bhar krte hai updation looop ke antar and stop conditon while lkhne ke bad

//Syntax "while loop"
// let i = "intilize"
// while(stopping condition){
//     Updating condition
// }

let k =1;
while(k <= 10){
    console.log("Shila ki javani");
    k++;
}

//----------------------

//3) Do while loop (Agar aapko condition ak bar run krna ho to use "Do While loop")

//While Loop
let k1 =1;
while(k1 <= 10){
    console.log("Shila ki javani");
    k1++;
}
//ans 

   //Diferent between While loop & Do while loop

//Do while Loop
let s = 20;
do{
    console.log("Apna College");
    s++;
}while(s <= 10);
//ans Apna College
//----------------------------------------

//5) For-of Loop (Use only "String" || "Array")

//i)Print single word
let str = "Apna college";

for(let i of str){
    console.log(i);
}

//ans A
//    P
//    N
//    A

//    C 
//    O
//    L 
//    L 
//    E 
//    G  
//    E

// ii) Check size of letter

let str2 = "IronMan"

let size = 0;

for(let i2 of str2){
    console.log(i2);
    size++;
}

console.log(size); //ans 7








