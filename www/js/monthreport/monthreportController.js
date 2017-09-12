define(["app","js/monthreport/monthreportView", "js/transportModel"], function(app, MonthreportView, Transport) {

  var bindings = [
  ];

  function init(query) {
    transport = new Transport();

    MonthreportView.render({
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

