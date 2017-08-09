$(document).ready(function(){


//checking the browser type
  // Opera 8.0+
  var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

      // Firefox 1.0+
      var isFirefox = typeof InstallTrigger !== 'undefined';

      // Safari 3.0+ "[object HTMLElementConstructor]"
      var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

      // Internet Explorer 6-11
      var isIE = /*@cc_on!@*/false || !!document.documentMode;

      // Edge 20+
      var isEdge = !isIE && !!window.StyleMedia;

      // Chrome 1+
      var isChrome = !!window.chrome && !!window.chrome.webstore;

      // Blink engine detection
      var isBlink = (isChrome || isOpera) && !!window.CSS;

if(isChrome){
  // alert('1');
  $('#messagesArea').css({"flex-direction":"column-reverse"});
}
else if(isFirefox){
  // alert('2');
  $('#messagesArea').css({"flex-direction":"column"});
}
else{
  $('#messagesArea').css({"flex-direction":"column-reverse"});
}


// to prevent the message from showing twice
var checkAnimation = 0;

  // $("#chatboxID").removeClass("hideAll");
  // $("#chatboxID").addClass("hidechat");


// have to uncomment
  $(".lastGreeting").one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {

    // code to execute after animation ends
    $("#chatboxID").removeClass("hideAll");
    $("#chatboxID").addClass("hidechat");

    });

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
  $("#skipAnimation").click

   $("#closeIcon").click(function(){
     closeChat();
  });

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
var endResponse = false;
var endCount =  7;
// functions to called when a new message is received
// var messageMethods = [
function firstResponse(){
  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");
  },1000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");
  },2800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    $('#messagesArea').append(
      $('<li>').attr('id', '3').addClass('animated bounceInUp leftMsg').append(
        $('<p>').addClass('messages').text("Hi " + messageInput + ". I am a cheerful person and I love to see people wearing smiles. Therefore, I focus on working projects that can improve peoples' lives, which will in turn make them happy. By the way, may I know how you spend your free time?")));
       jQuery("#2").before(jQuery("#3"));

  },3000);
}

function secondResponse(){
  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");
  },1000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");
  },2800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    $('#messagesArea').append(
      $('<li>').attr('id', '5').addClass('animated bounceInUp leftMsg').append(
        $('<p>').addClass('messages').text("I like your way of enjoying free time. As for me, I mostly either hang out with friends trying new things or stay silent figuaring out my own assumptions of mysterious theroies of the world. Sometimes, I spend my time trying to learn new skills because I enjoy jumping out of my comfort zone.")));
       jQuery("#4").before(jQuery("#5"));

  },3000);
  endResponse = true;
  thirdResponse();
}

function thirdResponse(){

  messageID += 1;
  swapID += 1;

  setTimeout(function(){

    $('#messagesArea').append(
      $('<li>').attr('id', '6').addClass('animated bounceInUp leftMsg').append(
        $('<p>').attr('id', 'thirdMsgID').addClass('messages hideAll').text(" ")));
       jQuery("#5").before(jQuery("#6"));
  },9500)


  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");

  },10000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");

  },14500);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    // $('#messagesArea').append(
    //   $('<li>').attr('id', '6').addClass('animated bounceInUp leftMsg').append(
    //     $('<p>').addClass('messages').text("GoodByes")));
    //    jQuery("#5").before(jQuery("#6"));
    $("#thirdMsgID").removeClass("hideAll");
    $('#6 .messages').text('Thank you for the awesome conversation and hope you got to know a little bit about me. If you want to know more about me and get acquiantance, you can get my contact information at the end of my portfolio. For now, if you click the close button above, there will be a summary about this conversation and some additional facts about me. Please enjoy exploring my portfolio art and hope we will keep in touch.');

  },15000);

  setTimeout(function(){
    $("#closeIcon").addClass("animated infinite tada");
    $("#closeIcon").css('color', 'red');
  },25000)
}

function finalResponse(){
  // console.log('final res')
  setTimeout(function(){
    $("#spinnerID").removeClass("hideAll");
  },1000);

  setTimeout(function(){
    $("#spinnerID").addClass("hideAll");
  },1800);
  setTimeout(function(){
    // $('#messagesArea').append($('<li>').text('hi'));
    $('#messagesArea').append(
      $('<li>').attr('id', endCount+1).addClass('animated bounceInUp leftMsg').append(
        $('<p>').addClass('messages').text("This is the end of conversation. Hope you will enjoy observing my portfolio.")));
       jQuery("#" + endCount).before(jQuery("#" + (endCount + 1)));
       endCount += 2;
  },2000);
  // endResponse = true;
  // thirdResponse();
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

    //  if(!endResponse){
    //    messageID += 2;
    //  }
    //  else{
    //    messageID += 3;
    //  }
     messageID += 2;

    //  jQuery("#1").before(jQuery("#2"));
    jQuery("#" + swapID).before(jQuery("#" + (swapID+1)));


    // if(!endResponse){
    //   swapID += 2;
    // }
    // else{
    //   swapID += 3;
    // }
    swapID += 2;
    //  messageMethods[0]();
    if(!endResponse){
    messageMethods[responseCount++]('a string');
    }
    else{
      finalResponse();
    }
}


function closeChat(){
  document.getElementById('chatboxID').style.display = "none";
  document.getElementById('chatBackupID').style.display = "none";
  // $('.chatbox').fadeToggle(3000);
  $('.greetingContent').addClass('animated zoomOutUp');

  setTimeout(function(){
    $('.nameTitle').removeClass('hideAll');
    $('.aboutMe').removeClass('hideAll');
    $('.aboutMe').addClass('showAbout');
    $('.nameTitle').addClass('moveLeft');
  },2000);
}
