---
layout: post
title:  "Kumarokam"
date:   2016-12-23 19:25:00
categories: travel
---
A lush green sleepy village along lake Vembanad, Kumarokam has the aura of a place frozen in time. The place is teeming with birds and fish which seem to thrive in the backwaters and the pristine lake Vembanad. Truly a magical experience!

<br><br>
![Kumarokam]({{ site.baseurl }}/assets/IMG_1093.jpg){:height="620px" width="650px"}
<br>

<div id='map' style='width: 725px; height: 400px;'></div>

<script>
var mymap = L.map('map').setView([9.610511,76.3690591], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoiemFwYXRhIiwiYSI6ImNpejQ2NmZrbzA0a3MzM280Zm40MjNlamcifQ.F1fnWKHio8oHmzw59V6qgw'
}).addTo(mymap);

var marker = L.marker([9.610511, 76.3690591]).addTo(mymap);
marker.bindPopup("Kumarokam");
</script>