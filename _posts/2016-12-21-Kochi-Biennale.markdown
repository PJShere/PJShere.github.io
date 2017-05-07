---
layout: post
title:  "Kochi Biennale"
date:   2016-12-21 19:25:00
categories: travel
---
<div class="post-sidebar">
    <h3>Places Visited</h3>
    <ul>
    <li><a href="https://goo.gl/maps/U6RE43YzyEA2" target="_blank">The Killians Hotel</a></li>
    <li><a href="https://goo.gl/maps/x4L5Y35mWsS2" target="_blank">Jewish Synagague</a></li>
    <li><a href="https://goo.gl/maps/E2kUgATJz4m" target="_blank">Aspinwall House</a></li>
    <li><a href="http://kochimuzirisbiennale.org/" target="_blank">Kochi-Muziris Biennale</a></li>
    </ul>
</div>
I did not know what to expect when we got into Fort Kochi for the annual biennale. Little did I know that I was going to witness the work of some of the best contemporary artists from around the globe, in a setting that matched the art. 
The colonial architecture and the mixture of the Hindu, Muslim, Catholic and Jewish cultures makes Fort Kochi a very unique place.

<br><br>
![Kochi]({{ site.baseurl }}/assets/IMG_4253.jpg){:height="500px" width="675px"}
<br>


<div id='map' style='width: 725px; height: 400px;'></div>

<script>
var mymap = L.map('map').setView([9.9651603, 76.2438176], 8);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.outdoors',
    accessToken: 'pk.eyJ1IjoiemFwYXRhIiwiYSI6ImNpejQ2NmZrbzA0a3MzM280Zm40MjNlamcifQ.F1fnWKHio8oHmzw59V6qgw'
}).addTo(mymap);

var marker = L.marker([9.9651603, 76.2438176]).addTo(mymap);
marker.bindPopup("Fort Kochi");
</script>