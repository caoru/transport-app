define(['hbs!js/unload/unload'], function(viewTemplate) {
  var $ = Framework7.$;

  function render(params) {
    $('.content-page').html(viewTemplate({ basicInfo: params.basicInfo }));
    $('.tabbar').css('display', 'block');
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

