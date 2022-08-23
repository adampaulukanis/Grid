'use strict';

import Grid from './index.js';
import { strict as assert } from 'node:assert';

let db = [];
function it(text, fun) {
    db.push({ text, fun });
}
function runTests() {
    function response(f) { if (f) return 'OK'; else return 'NOK'; };
    db.forEach(test => {
        console.log(`${response(test.fun())} = ${test.text}`);
    });
}


class Vector {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    plus(other) {
        return new Vector(this.x + other.x, this.y + other.y);
    }
};

let v = new Vector(1, 1);
it('test Vector', function () {
    let test = (v.x && v.x === 1 && v.y && v.y === 1);
    assert(test);
    return test;
});
let v2 = new Vector(-1, -2);
let v3 = new Vector(0, -1);
it('test if Vectors can add', function () {
    let test = ((v.plus(v2)).x === v3.x && (v.plus(v2)).y === v3.y);
    assert(test);
    return test;
}); 

let grid = new Grid(5, 5);
it('grid: if not set returns undefined', function () {
    assert(grid.get(new Vector(1, 1)) === undefined);
    return (grid.get(new Vector(1, 1)) === undefined);
});

it('grid: test if set works', function () {
    grid.set(new Vector(1, 1), "X");
    assert(grid.get(new Vector(1, 1)) === "X");
    return (grid.get(new Vector(1, 1)) === "X");
});


it('grid: isInside()', function () {
    let test = (grid.isInside(v));
    assert(test);
    return test;
});

runTests();
