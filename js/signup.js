let userName = document.querySelector("#username");
let userEmail = document.querySelector("#useremail");
let userPassword = document.querySelector("#userpassword");
let signupButton = document.querySelector("#signupBtn");

let nameError = document.querySelector("#userNameAlert");
let emailError = document.querySelector("#userEmailAlert");
let passwordError = document.querySelector("#userPasswordAlert");


//^ flags 
let isUserNameValid = false;
let isUserEmailValid = false;
let isUserPasswordValid = false;

let userArray = [];

if (localStorage.getItem("users")) {
  userArray = JSON.parse(localStorage.getItem("users"));
}

//??????????????????????????????????????????? sign up Event and Function ???????????????????????????????
signupButton.addEventListener("click", function () {
  signUP();
});
function signUP() {

  if(isExisted()){
  Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "This email is already existed , try another one !",
});

  }
  else{

  let user = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value,
  };
  userArray.push(user);
  localStorage.setItem("users", JSON.stringify(userArray));
  Swal.fire({
  position: "center",
  icon: "success",
  title: "Signed Up Successfully ",
  showConfirmButton: false,
  timer: 4500
}); window.location.href="../index.html"
  }
}


//??????????????????????????????????????????? sign up Event and Function ???????????????????????????????

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& check is  existed &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
function  isExisted(){
  for(let i =0 ; i< userArray.length ; i++){
    if(userEmail.value === userArray[i].email){

      return true;
    }else{
      return false;
    }
  }
}

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& check is  existed &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Validation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
userName.addEventListener("input", function () {
  validateName();
  validate();
});
function validateName() {
  let userNameRegex = /^[a-zA-Z]{3,20}$/;
  if (userNameRegex.test(userName.value) === true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    nameError.classList.add("d-none");

    isUserNameValid = true;
    console.log(isUserNameValid);
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    nameError.classList.remove("d-none");

    isUserNameValid = false;
  }
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
  if (isUserNameValid && isUserEmailValid && isUserPasswordValid) {
    signupButton.classList.remove("disabled");
  } else {
    signupButton.classList.add("disabled");
  }
}

//! !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Validation!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
