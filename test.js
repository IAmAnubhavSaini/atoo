import test from 'ava';
import atoo from './';

test('atoo.arrayToObject([1, 2, 3, \'a\', \'b\'], \'i-\'); should return an object.)', async t => {
    var arr = [1, 2, 3, 'a', 'b'];
    var x = atoo.arrayToObject(arr, 'i-');
    t.is(typeof x, typeof {});
    t.not(Array.isArray(x), true);
    t.is(x['i-' + 0], arr[0]);
    t.is(x['i-' + 1], arr[1]);
    t.is(x['i-' + 2], arr[2]);
    t.is(x['i-' + 3], arr[3]);
    t.is(x['i-' + 4], arr[4]);
});

/* eslint-disable no-sparse-arrays */
test('atoo.arrayToObject([1, 2, 3, \'a\',,,, \'b\'], \'i-\'); should return an object.)', async t => {
    var arr = [1, 2, 3, 'a',,,, 'b'];
    var x = atoo.arrayToObject(arr, 'i-');
    t.is(typeof x, typeof {});
    t.not(Array.isArray(x), true);
    t.is(x['i-' + 0] === arr[0] && arr[0] === 1, true);
    t.is(x['i-' + 1] === arr[1] && arr[1] === 2, true);
    t.is(x['i-' + 2] === arr[2] && arr[2] === 3, true);
    t.is(x['i-' + 3] === arr[3] && arr[3] === 'a', true);
    t.is(x['i-' + 4] === arr[4] && arr[4] === undefined, true);
    t.is(x['i-' + 5] === arr[5] && arr[5] === undefined, true);
    t.is(x['i-' + 6] === arr[6] && arr[6] === undefined, true);
    t.is(x['i-' + 7] === arr[7] && arr[7] === 'b', true);
});
/* eslint-enable no-sparse-arrays */
