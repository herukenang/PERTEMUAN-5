var awesomeNewModule = (function () {
    var exports = {};
    exports.helloMars = function () {
        console.log("Hello Mars!");
    }
    exports.goodbye = function () {
        console.log("Goodbye!");
    };
    return exports
}());

export default awesomeNewModule;