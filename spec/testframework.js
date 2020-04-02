(function (exports) {
    function Test(value) {
        this.value = value
    }
    Test.prototype.toEqual = function (things) {
        if (this.value === things) {
            console.log('PASSED')
        }
        else {
            console.log(`FAILED: Expected ${this.value} to equal ${things}`)
        }
    }
    Test.prototype.toInclude = function (things) {
        if (this.value.includes(things)) {
            console.log('PASSED')
        }
        else {
            console.log(`FAILED: Expected ${this.value} to include ${things}`)
        }
    }
    Test.prototype.toBe = function (things) {
        let value = this.value.__proto__.constructor.name
        let things = this.value.__proto__.constructor.name
        if (value === things) {
            console.log('PASSED')
        }
        else {
            console.log(`FAILED: Expected ${value} to be a  ${things}`)
        }
    }
    var expect = function (value) {
        return new Test(value)
    }

    exports.expect = expect

})(this)
