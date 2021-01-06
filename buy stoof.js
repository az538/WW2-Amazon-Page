let totalMoney = 100000000;
let selector1 = 0;
let selector2 = 0;
let selector3 = 0;
let selector4 = 0;  

let amountTiger2 = 0;
let amountTiger1 = 0;
let amountmaus = 0;
let amountVk = 0;
let subTotal = 0;
document.getElementById("balance").innerHTML = totalMoney;

document.getElementsByClassName("element2").innerHTML = subTotal;


    
  function buyTiger2(){
    subTotal = subTotal + 4400000
selector1++
    document.getElementById("element2").innerHTML = subTotal;
    
}


function buyvk100(){
  subTotal = subTotal + 6000000
  selector2++
document.getElementById("element2").innerHTML = subTotal;
}


function buyTiger1(){
  subTotal = subTotal + 4282051
 selector3++
document.getElementById("element2").innerHTML = subTotal;
}


function buyMaus(){
  subTotal = subTotal + 9000000
 selector4++
  document.getElementById("element2").innerHTML = subTotal;  
}  

function yodaDrinkingVodka(){
  if(subTotal > totalMoney){
    alert("not enough money")
  }
  else{
    totalMoney = totalMoney - subTotal;
    document.getElementById("balance").innerHTML = totalMoney;
    subTotal = 0
 amountmaus = selector4
 amountTiger1 = selector3
 amountTiger2 = selector1
 amountVk = selector2
    document.getElementById("element2").innerHTML = 0;  
    document.getElementById("numberOfMice").innerHTML = amountmaus;
    document.getElementById("numberOfTiger1").innerHTML = amountTiger1;
    document.getElementById("numberOfTiger2").innerHTML = amountTiger2;
    document.getElementById("numberOfVK100").innerHTML = amountVk;
  }
}
function clearCart(){
  subTotal = 0
  selector4 = 0
  selector3 = 0
  selector1 = 0
  selector2 = 0
  document.getElementById("element2").innerHTML = subTotal;

}





function HACKcode(){
  let TONSMONEY = document.getElementById("CODE").value;
  console.log(TONSMONEY)
  if(TONSMONEY == "Polish Cow"){
    totalMoney = totalMoney + 10000000000000000000;
    document.getElementById("balance").innerHTML = totalMoney;
  }
  else{
    alert("wrong code")
  }
}




