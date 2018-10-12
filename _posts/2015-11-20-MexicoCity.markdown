---
layout: post
title:  "Mexico City"
date:   2015-11-20 19:25:00
categories: travel
---
<div class="post-sidebar">
    <h3>Places Visited</h3>
    <ul>
    <li><a href="https://en.wikipedia.org/wiki/Mexico_City" target="_blank">Mexico City</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Z%C3%B3calos" target="_blank">Plaza de la Constitución</a></li>
    <li><a href="https://en.wikipedia.org/wiki/Monumento_a_la_Revoluci%C3%B3n" target="_blank">Monumento e la Revolucion</a></li>
    <li><a href="https://en.wikipedia.org/wiki/National_Museum_of_Anthropology_(Mexico)" target="_blank">Museo Nacional De Antropologîa</a></li>
    <li><a href="https://goo.gl/maps/HxU5cXJEZEU2" target="_blank">Palacio de Bellas Artes</a></li>
    </ul>
</div>
Mexico City is steeped in history, food and culture of the Americas. There is no Mexico without it. A Megacity full of life and dreams. Very few places have made a more lasting impression on me, there is never a dull moment in its many squares and alleys!

<br><br>
<img class="myImg" src="{{site.baseurl}}/assets/IMG_.jpg" alt=" " width="150" height="150">
<img class="myImg" src="{{site.baseurl}}/assets/IMG_.jpg" alt=" " width="150" height="150">
<br>

<div id='map' style='width: 725px; height: 400px;'></div>

<script>
var lat = 19.434167
var long = -99.138611
var placeName = "Mexico City"
var mymap = L.map('map').setView([lat, long], 10);
var zoomLevel = 18

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: zoomLevel,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoiemFwYXRhIiwiYSI6ImNpejQ2NmZrbzA0a3MzM280Zm40MjNlamcifQ.F1fnWKHio8oHmzw59V6qgw'
}).addTo(mymap);

var marker = L.marker([lat, long]).addTo(mymap);
marker.bindPopup(placeName);
</script>
