define(["app","js/monthreport/monthreportView", "js/transportModel"], function(app, MonthreportView, Transport) {

  var bindings = [
  ];

  function init(basicInfo, query) {
    transport = new Transport();

    MonthreportView.render({
      basicInfo: basicInfo,
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

