let display = document.getElementById("display");
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");

let hours = 0;
let minites = 0;
let seconds = 0;
let milliseconds = 0;

let newMilliSeconds =0;
let newSecondss =0;
let newMinitess =0;
let newHourss =0;

let status ="stop";
let interval;


function stopWatch(){
  milliseconds++;
  if(milliseconds / 10 == 1){
    seconds++;
    milliseconds = 0;
    if(seconds / 60 == 1){
      minites++;
      seconds = 0;
      if(minites / 60 == 1){
        hours++;
        minites = 0;
      }
    }
  }
  
  if(milliseconds < 10){
    newMilliSeconds = "0" + milliseconds;
  }else{
    newMilliSeconds = milliseconds;
  }

  if(seconds < 10){
    newSeconds = "0" + seconds;
  }else{
    newSeconds = seconds;
  }

  if(minites < 10){
   newMinites = "0" + minites;
  }else{
    newHours = minites;
  }
  if(hours < 10){
    newHours = "0" + hours;
  }else{
    newHours = hours;
  }
  
  display.innerHTML = newHours +":" + newMinites +":" + newSeconds +":" + newMilliSeconds;
}


start.addEventListener("click", function(){
  if(status == "stop"){
    interval = setInterval(stopWatch, 100);
    status = "start";
  }
})

stop.addEventListener("click", function(){
  if(status == "start"){
    clearInterval(interval);
    status ="stop"
  }
})

reset.addEventListener("click",function(){
  clearInterval(interval);
  status ="stop";
  display.innerHTML = "00:00:00:00"
  hours = 0;
  minites = 0;
  seconds = 0;
  milliseconds = 0;
})