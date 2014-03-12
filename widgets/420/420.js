var now = new Date();
var millisTill420 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 16, 20, 0, 0) - now;
if (millisTill420 < 0) {
     millisTill420 += 86400000; // it's after 10am, try 10am tomorrow.
}

function on420() {
	$('#div420').css("display","inherit");
	setTimeout('off420();','1000');
}

function off420() {
	$('#div420').css("display","none");
}

setTimeout(on420, millisTill420);