//index file functionalities
var mainSignUp = document.getElementById("singup")
mainSignUp && mainSignUp.addEventListener('click', () => {
    location.href = "signup.html"
})
var mainLogIn = document.getElementById("singin")
//login button functions
mainLogIn && mainLogIn.addEventListener('click', () => {
    location.href = "login.html"
})
//index file functionalities finished


//signuppage button funstion
// var usersArr = []
var signupPage = document.getElementById("signUpbtn")
signupPage && signupPage.addEventListener('click', () => {
    
    var name = document.getElementById("signup-name");
    var email = document.getElementById("signup-email");
    var passward = document.getElementById("signup-passward");
    if (!name.value || !email.value || !passward.value) {
        alert("you are trying to register empty fields")
        return;
    }
    var obj = {
        userName: name.value,
        userEmail: email.value,
        userPassward: passward.value
    }
    var users = JSON.parse(localStorage.getItem("userData")) || []
    users.push(obj);
    localStorage.setItem('userData', JSON.stringify(users));
    // Show success notification
    alert("registered successfully ")
    name.value = "";
    email.value = "";
    passward.value = "";
  location.href = "login.html"
})
//signuppage button funstion finished

//login Page functionalities 
var loginPage = document.getElementById("loginbtn")
loginPage && loginPage.addEventListener('click', () => {
    var users = JSON.parse(localStorage.getItem("userData"))
    var loginEmail = document.getElementById("loginEmail")
    var loginPassward = document.getElementById("loginPassward")
    var userFound = false
    for (var user of users) {
        if (user.userEmail == loginEmail.value && user.userPassward == loginPassward.value) {
            alert("welcom back")
            userFound = true
            break;
        }
    }
    if (!userFound) {
       alert("welcom new user")
    }

})






