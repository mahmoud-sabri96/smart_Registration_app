var WelcomeOutput = document.querySelector(".output");
var UserNameLogin = JSON.parse(localStorage.getItem("USER_IS_LOGIN"));
if (!localStorage.getItem("USER_IS_LOGIN")) {
    location.pathname = "../index.html"
} else {
    WelcomeOutput.innerHTML = `Welcome ${UserNameLogin}`;
}
function logout() {
    localStorage.removeItem("USER_IS_LOGIN");
    location.pathname = "../index.html"
}

