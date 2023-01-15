var btn1 = document.querySelector("#increseSize");
var btn2 = document.querySelector("#decreaseSize");
var txt = document.querySelector("#userText");


function clickHandler1(){
    // var computedFontSize = window.getComputedStyle(document.getElementById("userText")).fontSize;
    // console.log(computedFontSize);
    // var newFontSize = ((parseFloat(computedFontSize))+2).toString();
    // // // newFontSize=newFontSize.toString();
    // // var newfontSize2 = newFontSize.concat("px");
    // console.log(newFontSize2);
    // window.getComputedStyle(document.getElementById("userText")).fontSize = newFontSize2;
    var currentFontSize=window.getComputedStyle(document.getElementById("userText")).fontSize;
    console.log((parseFloat(currentFontSize))+2);
    document.getElementById("userText").fontSize=(parseFloat(currentFontSize))+2;
}

function clickHandler2(){
    console.log("funct2 excec.");
}

btn1.addEventListener("click",clickHandler1);
btn2.addEventListener("click",clickHandler2); 