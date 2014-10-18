$(document).ready(function() {
	var spinner = new Spinner().spin();
	document.body.appendChild(spinner.el);
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
	var first_picture = user.get("picture_pair1a");
	var second_picture = user.get("picture_pair1b");
	document.getElementById("pic1").src = first_picture.url();
	document.getElementById("pic2").src = second_picture.url();


	//new code
	var Post = Parse.Object.extend("Post");
	var query = new Parse.Query(Post);
	query.equalTo("user", user.get("username"));
	query.find({
	  success: function(results) {
	  	var post = results[0];
	    $('#count1').text("Current count for picture 1: " + post.get("count_a"));
	    $('#count2').text("Current count for picture 2: " + post.get("count_b"));
	  },
	  error: function(error) {
	    console.log("Error: " + error.code + " " + error.message);
	  }
	});
	spinner.stop();
});
