$(document).ready(function(){
  $("#messageSubmit").click(function(){


    window.open('mailto:aungkaungmyat.olaf@gmail.com'
    + "?subject=" + escape(document.getElementById('messageSubjectID').value)
    +  "&body=" + escape(document.getElementById('senderMessageID').value));
    // console.log(document.getElementById('messageSubjectID').value)
  });

})
