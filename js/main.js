


let num1= document.getElementById('num1');
let num2= document.getElementById('num2');
let num3= document.getElementById('num3');
let total= document.getElementById('total');
let total2= document.getElementById('total2');

let total3= document.getElementById('total3');
let prixtotal = document.getElementById('prixtotal')



function getTotal(){
    
  if(num1.value != ''){
   
    let result = (+num1.value * 225);
    total.innerHTML= result;
    prixtotal.innerHTML= result
  }
}
function getTotal2(){
    
  if(num2.value != ''){
   
    let result2 = (+num2.value * 189);
    total2.innerHTML= result2;
    
  }
}
function getTotal3(){
    
  if(num3.value != ''){
   
    let result3 = (+num3.value * 129);
    total3.innerHTML= result3;
   
    
  }
  }
  function prix(){
    
    
     
      let result4 = ((+num1.value * 225) + (+num2.value * 189) + (+num3.value * 129) );
      
      prixtotal.innerHTML= result4 ;
      
    
    }
 