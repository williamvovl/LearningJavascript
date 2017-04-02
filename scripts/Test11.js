$(document).ready(function() {

    // $("#panel1").hide(300).show(600);

    // $("#panel1").slideUp(500).slideDown(600);

    // $("#panel1").fadeToggle(400).fadeToggle(800);

    // $("#panel1").css({
    //     color: 'red',
    //     fontWeight: 'bold'
    // });




    // $("#btn1").on('click', function() {
    // 	$('#panel1').slideToggle(400);
    // });




    // $("#panel1").on('click', function() {
    // 	$('#panel1').slideToggle(400);
    // });

    // $("#btn1").on('click', function() {
    // 	$('#panel1 .panel-body').html('my new panel content');
    // });


    var newContent = "new amazing content for you";

    $('.panel-button').on('click', function() {
    	var panelID = $(this).attr('data-panelid');
    	$('#' + panelID).toggle();
    	$('#' + panelID + ' .panel-body').html(newContent);
    });



    // $('li').on('click', function() {
    // 	$(this).removeClass('special');
    // 	$(this).siblings().addClass('special');
    // });


    // $('.list').on('click', function() {
    // 	$(this).find('li').filter(':first').addClass('special');
    // });



    // $('.list').on('click', function() {

    // 	$(this).find('.special').remove();

    // 	$(this).find('li').filter('.special').remove();
    // });



    // $('li').on('click', function() {
    // 	if($(this).not('.special')){
    // 		alert("not special");
    // 	}
    // });


    $('li').on('click', function() {
    	console.log('click li');
    	if($(this).parent().is('.sublist')) {
    		$(this).hide();
    	}
    })
});
