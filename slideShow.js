Qualtrics.SurveyEngine.addOnload(function()
{
	/*Place your JavaScript here to run when the page loads*/

});

Qualtrics.SurveyEngine.addOnReady(function()
{
	// Get the elements
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var slides = document.querySelectorAll(".mySlides");
var dots = document.querySelectorAll(".demo");

// Set the initial slide index
var slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to show a specific slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to display the slides
function showSlides(n) {
  // Reset the index if it exceeds the number of slides
  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  // Hide all the slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Remove the active class from all the dots
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Display the current slide and add the active class to its corresponding dot
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Event listener for the previous and next buttons
prevBtn.addEventListener("click", function() {
  plusSlides(-1);
});

nextBtn.addEventListener("click", function() {
  plusSlides(1);
});

// Event listener for the dots
for (var i = 0; i < dots.length; i++) {
  dots[i].addEventListener("click", function() {
    var slideNumber = parseInt(this.alt.split(" ")[0]);
    currentSlide(slideNumber);
  });
}


});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});