/* 
 * Configuration script for worldmap3d_example15
 */

window['worldmap3d_options'] = {
    showTimedDataAtOnce: true
};
window['worldmap3d_options'].datasources = [];

window.onload = function (evt) {
    window['worldmap3d_options'].datasources[0] = {
        url: '../data/worldmap3d/example15/co2timed.json',
        latattr: 'latitude',// Name of the attribute that stores the latitude information
        lonattr: 'longitude', // Name of the attribute that stores the longitude information
        heightattr: null, // Name of the attribute that stores the height information (null is default, clamps to ground)
        datasetOffsetLat: 0, // This is the default value
        datasetOffsetLon: 0, // This is the default value
        datasetOffsetHeight: 1000,
        excludeAttrs: ['id'], // This is the default value
        displayKind: 'rect',
        displayRadius: 2500,
//        fillColor: 'yellow', // Default color of models (white if no setting is given)
//        outlineColor: 'blue', // Default color of models border (black if no setting is given)
//        outlineWidth: 10, // Width of the outline (1 if no setting is given)
//        extrudeHeight: 10, // Default height of models
//        fillColorProperty: 'Coloring property name', // Property from data that should be used as color for the model
//        outlineColorProperty: 'Border coloring property name', // Property from data that should be used as color for the models outline
//        extrudeHeightProperty: 'PHK_class', // Property from data that should be used for calculating the height
        datacaptionProperty: 'co2', // Property from data that should be used for model caption
        datadescription: document.getElementById('worldmap3d_legend'),
        zoomTo: true
    };
};

// Options defining WHAT is visualised
window['worldmap3d_legend_options'] = {};
window['worldmap3d_legend_options'].visuAttribute = 'co2';

// Data defining HOW is visualised
worldmap3d_legend_data = {};
worldmap3d_legend_data.co2 = {};
worldmap3d_legend_data.co2.txt_title = 'Anthropogene CO2 Emissionen';
worldmap3d_legend_data.co2.txt_desc = 'Höhe der Anthropogenen CO2 Emissionen';
worldmap3d_legend_data.co2.txt_uknw = 'unbekannt';
worldmap3d_legend_data.co2.col = '0xAA00A5FF';
worldmap3d_legend_data.co2.scale = 1000000000000;
worldmap3d_legend_data.co2.calcmode = '<';
worldmap3d_legend_data.co2.values = {};
worldmap3d_legend_data.co2.values['1e-11'] = {};
worldmap3d_legend_data.co2.values['1e-11'].col = '0x77228B22';
worldmap3d_legend_data.co2.values['1e-11'].txt = 'Niedrige CO2 Emissionen';
worldmap3d_legend_data.co2.values['1e-10'] = {};
worldmap3d_legend_data.co2.values['1e-10'].col = '0x7700FF00';
worldmap3d_legend_data.co2.values['1e-10'].txt = 'Mittlere CO2 Emissionen';
worldmap3d_legend_data.co2.values['1e-9'] = {};
worldmap3d_legend_data.co2.values['1e-9'].col = '0xAA00A5FF';
worldmap3d_legend_data.co2.values['1e-9'].txt = 'Hohe CO2 Emissionen';
worldmap3d_legend_data.co2.values['1e-8'] = {};
worldmap3d_legend_data.co2.values['1e-8'].col = '0xAA0000FF';
worldmap3d_legend_data.co2.values['1e-8'].txt = 'Sehr hohe CO2 Emissionen';
