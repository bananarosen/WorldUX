PROJECT DETAILS 
- My final prototype was a scaled down version of my previous prototypes, mainly because of the time required to add in the different data sets, and the time that would have been required to add in a new page for each country with more details and customized UX tips. 

- It still stands on its own as a tool to visualize different factors that could affect UX design decisions when designing for different countries. The two data sets I featured are UX speeds in different countries around the world and percentage of population with internet access across the world. The next data set I would like to add in would be smartphone ownership percentages around the world.

- the element from my previous prototypes I struggled with most was how the user should navigate between maps that display different datasets. I ended up moving to a tab system in this interactive version because it seemed to be more effective than the dropdown I had used previously. 

- I tried to only pull data from reputable sources, and sourced them on the page and also added links in comments at the bottom of index.html

- One of the tutorials I followed, used the geoJSON format in a javascript file that declared the entire geoJSON script as a variable, and called it into the custom javascript file that way, and that proved to be the easiest way for me to use geoJSON. countries.js stores the geoJSON data in a variable called countryData, which is then used in map.js and users.js

- as a template for the geoJSON file I forked this file from github, which had the countries already by name and their geometry, so I just added the "speed" and "users" properties. https://github.com/johan/world.geo.json/blob/master/countries.geo.json 

- The main library I used for this assignment was leaflet.js, a javascript library specifically for building custom maps that was recommended to me by a classmate. 

- On top of that I used a tile layer from Esri for the gray map in the background and used bootstrap to achieve some of the page design elements outside of the map. 

- I used several tutorials from the leaflet.js page, including the "Leaflet Quick Start Guide," "Using GeoJSON with leaflet," and "Interactive Chloropleth Map," as well as this tutorial, from Savas Labs: http://savaslabs.com/2015/05/18/mapping-geojson.html 

- I used colorbrewer2.0 to design color gradients for my maps. 