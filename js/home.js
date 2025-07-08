// let userArray = JSON.parse(localStorage.getItem("users"));
let userName = localStorage.getItem("username")
// console.log(userName);
let logOut = document.querySelector("#logout")

let welcomeMsg = document.querySelector("#welcomeMsg");

welcomeMsg.textContent=`Welcome ${userName}` ;

logOut.addEventListener("click" , returnHome)
    
    
    
    
    
    function returnHome(){
    window.location.href='../index.html'
    localStorage.removeItem("username")
}

