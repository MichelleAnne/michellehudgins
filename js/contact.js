// JavaScript Document
/***************************/
//@Author: Adrian "yEnS" Mato Gondelle & Ivan Guardado Castro
//@website: www.yensdesign.com
//@e_mail: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

$(document).ready(function(){
	//global vars
	var form = $("#customForm");
	var name = $("#name");
	var nameInfo = $("#nameInfo");
	var e_mail = $("#e_mail");
	var e_mailInfo = $("#e_mailInfo");
	var message = $("#message");	
	
	//On blur
	name.blur(validateName);
	e_mail.blur(validatee_mail);
	//On key press
	name.keyup(validateName);
	message.keyup(validateMessage);
	//On Submitting
	form.submit(function(){
		if(validateName() & validatee_mail() & validateMessage())
			return true
		else
			return false;
	});
	
	//validation functions
	function validatee_mail(){
		//testing regular expression
		var a = $("#e_mail").val();
		var filter = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
		//if it's valid e_mail
		if(filter.test(a)){
			e_mail.removeClass("error");
			e_mailInfo.removeClass("error");
			return true;
		}
		//if it's NOT valid
		else{
			e_mail.addClass("error");
			e_mailInfo.addClass("error");
			return false;
		}
	}
	function validateName(){
		//if it's NOT valid
		if(name.val().length < 4){
			name.addClass("error");
			nameInfo.addClass("error");
			return false;
		}
		//if it's valid
		else{
			name.removeClass("error");
			nameInfo.removeClass("error");
			return true;
		}
	}

	function validateMessage(){
		//it's NOT valid
		if(message.val().length < 10){
			message.addClass("error");
			return false;
		}
		//it's valid
		else{			
			message.removeClass("error");
			return true;
		}
	}
});

$(function() {
  
// Dropdown toggle
$('.mobilemenu').click(function(){
  $(this).next('.sub-menu').toggle();
});

$(document).click(function(e) {
  var target = e.target;
  if (!$(target).is('.mobilemenu') && !$(target).parents().is('.mobilemenu')) {
    $('.sub-menu').hide();
  }
});



$(".mobilemenu").click(function(){
    	if(this.checked == true) { //3rd radiobutton
    		$("#customForm").attr("disabled", "disabled"); 
    	}
    	else {
    		$("#customForm").removeAttr("disabled"); 
    	}

  });





});




