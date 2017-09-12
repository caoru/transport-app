define(['app'], function(app) {
  function Transport(values) {
    values = values || {};
  }

  Transport.prototype.setValues = function(formInput) {
    for (var field in formInput) {
      if (this[field] !== undefined) {
        this[field] = formInput[field];
      }
    }
  };

  Transport.prototype.validate = function() {
    var result = true;
    return result;
  };

  return Transport;
});

