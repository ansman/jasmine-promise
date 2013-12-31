Jasmine promise
===
Adds supports for returning promises in specs.

Usage
---
Simply include the `jasmine-promise.js` file before your specs and then you can
use it in your tests:
```javascript
decribe("My module", function() {
  it.promise("does awesome things", function() {
    return new Promise(function(resolve, reject) {
      expect(something).toBe(somethingElse);

      if (someCondition)
        resolve();
      else
        reject("Some error");
    });
  });
});
```

For more examples see [`jasmine-promise-spec.js`](https://github.com/ansman/jasmine-promise/tree/master/specs/jasmine-promise-spec.js).

Supported versions
---
All versions of Jasmine should be supported.

1.3.1 and 2.0 have both been tested.

License
---
jasmine-promise is licensed under the [MIT license](https://github.com/ansman/jasmine-promise/tree/master/LICENSE).
