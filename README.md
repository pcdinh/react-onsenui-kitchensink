# Onsen UI React Components Kitchensink

This app shows off some of the components in Onsen UI 2.0 for React.

Please check out [this repo](https://github.com/pcdinh/react-onsenui-kitchensink) for more info.

To test the demo, please visit [this link](http://onsenui.github.io/react-onsenui-kitchensink/demo.html).

You can also clone this repo and take a look at the code.


### To run it on browser use the following commands:

```
git clone https://github.com/pcdinh/react-onsenui-kitchensink
cd react-onsenui-kitchensink
npm install
npm run dev
```

This will bundle all the files and open a web server at [http://localhost:8888](http://localhost:8888).

### To run it as a cordova app, use the following commands:

```
cd react-onsenui-kitchensink
cordova platform add android
cordova platform add ios

cordova requirements # to ensure that you have Android SDK or iOS SDK
```

You may want to use Cordova's Crosswalk Webview plugin (2.2.0)

```
cordova plugin add cordova-plugin-crosswalk-webview
```

To run on an emulator

```
npm run dev:android
npm run dev:ios
```

To run a connected physical Android device

```
npm run device:android
```

## Note

To suppress output when running npm scripts, use:

```
npm config set loglevel warn
```

Before compiling and running the app, ensure that you change the Android target
at `platforms/android/AndroidManifest.xml`

```
<uses-sdk android:minSdkVersion="16" android:targetSdkVersion="25" />
```

To remove Cordova's Crosswalk Webview plugin

```
cordova plugin remove cordova-plugin-crosswalk-webview
```

You can use the latest Cordova Crosswalk plugin:

```
cordova plugin add https://github.com/crosswalk-project/cordova-plugin-crosswalk-webview
```