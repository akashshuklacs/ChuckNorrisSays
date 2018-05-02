$( document ).ready(function() {
	var abc="";
	$(".new-quote").on("click",function(){
  		console.log("We are Inside");
  		$.getJSON("https://api.chucknorris.io/jokes/random", function(json) {
  			abc=json.value;
  			console.log(abc);
  			$(".text").html(abc);

  		});
  	});
	//Twitter Button
  	$("#tweet-quote").on("click",function(json){
  		
  			console.log("Challao");
  			var thisQuote = abc;
  			console.log(thisQuote);
  			$("#tweet-quote").attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + thisQuote+ "%0a--- ");
  	});

  	$("#tumblr-quote").on("click",function(json){
  		
  			console.log(" Yo vChallao");
  			var Quote = abc;
  			console.log(Quote);
  			$("#tumblr-quote").attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(Quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
  	});

///////////////////////////////Document.ready wala
});


