// Chart component configuration
window['charts_example6_options'] = {
    xAxisAttrName: 'ts',
    yAxisAttrNames: ['intval'],
    // Give id of the datadescription component
    datadescription: '#charts_example6_legend'
};
// Options defining WHAT is visualised
window['charts_example6_legend_options'] = {
    visuAttribute: 'intval'
};
// Data defining HOW is visualised
window['charts_example6_legend_data'] = {
    txt_title: 'Election results',
    intval: {
        txt_title: 'Coloring values',
        txt_desc: 'the color depends on the y attributes value',
        txt_uknw: 'Unkown value',
        values: {
            '1234': {
                txt: '1234',
                col: 'red'
            },
            '2345': {
                txt: '2345',
                col: 'green'
            },
            '3456': {
                txt: '3456',
                col: 'blue'
            }
        }
    }
};