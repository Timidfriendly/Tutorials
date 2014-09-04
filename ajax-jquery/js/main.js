function showHint(str) {
    var xmlhttp;
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    }
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("txtHint").innerHTML = xmlhttp.responseText;
        } else if (xmlhttp.readyState != 4 ) {
            console.log(xmlhttp.readyState);

        }
    }
    xmlhttp.open("GET", "js/json/names.json" + str, true);
    xmlhttp.send();
}
