define(['app'], function(app) {
  function BasicInfo(values) {
    values = values || {};
    this.user = {};
    this.user.company = {};
    this.car = {};

    this.user.id = localStorage.getItem('user.id');
    this.user.name = localStorage.getItem('user.name');
    this.user.company.name = localStorage.getItem('user.company.name');
    this.car.id = localStorage.getItem('car.id');
    this.car.license_number = localStorage.getItem('car.license_number');
    this.car.size = localStorage.getItem('car.size');
  }

  BasicInfo.prototype.setValues = function(formInput) {
    for (var field in formInput) {
      if (this[field] !== undefined) {
        this[field] = formInput[field];
      }
    }
  };

  BasicInfo.prototype.validate = function() {
    var result = true;
    return result;
  };

  return BasicInfo;
});

