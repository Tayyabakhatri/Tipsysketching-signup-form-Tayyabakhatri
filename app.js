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
        Swal.fire({
            title: "you are trying to submit empty field",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
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
    let timerInterval;
    Swal.fire({
        // title: "Auto close alert!",
        html: "Registring your data",
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
        }
    }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
    name.value = "";
    email.value = "";
    passward.value = "";
    setTimeout(()=>{
        location.href = "login.html"
    },3000)
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
            Swal.fire({
                title: "welcome to our mystry!",
                // text: "You clicked the button!",
                icon: "success"
              });
            userFound = true
            break;
        }
    }
    if (!userFound) {
        alert("welcom new user")
    }

})
var img = document.getElementById("loginimg")
img.addEventListener('click', () => {
    location.href = "index.html"
})




