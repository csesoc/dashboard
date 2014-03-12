function quotes() {
	var quotes = [["Where does butt come from?","Davina Adisusila"],["But our random was clever","Vincent Tran"],["My internet is late","Vincent Wong"],["But you'll get diabilities","Lucas Pickup"],["Don't have babies here","Mrinal Chakravarthy"],["We can go as snoopy-doo","Vincent Wong"],["I have a vagina","Pierre Estephan"],["I couldn't get clitoris","Michael Nam Lee"],["Rub my shaft","Nicola Gibson"],["I do love the cock","Pierre Estaphan"]];

	var selected = Math.floor((Math.random()*quotes.length));
	$("#quoteQuote").html(quotes[selected][0]);
	$("#quotePerson").html(quotes[selected][1]);
}

quotes();
setInterval(quotes, 10000);