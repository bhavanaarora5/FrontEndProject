const prompt = require("prompt-sync")(); //for prompt to work

// Array methods
//tostring() convert into string

let fruits = ["banana","mango","orange","apple"];
console.log(fruits);
console.log(fruits.toString());

//join() similar to toString but can define separator

console.log(fruits.join("|"));

// pop() removes last item from an array

console.log(fruits.pop());

// push method adds new value in the end to an array
// it returns the new index length
console.log(fruits.push("kiwi"));

//shift method removes the first array and shift other element to lower index

console.log(fruits.shift());

//unshift() add new value in the begining and unshifts older elements:
//It returns the new array length
console.log(fruits.unshift("Lemon"));

fruits[0]="kiwi"
console.log(fruits);

fruits[fruits.length]="lemon";
console.log(fruits);
console.log(fruits.pop());
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.push("lemon"));
console.log(fruits);
fruits[fruits.length]="cherry";
console.log(fruits);
fruits[1]="banana";
console.log(fruits);

//merging or concatenating array
// it always returns the new array

let arr1 = ["ab","bc","cd"];
let arr2 = ["ef","gh","ij","kl"];
let arr3= arr1.concat(arr2);
console.log(arr3);

arr3 = arr1.concat("peter");
console.log(arr3);



let fruits1=["banana","apple","orange","kiwi"];
console.log(fruits1);
fruits1.splice(2,0,"lemon","kiwi");
console.log(fruits1);
fruits1.splice(2,1,"banana");
console.log(fruits1);

//splice to remove elements
fruits1.splice(0,1);
console.log(fruits1);

//slice elements

 fruits1=fruits1.slice(2,4);
 console.log(fruits1);


 //sort() sorts an array alphabetically

 console.log(fruits);
 console.log(fruits.sort());

 //reverse() sort an array in descending order

 console.log(fruits.reverse());

 //sort number value in ascending order

 let points=[10,30,20,1,5,40];
 points.sort(function(a,b)
 {
 return a - b

 })
console.log(points);


//sort array in random number
points.sort(function()
{
    return 0.5 - Math.random();

}
)
console.log(points);

//Fisher yates Method
points=[40,100,1,5,25,10];
function myfunc(inpoints)
{
for(let i=points.length-1;i > 0; i--)
{
    let j=Math.floor(Math.random() * (i+1));
    let k=points[i];
    points[i]=points[j];
    points[j]=k;
    
}
console.log(points);
}
myfunc(points);

//highest array value
//points 0 contains the lowest array value
//points .length-1 contains the highest array value
points=[40,100,1,5,25,10];
points.sort(function(a,b)
{
    return a - b;
})

//sorting descending
points.sort(function(a,b)
{
    return b - a;
});

//math.max()
points=[10,20,40,50,5,60];
function myarray(arr)
{
    return Math.max.apply(null,arr);
}
myarray(points);
console.log(myarray(points));

function myarr(arr)
{
    return Math.min.apply(null,arr);
}

console.log(myarr(points));

//max/min java script method

function myarrMax(arr)
{
  let len = arr.length;
  let max =- Infinity;
  while (len--)
  {
    if (arr[len] > max)
    {
        max=arr[len];
    }
  }
  return max;
}

console.log(myarrMax(points));

function myarrMin(arr)
{
    let len=arr.length;
    let min= Infinity;
    while(len--)
    {
        if(arr[len] < min)
        {
            min = arr[len];

        }
    }
    return min;

}
console.log(myarrMin(points));


//sorting object

let cars=[
    {type:"volvo",year:2016},
    {type:"Saab",year:2001},
    {type:"BMW",year:2010},
];

function myfunction()
{
    cars.sort(function(a,b){
        let x=a.type.toLowerCase();
        let y= b.type.toLowerCase();
        if (x < y)
        {return -1;}
        if (x > y){return 1;}
        return 0;

        })

    }





