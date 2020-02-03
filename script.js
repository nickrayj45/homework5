// Variables

// Variable to collect
var userInfo = document.querySelector("btn9");

// for loop that makes current time color-coded

// grab info from user
btn9.textContent = userInfo;

// Function to save user info once they click on it
$("#btn9").click(function() {
  var userInfo = $(this).text();
  $("#btn9").val(userInfo);
});

// localStorage.setItem("can only be a string")
