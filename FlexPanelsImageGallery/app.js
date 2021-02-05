function flexOpen(){
    this.classList.toggle('open');
}
function flexOpenActive(e){
    if(e.propertyName!='font-size') return;
    console.log(e);
    this.classList.toggle('open-active');
}

const panels = document.querySelectorAll('.panel');
panels.forEach( panel => panel.addEventListener('click',flexOpen));
panels.forEach( panel => panel.addEventListener('transitionend',flexOpenActive));



