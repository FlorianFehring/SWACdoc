window['charts_example8_options'] = {
    xAxisAttrName: 'time',
    yAxisAttrNames: ['temp'],
    plugins: new Map([
        ['Linechart', {
                id: 'Linechart',
                active: true
            }],
        ['Barchart', {
                id: 'Barchart',
                active: true
            }]
    ]),
    // Simple coloring for the lines / bars from different sources (use datadescription component for more complex coloring)
    sourceColors: {
        '../../../data/visualisation/charts/example8_series1.json_temp': 'yellow',
        '../../../data/visualisation/charts/example8_series2.json_temp': 'red'
    }
};

// Add second datasource after component has loaded
document.addEventListener('swac_charts_example8_complete', function (evt) {
    let req = document.getElementById('charts_example8');
    req.swac_comp.addDataFromReference("ref://../../../data/visualisation/charts/example8_series2.json");
});