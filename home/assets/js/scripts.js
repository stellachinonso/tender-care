document.getElementById("logoutBtn").addEventListener("click", function () {
  // Send a request to the server to logout
  fetch("/logout", {
    method: "POST",
    credentials: "same-origin", // Include cookies in the request if using sessions
  })
    .then((response) => {
      if (response.ok) {
        // Redirect to login page after successful logout
        window.location.assign("/login.html");
      } else {
        console.error("Logout failed");
      }
    })
    .catch((error) => console.error("Error:", error));
});
