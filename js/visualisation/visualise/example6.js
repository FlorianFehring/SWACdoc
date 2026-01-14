// Example 6: StatusDisplay
window['visualise_example6_options'] = {
    visus: [{
            attr: 'states',
            type: 'StatusDisplay',
            datadescription: '#visualise_example6_legend'
        }]
};

window['statusdata_legend'] = {
    states: {
        txt_title: 'A double value',
        txt_desc: 'Some value as double',
        txt_uknw: 'Unkown value',
        minValue: 0,
        maxValue: 100,
        calcmode: '<',
        values: {
            '20': {
                txt: 'ein niedriger Wert',
                col: 'green'
            },
            '30': {
                txt: 'ein mittelniedriger Wert',
                col: 'blue'
            },
            '40': {
                txt: 'ein mittelhoher Wert',
                col: 'yellow'
            },
            '100': {
                txt: 'ein hoher Wert',
                col: 'red'
            }
        }
    }
};