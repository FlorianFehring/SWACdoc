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
    label_source: '../../../data/visualisation/worldmap2d_3d/example17/label_labels.json',
    appliedlabels_source: '../../../data/visualisation/worldmap2d_3d/example17/appliedlabels.json',
    media_source: '../../../data/visualisation/worldmap2d_3d/example17/appliedmedias.json',
    media_target: '../../../data/visualisation/worldmap2d_3d/example17/mediatarget.json',
    custom_tabs: [
        {
            title: 'my iframe',
            type: 'iframe',
            url: '../../../index.html'
        },
        {
            title: 'data table',
            type: 'data-table',
            url: '../../../data/visualisation/worldmap2d_3d/example17/ref_table1_data.json'
        },
        {
            title: 'data chart',
            type: 'data-chart',
            url: '../../../data/visualisation/worldmap2d_3d/example17/ref_table1_data.json'
        }
    ]
};
