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
        async: true,
        cache: false,
        dataType: "json",
        url: "http://localhost:24939/api/paineltemporarioapi",
        success: function (json) {
            var data = JSON.parse(JSON.stringify(json));
            $(".getText").empty();
            for(var i = 0; i < data.length; i++) {
                $(".getText").append("ID: " + data[i].Id + ", Localidade: " + data[i].localidade + ", Concelho: " + data[i].concelho + "<br>");
            }
        }
    });
});