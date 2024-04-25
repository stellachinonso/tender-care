//login script here
//Login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    axios
      .post("https://development-tracker.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.error === "email_not_found") {
          const errorMessage = document.getElementById("error-message");
          errorMessage.innerText = "Email not found. Please sign up.";
          errorMessage.style.display = "block";
        } else {
          window.location.assign("./home/home.html");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        const errorMessage = document.getElementById("error-message");
        errorMessage.innerText = "An error occurred. Please try again later.";
        errorMessage.style.display = "block";
      });
  });

//Privacy Modal
