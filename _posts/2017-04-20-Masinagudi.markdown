---
layout: post
title:  "Masinagudi"
date:   2017-04-20 19:25:00
categories: travel
---
<div class="post-sidebar">
    <h3>Places Visited</h3>
    <ul>
    <li><a href="https://goo.gl/maps/A5JMDR4mrrF2">Inn the Wild</a></li>
    </ul>
</div>
A small hamlet at the foothills of Ooty, Masinagudi is a pretty unglamorous place but for its animals. Located within the Bandipur Tiger Reserve, it was a pleasant surprise to see herds of deer roam freely around. We were also lucky to spot an elephant, a mouse deer and a few civet cats!!

<br><br>
<img class="myImg" src="{{site.url}}/assets/IMG_.jpg" alt=" " width="150" height="150">
<br>

<div id='map' style='width: 725px; height: 400px;'></div>

<script>
var mymap = L.map('map').setView([11.5721768, 76.642715], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoiemFwYXRhIiwiYSI6ImNpejQ2NmZrbzA0a3MzM280Zm40MjNlamcifQ.F1fnWKHio8oHmzw59V6qgw'
}).addTo(mymap);

var marker = L.marker([11.5721768, 76.642715]).addTo(mymap);
marker.bindPopup("Masinagudi");
</script>
