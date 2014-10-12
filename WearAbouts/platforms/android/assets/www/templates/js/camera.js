$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	var user = Parse.User.current();
	if (!user) {
	  window.location.replace("login.html");
	}

	user = Parse.User;

	var parseFile1;
	$("#camera_shot1").click(function() {
		var base64image;
		navigator.camera.getPicture(
			function(imageData) {
				base64image = imageData;
			},
			function(message){
				alert("Something went wrong. Camera could not be opened.");
			},
			{}
		);

		var imageBase64 = base64image.replace(/^data:image\/(png|jpeg);base64,/, "");
		var parseFile1 = new Parse.File(fileName, {base64:imageBase64});
		
		document.getElementById("camera_shot1").innerHTML = "Picture 1 Taken";
	});

	var parseFile2;
	$("#camera_shot2").click(function() {
		var base64image;
		navigator.camera.getPicture(
			function(imageData) {
				base64image = imageData;
			},
			function(message){
				alert("Something went wrong. Camera could not be opened");
			},
			{}
		);

		var imageBase64 = base64image.replace(/^data:image\/(png|jpeg);base64,/, "");
		var parseFile2 = new Parse.File(fileName, {base64:imageBase64});
		
		document.getElementById("camera_shot2").innerHTML = "Picture 2 Taken";
	});

	$("#picture_submit").click(function() {
		parseFile1.save().then(function() {
			parseFile2.save().then(function() {
				user.increment("upload_number");
				user.set("picture_pair" + user.get("upload_number").toString() + "a", parseFile1);
				user.set("picture_pair" + user.get("upload_number").toString() + "b", parseFile2);
				user.save();
				window.location.replace("stats.html");
			}, function(error) {
			  	alert("Something went wrong. Please try again.")
			});
		}, function(error) {
		  	alert("Something went wrong. Please try again.")
		});
	});


	$("#feed_button").click(function() {
		window.location.replace("feed.html");
	});

	$("#stats_button").click(function() {
		window.location.replace("stats.html");
	});

	$("#logout_button").click(function() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("login.html");
	});
});