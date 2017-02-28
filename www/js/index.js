var app = {
    // Application Constructor
    initialize: function () {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function () {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function (id) {
        console.log('Received Event: ' + id);
    }
};

app.initialize();

$('#getJSON').click(function () {
    $.ajax({
        type: "GET",
        cache: false,
        dataType: "json",
        url: "http://localhost:24939/api/paineltemporarioapi",
        success: function (json) {
            var data = JSON.parse(JSON.stringify(json));
            $(".getText").empty();
            for (var i = 0; i < data.length; i++) {
                $(".getText").append("ID: " + data[i].Id + ", Localidade: " + data[i].localidade + ", Concelho: " + data[i].concelho + "<br>");
            }
        }
    });
});


$('#postJSON').click(function () {
    $.ajax({
        url: "http://localhost:24939/api/paineltemporarioapi",
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            "token": "1",
            "localizacao": "Tomar",
            "localidade": "Tomar",
            "concelho": "Tomar",
            "latitude": "1",
            "longitude": "1",
            "nAzulejosHorizontalPainel":"12", 
            "nAzulejosVerticalPainel":"12", 
            "estadoConservacao": "Excelente",
            "foto": ["", "", "", ""]
        }),
        success: function(data){
            console.log("Post OK");
        },
        error: function(data){
            console.log("Post Error");
        }
    });
});