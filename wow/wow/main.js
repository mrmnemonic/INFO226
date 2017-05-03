$(window).ready(function (){
  
  var init = function(){
	popup();
  };
  var isDone = true;
  
	var popup = function(){
		$('.buttonView').on('click', function(){
			$('#infoOpen').fadeToggle();
			$('#infoOpen').css({"top":"300px", "left":"400px"});
			$('.mask').fadeToggle();
		});
		$('.mask').on('click', function(){
			$('#infoOpen').fadeOut();
		});
		$('.infoClose').on('click', function(){
			$('.mask').fadeOut();
			$('#infoOpen').fadeOut();
		});
		
		$('.buttonView2').on('click', function(){
			$('#infoOpen2').fadeToggle();
			$('#infoOpen2').css({"top":"300px", "left":"400px"});
			$('.mask').fadeToggle();
		});
		$('.mask').on('click', function(){
			$('.mask').fadeOut();
			$('#infoOpen2').fadeOut();
		});
		$('.infoClose2').on('click', function(){
			$('.mask').fadeOut();
			$('#infoOpen2').fadeOut();
		});
	};
	init();
	
$(document).ready(function(){
        $(".addRow").click(function(){
            var project = $("#project").val();
            var schedule = $("#schedule").val();
            var markup = "<tr><td><input type='radio' name='record'></td><td>" + project + "</td><td>" + schedule + "</td></tr>";
            $("table tbody").append(markup);
        });
        
        $(".deleteRow").click(function(){
            $("table tbody").find('input[name="record"]').each(function(){
            	if($(this).is(":checked")){
                    $(this).parents("tr").remove();
                }
            });
        });
    });    
});
 
