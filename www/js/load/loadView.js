define(['hbs!js/load/load'], function(viewTemplate) {
  var $ = Framework7.$;

  function render(params) {
    $('.content-page').html(viewTemplate({
      basicInfo: params.basicInfo,
      items: params.items,
      bays: params.bays,
      companies: params.companies
    }));
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

