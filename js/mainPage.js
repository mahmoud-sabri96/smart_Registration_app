var WelcomeOutput = document.querySelector(".output");
var UserNameLogin = JSON.parse(localStorage.getItem("USER_IS_LOGIN"));
if (!localStorage.getItem("USER_IS_LOGIN")) {
    let loginPath = location.href.slice(0, location.href.lastIndexOf("/")) + "/index.html";
    location.replace(`${loginPath}`);
} else {
    WelcomeOutput.innerHTML = `Welcome ${UserNameLogin}`;
}
function logout() {
    localStorage.removeItem("USER_IS_LOGIN");
    let loginPath = location.href.slice(0, location.href.lastIndexOf("/")) + "/index.html";
    location.replace(`${loginPath}`);
}

