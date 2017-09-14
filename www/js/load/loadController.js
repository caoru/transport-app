define(["app","js/load/loadView", "js/transportModel"], function(app, LoadView, Transport) {

  var bindings = [
  ];

  function init(basicInfo, query) {
    transport = new Transport();

    LoadView.render({
      basicInfo: basicInfo,
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

