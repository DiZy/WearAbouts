$(document).ready(function() {
	Parse.initialize("MSEW9txqvEpGiAAWRTDGEkwkW2hdkdcWSG7i9hAR", "5Zbv70ZN4wBylpDB0R6w50R8gT4BJYBiXBWOfsAM");

	var user = Parse.User.current();
	if (!user) {
	  window.location.replace("login.html");
	}
	function encodeImageUri(imageUri)
	{
	     var c=document.createElement('canvas');
	     var ctx=c.getContext("2d");
	     var img=new Image();
	     img.onload = function(){
	       c.width=this.width;
	       c.height=this.height;
	       ctx.drawImage(img, 0,0);
	     };
	     img.src=imageUri;
	     var dataURL = c.toDataURL("image/jpeg");
	     return dataURL;
	}
	var parseFile1;
	$("#camera_shot1").click(function() {
		navigator.camera.getPicture(
			function(imageData) {
				document.getElementById('pic1').src = 'data:image/jpeg;base64,' + imageData;


    			var imageBase64 = imageData.replace(/^data:image\/(png|jpeg);base64,/, "");
    			parseFile1 = new Parse.File("UploadOne", {base64:imageBase64});
			},
			function(message){
				alert("Something went wrong. Camera could not be opened.");
			},
			{destinationType:Camera.DestinationType.DATA_URL}
		);
		
		
		$('#camera_text1').text('Picture Taken');
	});

	var parseFile2;
	$("#camera_shot2").click(function() {
		navigator.camera.getPicture(
			function(imageData) {
				document.getElementById('pic2').src = 'data:image/jpeg;base64,' + imageData;

    			var imageBase642 = imageData.replace(/^data:image\/(png|jpeg);base64,/, "");
    			parseFile2 = new Parse.File("UploadTwo", {base64:imageBase642});
			},
			function(message){
				alert("Something went wrong. Camera could not be opened");
			},
			{destinationType:Camera.DestinationType.DATA_URL}
		);
		
		$('#camera_text2').text('Picture Taken');
	});

	$("#picture_submit").click(function() {
		parseFile1.save().then(function() {
			parseFile2.save().then(function() {
				user.set("upload_number", 1);
				user.set("picture_pair" + "1a", parseFile1);
				user.set("picture_pair" + "1b", parseFile2);
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