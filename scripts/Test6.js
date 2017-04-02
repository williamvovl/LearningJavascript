// jQuery(document).ready(function() {
// 	alert("it's working");
// });

$(function() {

	// $("title").text("I can now get at the H1 immediately!");

	// $("#first").html("<h2> Great quotes </h2>");


	// prepend and append work INSIDE the given selection
	$("#first").prepend("<h2>Great quotes</h2>");
	$("#first").append("<h3>...for your mind...</h3>");

	// before, after, insertBefore, insertAfter work Outside
	// the given selection.


	$("#myAnchor").attr("href", "http://www.google.com");
});