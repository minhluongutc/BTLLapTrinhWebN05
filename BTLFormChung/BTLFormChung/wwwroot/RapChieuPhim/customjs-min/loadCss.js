var loadFont = function(url) {
    var xhr = new XMLHttpRequest;
    xhr.open("GET", url, !0), xhr.onreadystatechange = function() {
        if (4 == xhr.readyState && 200 == xhr.status) {
            var css = xhr.responseText;
            css = css.replace(/}/g, "font-display: swap; }");
            var head = document.getElementsByTagName("head")[0],
                style = document.createElement("style");
            style.appendChild(document.createTextNode(css)), head.appendChild(style)
        }
    }, xhr.send()
};
loadFont("https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i&amp;subset=vietnamese");