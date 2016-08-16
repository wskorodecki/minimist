var parse = require('../');
var test = require('tape');

test('uses a value from last occurrence of an argument if useOnlyLastValue is set', function (t) {
    var argv = parse(['--aaa=a', '--aaa=b', '--aaa=c'], {
        useOnlyLastValue: true
    });

    t.deepEqual(argv, {
        aaa: 'c',
        _: []
    });

    t.end();
});
