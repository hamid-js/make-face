
const monsterTail = document.querySelector(".monster-tail");
const monsterHorns = document.querySelector(".monster-horns");
const monsterBody = document.querySelector(".monster-body");
const monsterFace = document.querySelector("#face");
const myRoot = document.querySelector(":root");

const tailBtn = document.getElementById("tail-btn");
const hornsBtn = document.getElementById("horns-btn");
const colorBtn = document.getElementById("color-btn");
const faceBtn = document.getElementById("face-btn");

let counter = 0;


let colors = [
    "#a8d530",
    "#42aaff",
    "#f3d55b",
    "#ff4f51",
    "#904ae8",
    "#ffa711",
   

]

let colors2 = [ ...colors, "transparent" ]


let images = [
    "./face-0.png",
    "./face-1.png",
    "./face-2.png",
    "./face-3.png",
    "./face-4.png",
    "./face-5.png",
    

]


const faceBtnMaker = () => {
    
   if( counter >= images.length -1 ){
    counter = -1;
   }{
    counter++
   
   }
   
    monsterFace.src= images[counter]
}
const colorBtnMaker = () => {
    
    if( counter >= colors.length -1 ){
     counter = -1;
    }{
     counter++
    
    }
    
    
    myRoot.style.setProperty("--color-character", colors[counter] ) 
}

const tailBtnMaker = () => {
    if( counter >= colors2.length -1 ){
        counter = -1;
       }{
        counter++
       
       }
       
       
       myRoot.style.setProperty("--color-tail", colors2[counter] ) 
}


const hornsBtnMaker = () => {
    if( counter >= colors2.length -1 ){
        counter = -1;
       }{
        counter++
       
       }
       
       
       myRoot.style.setProperty("--color-horns", colors2[counter] ) 
}



tailBtn.addEventListener("click",tailBtnMaker);

hornsBtn.addEventListener("click",hornsBtnMaker);

colorBtn.addEventListener("click",colorBtnMaker);

faceBtn.addEventListener("click",faceBtnMaker);





