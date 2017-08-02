$(document).ready(function(){

var checkAnimation = 0;

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

        if(checkAnimation > 0){
          return;
        }
        $("#spinnerID").removeClass("hideAll");
        setTimeout(function(){
          $("#spinnerID").addClass("hideAll");
        },1800);

        checkAnimation++;

        document.getElementById("chatBackupID").style.opacity = "1";
        setTimeout(function(){
          // $('#messagesArea').append($('<li>').text('hi'));
          $('#messagesArea').append(
            $('<li>').attr('id', '1').addClass('animated bounceInUp leftMsg').append(
              $('<p>').addClass('messages').text("Hi, I'm Aung. I am a sophomore studying Computer Science at Purdue University. How can I mention your name?")));
        },2000);

        // var count = 0;
        // var ps = document.getElementsByClassName("messages");
        // setInterval(function(){
        //   // $('#messagesArea').append($('<li>').text('hi'));
        //   $('#messagesArea').append(
        //     $('<li>').append(
        //       $('<p>').addClass('messages').text('hi nice to meet you, how you doing let me know haha')));
        //       // $("p:first").replaceWith("<p>hi nice to meet you, how you doing let me know haha</p>");
        //       count++;
        //       console.log(ps);
        //       if(count > 1){
        //         ps[0].innerHTML = "messages (0)";
        //         ps[1].innerHTML = "messages (1)";
        //       }
        // },3000);
});



// have to uncomment

//when send button is clicked
// function sendMessage(){
//   console.log($('.messageBox'));
// }


  $(".sendMsgButton").click(function(){


    sendMessage();
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


var messageInput;
var messageID = 2;
var swapID = 1;
var responseCount = 0;
// functions to called when a new message is received
// var messageMethods = [
function firstResponse(){
  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");
  },1000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");
  },1800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    $('#messagesArea').append(
      $('<li>').attr('id', '3').addClass('animated bounceInUp leftMsg').append(
        $('<p>').addClass('messages').text("Hi " + messageInput + ". Hope you are having a great day")));
       jQuery("#2").before(jQuery("#3"));

  },2000);
}


// ]
var messageMethods = [firstResponse];


// send message and clear the input when button is clicked
function sendMessage() {
    //  console.log($('.messageBox').val());
    // console.log(document.getElementById('messageBoxID').value);
    messageInput = document.getElementById('messageBoxID').value;
     $('#messagesArea').append(
       $('<li>').attr('id', messageID).addClass('animated bounceInUp rightMsg').append(
         $('<p>').addClass('messages').text($('.messageBox').val())));
     document.getElementById("messageBoxID").value = "";

     messageID += 2;

    //  jQuery("#1").before(jQuery("#2"));
    jQuery("#" + swapID).before(jQuery("#" + (swapID+1)));

    swapID += 2;
    //  messageMethods[0]();
    messageMethods[responseCount++]('a string');

}
