window['example_thermometer_options'] = {
    visus: [
        {
            attr: 'temp',
            type: 'Thermometer',
            datadescription: '#visualise_legend'
        }
    ]
};

// Data defining HOW is visualised
window['weatherdata_legend'] = {
    temp: {
        txt_title: 'Temperature',
        txt_desc: 'The air temperature',
        txt_uknw: 'Unkown value',
        minValue: -10,
        maxValue: 40,
        calcmode: '<',
        values: {
            '0': {
                txt: 'ice cold',
                col: 'blue'
            },
            '10': {
                txt: 'cold',
                col: 'green'
            },
            '20': {
                txt: 'middle',
                col: 'yellow'
            },
            '30': {
                txt: 'hot',
                col: 'orange'
            },
            '40': {
                txt: 'extreme hot',
                col: 'red'
            }
        }
    }
};
