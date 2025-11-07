var worldmap2d_example7_options = {
    // Add shapefile sa model
    modelFiles: [{
            url: '../../../data/visualisation/worldmap2d_3d/example7/congress.zip',
            name: 'CongressionalDistricts',
            type: 'shapefile'
    }],
    // Zoom out so shape file is viewed more completely (currently there is no auto zoom to shape file)
    zoom: 9,
    // Goto to position where shapefile applies (currently there is no auto goto to shape file)
    startPointLat: 42.361145,
    startPointLon: -71.057083,
    plugins: new Map()
};

