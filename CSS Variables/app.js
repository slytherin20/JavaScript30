const inputs = document.querySelectorAll('.controls input'); //returns a NodeList not an array.

function handleUpdate(){
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix); //Sets the CSS variable value
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));
inputs.forEach(input=>input.addEventListener('mousemove',handleUpdate));

