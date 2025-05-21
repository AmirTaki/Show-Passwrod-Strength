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
    if (value == 0){
         pass.style.borderColor = "#ccc"
    }
    else if (value < 4){
        str.innerHTML = "weak"
        pass.style.borderColor = '#ff5925'
        msg.style.color = '#ff5925'
    }
    else if  (value >= 4 && value< 8){
        str.innerHTML = 'medum'
        pass.style.borderColor = 'yellow'
        msg.style.color = 'yellow'
    }
    else if (value >= 8) {
        str.innerHTML = "strong"
        pass.style.borderColor = '#26d730'
        msg.style.color = '#26d730'
    }
}

pass.addEventListener("input", ()=> {

   change(pass.value.length)
})




change(pass.value.length)