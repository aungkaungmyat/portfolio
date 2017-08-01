$(document).ready(function(){


  $("#chatboxID").removeClass("hideAll");
  $("#chatboxID").addClass("hidechat");
  // document.getElementById("chatBackupID").style.opacity = "1";
  // setTimeout(function(){
  //   // alert("Hello");
  //   $('#messagesArea').append($('<li>').text('hi'));
  // },2000);

// have to uncomment
  // $(".lastGreeting").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
  //   function(e) {
  //
  //   // code to execute after animation ends
  //   $("#chatboxID").removeClass("hideAll");
  //   $("#chatboxID").addClass("hidechat");
  //
  //   });

    $("#chatboxID").one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
      function(e) {
        document.getElementById("chatBackupID").style.opacity = "1";
        setTimeout(function(){
          // $('#messagesArea').append($('<li>').text('hi'));
          $('#messagesArea').append(
            $('<li>').addClass('animated bounceInUp').append(
              $('<p>').text("Hi, I'm Aung. I am a sophomore studying Computer Science at Purdue University. How can I mention your name?")));
        },1000);

      //   setInterval(function(){
      //     // $('#messagesArea').append($('<li>').text('hi'));
      //     $('#messagesArea').append(
      //       $('<li>').append(
      //         $('<p>').text('hi nice to meet you, how you doing let me know haha')));
      //   },1000);
      });

// have to uncomment

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
