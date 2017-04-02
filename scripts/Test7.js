$(function() {
	
	// By id
	// $('#first').addClass('highlight');


	// By element/tag
	// $('p').addClass('highlight');


	// By class
	// $('.chosen').addClass('highlight');


	// Combination of id and class
	// $('#first, .chosen').addClass('highlight');


	// Contains
	// $('li:contains("Three")').addClass('highlight');


	// next, previous
	// $('li:contains("Three")').next().addClass('highlight');	
	// $('li:contains("Three")').prev().addClass('highlight');	


	// a zero-based operations
	// it means that the list index starts with 0
	$('li:even').addClass('highlight');

	

	// siblings, parent
	// $('li:contains("Three")').siblings().addClass('highlight');	
	// $('li:contains("Three")').parents().addClass('highlight');	
	// $('li:contains("Three")').parent().addClass('highlightred');

	// list of child starts with index 1, not 0
	// $('li:nth-child(1)').addClass('highlight');


	// attribute
	// $('p[name="mySecondPara"]').addClass('highlight');

	// $('p[name!="mySecondPara"]').addClass('highlight');
	// $('p').not('[name]').addClass('highlight');


	// $(':header').addClass('highlight');


	// $('p:empty').text('I put a text here');



	// -----------------------------------search for "API jquery selectors"
	// -----------------------------------https://api.jquery.com/category/selectors/




});