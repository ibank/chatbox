function takeTurn() {
	if($("input").attr("value") != "") {
		$(".gameout li:first").remove();
		$(".gameout").append(
		   "<li>" +
		   $("input").attr("value") +
		   "</li>");
		 $("input").removeAttr("value");
		} 
		
};

$(document).ready(function() {
	$(".gameout").after(
		"<input value=\"What next?\" size=40/><button>Do it!</button>");
	$("button").click(
		function () {takeTurn();}); 
		
});
