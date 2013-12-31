describe("jasmine-promise", function() {
  it.promise("passes if the promise is resolved", function() {
    return Promise.resolve();
  });

  it.promise("even waits until it's resolved", function() {
    return new Promise(function(resolve, reject) {
      setTimeout(resolve, 100);
    });
  });

  it.promise("or waits until it's rejected", function() {
    return new Promise(function(resolve, reject) {
      setTimeout(reject, 100);
    });
  });

  it.promise("fails if the promise is rejected", function() {
    return Promise.reject("My error");
  });

  it.promise("fails even if rejected without a message", function() {
    return Promise.reject();
  });

  it.promise("fails if an expectation in the spec fails", function() {
    return new Promise(function(resolve, reject) {
      expect(true).toBe(false);
      resolve();
    });
  });
});
