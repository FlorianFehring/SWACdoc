// Component configuration
window['worldmap2d_example16_options'] = {
    zoom: 18,
    plugins: new Map([
        // Add DataShowModal
        ['DataShowModal', {
                id: 'DataShowModal',
                active: true
            }
        ]
    ])
};

// Plugin configuration
window["DataShowModal_worldmap2d_example16_options"] = {
    // Decide which attributes should be displayed and in which order
    attributeOrder: ['measuredate', 'pm10', 'pm25', 'temperature'],
    // Define a formating instruction for the attribute "measuredate" here format as datetime
    attrsFormat: new Map([['measuredate', 'datetime']])
};