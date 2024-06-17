// Wait for the document to be ready
document.addEventListener('DOMContentLoaded', function (e) {
    // Create a map instance and set the initial view coordinates and zoom level
    const map = L.map('map').setView([51.505, -0.09], 13);
    // Add openStret tiles
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        maxZoom: 17,
        zoomDelta: 0.25,
        zoomSnap: 0,
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // LEAFLET DRAW
    const drawnFeatures = new L.FeatureGroup()
    map.addLayer(drawnFeatures)

    const drawControl = new L.Control.Draw({
        edit:{
            featureGroup: drawnFeatures,
            remove:true
        },
        draw:{
            // CHANGING THE POLYGONS STYLE 
            polygon:{
                shapeOptions:{
                    color:'black',
                    opacity:1,
                    fill:false
                },
                // allowIntersection:false,
                // drawError:{
                //     color:'orange',
                //     timeout:1000
                // }
            },
        }
    })
    map.addControl(drawControl)
    // ON CREATED
    map.on("draw:created", (e)=>{
        const type = e.LayerType
        const layer = e.layer
        // Getting the GeoJSON
        console.log(layer.toGeoJSON());
        // Getting the center of the polygon
        console.log(layer.getBounds().getCenter());
        // Adding the draw layer
        drawnFeatures.addLayer(layer)        
    })
    // ON EDITED
    map.on('draw:edited',(e)=>{
        const  layers = e.layers;
        const layerType = e.layerType;
        // 
        layers.eachLayer((layer)=>{
            console.log(layer);
        })
    })

});