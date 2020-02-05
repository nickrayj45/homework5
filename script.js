// Variables

var currentDate = moment();
var currentTime = moment().hour();
var currentHour = moment().format("LTS");
$("#currentTime").text(currentHour);
// console.log("current:" + currentTime);

// if statements that makes current time color-coded
$(".timenow").each(function() {
  var hourTime = parseInt($(this).attr("id"));
  // console.log("hour:" + hourTim`e);
  // if (true) {
  // console.log(currentTime);
  // console.log(hourTime);
  // console.log(this);
  if (currentTime > hourTime) {
    $(this).css("background", "red");

    // console.log("past");
  }
  if (currentTime === hourTime) {
    $(this).css("background", "yellow");
    // console.log("current");
  }
  if (currentTime < hourTime) {
    $(this).css("background", "green");
    // console.log("future");
  }
});

// Function to save user info once they click on it
$("#btn-9").click(function() {
  var userInfo = $("#btn9").val();
  // console.log(userInfo);
  localStorage.setItem("9AM", userInfo);
});

$("#btn-10").click(function() {
  var userInfo = $("#btn10").val();
  // console.log(userInfo);
  localStorage.setItem("10AM", userInfo);
});

$("#btn-11").click(function() {
  var userInfo = $("#btn11").val();
  // console.log(userInfo);
  localStorage.setItem("11AM", userInfo);
});

$("#btn-12").click(function() {
  var userInfo = $("#btn12").val();
  // console.log(userInfo);
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
  // console.log(userInfo);
  localStorage.setItem("2PM", userInfo);
});

$("#btn-4").click(function() {
  var userInfo = $("#btn-4").val();
  // console.log(userInfo);
  localStorage.setItem("4PM", userInfo);
});
