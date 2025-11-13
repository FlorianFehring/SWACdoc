window['charts_example7_options'] = {
    showWhenNoData: true,
    xAxisAttrName: 'u',
    // Use two xAxis
    yAxisAttrNames: ['i', 'p'],
    plugins: new Map([['Linechart', {
                id: 'Linechart',
                active: true
            }]]),
    // Simple coloring for the lines / bars from different sources (use datadescription component for more complex coloring)
    sourceColors: {
        '../../../data/visualisation/charts/example7_uicurve.json_i': 'yellow',
        '../../../data/visualisation/charts/example7_uicurve.json_p': 'red'
    }
};