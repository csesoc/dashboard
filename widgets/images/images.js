function playImages() {
	var albumID;
	var photoID;
	var photoURL;
	$.getJSON("https://graph.facebook.com/csesoc/albums", function( albumdata ) {
		var array = albumdata.data;

		var albumob = array[Math.floor(Math.random()*array.length)];
		albumID = albumob.id
		while (albumID=="279434445422868" || albumID=="211032138929766") {
			var albumob = array[Math.floor(Math.random()*array.length)];
			albumID = albumob.id
		}
		console.log(albumID)

		$.getJSON("https://graph.facebook.com/"+albumID+"/photos", function( photodata ) {
			
			var array = photodata.data;
			var photoob = array[Math.floor(Math.random()*array.length)];
			photoID = photoob.id
			photoURL = photoob.images[0].source
			console.log(photoURL)

			$('#images').parent().css({'background-image':'url('+photoURL+')'});
  			$('#images').parent().css('background-size','cover');
		});
	});

}

playImages();
setInterval(playImages, 60000);