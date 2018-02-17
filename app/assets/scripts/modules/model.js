import $ from 'jquery';

class Model {
	constructor(){
		this.openModelButton = $('.open-model');
		this.model = $('.model');
		this.closeModelButton = $('.model__close');
		this.events();

	}

	events(){
		// clicking the open model button

		this.openModelButton.on('click', this.openModel.bind(this))

		// clicking X close button

		this.closeModelButton.on('click', this.closeModel.bind(this))


		// keyboard events

		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e){
		if (e.keyCode == 27) {
			this.closeModel();
		}

	}


	openModel(){
		this.model.addClass("model__is--visible")
		return false;
	}

	closeModel(){
		this.model.removeClass("model__is--visible");

	}

}

export default Model;