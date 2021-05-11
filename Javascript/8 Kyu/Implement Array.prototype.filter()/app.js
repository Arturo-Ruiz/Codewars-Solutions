Array.prototype.filter = function (func) {
    var res = [];
    for (var i = 0; i < this.length; i++) {
        if (func(this[i])) {
            res.push(this[i]);
        }
    }
    return res;
}
