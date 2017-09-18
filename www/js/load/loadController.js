define(["app","js/load/loadView", "js/transportModel"], function(app, LoadView, Transport) {

  var bindings = [
    {
		  element: '.load-init',
		  event: 'click',
		  handler: initLoad
    },
    {
		  element: '.load-submit',
		  event: 'click',
		  handler: submitLoad
    },
  ];

  var gBasicInfo;

  function init(basicInfo, query) {
    transport = new Transport();

    var items = app.getData('items');
    var bays = app.getData('bays');
    var companies = app.getData('companies');
    gBasicInfo = basicInfo;

    LoadView.render({
      basicInfo: basicInfo,
      bindings: bindings,
      items: items.items,
      bays: bays.bays,
      companies: companies.companies
    });
  }

  function initLoad() {
    $('select[name=load-item]').parent('.smart-select').find('.smart-select-value').text('선택해주세요');;
    $('select[name=load-bay]').parent('.smart-select').find('.smart-select-value').text('선택해주세요');;
    $('select[name=load-company]').parent('.smart-select').find('.smart-select-value').text(gBasicInfo.user.company.name);
  }

  function submitLoad() {
    var item = $('select[name=load-item]').parent('.smart-select').find('.smart-select-value').text();
    var bay = $('select[name=load-bay]').parent('.smart-select').find('.smart-select-value').text();
    var company = $('select[name=load-company]').parent('.smart-select').find('.smart-select-value').text();
    console.log(item);
    console.log(bay);
    console.log(company);
  }

  return {
    init: init
  };
});

