function takeTurn(inVal) {
	if(inVal != "") {
		$(".gameout li:first").remove();
		$(".gameout").append(
		   "<li>" +
		   inVal +
		   "</li>");
		 $("input").removeAttr("value");
		 $(".gameout li:last").effect("bounce", {direction: "down", distance: "7", times: "2"})
		} 
	$("input").select();
};

$(document).ready(function() {
	$("#inputs").append(
		"<input value=\"What do you want to do?\" tabindex=1 size=55/><button type=submit tabindex=2>Do it!</button>");
	$("button").click(
		function () {
			takeTurn($("input").attr("value"));
		}); 
	$("input").click( function() { $(this).select(); });
	$("input").select();
	$("input").keypress(function(e) {
		if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
			$("button").click();
		}
	});
});
