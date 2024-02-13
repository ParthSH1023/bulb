let bulb = document.getElementById('bulb')
let btn = document.getElementById('btn')

btn.addEventListener('click',toggleBtn)
function toggleBtn(){
    if(btn.textContent.includes('On')){
        bulb.src = "./Images/BulbON.jpg"
        btn.innerHTML = "Turn Off Light"
    }
    else {
        bulb.src = "./Images/BulbOFF.jpg"
        btn.innerHTML = "Turn On Light"
    }
}

// var myName = "parth"
// // String Method
// console.log(myName.include('parth')) // prnit true if tere otherwise false 
 // { https://github.com/AmarRajanMishra }