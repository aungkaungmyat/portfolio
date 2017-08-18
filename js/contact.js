$(document).ready(function(){
  $("#messageSubmit").click(function(){


    window.open('mailto:aungkaungmyat.olaf@gmail.com'
    + "?subject=" + escape(document.getElementById('messageSubjectID').value));
    console.log(document.getElementById('messageSubjectID').value)
  });

})
