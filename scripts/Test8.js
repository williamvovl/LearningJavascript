  $( function() {
    $( "#tabs" ).tabs();

    $( "#datepicker" ).datepicker({
    	onSelect: function(dataText, inst){
    		$('#title').text("You picked " + dataText);
    	}
    	});



    // alert(window.version);
    alert(AETRIS.planet.name);
  } );


  //var version = "1.2";

  var AETRIS = {};
  AETRIS.version = "1.2";

  AETRIS.planet = {
  	id: 34,
  	name: "Intems"
  }