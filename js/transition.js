function trans1() {

	var random = Math.floor(Math.random() * $('.widget1').length);
	var random2 = Math.floor(Math.random() * $('.widget1').length);

	widget1 = $('.widget1').eq(random)
	widget2 = $('.widget1').eq(random2)
	widget1col = widget1.attr("data-col")
	widget2col = widget2.attr("data-col")
	widget1.attr("data-col", widget2col)
	widget2.attr("data-col", widget1col)
}



//setInterval(trans1,10000);

function trans2() {
	var randombig = Math.floor(Math.random() * $('.widget2').length);

	var randoms1 =  Math.floor(Math.random() * ($('.widget1').length-1));

	widgetbig = $('.widget2').eq(randombig)
	widgets1 = $('.widget1').eq(randoms1)
	widgets2 = $('.widget1').next()


	widgetbigcol = widgetbig.attr("data-col")
	widgetbigrow = widgetbig.attr("data-row")

	widgets1col = widgets1.attr("data-col")
	widgets1row = widgets1.attr("data-row")

	widgets2col = widgets2.attr("data-col")
	widgets2row = widgets2.attr("data-row")

	widgetbig.attr("data-col", widgets1col)
	widgetbig.attr("data-row", widgets1row)

	widgets1.attr("data-col", widgetbigcol)
	widgets1.attr("data-row", widgetbigrow)

	widgets2.attr("data-col", widgets1.attr("data-col")+1)
	widgets2.attr("data-row", widgets1.attr("data-row"))

}

// setInterval(trans2,10000);

