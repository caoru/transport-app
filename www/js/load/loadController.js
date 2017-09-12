define(["app","js/load/loadView", "js/transportModel"], function(app, LoadView, Transport) {

  var bindings = [
  ];

  function init(query) {
    transport = new Transport();

    LoadView.render({
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

