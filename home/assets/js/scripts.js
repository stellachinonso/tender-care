//AI Response
async function sendMessage() {
  const userEmail = document.getElementById("register_email").value;
  const userFullname = document.getElementById("register_name").value;
  const userDob = document.getElementById("child_dob").value;
  const userMessage = document.getElementById("user-input").value;
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
          userMessage,
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
// async function sendMessage() {
//   const userInput = document.getElementById("user-input").value;
//   const responseContainer = document.getElementById("response");

//   try {
//     const response = await fetch("http://localhost:4000/tracker", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ userMessage: userInput }),
//     });

//     const responseData = await response.text();
//     responseContainer.innerText = responseData;
//   } catch (error) {
//     console.error("Error sending message:", error);
//     responseContainer.innerText = "Error: Failed to get response from server";
//   }
// }
