/*Slideshow JavaScript*/
var slideIndex = [1,1,1];
var slideId = ["slideset1", "slideset2", "slideset3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/*Contact Form JavaScript*/
var email=('abc@abcmail.com');
var subject = ('My Feedback');
var cc = ('abc@abcmail.com');
var bcc = ('abc@abcmail.com');
var body = ('I am the body of the feedback that you are sending.');
document.write( '<a href="mailto:' + email + '?subject=' + subject + '&cc=' + cc + '&bcc=' + bcc + '&body=' + body + '">' + 'Click here to send feedback' + '<' + '/a>');