window['worldmap2d_example9_options'] = {
    modelFiles: [
        {
            url: '../../../data/visualisation/worldmap2d_3d/example6/stadtgebiet.geojson',
            name: 'Stadtgebiet Bielefeld',
            fillColor: '0x67ADDFFF', // Default color of models (white if no setting is given)
            outlineColor: 'blue', // Default color of models border (black if no setting is given)
            outlineWidth: 2, // Width of the outline (1 if no setting is given)
            zoomTo: true // Zoom to model when loaded
        },
        {
            url: '../../../data/visualisation/worldmap2d_3d/example9/hausumringe.geojson',
            name: 'Hausumrine Sennestadt',
            zoomTo: false
        }
    ]
};
