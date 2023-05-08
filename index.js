var graduationDateMonth = 12 //december
var graduationDateDay = 17 //17th
var graduationDateYear = 2028 //2028

// Set the date we're counting down to
var countDownDate = new Date("Dec 17, 2028 00:00:00").getTime();

// Update the count down every 1 second
var totalTimeTillGraduation = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var months = Math.floor(days/30);
  var years = Math.floor(months/12);

  // Output the result in an element with id="demo"
  document.getElementById("years").innerHTML = years;
  document.getElementById("months").innerHTML = months%12;
    document.getElementById("days").innerHTML = days%30;
    document.getElementById("daysTotal").innerHTML = days

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(totalTimeTillGraduation);
    document.getElementById("congrats").innerHTML = "Congrats on graduating!";
    
  }
}, 1000);

function getCurrentTime(){
//get the current hour, minute, and second
var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var currentSecond = new Date().getSeconds();
//if the current hour, minute, or second is less than 10, add a 0 in front of it
if(currentHour < 10){
    currentHour = "0" + currentHour;
}
if(currentMinute < 10){
    currentMinute = "0" + currentMinute;
}
if(currentSecond < 10){
    currentSecond = "0" + currentSecond;
}
//display the current date with the day in full text
document.getElementById("currentDate").innerHTML = new Date().toDateString();




document.getElementById("currentHour").innerHTML = currentHour + ":";
document.getElementById("currentMinute").innerHTML = currentMinute + ":";
document.getElementById("currentSecond").innerHTML = currentSecond;
document.body.style.backgroundColor = "#" + currentHour + currentMinute + currentSecond;;
}


setInterval(getCurrentTime, 500);










