const body=document.querySelector("body");
const left_input=document.querySelector(".left-input");
const right_input=document.querySelector(".right-input");
const CSSOutput=document.querySelector(".css-outputs");

//getting colors
let leftColor=left_input.value;

let rightColor=right_input.value;

let changeBackground=()=>{
    leftColor=left_input.value;
    rightColor=right_input.value;
    let stringChanged=`linear-gradient(to right,${leftColor},${rightColor})`;
    body.style.backgroundImage=stringChanged;
    CSSOutput.textContent=`background-image: ${stringChanged};`;
}

left_input.addEventListener("input",e=>{
    changeBackground();
});

right_input.addEventListener("input",e=>{
    changeBackground();
});

//generating random background
const button=document.querySelector(".button");

let randomColor=()=>{
let values="0123456789abcdef";
let color="#";

for(let i=0;i<6;i++){
    let randomIndex=Math.floor((Math.random()*100)%16);
    color+=values[randomIndex];
}
return color;
}

button.addEventListener("click",e=>{
    left_input.value=randomColor();
    right_input.value=randomColor();

    changeBackground();

});