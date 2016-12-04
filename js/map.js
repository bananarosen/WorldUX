// putting the map on the screen and centering it with the right zoom level
var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 2
});

// adding a layer to make it visually appealing - found by searching tile layers for leaflet
var countryTiles = L.tileLayer.provider('Esri.WorldGrayCanvas');
countryTiles.addTo(map);


//setting the gradient to display countries based on speed - gradient colors pulled from colorbrewer
function getColor(speed) {
    return speed > 20  ? '#bd0026' :
           speed > 15  ? '#f03b20' :
           speed > 10  ? '#fd8d3c' :
           speed > 5   ? '#fecc5c' :
           speed > 1   ? '#ffffb2' :
                      '#f9f9f9';
}

//function to put the colors into
function style(feature) {
    return {
        fillColor: getColor(feature.properties.speed),
        weight: 2,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.7
    };
}

var geojson;

// function to create hover effect on country
function highlightFeature(e) {
    var layer = e.target;

    layer.setStyle({
        weight: 4,
        color: '#ccffcc',
        dashArray: '',
        fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

//function to reset hover effext
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}


    
/*function clickListener(e){
    var layer = e.target;
}

function infoPopUp(feature, layer){
            clickListener;
            var popupText = "<h5>" + feature.properties.name + "</h5> <p>Speed: " + feature.properties.speed + "</p>";
            layer.bindPopup(popupText); 
}*/


function infoPopUp (e){
    var country = e.target;
    var cName = country.feature.properties.name;
    var cSpeed = country.feature.properties.speed;
    country.bindPopup("<h4>" + cName + "</h4><p>Avg Internet Speed: " + cSpeed);
    console.log(cName);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, 
        mouseout: resetHighlight,
        click: infoPopUp
             });
}


//adding the geoJSON data to the map and applying the style above
//geojson = L.geoJson(countryData, {style: style}).addTo(map);
geojson = L.geoJson(countryData, {
    style: style,
    onEachFeature: onEachFeature
}).addTo(map);


/*pop up with the information about internet speed, percentage of population with internet access and smartphone access, and share of world internet users. Plus more button that leads to individual country pages. */

/*Sort by drop down menu with other options to re-create the data visualization on the map based on the 3 different data sets*/