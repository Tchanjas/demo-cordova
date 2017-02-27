/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
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
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

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
            $('#int').val(data[0].Id);
            $('#str').val(data[0].localidade);

            var date = new Date(data[0].dataSubmissao);
            var day, month;

            if (date.getMonth() < 10) { month = "0" + (date.getMonth() + 1) } else { month = (date.getMonth() + 1) };
            if (date.getDate() < 10) { day = "0" + date.getDate(); } else { day = date.getDate(); };
            var strDate = date.getFullYear() + '-' + month + '-' + day;

            $('#dat').val(strDate);
        }
    });
});