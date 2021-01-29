window.addEventListener('keydown',(e)=>{ //keydown event listener listens when user presses a key on keyboard. 
    const keyValue = e.key;  //Getting value of the pressed key.
    const integerValue = keyValue.charCodeAt(0);  //ASCII value
    const audioElement = document.querySelector(`audio[data-key="${integerValue}"]`);
    const keyButton = document.querySelector(`div[data-key="${integerValue}"]`);
    if(!audioElement) return;  //If key pressed other than asked.
    audioElement.currentTime = 0;  //To reset the playtime of each audio.
    audioElement.play();  //play the audio
    keyButton.classList.add('playing');  
});

function removeTransition(e){
    if(e.propertyName != 'transform') return; //As for each key there are multiple transitionEvents
    //therefore choosing the longest one to remove the clas playing.
    this.classList.remove('playing');
}

const keys = document.querySelectorAll(".key");  //Get all the keys.
keys.forEach(key=>
    key.addEventListener('transitionend',removeTransition));   //transitionend event listener