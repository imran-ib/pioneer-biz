import Model from "./modules/model"
$(document).ready(function() {




// toggle mobile manu
		$(".navbar__mobile-manu").on('click' , function(){
			$('li').slideToggle(800);
		});



	

});


//import modules

var model = new Model()

// reveal 

window.sr = ScrollReveal();
sr.reveal('.portfolio');
sr.reveal('.services__unit');
sr.reveal('.about');
sr.reveal('.about__img');
sr.reveal('.about__vision');
sr.reveal('.footer');






