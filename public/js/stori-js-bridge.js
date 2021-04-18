(function (glocal, factory) {
    "use strict";
    if (typeof define === "function" && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else if (typeof exports === "object") {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (glocal is window)
        glocal.stori = factory();
    }
}(this, function init(undefined) {
    var exports = {};

    // if (window.WebViewJavascriptBridge) {
    //     _init(WebViewJavascriptBridge);
    // } else {
    //     document.addEventListener('WebViewJavascriptBridgeReady', function () {
    //         _init(WebViewJavascriptBridge);
    //     }, false);
    // }

    function setupWebViewJavascriptBridge(callback) {
        var bridge = window.WebViewJavascriptBridge || window.WKWebViewJavascriptBridge;
        if (bridge) {
            return callback(bridge);
        }
        var callbacks = window.WVJBCallbacks || window.WKWVJBCallbacks;
        if (callbacks) {
            return callbacks.push(callback);
        }
        window.WVJBCallbacks = window.WKWVJBCallbacks = [callback];
        if (window.WKWebViewJavascriptBridge) {
            //for https://github.com/Lision/WKWebViewJavascriptBridge
            window.webkit.messageHandlers.iOS_Native_InjectJavascript.postMessage(null);
        } else {
            //for https://github.com/marcuswestin/WebViewJavascriptBridge
            var WVJBIframe = document.createElement('iframe');
            WVJBIframe.style.display = 'none';
            WVJBIframe.src = 'https://__bridge_loaded__';
            document.documentElement.appendChild(WVJBIframe);
            setTimeout(function () {
                document.documentElement.removeChild(WVJBIframe)
            }, 0);
        }
    }

    setupWebViewJavascriptBridge(function (bridge) {
        // bridge.init(function (message, responseCallback) {
        //     //log('JS got a message', message);
        //     //var data = { 'Javascript Responds': 'Wee!' }
        //     //log('JS responding with', data);
        //     //responseCallback(data);
        // });

        exports.testObjcCallback = function (message) {
            bridge.callHandler('testObjcCallback', message, function (response) {});
        }

        exports.toast = function (message) {
            bridge.callHandler('toast', message, function (response) {});
        }

        exports.alert = function (message) {
            bridge.callHandler('alert', message, function (response) {});
        }

        exports.getVersion = function (callback) {
            bridge.callHandler('getVersion', '', function (response) {
                callback(response);
            });
        }

        exports.getAuthToken = function (callback) {
            bridge.callHandler('getAuthToken', '', function (response) {
                callback(response);
            });
        }

        exports.share = function (content) {
            bridge.callHandler('share', content, function (response) {
                callback(response);
            });
        }

        exports.getUser = function (callback) {
            bridge.callHandler('getUser', '', function (response) {
                callback(response);
            });
        }

        console.log('bridge is ready');
        const doc = document;
        var readyEvent = doc.createEvent('Events');
        readyEvent.initEvent('WebViewJavascriptBridgeReady');
        doc.dispatchEvent(readyEvent);

    });

    return exports;
}));
