// vyvolání inicializace
var edite = {
	config: {
		lang: 'cs',
        login: false,
	},
	init: function () {
        
        if (this.config.login == false) {  
		  this.watchOnLogin.init();
        } else if (this.config.login == true) {
            
        }
	},
	lang: function () {
		
	},
    
    queryUserLogin: function () {
        
    },
	watchOnLogin: 	{
		init: function () {
			document.onkeydown = this.saveKeyboard;
		},
		pressedKeyboard: [], // pole pro ukládání kódů stiknutých klávesnic
		saveKeyboard: function (e) {
			var self = edite.watchOnLogin; // TODO:

			// uložení stiknuté klávesnice na první místo v poli
			self.pressedKeyboard.unshift(e.keyCode);
			self.compare();
		},
		compare: function () {
			// hlídá zda se napíše slovo edite
			if(this.pressedKeyboard[0] == 69 && // e
			   this.pressedKeyboard[1] == 84 && // d
			   this.pressedKeyboard[2] == 73 && // i
			   this.pressedKeyboard[3] == 68 && // t
			   this.pressedKeyboard[4] == 69){  // e
				
				document.onkeydown = null;
				this.jQuery.init();
			}
				
		},
		jQuery: {
            init: function () {
                this.test();
            } ,
			test: function () {
				if(!window.jQuery){
					this.install();
				}else{
					if( $.fn.jquery != "1.12.3"){
						console.warn('Edite.js byl vyvinut na jQuery 1.12.3!');
					}
					edite.watchOnLogin.editeCore(); //TODO:
				}	
			},
			install: function () {
				var script = document.createElement('script');
				script.src = "edite/jquery-1.12.3.min.js";
				script.onload = function() {
					edite.watchOnLogin.installCoreJS();
				};
				document.getElementsByTagName('head')[0].appendChild(script);
			}
		},
		installCoreJS: function () {
			$.getScript( "edite/core.js" ).fail(function( jqxhr, settings, exception ) {
				console.error('Nepovedlo se pripojit edite/core.js');
			}).done(function( script, textStatus ) {
                edite.watchOnLogin.installCoreCSS();  //TODO:
            });
		},
        installCoreCSS: function () {
            var style = document.createElement('link');
            style.rel = "stylesheet";
            style.href = "edite/edite.css";
            style.onload = function() {
                edite.core.login();
            };
            document.getElementsByTagName('head')[0].appendChild(style);
        }
	},
}

edite.init();