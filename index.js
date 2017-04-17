(function () {
  if(typeof exports === 'object') {
    module.exports = assert;
  } else {
    window.assert = assert;
  }

  function assert(val, msg) {
    if (!val)
      throwAssertion(msg || (String(val) + ' == ' + true), val, true, '==', assert);
  }

  assert.equal = function assertEqual(l, r, msg) {
    if (l != r)
      throwAssertion(msg || (JSON.stringify(l) + ' == ' + JSON.stringify(r)), l, r, '==', assertEqual);
  };

  function throwAssertion(message, actual, expected, operator, stackStartFunction) {
    var err = new Error(message);
    err.name = 'Assertion failed';
    err.actual = actual;
    err.expected = expected;
    err.operator = operator;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, stackStartFunction);
    }

    throw err;
  }
} ());
