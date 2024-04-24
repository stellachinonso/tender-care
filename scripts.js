document
  .getElementById("registrationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(event.target);

    // Convert formData to JSON object
    const jsonObject = {};
    formData.forEach(function (value, key) {
      jsonObject[key] = value;
    });
    console.log(jsonObject);
    // Send form data using Axios
    axios
      .post("https://development-tracker.onrender.com/signup", jsonObject)
      .then((response) => {
        console.log("Response:", response.data);
        // Handle success
        swal({
          title: "Good job!",
          text: "Registration Successful!",
          icon: "success",
          button: "Close",
        }).then(function () {
          location.reload();
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  });

//login script here
//Login
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(password);

    axios
      .post("https://development-tracker.onrender.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.error === "email_not_found") {
          errorMessage.innerText = "email not found please sign up";
        }
        window.location.assign("./home/index.html");
        // document.getElementById("userName").textContent = data.name;
        // document.getElementById("welcomeMessage").style.display = "block";
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  });
