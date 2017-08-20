$(document).ready(function() {
$('#fullpage').fullpage({
    //Navigation
		// menu: '#menu',
		// lockAnchors: false,
		// anchors:['firstPage', 'secondPage'],
		// navigation: false,
		// navigationPosition: 'right',
		// navigationTooltips: ['firstSlide', 'secondSlide'],
		// showActiveTooltip: false,
		// slidesNavigation: false,
		// slidesNavPosition: 'bottom',
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        afterLoad: function(anchorLink, index){
                if(anchorLink == 'firstPage'){
                    $(document).keypress(function(e) {
                        if(e.which == 13) {
                            sendMessage();
                        }
                    });
                }
                else if(anchorLink == 'fourthPage'){
                        $(this).find('#topicAnimation').addClass("animated fadeInDown");
                        $(this).find('#galaxy').addClass("animated rollIn");
                        $(this).find('#footAnimation').addClass("animated fadeInUp");
                        $(this).find('#nameAnimation').addClass("animated lightSpeedIn");
                        $(this).find('#subjectAnimation').addClass("animated lightSpeedIn");
                        $(this).find('#emailAnimation').addClass("animated lightSpeedIn");
                        $(this).find('#messageAnimation').addClass("animated lightSpeedIn");
                        $(this).find('#buttonAnimation').addClass("animated lightSpeedIn");
      		}

        },
        navigation: true,
        navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
        // showActiveTooltip: true,
        navigationPosition: 'right',
	menu: '#myMenu',
        // responsiveWidth: 1082,
        // responsiveHeigth: 823
        // sectionSelector: '.page',

        scrollOverflow: true,
        normalScrollElements: '#messagesArea'

});
});


document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
      //  document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
        //  document.getElementById('interactive');
        //  document.getElementById('load').style.visibility="hidden";
        //  document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}
