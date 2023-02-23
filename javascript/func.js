const prompt = require("prompt-sync")(); //for prompt to work

function sum(a,b){
    document.write(a+b +"<br><br>");
  }

  function concatenate(first,last){

    let full;
    // full=first + last;
    // return full;
    return first + last;
    
  }
  function secondfunc(){
   
    let result;
    result=concatenate('Zara' , 'Ali');
    document.write(result);

  }
  function thirdfunc(x,y){
    let a = prompt("enter first name");
    let b = prompt("enter last name");
    let c = a + b;
    document.write(c);
  }

  function fullname(fname,lname){
    let a=fname+","+lname;
    return a;
    document.write(a);
  }
  let k=fullname('Ram','Kumar');
  document.write(k);
  document.write("<br>");

//task 4
  
function sum1(a,b,c){ 
   
  return a + b + c;  
}


function percentage(){
 
  let result;
  
  result=100*(sum1(50 , 70 ,85)/300);
  
  document.write("Percentage is :" + result + "<br><br>");

}






