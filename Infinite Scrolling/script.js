let container = document.getElementById("container");


function loadElement(num = 25){
    let i = 0;
    while(i < num){
        let masai = document.createElement("div");
        masai.innerHTML= "Masai School";
        
        container.appendChild(masai);
        i++;
    }
}

loadElement();


window.addEventListener("scroll",()=>{

    if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
        loadElement();
    }

})