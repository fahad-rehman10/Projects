var colors = generateColors(6)
var squares = document.querySelectorAll(".square")
var theColor = document.getElementById("picked")
var theBody = document.getElementById("body")
var msg = document.getElementById("message")
var heading = document.querySelector("h1")
var reset = document.getElementById("again")
var easy = document.getElementById("ez")
var hard = document.getElementById("hardbtn")
var pickedColor = pickColor();
easy.classList.remove("difficulty");


// ******************************RESET BUTTON**************************************
reset.addEventListener("click", function(){
    colors = generateColors(6);
    pickedColor = pickColor();
    theColor.textContent = pickedColor; 
    heading.style.backgroundColor = "#4682B4"
    msg.textContent = " ";
    reset.textContent = "New Colors"

    for (var i=0; i<squares.length; i++)
{
   squares[i].style.display = "block"
   squares[i].style.backgroundColor = colors[i];
   squares[i].addEventListener("click", function(){
    clickedColor = this.style.backgroundColor;
    if (clickedColor==pickedColor)
       {
          heading.style.backgroundColor = pickedColor;
          changeColors(pickedColor);
          msg.textContent = "Correct!";
       }
    else
       {
          this.style.backgroundColor = "#232323"
          msg.textContent = "Try Again";
       }
    })   
}
  }) 
   reset.addEventListener("mouseover", function(){
      reset.style.backgroundColor = "steelblue"
      reset.style.color = "white"
   })
   reset.addEventListener("mouseout", function(){
      reset.style.backgroundColor = "white"
      reset.style.color = "steelblue"
   })

   hard.addEventListener("mouseover", function(){
      hard.style.backgroundColor = "steelblue"
      hard.style.color = "white" 
   })

   hard.addEventListener("mouseout", function(){
     
      if (colors[6])
      {
      hard.style.backgroundColor = "white"
      hard.style.color = "steelblue" 
      }
   })
 
  easy.addEventListener("mouseover", function(){
      easy.style.backgroundColor = "steelblue"
      easy.style.color = "white" 
   })

   easy.addEventListener("mouseout", function(){
     
      if (colors[3])
      {
      easy.classList.add("difficulty"); 
      }
   })
// **********************************************************************************************

// *******************************************************PAGE LOADS TO THIS (HARD BUTTON)***********************
for (var i=0; i<squares.length; i++)
{
   squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click", function(){
   clickedColor = this.style.backgroundColor;
   
    if (clickedColor==pickedColor)
       {
	       heading.style.backgroundColor = pickedColor;
          changeColors(pickedColor);
          msg.textContent = "Correct!";
          reset.textContent = "Play Again?"
       }
    else
       {
	       this.style.backgroundColor = "#232323"
	       msg.textContent = "Try Again";
       }
    })   
}
// ***************************************************************************************************************

easy.addEventListener("click", function(){
    colors = generateColors(3);
    pickedColor = pickColor();
    theColor.textContent = pickedColor; 
    heading.style.backgroundColor = "#4682B4"
    msg.textContent = " ";
    easy.classList.add("difficulty")
    hard.classList.remove("difficulty")

    for (var i=0; i<squares.length; i++)
    {
      if (colors[i])
      {
         squares[i].style.backgroundColor = colors[i];
      }
      else
      {
         squares[i].style.display = "none";
      }
    }       
})
 
 hard.addEventListener("click", function(){
   
    colors = generateColors(6);
    pickedColor = pickColor();
    theColor.textContent = pickedColor; 
    heading.style.backgroundColor = "#4682B4"
    msg.textContent = " ";
    hard.classList.add("difficulty")
    easy.classList.remove("difficulty")

   for (var i=0; i<squares.length; i++)
{
   squares[i].style.display = "block"
   squares[i].style.backgroundColor = colors[i];
 } 
})


theColor.textContent = pickedColor;




function changeColors(color)
{
   for (var i=0; i<squares.length; i++)
   {
      squares[i].style.backgroundColor = color;
   }
}


// Generating and Choosing Random Colors
function pickColor()
{
   var random = Math.floor(Math.random() * colors.length);
   return colors[random];
}

function generateColors(num)
{
   var arr = [];
   for (var i=0; i<num; i++)
   {
      arr.push(randomizeColors());
   }
   return arr;
}

function randomizeColors()
{
   var r = Math.floor(Math.random() * 256);
   var g = Math.floor(Math.random() * 256);
   var b = Math.floor(Math.random() * 256);
   return "rgb(" + r + ", " + g + ", " + b + ")"; 
}
// *************************************************************************************


