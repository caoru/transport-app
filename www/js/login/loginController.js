define(["app","js/login/loginView", "js/carModel"], function(app, LoginView, Car) {

  var bindings = [{
		element: '.list-button',
		event: 'click',
		handler: login
  }];

  function init(basicInfo, query) {
    var cars = app.getData('cars');

    LoginView.render({
      bindings: bindings,
      cars: cars.cars
    });
  }

  function login() {
    $.ajax({
      type: 'POST',
      url: 'http://transport-api.frag.kr/auth/login',
      data: {
        "license_number": $('select[name=license_number]').val(),
        "cellular_phone": $('input[name=cellular_phone]').val(),
        "password": $('input[name=password]').val()
      },
      async: false,
      success: function(response, textStatus, xhr) {
        if (xhr.status == 200) {
          var token = response.auth_token;
          localStorage.setItem('auth-token', token);
          localStorage.setItem('user.id', response.user.id);
          localStorage.setItem('user.name', response.user.name);
          localStorage.setItem('user.company.name', response.user_company.name);
          localStorage.setItem('car.id', response.car.id);
          localStorage.setItem('car.license_number', response.car.license_number);
          localStorage.setItem('car.size', response.car.size);

          app.router.load('dayreport');
        }
      }
    });
  }

  return {
    init: init
  };
});

