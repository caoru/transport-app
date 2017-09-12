define(['hbs!js/monthreport/monthreport'], function(viewTemplate) {
  var $ = Framework7.$;

  function render(params) {
    $('.content-page').html(viewTemplate({}));
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

