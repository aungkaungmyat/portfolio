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
        $('<p>').addClass('messages').text("Hi " + messageInput + ". I am a cheerful person and I love to see people wearing smiles. Therefore, I focus on working projects that can improve peoples' lives, which will in turn make them happy. By the way, may I know how you spend your free time?")));
       jQuery("#2").before(jQuery("#3"));

  },2000);
}

function secondResponse(){
  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");
  },1000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");
  },1800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    $('#messagesArea').append(
      $('<li>').attr('id', '5').addClass('animated bounceInUp leftMsg').append(
        $('<p>').addClass('messages').text("I like your way of enjoying free time. As for me, I mostly either hang out with friends trying new things or stay silent figuaring out my own assumptions of mysterious theroies of the world. Sometimes, I spend my time trying to learn new skills because I enjoy jumping out of my comfort zone.")));
       jQuery("#4").before(jQuery("#5"));

  },2000);
  thirdResponse();
}

function thirdResponse(){
  setTimeout(function(){

    $('#messagesArea').append(
      $('<li>').attr('id', '6').addClass('animated bounceInUp leftMsg').append(
        $('<p>').attr('id', 'thirdMsgID').addClass('messages hideAll').text(" ")));
       jQuery("#5").before(jQuery("#6"));
  },7500)


  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");

  },8000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");

  },8800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    // $('#messagesArea').append(
    //   $('<li>').attr('id', '6').addClass('animated bounceInUp leftMsg').append(
    //     $('<p>').addClass('messages').text("GoodByes")));
    //    jQuery("#5").before(jQuery("#6"));
    $("#thirdMsgID").removeClass("hideAll");
    $('#6 .messages').text('Thank you for the awesome conversation and hope you got to know a little bit about me. If you want to know more about me and get acquiantance, you can get my contact information at the end of my portfolio. For now, if you click the close button above, there will be a summary about this conversation and some additional facts about me. Please enjoy exploring my portfolio art and hope we will keep in touch.');

  },9000);

  setTimeout(function(){
    $("#closeIcon").addClass("animated infinite tada");
    $("#closeIcon").css('color', 'red');
  },10000)
}

// ]
var messageMethods = [firstResponse,secondResponse];


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
