var pass = document.querySelector('input')
var msg = document.getElementById("message")
var str = document.getElementById("strenght")


const change = (value) => {
        if ( value > 0){
        msg.style.display = 'block'
    }
    else {
        msg.style.display  = 'none'
    }
    if (value < 4){
        str.innerHTML = "weak"
        pass.style.borderColor = ''
    }
    else if  (value >= 4 && value< 8){
        str.innerHTML = 'medum'
    }
    else if (value >= 8) {
        str.innerHTML = "strong"
    }
}

pass.addEventListener("input", ()=> {

   change(pass.value.length)
})




change(pass.value.length)