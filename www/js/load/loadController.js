define(["app","js/load/loadView", "js/transportModel"], function(app, LoadView, Transport) {

  var pickerCompany;

  var bindings = [
    {
		  element: '.transport-company',
		  event: 'click',
		  handler: openPickerCompany
    }
  ];

  function init(basicInfo, query) {
    transport = new Transport();

    var items = app.getData('items');
    var bays = app.getData('bays');
    var companies = app.getData('companies');

    var pickerCompanyValues = [];

    companies.companies.forEach(function(current) {
      pickerCompanyValues.push(current.name);
    });

    LoadView.render({
      basicInfo: basicInfo,
      bindings: bindings,
      items: items.items,
      bays: bays.bays,
      companies: companies.companies,
      app: app
    });

    pickerCompany = app.f7.picker({
      input: '#transport-company',
      cols: [
        {
          textAlign: 'center',
          values: pickerCompanyValues
        }
      ]
    });
  }

  function openPickerCompany() {
    pickerCompany.open();
  }

  return {
    init: init
  };
});

