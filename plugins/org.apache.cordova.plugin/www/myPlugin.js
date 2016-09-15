cordova.define("org.apache.cordova.myplugin.MyPlugin", function(require, exports, module) {
  var exec = require('cordova/exec');

  function MyPlugin() {}
  MyPlugin.prototype.MyPlugin = function(success, error, action, params) {
    exec(success, error, "MyPlugin", action, params);
  };

  module.exports = new MyPlugin();

});
