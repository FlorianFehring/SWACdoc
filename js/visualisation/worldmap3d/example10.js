/* 
 * Configuration script for worldmap3d_example10
 */

window['worldmap3d_options'] = {};
window['worldmap3d_options'].plugins = new Map();
window['worldmap3d_options'].plugins.set('modelmenue', {
    id: 'modelmenue',
    active: true
});

window.onload = function (evt) {
    window['worldmap3d_options'].datasources = [];
    window['worldmap3d_options'].datasources[0] = {
        url: '../data/worldmap3d/example6/house.glb',
        fillColor: '0x67ADDFFF', // Default color of models (white if no setting is given)
        outlineColor: 'blue', // Default color of models border (black if no setting is given)
        outlineWidth: 10, // Width of the outline (1 if no setting is given)
        extrudeHeight: 0.1,
        datadescription: document.getElementById('worldmap3d_legend'),
        zoomTo: true
    };
};

// Options defining WHAT is visualised
window['worldmap3d_legend_options'] = {};
window['worldmap3d_legend_options'].visuAttribute = 'pv_wall';

worldmap3d_legend_data = {};
worldmap3d_legend_data.pv_wall = {};
worldmap3d_legend_data.pv_wall.txt_title = 'Wand-Photovoltaik';
worldmap3d_legend_data.pv_wall.txt_desc = 'Die Wände sind fuer Photovoltaik:';
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