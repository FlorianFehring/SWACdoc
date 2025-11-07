window['worldmap2d_example27_options'] = {
    datasources: new Map([
        ['../../../data/visualisation/worldmap2d_3d/example26/tbl_observedobject_join_location_example.json', {
            datacapsule: {
                fromName: '../../../data/visualisation/worldmap2d_3d/example26/tbl_observedobject_join_location_example.json',
                fromWheres: {
                    // Name of the collection to join with (useing TreeQL / SmartData)
                    // This is simulated here as all data is allready in the tbl_observedobject_join_location_example.json
                    join: 'tbl_location'
                }
            },
            // Attributes where to find latitude and logitude
            latitudeAttr: 'tbl_location.coordinates[0]',
            longitudeAttr: 'tbl_location.coordinates[1]'
        }]
    ])
};
