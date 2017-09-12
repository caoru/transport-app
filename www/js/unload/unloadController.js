define(["app","js/unload/unloadView", "js/transportModel"], function(app, UnloadView, Transport) {

  var bindings = [
  ];

  function init(query) {
    transport = new Transport();

    UnloadView.render({
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

