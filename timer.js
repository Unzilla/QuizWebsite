var seconds=0
var minutes=0;

 let resetTime=setInterval(function(){
    seconds++;
   
    if(seconds>59){
        seconds=0;
        minutes++;
    }
    
    let formatSec=seconds<10 ? `0${seconds}`:`${seconds}`;
    let formatMin=minutes<10 ? `0${minutes}`:`${minutes}`;
    document.querySelector('.time').innerHTML=`${formatMin}:${formatSec}`
 },1000);

 