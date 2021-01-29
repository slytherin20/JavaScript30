//Getting the second,minute and hour DOM elements
const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
    //Getting the Date object
    const now = new Date();

    //Seconds hand
    const seconds = now.getSeconds();
    const secondDegree = (seconds/60)*360;
    secondHand.style.transform = `rotate(${90+secondDegree}deg)`;

    //Minute hand
    const minutes = now.getMinutes();
    const minuteDegree = (minutes/60)*360;
    minuteHand.style.transform = `rotate(${90+minuteDegree}deg)`;

    //Hour hand
    const hours = now.getHours();
    const hourDegree = (hours/12)*360;
    hourHand.style.transform = `rotate(${90+hourDegree}deg)`;
    
}

//After each 1 sec function setDate is called.
setInterval(setDate,1000); 
