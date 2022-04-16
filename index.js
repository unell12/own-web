const d = document.querySelector("#d")

var a = 0;
d.addEventListener("click", ()=> {
    a++; 
    tx = d.innerText;
    switch(a){
        case 1:
            d.innerText = "whats up?"
            break;
        case 2:
            d.innerText = "whats up??"
            break;
        case 3:
            d.innerText = "why?";
            break;
        case 24:
            d.innerText = "아 어쩌라고!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
            break
        default:
            d.innerText = "why" + ("?".repeat(a))
            break
    }
})