$(document).ready(function() {
	$("#camera_button").click(function() {
		var spinner = new Spinner().spin();
		document.body.appendChild(spinner.el);
		window.location.replace("camera.html");
		spinner.stop();
	});

	$("#feed_button").click(function() {
		var spinner = new Spinner().spin();
		document.body.appendChild(spinner.el);
		window.location.replace("feed.html");
		spinner.stop();
	});

	$("#logout_button").click(function() {
		var spinner = new Spinner().spin();
		document.body.appendChild(spinner.el);
		Parse.User.logOut();
		var currentUser = Parse.User.current();
		window.location.replace("login.html");
		spinner.stop();
	});
	$("#stats_button").click(function() {
		var spinner = new Spinner().spin();
		document.body.appendChild(spinner.el);
		window.location.replace("stats.html");
		spinner.stop();
	});
});