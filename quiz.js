
var user=sessionStorage.getItem("user");
var points=sessionStorage.getItem("Points");
var timeTaken=sessionStorage.getItem("time");
document.querySelector(".users").innerHTML=user;
document.querySelector('.points').innerHTML=points;
document.querySelector('.user_time').innerHTML=timeTaken;
