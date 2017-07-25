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
                console.log('check');
                // var loadedSlide = $(this);
                if(anchorLink == 'fourthPage'){

   //    			alert("First slide loaded");
                        $(this).find('#subjectAnimation').addClass("animated lightSpeedIn");
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

        scrollOverflow: true

});
});
