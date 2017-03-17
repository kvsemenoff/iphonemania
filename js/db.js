$(function(){

	$('.js-phone').mask('+7 (999) 999 - 99 - 99?');

	var owl = $(".slider-db");

owl.owlCarousel({

        loop:true,//Зацикливаем слайдер
        nav:true, //Навигация включена
        autoplay:false,//автозапуск
        smartSpeed:1000,//Время движения
        margin:0,    
        navText:['<span class="slider-left"></span>','<span class="slider-right"></span>'],
        responsive:{
          0:{
            items:1
        },       
        992:{
            items:3
        },
        1248:{
            items:3
        }
    }

});

/*MODAL WINDOW*/
	$('a[name="js-modal"]').on("click", function(e){
		e.preventDefault();
		var  id = $(this).attr('href'),
		winW = $(window).width(),
		winH = $(window).height();
		$(id).css("left", winW/2-$(id).width()/2);
		$(id).css("top", winH/2-$(id).height()/2);
		$('body').css("overflow-y", "hidden");
		$(id).fadeIn();
		$('#js-mask').fadeIn();
	});

	$('#js-mask, .js-cres').on("click", function(){
		$('#js-mask').hide();
		$('.js-window').hide();
		$('body').removeAttr("style");
	});

	/*MODAL SUBMIT*/
	$('.js-submit').submit(function(){
		var phone = $(this).find('input[name="phone"]');
		
		if(phone.val() == ""){
			phone.focus();
			return false;
		}

		else{
			var form_data = $(this).serialize(); 
			$.ajax({
				type: "POST", 
				url: "/message.php", 
				data: form_data,
				success: function() {
					cleanTnanks(this);
				}
			});
		}
		return false;
	});

	function cleanTnanks(form){
		$('.js-window').hide();
		$("input[type=text]").val("");
		$('a[href=#js-form2]').trigger('click');
				// location = "thanks.php";
			};

});//END READY