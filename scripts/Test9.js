$(function() {



	$('#main').append("<img src='images/plus.jpg' alt='Click me to see the paragraph' id='clickMe' />");


	// alert('got here');
	
	$('#clickMe').toggle(function() {
		$('#message').show('fast');
		$('#clickMe').attr('src', 'images/minus.png');
	}, function() {
		$('#message').hide('slow');
		$('#clickMe').attr('src', 'images/plus.jpg');
	});

	$('#message').hide();
});