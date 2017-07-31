$(document).ready(function(){




  $(".lastGreeting").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {

    // code to execute after animation ends
    // $("#chatboxID").removeClass("hideAll");
    $("#chatboxID").addClass("hidechat");
    $("#chatboxID").fadeIn();
    document.getElementById("chatBackupID").style.opacity = "1";
    // $("#chatboxID").removeClass("hideAll");
    //
    // // $("#chatboxID").addClass("hidechat animated bounceInUp");
    // $("#chatboxID").slideDown();
    // var el = document.getElementById("chatboxID");
    // console.log(el.style.transform);
    // document.getElementById("chatBackupID").style.opacity = "1";
    });

//when send button is clicked
  $(".sendMsgButton").click(function(){
    alert('clicked');
  });

//when chatbox is closed
  $("#closeIcon").click(function(){
    document.getElementById('chatboxID').style.display = "none";
    document.getElementById('chatBackupID').style.display = "none";
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
