define(["app","js/dayreport/dayreportView", "js/transportModel"], function(app, DayreportView, Transport) {

  var bindings = [
  ];

  function init(query) {
    transport = new Transport();

    DayreportView.render({
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

