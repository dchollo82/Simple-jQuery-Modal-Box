
(function() {
	/* show form when link is clicked */
	$('.feedback-form').click(function(){
		$(".overlay").show();
	});			
	/* hide form when anchor and x is clicked */	
	$('.comment-form-result a, .contact-form a').click(function(){
		$(".overlay").hide();
	});	
	/* hide form and show thank you page once form is submitted */			
	$(".comment-form .submit").click(function(e){
	    $(".comment-form").hide();
	    $(".comment-form-result").show();
	    e.preventDefault();
	});					        		
})();