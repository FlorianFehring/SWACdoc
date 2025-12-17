/* 
 * Configuration script for worldmap3d_example7
 */

window['worldmap3d_options'] = {};
window['worldmap3d_options'].datasources = [];

window.onload = function (evt) {
    window['worldmap3d_options'].datasources[0] = {
        url: 'http://localhost:8080/SmartMonitoringBackend/data/getSets?ooid=3&limit=100',
        datadescription: document.getElementById('worldmap3d_legend')
    };
    window['worldmap3d_options'].showTimedDataAtOnce = true;
};

// Options defining WHAT is visualised
window['worldmap3d_legend_options'] = {};
window['worldmap3d_legend_options'].visuAttribute = null;

var worldmap3d_legend_data = {};
worldmap3d_legend_data.temperature = {};
worldmap3d_legend_data.temperature.txt_title = 'Temperatur';
worldmap3d_legend_data.temperature.txt_desc = 'Lufttemperatur';
worldmap3d_legend_data.temperature.col = '0xAA00A5FF';
worldmap3d_legend_data.temperature.minValue = -20;
worldmap3d_legend_data.temperature.maxValue = 80;
worldmap3d_legend_data.humidity = {};
worldmap3d_legend_data.humidity.txt_title = 'Luftfeuchtigkeit';
worldmap3d_legend_data.humidity.txt_desc = 'Luftfeuchtigkeit';
worldmap3d_legend_data.humidity.col = '0xAAFFFFFF';
worldmap3d_legend_data.humidity.minValue = 0;
worldmap3d_legend_data.humidity.maxValue = 100;
worldmap3d_legend_data.pressure = {};
worldmap3d_legend_data.pressure.txt_title = 'Luftdruck';
worldmap3d_legend_data.pressure.txt_desc = 'Luftdruck';
worldmap3d_legend_data.pressure.col = '0x7790EE90';
worldmap3d_legend_data.pressure.minValue = 500;
worldmap3d_legend_data.pressure.maxValue = 1500;