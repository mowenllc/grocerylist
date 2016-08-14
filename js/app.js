$(document).ready(function() {
	 $("#add").on("click", function() {
		var item = $('#item').val();
		if (item === ""){
			alert('Please enter an item!');
		}
		else {
			$('#grocerylist').append("<li class=\"food\"><span class=\"glyphicon glyphicon-ok-sign\"></span>" + item + "<span class=\"glyphicon glyphicon-trash\"></span></li>");
			$(".glyphicon-trash").on("click", function(){
				$(this).closest('li').remove();	
			});
		}
	});
	$(".glyphicon-trash").on("click", function(){
		$(this).closest('li').remove();	
	});
});