/* 
 * Configuration script for worldmap3d_example7
 */

window['worldmap3d_options'] = {};
window['worldmap3d_options'].model_zoomlevels = [];
window.onload = function (evt) {
    window['worldmap3d_options'].model_zoomlevels[0] = {
        below: 5000,
        hidurl: '/GeodataREST/geodataapi/building/ids/listByViewport?northlimit={northlat}&southlimit={southlat}&eastlimit={eastlon}&westlimit={westlon}',
        modelurl: '/SWAC/data/worldmap3d_example8/{hid}.geojson',
        fillColor: 'yellow', // Default color of models (white if no setting is given)
        outlineColor: 'blue', // Default color of models border (black if no setting is given)
        outlineWidth: 10, // Width of the outline (10 if no setting is given)
        extrudeHeight: 10, // Default height of models
//        fillColorProperty: 'Coloring property name', // Property from data that should be used as color for the model
//        outlineColorProperty: 'Border coloring property name', // Property from data that should be used as color for the models outline
        extrudeHeightProperty: 'pv_wall', // Property from data that should be used for calculating the height
        datacaptionProperty: 'pv_wall', // Property from data that should be used for model caption
        datadescription: document.getElementById('worldmap3d_legend')
    };
    window['worldmap3d_options'].model_zoomlevels[1] = {
        below: 400,
        hidurl: '/GeodataREST/geodataapi/building/ids/listByViewport?northlimit={northlat}&southlimit={southlat}&eastlimit={eastlon}&westlimit={westlon}',
        modelurl: '/SWAC/data/worldmap3d_example8/{hid}.glb',
        datadescription: document.getElementById('worldmap3d_legend')
    };
};

// Options defining WHAT is visualised
window['worldmap3d_legend_options'] = {};
window['worldmap3d_legend_options'].visuAttribute = 'pv_wall';

worldmap3d_legend_data = {};
worldmap3d_legend_data.txt_title = "Wordmap3d";
worldmap3d_legend_data.pv_wall = {};
worldmap3d_legend_data.pv_wall.txt_title = 'Wand-Photovoltaik';
worldmap3d_legend_data.pv_wall.txt_desc = 'Die Waende sind fuer Photovoltaik {voc}.';
worldmap3d_legend_data.pv_wall.txt_uknw = 'Es ist nicht bekannt, ob die Wände für Photovoltaik geeignet sind.';
worldmap3d_legend_data.pv_wall.values = {};
worldmap3d_legend_data.pv_wall.values['2'] = {};
worldmap3d_legend_data.pv_wall.values['2'].txt = 'gut geeignet';
worldmap3d_legend_data.pv_wall.values['2'].col = 'green';
worldmap3d_legend_data.pv_wall.values['1'] = {};
worldmap3d_legend_data.pv_wall.values['1'].txt = 'geeignet';
worldmap3d_legend_data.pv_wall.values['1'].col = 'yellow';
worldmap3d_legend_data.pv_wall.values['7'] = {};
worldmap3d_legend_data.pv_wall.values['7'].txt = 'bedingt geeignet';
worldmap3d_legend_data.pv_wall.values['7'].col = 'orange';
worldmap3d_legend_data.pv_wall.values['0'] = {};
worldmap3d_legend_data.pv_wall.values['0'].txt = 'ungeeignet';
worldmap3d_legend_data.pv_wall.values['0'].col = 'red';
worldmap3d_legend_data.pv_roof = {};
worldmap3d_legend_data.pv_roof.txt_title = 'Dach-Photovoltaik';
worldmap3d_legend_data.pv_roof.txt_desc = 'Das Dach ist fuer Photovoltaik {voc}.';
worldmap3d_legend_data.pv_roof.values = {};
worldmap3d_legend_data.pv_roof.values['2'] = {};
worldmap3d_legend_data.pv_roof.values['2'].txt = 'gut geeignet';
worldmap3d_legend_data.pv_roof.values['2'].col = 'green';
worldmap3d_legend_data.pv_roof.values['1'] = {};
worldmap3d_legend_data.pv_roof.values['1'].txt = 'geeignet';
worldmap3d_legend_data.pv_roof.values['1'].col = 'yellow';
worldmap3d_legend_data.pv_roof.values['7'] = {};
worldmap3d_legend_data.pv_roof.values['7'].txt = 'bedingt geeignet';
worldmap3d_legend_data.pv_roof.values['7'].col = 'orange';
worldmap3d_legend_data.pv_roof.values['0'] = {};
worldmap3d_legend_data.pv_roof.values['0'].txt = 'ungeeignet';
worldmap3d_legend_data.pv_roof.values['0'].col = 'red';
worldmap3d_legend_data.st_roof = {};
worldmap3d_legend_data.st_roof.txt_title = 'Dach-Solarthermie';
worldmap3d_legend_data.st_roof.txt_desc = 'Das Dach ist fuer Solarthermie {voc}.';
worldmap3d_legend_data.st_roof.values = {};
worldmap3d_legend_data.st_roof.values['2'] = {};
worldmap3d_legend_data.st_roof.values['2'].txt = 'gut geeignet';
worldmap3d_legend_data.st_roof.values['2'].col = 'green';
worldmap3d_legend_data.st_roof.values['1'] = {};
worldmap3d_legend_data.st_roof.values['1'].txt = 'geeignet';
worldmap3d_legend_data.st_roof.values['1'].col = 'yellow';
worldmap3d_legend_data.st_roof.values['7'] = {};
worldmap3d_legend_data.st_roof.values['7'].txt = 'bedingt geeignet';
worldmap3d_legend_data.st_roof.values['7'].col = 'orange';
worldmap3d_legend_data.st_roof.values['0'] = {};
worldmap3d_legend_data.st_roof.values['0'].txt = 'ungeeignet';
worldmap3d_legend_data.st_roof.values['0'].col = 'red';
worldmap3d_legend_data.st_wall = {};
worldmap3d_legend_data.st_wall.txt_title = 'Wand-Solarthermie';
worldmap3d_legend_data.st_wall.txt_desc = 'Die Waende sind fuer Solarthermie {voc}.';
worldmap3d_legend_data.st_wall.values = {};
worldmap3d_legend_data.st_wall.values['2'] = {};
worldmap3d_legend_data.st_wall.values['2'].txt = 'gut geeignet';
worldmap3d_legend_data.st_wall.values['2'].col = 'green';
worldmap3d_legend_data.st_wall.values['1'] = {};
worldmap3d_legend_data.st_wall.values['1'].txt = 'geeignet';
worldmap3d_legend_data.st_wall.values['1'].col = 'yellow';
worldmap3d_legend_data.st_wall.values['7'] = {};
worldmap3d_legend_data.st_wall.values['7'].txt = 'bedingt geeignet';
worldmap3d_legend_data.st_wall.values['7'].col = 'orange';
worldmap3d_legend_data.st_wall.values['0'] = {};
worldmap3d_legend_data.st_wall.values['0'].txt = 'ungeeignet';
worldmap3d_legend_data.st_wall.values['0'].col = 'red';
worldmap3d_legend_data.gd_roof = {};
worldmap3d_legend_data.gd_roof.txt_title = 'Gr&uuml;ndachnutzung';
worldmap3d_legend_data.gd_roof.txt_desc = 'Das Dach ist fuer die Gruendachnutzung {voc}.';
worldmap3d_legend_data.gd_roof.values = {};
worldmap3d_legend_data.gd_roof.values['2'] = {};
worldmap3d_legend_data.gd_roof.values['2'].txt = 'gut geeignet';
worldmap3d_legend_data.gd_roof.values['2'].col = 'green';
worldmap3d_legend_data.gd_roof.values['1'] = {};
worldmap3d_legend_data.gd_roof.values['1'].txt = 'geeignet';
worldmap3d_legend_data.gd_roof.values['1'].col = 'yellow';
worldmap3d_legend_data.gd_roof.values['7'] = {};
worldmap3d_legend_data.gd_roof.values['7'].txt = 'bedingt geeignet';
worldmap3d_legend_data.gd_roof.values['7'].col = 'orange';
worldmap3d_legend_data.gd_roof.values['0'] = {};
worldmap3d_legend_data.gd_roof.values['0'].txt = 'ungeeignet';
worldmap3d_legend_data.gd_roof.values['0'].col = 'red';