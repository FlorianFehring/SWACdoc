window['worldmap2d_example17_options'] = {
    zoom: 18,
    // Activate DataAndMediaShowModal
    plugins: new Map([[
            'DataAndMediaShowModal', {
                id: 'dataandmediashowmodal',
                active: true
            }]])
};


// DataAndMediaShowModal options
window['dataandmediashowmodal_worldmap2d_example17_options'] = {
    table_names: {
        locations_table: {
            table_name: 'tbl_location',
            idAttr: 'id',
            geojsonattr: 'coordinates'
        },
        oo_table: {
            table_name: 'tbl_observedobject',
            idAttr: 'id',
            completed: 'completed'
        },
        file_table: {
            table_name: 'tbl_file',
            idAttr: 'id'
        },
        file_join_oo_table: {
            table_name: 'tbl_file_join_oo',
            idAttr: 'id',
            file_id: 'file_id',
            oo_id: 'oo_id'
        },
        uploadfile_options: {
            uploadTargetURL: '/SmartFile/smartfile/file/map_pictures_Gewaesser',
            docroot: '../../../'
        }
    }
};
