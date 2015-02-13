cordova.define("com.megster.cordova.FileChooser.FileChooser", function(require, exports, module) { module.exports = {
    open: function (success, failure) {
        cordova.exec(success, failure, "FileChooser", "open", []);
    },
    play: function (success, failure,uri) {
   
        cordova.exec(success, failure, "FileChooser", "startPlaying", [uri]);
    },
    stop: function (success, failure) {
        cordova.exec(success, failure, "FileChooser", "stopPlaying", []);
    }
};

});
