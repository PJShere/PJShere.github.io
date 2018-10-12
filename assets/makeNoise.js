var main = function() {
   "use strict";
   var modal = document.getElementById('myModal');
// Get the image and insert it inside the modal - use its "alt" text as a caption
   var modalImg = $("#img01");
   var captionText = document.getElementById("caption");
   var span = document.getElementsByClassName("close")[0];
   span.onclick = function() {
   modal.style.display = "none";
	};

    $('.myImg').on("click", function(event){
      modal.style.display = "block";
      var newSrc = this.src;
//      console.log(newSrc);
      modalImg.attr('src', newSrc);
      captionText.innerHTML = this.alt;
});
};
$(document).ready(main);
