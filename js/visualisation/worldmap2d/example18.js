window['worldmap2d_example18_options'] = {
    zoom: 17,
    // CSS selector to the datadescription component that should be used
    datadescription: '#wordldmap2d_datadescription_example18',
    plugins: new Map([
        // Add DataShowModal
        ['DataShowModal', {
                id: 'DataShowModal',
                active: true
            }
        ]
    ])
};
// DataShowModal options
window["DataShowModal_worldmap2d_example18_options"] = {
    // Decide which attributes should be displayed and in which order
    attributeOrder: ['measuredate', 'pm10', 'pm25', 'temperature'],
    // Define a formating instruction for the attribute "measuredate" here format as datetime
    attrsFormat: new Map([['measuredate', 'datetime']])
};

// Datadescription components options
window["wordldmap2d_datadescription_example18_options"] = {
    // Select the main attribute, that is base for coloring the map marker
    visuAttribute: 'pm10'
};