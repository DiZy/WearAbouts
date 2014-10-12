$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");
	console.log("hello");
	var user = Parse.User.current();
	if (!user) {
	  window.location.replace("login.html");
	}

	var decrementer = 0;
	var picture1 = user.get("picture_pair" + user.get("upload_number").toString() + 'a');
	var picture2 = user.get("picture_pair" + user.get("upload_number").toString() + 'b');
	$("display")[0].src = picture1.url();
	$("display")[1].src = picture2.url();

	$("#next_number").click(function() {
		if (decrement < user.get("upload_number")) {
			++decrementer;
			picture1 = user.get("picture_pair" + (user.get(upload_number) - decrementer).toString() + 'a');
			picture2 = user.get("picture_pair" + (user.get(upload_number) - decrementer).toString() + 'b');
			$("display")[0].src = picture1.url();
			$("display")[1].src = picture2.url();
		}
	});

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
});