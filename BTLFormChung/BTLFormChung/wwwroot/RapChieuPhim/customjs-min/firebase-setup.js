function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        var r = 16 * Math.random() | 0,
            v = "x" == c ? r : 3 & r | 8;
        return v.toString(16)
    })
}
var firebaseConfig = window.firebaseConfig;
if (firebaseConfig) {
    if (firebase.apps.length) firebase.app();
    else {
        firebase.initializeApp(firebaseConfig);
        const appCheck = firebase.appCheck();
        appCheck.activate(window.recaptchaSiteKey || "", !0)
    }
    const messaging = firebase.messaging();
    messaging.requestPermission().then(function() {
        return console.log("Have permission"), messaging.getToken()
    }).then(function(token) {
        console.log(token), localStorage.notificationToken = token;
        var deviceId = uuidv4();
        return localStorage.getItem("deviceId") ? deviceId = localStorage.getItem("deviceId") : localStorage.deviceId = deviceId, axios.post("/api/notification/updateToken", {
            token: token,
            deviceId: deviceId,
            lang: "vi",
            unsubscribe: !1
        }, {
            headers: {
                platform: "web"
            }
        })
    }).then(function(rs) {
        console.log("updateToken", rs)
    })["catch"](function(err) {
        console.log("Error Occured", err)
    }), messaging.onMessage(function(payload) {
        console.log("onMessage", payload)
    })
}