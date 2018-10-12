---
layout: post
title:  "How to wear a Pagdi"
date:   2016-12-16 19:25:00
categories: travel
---
Spotted in ChicPeth, you can't wear it any better!

<br><br>
<img class="myImg" src="{{site.baseurl}}/assets/IMG_.jpg" alt=" " width="150" height="150">
<br>

<div id='map' style='width: 725px; height: 400px;'></div>

<script>
var mymap = L.map('map').setView([12.9697105, 77.5712412], 11);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoiemFwYXRhIiwiYSI6ImNpejQ2NmZrbzA0a3MzM280Zm40MjNlamcifQ.F1fnWKHio8oHmzw59V6qgw'
}).addTo(mymap);

var marker = L.marker([12.9697105, 77.5712412]).addTo(mymap);
marker.bindPopup("ChicPet");
</script>
