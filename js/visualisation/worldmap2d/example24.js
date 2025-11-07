window['worldmap2d_example24_options'] = {
    // Add models
    modelFiles: [
        {
            url: '../../../data/visualisation/worldmap2d_3d/example24/polygon1.geojson',
            name: 'Polygon 1'
        },
        {
            url: '../../../data/visualisation/worldmap2d_3d/example24/polygon2.geojson',
            name: 'Polygon 2'
        },
        {
            url: '../../../data/visualisation/worldmap2d_3d/example24/polygon3.geojson',
            name: 'Polygon 3'
        },
        {
            url: '../../../data/visualisation/worldmap2d_3d/example24/polygon4.geojson',
            name: 'Polygon 4'
        },
        {
            url: '../../../data/visualisation/worldmap2d_3d/example24/polygon5.geojson',
            name: 'Polygon 5'
        }
    ],
    // Activate Interpolator plugin
    plugins: new Map([
        ['Interpolator', {id: 'Interpolator', active: true}]
    ])
};

// Set attributes that should be calculated and shown
window["Interpolator_worldmap2d_example24_options"] = {
    attrsShown: ['temp', 'cloudy']
};