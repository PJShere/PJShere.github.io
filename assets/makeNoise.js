var main = function() {
   "use strict";
   var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
   var modalImg = $("#img01");
   var captionText = document.getElementById("caption");
    $('.myImg').on("click", function(event){
      modal.style.display = "block";
      var newSrc = this.src;
//      console.log(newSrc);
      modalImg.attr('src', newSrc);
      captionText.innerHTML = this.alt;
});

   var close_span = document.getElementsByClassName("close")[0];
   close_span.onclick = function() {
	   modal.style.display = "none";
   };
//close modal on escape keydown
$(document).keydown(function(event) {
  if (event.key === "Escape") {
      var modal = document.getElementById('myModal');
	  if (modal.style.display === "block") {
      modal.style.display = "none";
    };
  };
});  

}; //close main()

$(document).ready(main);

