edite.core = {
	init: function () {
		//$('body').css('background','red');
	},
    login: function () {
        
        var form = '<form action="#" class="edite-login">' +
                        '<div class="edite-login__header">Edite.js</div>' +
                        '<div class="edite-login__val-wrap">' +
                            '<input placeholder="Jméno" type="text" class="edite-login__val">' +
                        '</div>' +
                        '<div class="edite-login__val-wrap edite-login__val-wrap--password">' +
                            '<input placeholder="Heslo" type="password" class="edite-login__val">' +
                        '</div>' +
                        '<input type="submit" value="Přihlásit se" class="edite-login__btn">' +
                    '</form>';
        
        $('body').prepend(form);
        
        setTimeout(function(){
            $('.edite-login').addClass('edite-login--animate');
        }, 50);    
    }
}

