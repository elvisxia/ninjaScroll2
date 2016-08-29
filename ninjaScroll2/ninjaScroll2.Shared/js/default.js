// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=392286
(function () {
    "use strict";

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var windowHeight = window.innerHeight;
    var inputPane = Windows.UI.ViewManagement.InputPane.getForCurrentView();

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                window.onscroll = function (evt) {
                    document.getElementById("myDiv").style.height = window.innerHeight + window.pageYOffset + "px";
                }
                
                inputPane.onshowing = function (eventArgs) {
                    document.getElementById("myDiv").style.height = windowHeight-eventArgs.occludedRect.height+"px";
                }

                inputPane.onhiding = function (eventArgs) {
                    document.getElementById("myDiv").style.height = windowHeight + "px";
                }
            } else {
                // TODO: This application was suspended and then terminated.
                // To create a smooth user experience, restore application state here so that it looks like the app never stopped running.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    app.start();
})();