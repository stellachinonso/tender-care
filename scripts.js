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
