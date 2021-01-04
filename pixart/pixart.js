console.log("js file is linked");

const setColor = document.querySelector("#set-color");



setColor.addEventListener("click", function(evt){
    evt.preventDefault();
    const colorField = document.querySelector("#color-field");
    console.log(colorField.value);
    const colorBox = document.querySelector(".brush");
    colorBox.style.background = colorField.value;
})