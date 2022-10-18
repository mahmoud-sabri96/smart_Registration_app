// ===========>>> Signup Variables (Getting Dom) <<<<===========
let nameRegsInput = document.getElementById("nameRegs");
let emailRegsInput = document.getElementById("emailRegs");
let passwordRegsInput = document.getElementById("passwordRegs");
let emailWarningMsg = document.querySelector(".emailMsg")
let showPasswordIcon = document.querySelector("span.signUp_icon ");
let warningMsg = document.querySelector(".message");


// ### Checking localStorage ###
let allUsers;
if (localStorage.getItem("USERS_DATA")) {
    allUsers = JSON.parse(localStorage.getItem("USERS_DATA"));
} else {
    allUsers = [];
}

// ### showPassword Action ###/
showPasswordIcon.addEventListener("click", showPassword)


//==================================>>>>@@ SignUp Feature @@<<<<===============================
function signUp() {
    // step of check Validation and return validiation = true or false
    checkValidation();

    if (validation) {

        if (allUsers.length) {
            let userIsExist;
            for (let i = 0; i < allUsers.length; i++) {
                if (emailRegsInput.value === allUsers[i].u_email) {
                    userIsExist = true;
                    break;
                } else {
                    userIsExist = false
                }
            };

            if (userIsExist == false) {
                createUser();
            }
            else if ((userIsExist == true)) {
                alert("User Email Is used !! Please enter another Email");
                warningMsg.innerHTML = "";
            }
        } else {
            createUser();
        }
    };
};



//==================================>>>>@@ Validation Feature @@<<<<===============================

// #### validation Pattern ###
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let regexPassword = /^.{3,20}$/;


let validation;
function checkValidation() {
    let emailIsValid = regexEmail.test(emailRegsInput.value);
    let passwordIsValid = regexPassword.test(passwordRegsInput.value);

    //>>>>>>> Start Validation Cases <<<<<<<<<
    if (emailIsValid && passwordIsValid && nameRegsInput.value !== '') {
        warningMsg.classList.replace("text-danger", "text-success");
        warningMsg.innerHTML = "Success";
        emailWarningMsg.innerHTML = "";
        return validation = true;
    }

    if (emailRegsInput.value === "" || passwordRegsInput.value === "" || nameRegsInput.value === "") {
        warningMsg.classList.replace("text-success", "text-danger");
        warningMsg.innerHTML = "All Input Are Required"
        emailWarningMsg.innerHTML = "";
    }

    if (emailIsValid == false && passwordIsValid == true && nameRegsInput.value !== "") {
        emailWarningMsg.innerHTML = "Please Check Your Email Input";
        warningMsg.innerHTML = "";
    }

    if (emailIsValid == true && passwordIsValid == false && nameRegsInput.value !== "") {
        emailWarningMsg.innerHTML = "";
        warningMsg.classList.replace("text-success", "text-danger");
        warningMsg.innerHTML = "Please Check Your Password Input"
    }

    if (nameRegsInput.value !== "" && emailIsValid == false && passwordIsValid == false) {
        emailWarningMsg.innerHTML = "";
        warningMsg.classList.replace("text-success", "text-danger");
        warningMsg.innerHTML = "Please Check Your Email Or Password Input"
    }
    //>>>>>>> End Validation Cases <<<<<<<<<

};


// The Implementation Of Function which Toggle Showing Validation 
function showPassword() {
    if (passwordRegsInput.type === "password") {
        showPasswordIcon.firstChild.classList.replace("fa-eye-slash", "fa-eye");
        passwordRegsInput.type = "text";
    } else if (passwordRegsInput.type === "text") {
        showPasswordIcon.firstChild.classList.replace("fa-eye", "fa-eye-slash");
        passwordRegsInput.type = "password";
    }
};

// The Implementation Of Function which Clear the Input
function clearInputs() {
    emailRegsInput.value = "";
    passwordRegsInput.value = "";
    nameRegsInput.value = "";
};

// The Implementation Of Function which Collecting Inputs Values Create User
function createUser() {
    let user = {
        u_name: nameRegsInput.value,
        u_email: emailRegsInput.value,
        u_password: passwordRegsInput.value,
    };

    allUsers.push(user);
    localStorage.setItem("USERS_DATA", JSON.stringify(allUsers))
    clearInputs();
    validation = false;
};
