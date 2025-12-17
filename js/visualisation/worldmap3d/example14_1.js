/* 
 * Configuration script for worldmap3d_example14_1
 */

window['worldmap3d_options'] = {
    showTimedDataAtOnce: true
};
window['worldmap3d_options'].datasources = [];

window.onload = function (evt) {
    window['worldmap3d_options'].datasources[0] = {
        url: '../data/worldmap3d/example14_1/sealing.json',
        latattr: 'point_y',// Name of the attribute that stores the latitude information
        lonattr: 'point_x', // Name of the attribute that stores the longitude information
        heightattr: null, // Name of the attribute that stores the height information (null is default, clamps to ground)
        datasetOffsetLat: 0, // This is the default value
        datasetOffsetLon: 0, // This is the default value
        datasetOffsetHeight: 100,
        excludeAttrs: ['id'], // This is the default value
        displayKind: 'rect',
        displayRadius: 20,
//        fillColor: 'yellow', // Default color of models (white if no setting is given)
//        outlineColor: 'blue', // Default color of models border (black if no setting is given)
//        outlineWidth: 10, // Width of the outline (1 if no setting is given)
//        extrudeHeight: 10, // Default height of models
//        fillColorProperty: 'Coloring property name', // Property from data that should be used as color for the model
//        outlineColorProperty: 'Border coloring property name', // Property from data that should be used as color for the models outline
//        extrudeHeightProperty: 'PHK_class', // Property from data that should be used for calculating the height
//        datacaptionProperty: 'PHK_text', // Property from data that should be used for model caption
        datadescription: document.getElementById('worldmap3d_legend'),
        zoomTo: true
    };
};

// Options defining WHAT is visualised
worldmap3d_legend_options = {};
worldmap3d_legend_options.visuAttribute = 'sealing';

// Data defining HOW is visualised
worldmap3d_legend_data = {};
worldmap3d_legend_data.sourcename = "European Environment Agency (EEA)(2015)";
worldmap3d_legend_data.sourcelink = "https://land.copernicus.eu/pan-european/high-resolution-layers/imperviousness/status-maps/2015";
worldmap3d_legend_data.sealing = {};
worldmap3d_legend_data.sealing.txt_title = 'Flächenversiegelung';
worldmap3d_legend_data.sealing.txt_desc = 'Grad der Flächenversiegelung';
worldmap3d_legend_data.sealing.txt_uknw = 'unbekannt';
worldmap3d_legend_data.sealing.col = '0xAA00A5FF';
worldmap3d_legend_data.sealing.scale = 1;
worldmap3d_legend_data.sealing.calcmode = '<';
worldmap3d_legend_data.sealing.values = {};
worldmap3d_legend_data.sealing.values['20'] = {};
worldmap3d_legend_data.sealing.values['20'].col = '0x77228B22';
worldmap3d_legend_data.sealing.values['20'].txt = '< 20%';
worldmap3d_legend_data.sealing.values['40'] = {};
worldmap3d_legend_data.sealing.values['40'].col = '0x7700FF00';
worldmap3d_legend_data.sealing.values['40'].txt = '20% - 40%';
worldmap3d_legend_data.sealing.values['60'] = {};
worldmap3d_legend_data.sealing.values['60'].col = '0x7742ff9b';
worldmap3d_legend_data.sealing.values['60'].txt = '40% - 60%';
worldmap3d_legend_data.sealing.values['80'] = {};
worldmap3d_legend_data.sealing.values['80'].col = '0x7700A5FF';
worldmap3d_legend_data.sealing.values['80'].txt = '60% - 80%';
worldmap3d_legend_data.sealing.values['101'] = {};
worldmap3d_legend_data.sealing.values['101'].col = '0x770000FF';
worldmap3d_legend_data.sealing.values['101'].txt = '> 80%';
