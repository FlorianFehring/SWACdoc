window['worldmap2d_example26_options'] = {
    datasources: new Map([
        // Create an entry for the datasource
        ['../../../data/visualisation/worldmap2d_3d/example26/tbl_observedobject_join_location_example.json', {
            // Define a data capsule
            datacapsule: {
                fromName: '../../../data/visualisation/worldmap2d_3d/example26/tbl_observedobject_join_location_example.json'
            },
            // Define where to find latitude and longitude
            latitudeAttr: 'tbl_location.coordinates[0]',
            longitudeAttr: 'tbl_location.coordinates[1]'
        }]
    ])
};

