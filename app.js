let button = document.querySelector("#bbb");
let flag = document.querySelector("#JS-inner-button");


button.addEventListener("click", show);

function show(){  
    console.log("dodalem");
    if(flag.classList.contains("none")){
        flag.classList.remove("none");
        console.log("drugi klik");
    }
    else{       
        flag.classList.add("none");
        console.log("pierwszy klik");
    }
}