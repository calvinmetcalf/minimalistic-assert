module.exports = assert;

function assert(val, msg) {
  if (!val)
    throw new Error(msg || 'Assertion failed');
}

assert.equal = function assertEqual(l, r, msg) {
  var err;

  if (l != r)
    err = new Error(msg || ('Assertion failed: ' + l + ' != ' + r));
    err.name = 'AssertionError';
    err.actual = l;
    err.expected = r;
    err.operator = '==';
    if (Error.captureStackTrace) {
      Error.captureStackTrace(err, assert.equal);
    }

    throw err;
};
