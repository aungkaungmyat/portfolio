$(document).ready(function(){

//when send button is clicked
  $(".sendMsgButton").click(function(){
    alert('clicked');
  });

//when chatbox is closed
  $("#closeIcon").click(function(){
    // $('.chatbox').addClass('hide');
    // document.getElementsByClassName('chatbox').style.display =  "none";
    document.getElementById('chatboxID').style.display = "none";
    // $('.chatbox').fadeToggle(3000);
  })
})
