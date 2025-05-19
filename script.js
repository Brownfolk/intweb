
function calc(){
    var sft=document.getElementById("input")
var sftvalue=Number(sft.value)
var price=1400;
var display=document.getElementById("price")
    var budget=sftvalue*price
display.textContent="Rs "+budget+"/-"
}