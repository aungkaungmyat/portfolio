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

  $('#minimizeIcon').click(function(){
    // console.log(this.className)
    // console.log(this.className === "fa-window-minimize")
    if(this.className === "fa fa-window-minimize"){
    $('#minimizeIcon').addClass('fa-window-maximize').removeClass('fa-window-minimize');
    $("#chatboxID").removeClass('hidechat');
    
    }
    else{
    $('#minimizeIcon').addClass('fa-window-minimize').removeClass('fa-window-maximize');
    $("#chatboxID").addClass('hidechat');
    }
  })
})
