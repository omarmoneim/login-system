
let userEmail = document.querySelector("#useremail");
let userPassword = document.querySelector("#userpassword");
let loginBtn = document.querySelector("#loginbtn");




let emailError = document.querySelector("#userEmailAlert");
let passwordError = document.querySelector("#userPasswordAlert");

//^ flags
let isUserNameValid = false;
let isUserEmailValid = false;
let isUserPasswordValid = false;


let userArray=[];
if(localStorage.getItem("users")){

 userArray = JSON.parse(localStorage.getItem("users"));
}

loginBtn.addEventListener("click" , function(){
    logIn()
})

function logIn() {

  if (loginCheck()) {
    window.location.href="pages/home.html"

  }
  else{
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "This Email Isn't Existed , Check Your Email And Password Or Create A New Email !",
});
  }
}

function loginCheck() {
  
  for (let i = 0; i < userArray.length; i++) {

    console.log(userArray.length)
    if ( userEmail.value === userArray[i].email   &&  userPassword.value === userArray[i].password  ) {
      localStorage.setItem("username",userArray[i].name)
      return true;
     
    }
   
  }
  return false; 
}








userEmail.addEventListener("input", function () {
  validateEmail();
  validate();
});

function validateEmail() {
  let userEmailRegex = /^[\w]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (userEmailRegex.test(userEmail.value) === true) {
    userEmail.classList.add("is-valid");
    userEmail.classList.remove("is-invalid");
    emailError.classList.add("d-none");

    isUserEmailValid = true;
  } else {
    userEmail.classList.remove("is-valid");
    userEmail.classList.add("is-invalid");
    emailError.classList.remove("d-none");

    isUserEmailValid = false;
  }
}

userPassword.addEventListener("input", function () {
  validatePassword();
  validate();
});

function validatePassword() {
  let userPasswordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*+#?&()])[A-Za-z\d@$!%*+#?&()]{8,}$/;
  if (userPasswordRegex.test(userPassword.value) === true) {
    userPassword.classList.add("is-valid");
    userPassword.classList.remove("is-invalid");
    passwordError.classList.add("d-none");
    isUserPasswordValid = true;
  } else {
    userPassword.classList.remove("is-valid");
    userPassword.classList.add("is-invalid");
    passwordError.classList.remove("d-none");
    isUserPasswordValid = false;
  }
}

function validate() {
  if (isUserEmailValid && isUserPasswordValid) {
    loginBtn.classList.remove("disabled");
  } else {
    loginBtn.classList.add("disabled");
  }
}
