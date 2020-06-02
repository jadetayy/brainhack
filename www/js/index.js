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
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();


var submit = document.getElementById("submit");
var capitalize = document.getElementById("capitalize");
var clear = document.getElementById("clear");

submit.onclick = function(){
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;

    document.getElementById("outputName").innerText = name;
    document.getElementById("outputCity").innerText = city;

    var fh = fopen("data.txt", 3); // Open the file for writing

    if(fh!=-1) // If the file has been successfully opened

    {

        var str = name;

        fwrite(fh, str); // Write the string to a file

        fclose(fh); // Close the file

    }
}

capitalize.onclick = function(){
    var name = document.getElementById("name").value;
    var city = document.getElementById("city").value;

    document.getElementById("name").value = name.toUpperCase();
    document.getElementById("city").value = city.toUpperCase();
}

clear.onclick = function(){
    document.getElementById("name").value = "";
    document.getElementById("city").value = "";
}