cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-device.device",
      "file": "plugins/cordova-plugin-device/www/device.js",
      "pluginId": "cordova-plugin-device",
      "clobbers": [
        "device"
      ]
    },
    {
      "id": "com.unarin.cordova.beacon.underscorejs",
      "file": "plugins/com.unarin.cordova.beacon/www/lib/underscore-min-1.6.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.Q",
      "file": "plugins/com.unarin.cordova.beacon/www/lib/q.min.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.LocationManager",
      "file": "plugins/com.unarin.cordova.beacon/www/LocationManager.js",
      "pluginId": "com.unarin.cordova.beacon",
      "merges": [
        "cordova.plugins"
      ]
    },
    {
      "id": "com.unarin.cordova.beacon.Delegate",
      "file": "plugins/com.unarin.cordova.beacon/www/Delegate.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.Region",
      "file": "plugins/com.unarin.cordova.beacon/www/model/Region.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.Regions",
      "file": "plugins/com.unarin.cordova.beacon/www/Regions.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.CircularRegion",
      "file": "plugins/com.unarin.cordova.beacon/www/model/CircularRegion.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "com.unarin.cordova.beacon.BeaconRegion",
      "file": "plugins/com.unarin.cordova.beacon/www/model/BeaconRegion.js",
      "pluginId": "com.unarin.cordova.beacon",
      "runs": true
    },
    {
      "id": "cordova-plugin-device-orientation.CompassError",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassError.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassError"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.CompassHeading",
      "file": "plugins/cordova-plugin-device-orientation/www/CompassHeading.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "CompassHeading"
      ]
    },
    {
      "id": "cordova-plugin-device-orientation.compass",
      "file": "plugins/cordova-plugin-device-orientation/www/compass.js",
      "pluginId": "cordova-plugin-device-orientation",
      "clobbers": [
        "navigator.compass"
      ]
    },
    {
      "id": "cordova-plugin-fcm-with-dependecy-updated.FCMPlugin",
      "file": "plugins/cordova-plugin-fcm-with-dependecy-updated/www/FCMPlugin.js",
      "pluginId": "cordova-plugin-fcm-with-dependecy-updated",
      "clobbers": [
        "FCM"
      ]
    },
    {
      "id": "cordova-plugin-ionic-keyboard.keyboard",
      "file": "plugins/cordova-plugin-ionic-keyboard/www/android/keyboard.js",
      "pluginId": "cordova-plugin-ionic-keyboard",
      "clobbers": [
        "window.Keyboard"
      ]
    },
    {
      "id": "cordova-plugin-ionic-webview.IonicWebView",
      "file": "plugins/cordova-plugin-ionic-webview/src/www/util.js",
      "pluginId": "cordova-plugin-ionic-webview",
      "clobbers": [
        "Ionic.WebView"
      ]
    },
    {
      "id": "cordova-plugin-magnetometer.main",
      "file": "plugins/cordova-plugin-magnetometer/www/magnetometer.js",
      "pluginId": "cordova-plugin-magnetometer",
      "clobbers": [
        "cordova.plugins.magnetometer"
      ]
    },
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "es6-promise-plugin.Promise",
      "file": "plugins/es6-promise-plugin/www/promise.js",
      "pluginId": "es6-promise-plugin",
      "runs": true
    },
    {
      "id": "wifiwizard2.WifiWizard2",
      "file": "plugins/wifiwizard2/www/WifiWizard2.js",
      "pluginId": "wifiwizard2",
      "clobbers": [
        "window.WifiWizard2"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-device": "2.0.3",
    "com.unarin.cordova.beacon": "3.8.1",
    "cordova-plugin-androidx": "3.0.0",
    "cordova-plugin-androidx-adapter": "1.1.3",
    "cordova-plugin-device-orientation": "2.0.1",
    "cordova-plugin-fcm-with-dependecy-updated": "7.2.0",
    "cordova-plugin-ionic-keyboard": "2.2.0",
    "cordova-plugin-ionic-webview": "4.2.1",
    "cordova-plugin-magnetometer": "1.0.0",
    "cordova-plugin-splashscreen": "5.0.4",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-support-google-services": "1.4.1",
    "es6-promise-plugin": "4.1.0",
    "wifiwizard2": "3.1.1"
  };
});