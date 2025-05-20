
function calc(){
    var sft=document.getElementById("input")
    var floor=document.getElementById("input2")
var sftvalue=Number(sft.value)
var floorvalue=Number(floor.value)
var price=1400;

var display=document.getElementById("price")
if(floorvalue==0){
    display.textContent="Enter no of floors"
}
 else{var budget=sftvalue*floorvalue*price
display.textContent="Rs "+budget+"/-"}   
}