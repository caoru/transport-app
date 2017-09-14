define(["app","js/unload/unloadView", "js/transportModel"], function(app, UnloadView, Transport) {

  var bindings = [
  ];

  function init(basicInfo, query) {
    transport = new Transport();

    UnloadView.render({
      basicInfo: basicInfo,
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

