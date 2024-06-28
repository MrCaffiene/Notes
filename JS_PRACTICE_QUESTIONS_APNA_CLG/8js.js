// QUESTION - create a button to toggle between dark and light mode
let mode = true;
let toggle = document.querySelector("#toggle");
console.log(mode);
console.log(toggle);
toggle.addEventListener("click",(e)=>{
    console.log("button was clicked.");
    if(mode){
        console.log("mode is true");
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
        mode = false;
    }
    else{
        console.log("mode is false");
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
        mode=true;
    }
})
