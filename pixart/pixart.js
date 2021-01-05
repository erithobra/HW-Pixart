console.log("js file is linked");

const setColor = document.querySelector("#set-color");



setColor.addEventListener("click", function(evt){
    evt.preventDefault();
    const colorField = document.querySelector("#color-field");
    console.log(colorField.value);
    const colorBox = document.querySelector(".brush");
    colorBox.style.background = colorField.value;
})


for (i = 0; i < 8000; i++) {
    let aBox = document.createElement("div");
    aBox.classList.add("square");
    document.body.appendChild(aBox);
}
    
const squareColor = document.querySelectorAll(".square");

//https://stackoverflow.com/questions/40956717/how-to-addeventlistener-to-multiple-elements-in-a-single-line
squareColor.forEach(function(x) {
    x.addEventListener("mouseover", function(){
        const brush = document.querySelector(".brush");
        x.style.background = brush.style.background;
    })
})
