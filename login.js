document.addEventListener("DOMContentLoaded", function () {

  //Auto fill remenered username
  const savedUsername = localStorage.getItem("remeberUsernmae");
  if (savedUsername) {
    document.getElementById("username").value = savedUsername;
    document.getElementById("rememberMe").checked = true;
  }

  //Show/Hide password
  document
    .getElementById("togglePassword")
    .addEventListener("change", function () {
      const passwordInput = document.getElementById("password");
      passwordInput.type = this.checked ? "text" : "password";
    });

  //Handle form submission
  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const correctUsername = "Mzala@24";
    const correctPassword = "MeOnly03";
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const remember = document.getElementById("rememberMe").checked;

    if (username == correctUsername && password == correctPassword) {
      if (remember) {
        localStorage.setItem("rememberedUsername", username);
      } else {
        localStorage.removeItem("rememberedUsername");
      }
      //Redirect to dashboard
      window.location.href = "homepg.html";
    } else {
      document.getElementById("message").style.color = "red";
      document.getElementById("message").textContent = "Invalid credntials";
    }
  });
});
