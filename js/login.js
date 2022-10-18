
// ===========>>> Login Variables (Getting Dom) <<<<===========
var emailInputDom = document.getElementById("uEmail");
var passwordInputDom = document.getElementById("uPasssword");
var warningMsg = document.querySelector("p.message");
let showPasswordIcon = document.querySelector("span.login_icon ");


// ### Checking localStorage ###
let allUsers;
if (localStorage.getItem("USERS_DATA")) {
    allUsers = JSON.parse(localStorage.getItem("USERS_DATA"));
} else {
    allUsers = [];
}

// ### showPassword Action ###/
showPasswordIcon.addEventListener("click", showPassword)


//==================================>>>>@@ Login Feature @@<<<<===============================
function login() {
    // step of check Validation
    checkValidation();

    if (validation) {

        if (allUsers.length) {
            let userIsExist;
            for (let i = 0; i < allUsers.length; i++) {
                if (emailInputDom.value === allUsers[i].u_email && passwordInputDom.value === allUsers[i].u_password) {
                    userIsExist = true;
                    localStorage.setItem("USER_IS_LOGIN", JSON.stringify(allUsers[i].u_name))
                    break;
                } else {
                    userIsExist = false;
                    // warningMsg.innerHTML = "";
                }
            };

            if (userIsExist == true) {
                location.replace("../ourPage.html")
            }
            else {
                alert("Please Register First Before Login !")
                warningMsg.innerHTML = "";
            };

        } else {
            alert("Please Register First Before Login !")
            warningMsg.innerHTML = "";
        }
    }
};

//==================================>>>>@@ Validation Feature @@<<<<===============================

// #### validation Pattern ###
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexPassword = /^.{3,20}$/;

// The Implementation Of Function which Check Validation  
let validation;
function checkValidation() {
    let emailIsValid = regexEmail.test(emailInputDom.value);
    let passwordIsValid = regexPassword.test(passwordInputDom.value);

    //>>>>>>> Start Validation Cases <<<<<<<<<
    if (emailInputDom.value === "" || passwordInputDom.value === "") {
        warningMsg.classList.replace("text-success", "text-danger");
        warningMsg.innerHTML = "All Input Are Required"
    }

    if (emailIsValid && passwordIsValid) {
        warningMsg.classList.replace("text-danger", "text-success");
        warningMsg.innerHTML = "Success";
        return validation = true;
    }


    if (emailIsValid == true && passwordIsValid == false) {
        warningMsg.classList.replace("text-success", "text-danger");
        warningMsg.innerHTML = "Please Check Your Password Input"
    }

    if (emailIsValid == false && passwordIsValid == true) {
        warningMsg.innerHTML = "Please Check Your Email Input";
    }

    if (emailInputDom.value !== '' && passwordInputDom.value !== '') {
        if (emailIsValid == false && passwordIsValid == false) {
            warningMsg.classList.replace("text-success", "text-danger");
            warningMsg.innerHTML = "Please Check Your Email & Password Input"
        }
    }
    //>>>>>>> End Validation Cases <<<<<<<<<
};




// The Implementation Of Function which Toggle Showing Validation 
function showPassword() {
    if (passwordInputDom.type === "password") {
        showPasswordIcon.firstChild.classList.replace("fa-eye-slash", "fa-eye");
        passwordInputDom.type = "text";
    } else if (passwordInputDom.type === "text") {
        showPasswordIcon.firstChild.classList.replace("fa-eye", "fa-eye-slash");
        passwordInputDom.type = "password";
    }
}

// The Implementation Of Function which Clear the Input
function clearInputs() {
    passwordInputDom.value = "";
    emailInputDom.value = "";
};
