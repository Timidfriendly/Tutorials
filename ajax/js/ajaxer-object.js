var AJAXEROBJECT = {
    loadXMLDoc: function (el, dataSource, restMethod) {
        var xmlhttp;

        if (window.XMLHttpRequest) {
            xmlhttp=new XMLHttpRequest();
        }

        xmlhttp.onreadystatechange = function() {

            if (xmlhttp.readyState == '1') {
                console.log(" readystate: " + xmlhttp.readyState + " server connection established");
            }

            if (xmlhttp.readyState == '2') {
                console.log(" readystate: " + xmlhttp.readyState + " request received");
            }

            if (xmlhttp.readyState == '3') {
                console.log(" readystate: " + xmlhttp.readyState + " processing request");

                setTimeout(function () {
                    document.getElementById(el).innerHTML="processing request ...";
                    setTimeout(function () {
                        document.getElementById(el).innerHTML="processing request ..";
                        setTimeout(function () {
                            document.getElementById(el).innerHTML="processing request .";
                            setTimeout(function () {
                                placeAjaxResponse();
                            }, 500);
                        }, 333);
                    }, 333);
                }, 333);
            }
        }

        placeAjaxResponse = function () {
            if (xmlhttp.readyState == '4') {

                console.log(" readystate: " + xmlhttp.readyState + " request finished and response is ready");
                document.getElementById(el).innerHTML = xmlhttp.responseText;

            }
        }

        defineRestMethod = function () {
            if ( restMethod === 'get' ) {
                xmlhttp.open("GET", dataSource, true);
            } else if ( restMethod === 'post' ) {
                xmlhttp.open("POST", dataSource, true);
                xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            } else {
                alert("Ajax request was unsuccessful");
            }
        }();

        xmlhttp.send();
    }
};