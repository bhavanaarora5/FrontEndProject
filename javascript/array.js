const prompt = require("prompt-sync")(); //for prompt to work

let ary=["bh","ar","bh@gmail.com",22,true];
console.log(ary);
console.log(ary[0]);

let ary1=[10,20,30,40];
console.log(ary1.length);


for(a=0; a<ary1.length; a++)
{
    console.log(ary1[a]);
}
//display array values in list

let ary2=[10,20,30,40,50,60];
console.log(ary2.length);
console.log("<ul>");
for(a=0; a<ary2.length; a++)
{
    console.log("<li>" + ary2[a] + "</li>");
}
console.log("</ul>");



// Add the array values

let ar=[10,20,30,40,50];
let sum=0;

for(i=0;i<ar.length;i++)
{
    console.log(ar[i]);
    sum +=ar[i];

}
console.log(sum);
console.log(`sum of array is: ${sum} !`);

let num=[];
num[0]=1;
num[1]=2;
num[2]=3;

console.log(num);

num=new Array(10,20,30);
console.log(num);