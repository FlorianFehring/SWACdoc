window['worldmap2d_example19_options'] = {
    zoom: 17,
    // CSS selector to the datadescription component that should be used
    datadescription: '#wordldmap2d_datadescription_example19',
    plugins: new Map([
        // Add DataShowModal
        ['DataShowModal', {
                id: 'DataShowModal',
                active: true
            }
        ]
    ]),
    // Define custom icons
    customIconOptions: {
        iconSize: [60, 60],
        shadowUrl: '../../swac/libs/leaflet/images/marker-shadow.png',
        shadowSize: [60, 60],
        shadowAnchor: [20, 60],
        iconAnchor: [30, 56]
    },
    customIconVisited: {
        iconUrl: '../../swac/libs/leaflet/images/marker_icon_custom_visited.svg'
    },
    customIconUnvisited: {
        iconUrl: '../../swac/libs/leaflet/images/marker_icon_custom_unvisited.svg'
    },
};
// DataShowModal options
window["DataShowModal_worldmap2d_example19_options"] = {
    // Decide which attributes should be displayed and in which order
    attributeOrder: ['measuredate', 'pm10', 'pm25', 'temperature'],
    // Define a formating instruction for the attribute "measuredate" here format as datetime
    attrsFormat: new Map([['measuredate', 'datetime']])
};

// Datadescription components options
window["wordldmap2d_datadescription_example19_options"] = {
    // Select the main attribute, that is base for coloring the map marker
    visuAttribute: 'pm10'
};