/* Extension using the JavaScript localStorage API */
/* Sayamindu Dasgupta <sayamindu@media.mit.edu>, April 2014 */

new (function() {
    var ext = this;

    ext.set_localstorage = function (data) {
        localStorage.setItem("ls1", data);
    };

    ext.change_localstorage = function(change) {
        var data = localStorage.getItem("ls1");
        if (!isNaN(parseFloat(data))) {
             localStorage.setItem("ls1",  change);
        }
    };

    ext.get_localstorage = function () {
        return localStorage.getItem("ls1");
        /*return "abc";*/
    };

    ext._shutdown = function() {};


    ext._getStatus = function() {
        var test = 'test';
        try {
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
        } catch(e) {
            return {status: 1, msg: 'Your browser does not support the localStorage API'};
        }

        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            ['', 'set local data to %s', 'set_localstorage', '0'],
            ['', 'change local data by %d', 'change_localstorage', 1],
            ['r', 'local data', 'get_localstorage'],
        ],
    };

    ScratchExtensions.register('Local Storage', descriptor, ext);
})();
