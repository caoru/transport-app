require.config({
	paths: {
		handlebars: "lib/handlebars",
		text: "lib/text",
		hbs: "lib/hbs"
	},
	shim: {
		handlebars: {
			exports: "Handlebars"
		}
	}
});
define('app', ['js/router'], function(Router) {
  Router.init();

  var f7 = new Framework7({
    cache: false, /* disable caching */
    modalTitle: '운송',
    animateNavBackIcon: true,
    smartSelectOpenIn:'picker'
  });
  
  var mainView = f7.addView('.view-main', {
    dynamicNavbar: true
  });

  function getData(api) {
    var dataSource = 'http://transport-api.frag.kr/' + api;
    var result = null;

    $.ajax({
      type: 'GET',
      url: dataSource,
      headers : {
        'Authorization' : localStorage.getItem('auth-token')
      },
      async: false,
        console.log(textStatus);
        if (xhr.status == 200) {
          result = data;
        }
      },
        console.log(xhr.status);
        if (xhr.status == 500) {
          Router.load('login');
        }
      }

    });

    return result;
  }

  return {
    f7: f7,
    mainView: mainView,
    router: Router,
    getData: getData
  };
});
