$(function() {
	
	//jquery test

    $("#add").on("click", function() {
        var val = $("input").val();

        if(val !== '') {
			//elements de la liste
            var elem = $("<li></li>").text(val);
			//barrer ou supprimer text
			$(elem).prepend("<button class='line'>-</button><br>");
            $(elem).prepend("<button class='rem'>X</button>");
			//ajout text
            $("#mylist").append(elem);
            $("input").val("");
            //evenement au click barrer ou supprimer
			$(".line").on("click", function() {
             $(this).parent().css({'text-decoration':'line-through', 'color': 'lightgreen'});
            });
			
			$(".rem").on("click", function() {
            $(this).parent().remove();
			 
			 
            });
        }
    });
	//la meme chose qd on appuie sur entree
	$("#text_list").keyup(function(event){
		if (event.keyCode === 13){
			$("#add").click();
		}
	});

});
