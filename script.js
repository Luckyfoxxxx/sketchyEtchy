$(document).ready(function() {
		
		for (var i = 0; i <= 899; i++) {
			$('#wrapper').append("<div class='grid'> </div>");	
	
	};


$('.grid').hover(function() {
	$(this).css("background-color", "red");
});



$("#reset").click(function() {
	$(".grid").remove()
	$("#wrapper").css("background-color", "white")

	});


$('#start').click(function() {
	var amount = prompt("How many blocks do you want to play with?")
	for (var i = 1; i <=amount; i++ ) {
		$('#wrapper').append("<div class='grid'> <div>");
}

$('.grid').hover(function() {
	$(this).css("background-color", "red");
});

});



});













