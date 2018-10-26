var val1,val2,result;

function setValue(){
x = Number(document.getElementById("x").value);
y = Number(document.getElementById("y").value);

}
function sum(){
   setValue() ;
   result = x + y;
   alert( "The sum is equal to "+ result);
}
function diff(){
   setValue() ;
   result = x - y;
   alert( "The difference is equal to "+ result);
}
function mult(){
   setValue();
   result = x * y;
   alert( "The sum is equal to "+ result);
}
function divd(){
   setValue();
   result = x / y;
   alert( "The sum is equal to "+ result);
}
function pow(){
   setValue();
   result = Math.pow(x,y);
   alert( "The result is equal to "+ result);
}