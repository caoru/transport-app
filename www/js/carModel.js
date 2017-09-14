define(['app'], function(app) {
  function Car(values) {
    values = values || {};

		this.id = values['id'] || '';
		this.licenseNumber = values['license_number'] || '';
		this.model = values['model'] || '';
		this.size = values['size'] || '';
		this.manufacturerId = values['manufacturer_id'] || '';
		this.companyId = values['company_id'] || '';
  }

  Car.prototype.setValues = function(formInput) {
    for (var field in formInput) {
      if (this[field] !== undefined) {
        this[field] = formInput[field];
      }
    }
  };

  Car.prototype.validate = function() {
    var result = true;
    return result;
  };

  return Car;
});

