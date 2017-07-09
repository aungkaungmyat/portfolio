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
    '<a href="https://github.com/aungkaungmyat"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#mathButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Math-is-Love',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A fun IOS math game which is intended to improve players calculation skills through game experience.</p>" +
    '<a href="https://github.com/aungkaungmyat"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});

	$('body').on('click', '#rollButton', function () {
		// swal('Any fool can use a computer');
		swal({
  title: 'Roll.io',
	// text: "A finance management app which gives item recommendations based on one's spending habit and shows expected finance result on each usage.",
	html:
		"<p>A desktop game in which the player has to dodge the incoming meteors and try to survive in the limited bounds</p>" +
    '<a href="https://github.com/aungkaungmyat"><i class="fa fa-github"></i><span> Github</span></a>'
})
	});
});

var plutuses = ["images/plutus/plutus.png", "images/plutus/plutus2.jpg", "images/plutus/plutus3.jpg", "images/plutus/plutus4.jpg", "images/plutus/plutus5.jpg"];
var plutuscount = 0;

function plutusChange(){
	document.getElementById("plutusimg").src = plutuses[plutuscount];
	plutuscount++;
	if(plutuscount == plutuses.length){
		plutuscount = 0;
	}
}

var gatherings = ["images/gathering/gathering.jpg", "images/gathering/gathering2.png", "images/gathering/gathering3.png", "images/gathering/gathering4.png", "images/gathering/gathering5.png" , "images/gathering/gathering6.png"];
var gatheringcount = 0;

function gatheringChange(){
	document.getElementById("gatheringimg").src = gatherings[gatheringcount];
	gatheringcount++;
	if(gatheringcount == gatherings.length){
		gatheringcount = 0;
}
}

window.onload = function(){
	window.setInterval(plutusChange, 5000);
	window.setInterval(gatheringChange, 5000);
}
