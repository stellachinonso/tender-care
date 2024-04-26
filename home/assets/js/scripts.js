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

//AI Response
async function sendMessage() {
  const userEmail = document.getElementById("register_email").value;
  const userFullname = document.getElementById("register_name").value;
  const userDob = document.getElementById("child_dob").value;
  // const userMessage = document.getElementById("user-input").value;
  const responseContainer = document.getElementById("response");

  try {
    const response = await fetch(
      "https://development-tracker.onrender.com/tracker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          fullname: userFullname,
          dob: userDob,
        }),
      }
    );

    const responseData = await response.text();
    responseContainer.innerText = responseData;
  } catch (error) {
    console.error("Error sending message:", error);
    responseContainer.innerText = "Error: Failed to get response from server";
  }
}
//AI response1
async function sendMessage2() {
  const userMessage = document.getElementById("user-input").value;
  const responseContainer = document.getElementById("second-response");

  try {
    const response = await fetch(
      "https://development-tracker.onrender.com/tracker",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage }),
      }
    );

    const responseData = await response.text();
    responseContainer.innerText = responseData;
  } catch (error) {
    console.error("Error sending message:", error);
    responseContainer.innerText = "Error: Failed to get response from server";
  }
}

// //logout
// document.getElementById("logoutBtn").addEventListener("click", function () {
//   // Send a request to the server to logout
//   fetch("/logout", {
//     method: "POST",
//     credentials: "same-origin", // Include cookies in the request if using sessions
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Redirect to login page after successful logout
//         window.location.assign = "/login.html";
//       } else {
//         console.error("Logout failed");
//       }
//     })
//     .catch((error) => console.error("Error:", error));
// });
