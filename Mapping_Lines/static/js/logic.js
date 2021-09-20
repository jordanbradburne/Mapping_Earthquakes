// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Coordinates for each NEW point to be used in the polyline.
let newLine = [
    [37.615223, -122.389977],
    [30.18999924, -97.668663992],
    [43.681727, -79.612049],
    [40.641766, -73.780968]
];

// Create a polyline using the line coordinates and make the line yellow.
L.polyline(line, {
    color: "yellow"
 }).addTo(map);

// Create a polyline using the NEW line coordinates and make the line blue and dashed
L.polyline(newLine, {
    color: "blue",
    dashArray: "6",
    opacity: "0.5",
    weight: 4,
}).addTo(map);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);
