"use strict";

function Vector2(x, y) {
    this.x = typeof x !== "undefined" ? x : 0;

    this.y = typeof y !== "undefined" ? y : 0;
}

Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y);
};

Vector2.prototype.equals = function (vector) {
    return this.x === vector.x && this.y === vector.y;
};

Vector2.prototype.addTo = function (value) {
    if (value.constructor === Vector2) {
        this.x = this.x + value.x;
        this.y = this.y + value.y;
    }

    if (value.constructor === Number) {
        this.x += value;
        this.y += value;
    }
    return this;
};

Vector2.prototype.add = function(vector) {
    var newVector = this.copy();
    return newVector.addTo(vector);
}

Vector2.prototype.substractFrom = function (value) {
    if (value.constructor === Vector2) {
        this.x = this.x - value.x;
        this.y = this.y - value.y;
    }

    if (value.constructor === Number) {
        this.x -= value;
        this.y -= value;
    }
    return this;
}

Vector2.prototype.substract = function (vector) {
    var newVector = this.copy();
    return newVector.substractFrom(vector);
}


Vector2.prototype.multiplyMutable = function (value) {

    if (value.constructor === Vector2) {
        this.x = this.x * value.x;
        this.y = this.y * value.y;
    }

    if (value.constructor === Number) {
        this.x *= value;
        this.y *= value;
    }
    return this;
};

Vector2.prototype.multiply = function (value) {
    var result = this.copy();
    return result.multiplyMutable(value);
};

Vector2.prototype.divideMutable = function (value) {

    if (value.constructor === Vector2) {
        if (value.x !== 0 && value.y !== 0) {
            this.x = this.x / value.x;
            this.y = this.y / value.y;
        }
    }

    if (value.constructor === Number) {
        if (value !== 0) {
            this.x /= value;
            this.y /= value;
        }
    }
    return this;
};

Vector2.prototype.divide = function (value) {
    var result = this.copy();
    return result.divideMutable(value);
};

Vector2.prototype.toString = function () {
    return "(" + this.x + ", " + this.y + ")";
};

Vector2.prototype.normalize = function () {
    var length = this.length;
    if (length === 0)
        return;
    this.divideBy(length);
};

Object.defineProperty(Vector2.prototype, "zero",
{
    get: function() {
        return new Vector2();
    }
});
