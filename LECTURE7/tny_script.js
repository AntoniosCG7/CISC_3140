/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: 
   Date:   

*/

"use strict";

document.getElementById("dateNow").innerHTML = "m/d/y <br/> h:m:s";
document.getElementById("days").textContent="dd";
document.getElementById("hrs").textContent="hh";
document.getElementById("mins").textContent="mm";
document.getElementById("secs").textContent="ss";

function runClock() {

var currentDay = new Date();
var dateStr = currentDay.toLocaleDateString();
var timeStr = currentDay.toLocaleTimeString();

document.getElementById("dateNow").innerHTML = dateStr + "<br/>" + timeStr;

var newYear = new Date("Jan 1, 2018");
var nextYear = currentDay.getFullYear()+1;
newYear.setFullYear(nextYear);

var daysLeft = (newYear-currentDay)/(1000*60*60*24);
document.getElementById("days").textContent = Math.floor(daysLeft);

var hrsLeft=(daysLeft-Math.floor(daysLeft))*24;
document.getElementById("hrs").textContent = Math.floor(hrsLeft);

var minsLeft=(hrsLeft-Math.floor(hrsLeft))*60;
document.getElementById("mins").textContent = Math.floor(minsLeft);

var secsLeft=(minsLeft-Math.floor(minsLeft))*60;
document.getElementById("secs").textContent = Math.floor(secsLeft);

}

setInterval("runClock()",1000);