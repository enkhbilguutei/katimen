// Function to handle the user's choice
function chooseAnswer(isYes) {
  // Hide the question and buttons
  document.querySelector(".question").style.display = "none";
  document.querySelector(".button-container").style.display = "none";

  // Show the corresponding message based on the answer
  if (isYes) {
    document.getElementById("yesMessage").classList.remove("hidden");
  } else {
    document.getElementById("noMessage").classList.remove("hidden");
  }
}

// Function to go back to the original state
function goBack() {
  // Reset the page to its original state
  document.querySelector(".question").style.display = "block";
  document.querySelector(".button-container").style.display = "block";
  document.getElementById("yesMessage").classList.add("hidden");
  document.getElementById("noMessage").classList.add("hidden");
}
