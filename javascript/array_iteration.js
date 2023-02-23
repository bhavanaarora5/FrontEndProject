const prompt = require("prompt-sync")(); //for prompt to work

//forEach()
let numbers=[45,4,9,16,25];
let text = "";
numbers.forEach(myfunction);

function myfunction(value,index,array)
{
text=text + value 
}
console.log(text);

//map
numbers=[45,4,9,16,25];
let numbers2=numbers.map(func2);

function func2(value,index,array){
    return value * 2;

}
console.log(numbers2);

let ary2=[
    {fname:"rita",lname:"gupta"},
    {fname:"anuj",lname:"sharma"},
    {fname:"kiran",lname:"verma"}
];

function fullname(arr){
    return arr.fname + " " + arr.lname;

}

let c=ary2.map(fullname);

console.log(c);

//filter

numbers=[45,4,9,16,25];
let age = numbers.filter(func3);

function func3(value,index,array)
{
    return value > 18;

}

console.log(age);

//reduce

let sum = numbers.reduce(func4);
function func4(total,value,index,array)
{
    return total+value;
    
}

console.log(sum);

sum=numbers.reduce(func4 , 100);
function func4(total,value)
{
  return total + value;
}
console.log(sum);

//reduceRight it works on each array element to produce a single value


sum=numbers.reduceRight(func4);
function func4(total,value)
{
  return total + value;
}
console.log(sum);

//every return true or false
//checks if every  array values passes test


numbers=[45,4,9,16,25];
 age=numbers.every(func5);

 function func5(value,index,array){
    return value > 18;
 }
 console.log(age)

 //some checks if some array values passes test

 age=numbers.some(func6);

 function func6(value,index,array){
    return value > 18;

 }
 console.log(age);

 //indexOf
  let fruits = ["Apple","Banana","orange","cherry"];
  let position = fruits.indexOf("Apple");

  console.log(position);

  //lastIndexOf return the positon of last occurance 

  fruits = ["apple","orange","mango","cherry"];
  position = fruits.lastIndexOf("cherry") ;
  console.log(position);

  numbers = [2,40,20,5,12,18];

  //find  returns the position of first occurance of search
  first=numbers.find(func7);
  function func7(value,index,array){
    return value > 18;
  }
  console.log(first);


  //findIndex
  position = numbers.findIndex(func8);

  function func8(value,index,array)
  {
    return value > 18;
  }
  console.log(position);