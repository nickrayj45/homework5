// Variables

// Variable to collect
// var userInfo = document.querySelector("btn9");
var currentDate = moment();
var currentTime = moment().format("dddd, MMMM, Do YYYY, h:mm:ss a");
$("#currentTime").text(moment);
console.log(currentTime);

// for loop that makes current time color-coded
$(".timenow").each(function() {
  var hourTime = parseInt($(this).attr("id"));
  console.log(hourTime);
  if (currentTime === hourTime) {
    addedClass = "yellow";
    console.log("past");
  }
});

// Function to save user info once they click on it
$("#btn-9").click(function() {
  var userInfo = $("#btn9").val();
  console.log(userInfo);
  localStorage.setItem("9AM", userInfo);
});

$("#btn-10").click(function() {
  var userInfo = $("#btn10").val();
  console.log(userInfo);
  localStorage.setItem("10AM", userInfo);
});

$("#btn-11").click(function() {
  var userInfo = $("#btn11").val();
  console.log(userInfo);
  localStorage.setItem("11AM", userInfo);
});

$("#btn-12").click(function() {
  var userInfo = $("#btn12").val();
  console.log(userInfo);
  localStorage.setItem("12PM", userInfo);
});

$("#btn-1").click(function() {
  var userInfo = $("#btn1").val();
  // console.log(userInfo);
  localStorage.setItem("11AM", userInfo);
});

$("#btn-2").click(function() {
  var userInfo = $("#btn2").val();
  // console.log(userInfo);
  localStorage.setItem("1PM", userInfo);
});

$("#btn-3").click(function() {
  var userInfo = $("#btn-3").val();
  console.log(userInfo);
  localStorage.setItem("2PM", userInfo);
});

$("#btn-4").click(function() {
  var userInfo = $("#btn-4").val();
  console.log(userInfo);
  localStorage.setItem("4PM", userInfo);
});
