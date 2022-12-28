let string = "";
let result = document.querySelector("input");
for(let i = 0; i<document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click",function(e){
        console.log(e.target.innerHTML);
        document.querySelector("h1").classList.remove("blink");
        if(e.target.innerHTML == "="){
            result.value = eval(string);
        }
        else if(e.target.innerHTML == "C"){
            string = "";
            result.value = string;
        }
        else if(e.target.innerHTML =="%"){
            string = Number(string)/100;
            result.value = string;
        }
        else{
            string = string+e.target.innerHTML;
            result.value = string;
        }
    });
}
