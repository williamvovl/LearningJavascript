// alert('Hello');

var batwing = {
	status: "Ready",
	rescueBatman: function() {
		document.querySelector("#h2header").innerHTML = "vehicle locating";
	}
};

if (batwing.status === "Ready") {
	batwing.rescueBatman();
}

var utilities = {
	printAllMembers: function(targetObject) {
		for (var i in targetObject) {
			document.querySelector("#h3header").innerHTML += "<br />" + targetObject[i];
		}
	}
};

// utilities.printAllMembers(batwing);

// var i_am_empty = { };

// utilities.printAllMembers(i_am_empty);

var planet = {
	id: 34,
	name: "Ryan",
	faction: {
		factionID: 2,
		name: "David",
		notification: function() {
			document.querySelector("#h4header").innerHTML += "<br />" + "David and Ryan";
		}
	},
	cities: [
		{ locationID: 15, name: "Gladius"},
		{ locationID: 16, name: "Rome"}
	]
};

// planet.faction.notification();



// document.querySelector("#h4header").innerHTML += "<br />" + planet.cities[0].name;



document.querySelector("#h4header").innerHTML += "<br />" + planet.name;
planet.name = "Jenifer";
document.querySelector("#h4header").innerHTML += "<br />" + planet.name;



// var z = planet;
// document.querySelector("#h4header").innerHTML = "<br />" + z.name;



// if (typeof planet.defense === "undefined") {
// 	planet.defense = "Iron Man";
// }
// document.querySelector("#h4header").innerHTML = "<br />" + planet.defense;



// for (var member in planet) {
// 	document.querySelector("#h4header").innerHTML += "<br /> " + member + "===>" + planet[member];
// }



// // a constructor
// function car(make, model, year) {
// 	this.make = make;
// 	this.model = model;
// 	this.year = year;
// }
// //create a new instance
// var myCar = new car("Eagle", "Talon TSI", 1993);
// var myCar1 = new car("Dodge", "Dart", 1971);
// alert(myCar.model);