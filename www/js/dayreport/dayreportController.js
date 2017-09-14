define(["app","js/dayreport/dayreportView", "js/transportModel"], function(app, DayreportView, Transport) {

  var bindings = [
  ];

  function init(basicInfo, query) {
    transport = new Transport();

    DayreportView.render({
      basicInfo: basicInfo,
      bindings: bindings
    });
  }

  return {
    init: init
  };
});

