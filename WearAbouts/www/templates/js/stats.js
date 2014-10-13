$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");
	console.log("hello");
	var user = Parse.User.current();
	if (!user) {
	  window.location.replace("login.html");
	}
	if(user.get("upload_number") == 0){
		alert("No pictures uploaded!");
		window.location.replace("feed.html");
	}
	user.fetch();
	$('#count1').text("Current count for picture 1: " + user.get("vote_a"));
	$('#count2').text("Current count for picture 2: " + user.get("vote_b"));
	var first_picture = user.get("picture_pair1a");
	var second_picture = user.get("picture_pair1b");
	document.getElementById("pic1").src = first_picture.url();
	document.getElementById("pic2").src = second_picture.url();

	var decrementer = 0;
	var picture1 = user.get("picture_pair" + user.get("upload_number").toString() + 'a');
	var picture2 = user.get("picture_pair" + user.get("upload_number").toString() + 'b');

	$("#camera_button").click(function() {
		console.log("hi");
		window.location.replace("camera.html");
	});

	$("#feed_button").click(function() {
		window.location.replace("feed.html");
	});

	$("#logout_button").click(function() {
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("login.html");
	});
	$("#stats_button").click(function() {
		window.location.replace("stats.html");
	});
});
