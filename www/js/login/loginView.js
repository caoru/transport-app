define(['hbs!js/login/login'], function(viewTemplate) {
  var $ = Framework7.$;

  function render(params) {
    $('.content-page').html(viewTemplate({
      cars: params.cars
    }));
    $('.tabbar').css('display', 'none');
    bindEvents(params.bindings);
  }

  function bindEvents(bindings) {
    for (var i in bindings) {
      $(bindings[i].element).on(bindings[i].event, bindings[i].handler);
    }
  }

  return {
    render: render
  }
});

