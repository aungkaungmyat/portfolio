jQuery(document).ready(function($){




	//mobile version - detect click event on filters tab
	var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
		filter_tab_placeholder_default_value = 'Select',
		filter_tab_placeholder_text = filter_tab_placeholder.text();

	$('.cd-tab-filter li').on('click', function(event){
		//detect which tab filter item was selected
		var selected_filter = $(event.target).data('type');

		//check if user has clicked the placeholder item
		if( $(event.target).is(filter_tab_placeholder) ) {
			(filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text) : filter_tab_placeholder.text(filter_tab_placeholder_default_value) ;
			$('.cd-tab-filter').toggleClass('is-open');

		//check if user has clicked a filter already selected
		} else if( filter_tab_placeholder.data('type') == selected_filter ) {
			filter_tab_placeholder.text($(event.target).text());
			$('.cd-tab-filter').removeClass('is-open');

		} else {
			//close the dropdown and change placeholder text/data-type value
			$('.cd-tab-filter').removeClass('is-open');
			filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
			filter_tab_placeholder_text = $(event.target).text();

			//add class selected to the selected filter item
			$('.cd-tab-filter .selected').removeClass('selected');
			$(event.target).addClass('selected');
		}
	});



	//fix lateral filter and gallery on scrolling
	$(window).on('scroll', function(){
		(!window.requestAnimationFrame) ? fixGallery() : window.requestAnimationFrame(fixGallery);
	});

	function fixGallery() {
		var offsetTop = $('.cd-main-content').offset().top,
			scrollTop = $(window).scrollTop();
		( scrollTop >= offsetTop ) ? $('.cd-main-content').addClass('is-fixed') : $('.cd-main-content').removeClass('is-fixed');
	}

	/************************************
		MitItUp filter settings
		More details:
		https://mixitup.kunkalabs.com/
		or:
		http://codepen.io/patrickkunka/
	*************************************/

	buttonFilter.init();
	$('.cd-gallery ul').mixItUp({
	    controls: {
	    	enable: false
	    },
	    // callbacks: {
	    // 	onMixStart: function(){
	    // 		$('.cd-fail-message').fadeOut(200);
	    // 	},
	    //   	onMixFail: function(){
	    //   		$('.cd-fail-message').fadeIn(200);
	    // 	}
	    // }
	});


});

/*****************************************************
	MixItUp - Define a single object literal
	to contain all filter custom functionality
*****************************************************/
var buttonFilter = {
  	// Declare any variables we will need as properties of the object
  	$filters: null,
  	groups: [],
  	outputArray: [],
  	outputString: '',

  	// The "init" method will run on document ready and cache any jQuery objects we will need.
  	init: function(){
    	var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.

    	self.$filters = $('.cd-main-content');
    	self.$container = $('.cd-gallery ul');

	    self.$filters.find('.cd-filters').each(function(){
	      	var $this = $(this);

		    self.groups.push({
		        $inputs: $this.find('.filter'),
		        active: '',
		        tracker: false
		    });
	    });

	    self.bindHandlers();
  	},

  	// The "bindHandlers" method will listen for whenever a button is clicked.
  	bindHandlers: function(){
    	var self = this;

    	self.$filters.on('click', 'a', function(e){
	      	self.parseFilters();
    	});
	    self.$filters.on('change', function(){
	      self.parseFilters();
	    });
  	},

  	parseFilters: function(){
	    var self = this;

	    // loop through each filter group and grap the active filter from each one.
	    for(var i = 0, group; group = self.groups[i]; i++){
	    	group.active = [];
	    	group.$inputs.each(function(){
	    		var $this = $(this);
	    		if($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
	    			if($this.is(':checked') ) {
	    				group.active.push($this.attr('data-filter'));
	    			}
	    		} else if($this.is('select')){
	    			group.active.push($this.val());
	    		} else if( $this.find('.selected').length > 0 ) {
	    			group.active.push($this.attr('data-filter'));
	    		}
	    	});
	    }
	    self.concatenate();
  	},

  	concatenate: function(){
    	var self = this;

    	self.outputString = ''; // Reset output string

	    for(var i = 0, group; group = self.groups[i]; i++){
	      	self.outputString += group.active;
	    }

	    // If the output string is empty, show all rather than none:
	    !self.outputString.length && (self.outputString = 'all');

    	// Send the output string to MixItUp via the 'filter' method:
		if(self.$container.mixItUp('isLoaded')){
	    	self.$container.mixItUp('filter', self.outputString);
		}
  	}
};

$(document).ready(function($){
	$('body').on('click', '#plutusButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Plutus App',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.</p>" +
    '<a href="https://github.com/PlutusApp"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#mathButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Math-is-Love',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A fun IOS math game which is intended to improve players calculation skills through game experience.</p>" +
    '<a href="https://github.com/aungkaungmyat/Math-is-love"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#rollButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Roll.io',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A desktop game in which the player has to dodge the incoming meteors and try to survive in the limited bounds</p>" +
    '<a href="https://github.com/mthormati/Roll.io"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#gatheringButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Gathering App',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A Web App where you can gather people of same interest to do certain activities.</p>" +
    '<a href="https://github.com/aungkaungmyat/GatheringApp"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#gitdateButton', function () {
		swal({
  title: 'GitDate',
	html:
		"<p>A Web App where people can find their partners according to their sense of humour.</p>" +
    '<a href="https://github.com/GitDate"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#lostButton', function () {
		swal({
  title: 'Lost & Found',
	html:
		"<p>A Web App where people can post whether they lose something or they find others' properties.</p>" +
    '<a href="https://github.com/ProjectApollo11"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});



});

var plutuses = ["images/plutus/plutus.png", "images/plutus/plutus2.jpg", "images/plutus/plutus3.jpg", "images/plutus/plutus4.jpg", "images/plutus/plutus5.jpg"];
var plutuscount = 1;

function plutusChange(){
	document.getElementById("plutusimg").src = plutuses[plutuscount];
	plutuscount++;
	if(plutuscount == plutuses.length){
		plutuscount = 0;
	}
}

var gatherings = ["images/gathering/gathering.jpg", "images/gathering/gathering2.png", "images/gathering/gathering3.png", "images/gathering/gathering4.png", "images/gathering/gathering5.png" , "images/gathering/gathering6.png"];
var gatheringcount = 1;

function gatheringChange(){
	document.getElementById("gatheringimg").src = gatherings[gatheringcount];
	gatheringcount++;
	if(gatheringcount == gatherings.length){
		gatheringcount = 0;
}
}

var maths = ["images/math/math.png", "images/math/math2.png", "images/math/math3.png", "images/math/math4.png", "images/math/math5.png"];
var mathcount = 1;

function mathChange(){
	document.getElementById("mathimg").src = maths[mathcount];
	mathcount++;
	if(mathcount == maths.length){
		mathcount = 0;
}
}

var gitdates = ["images/gitdate/gitdate.jpg", "images/gitdate/gitdate2.png", "images/gitdate/gitdate3.png", "images/gitdate/gitdate4.png"];
var gitcount = 1;

function gitdateChange(){
	document.getElementById("gitdateimg").src = gitdates[gitcount];
	gitcount++;
	if(gitcount == gitdates.length){
		gitcount = 0;
}
}

var losts = [ "images/lost/LostLogo.png", "images/lost/lost2.png", "images/lost/lost3.png", "images/lost/lost4.png"];
var lostcount = 1;

function lostChange(){
	document.getElementById("lostimg").src = losts[lostcount];
	lostcount++;
	if(lostcount == losts.length){
		lostcount = 0;
}
}

var rolls = ["images/roll/roll.png", "images/roll/roll2.png", "images/roll/roll3.png", "images/roll/roll4.png", "images/roll/roll5.png", "images/roll/roll6.png"];
var rollcount = 1;

function rollChange(){
	document.getElementById("rollimg").src = rolls[rollcount];
	rollcount++;
	if(rollcount == rolls.length){
		rollcount = 0;
}
}

// var pairs = {
// 	plutus: plutusChange(),
// 	gathering: gatheringChange(),
// 	math: mathChange(),
// 	gitdate: gitdateChange(),
// 	lost: lostChange(),
// 	roll: rollChange()
// }


var randoms = [
	function plutusChange(){

  $("#plutusimg").fadeTo(1000,0.30, function() {
      $("#plutusimg").attr("src",plutuses[plutuscount]);
			plutuscount++;
			if(plutuscount == plutuses.length){
				plutuscount = 0;
			}
  }).fadeTo(500,1);
	},
	function gatheringChange(){

	$("#gatheringimg").fadeTo(1000,0.30, function() {
      $("#gatheringimg").attr("src",gatherings[gatheringcount]);
			gatheringcount++;
			if(gatheringcount == gatherings.length){
				gatheringcount = 0;
			}
  }).fadeTo(500,1);
	},
	function lostChange(){
		// document.getElementById("lostimg").src = losts[lostcount];
		// lostcount++;
		// if(lostcount == losts.length){
		// 	lostcount = 0;
		$("#lostimg").fadeTo(1000,0.30, function() {
	      $("#lostimg").attr("src",losts[lostcount]);
				lostcount++;
				if(lostcount == losts.length){
					lostcount = 0;
				}
	  }).fadeTo(500,1);
	// }
	},
	function gitdateChange(){
	// 	document.getElementById("gitdateimg").src = gitdates[gitcount];
	// 	gitcount++;
	// 	if(gitcount == gitdates.length){
	// 		gitcount = 0;
	// }
	$("#gitdateimg").fadeTo(1000,0.30, function() {
      $("#gitdateimg").attr("src",gitdates[gitcount]);
			gitcount++;
			if(gitcount == gitdates.length){
				gitcount = 0;
			}
  }).fadeTo(500,1);
	},
	function mathChange(){
	$("#mathimg").fadeTo(1000,0.30, function() {
      $("#mathimg").attr("src",maths[mathcount]);
			mathcount++;
			if(mathcount == maths.length){
				mathcount = 0;
			}
  }).fadeTo(500,1);
	},
	function rollChange(){
	// 	document.getElementById("rollimg").src = rolls[rollcount];
	// 	rollcount++;
	// 	if(rollcount == rolls.length){
	// 		rollcount = 0;
	// }
	$("#rollimg").fadeTo(1000,0.30, function() {
      $("#rollimg").attr("src",rolls[rollcount]);
			rollcount++;
			if(rollcount == rolls.length){
				rollcount = 0;
			}
  }).fadeTo(500,1);
	}]
// var randomcount =  0;
var rannum;
var norepeat = 0;

function randomresult(){

	 rannum = Math.floor(Math.random() * 6);

	 while(rannum == norepeat){
		 rannum = Math.floor(Math.random() * 6);
		 if(rannum != norepeat){
			 break;
		 }
	 }
	 norepeat = rannum;
	//  console.log(norepeat)
	//  randoms[Math.floor((Math.random() * 5))]();
	randoms[norepeat]();
}

window.onload = function(){

	// window.setInterval(function(){
	// 	var nam = randomresult();
	// 	console.log(nam);
	// 	nam;
	// 	// pairs.nam;
	// },1000);
	window.setInterval(randomresult,3000)
	// window.setInterval(plutusChange, 5000);
	// window.setInterval(gatheringChange, 5000);
	// window.setInterval(mathChange, 5000);
	// window.setInterval(gitdateChange, 5000);
	// window.setInterval(lostChange, 5000);
	// window.setInterval(rollChange, 5000);


}

$(function(){
    $(document).on('mouseenter', '#plutusimg', function(){
        // document.getElementById("plutusimg").src = plutuses[0];
				$('img').toggleClass('hidden');
    });
});
