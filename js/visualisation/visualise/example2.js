// Exampel 2: Hygrometer
window['example2_hygrometer_options'] = {
    visus: [{
            attr: 'doubleval',
            type: 'Hygrometer',
            datadescription: '#example2_hygrometer_legend'
        }]
};

window['hygrometer_legend'] = {
    doubleval: {
        txt_title: 'A double value',
        txt_desc: 'Some value as double',
        txt_uknw: 'Unkown value',
        minValue: 0,
        maxValue: 1100,
        calcmode: '<',
        values: {
            '300': {
                txt: 'ein niedriger Wert',
                col: 'green'
            },
            '600': {
                txt: 'ein mittelniedriger Wert',
                col: 'blue'
            },
            '900': {
                txt: 'ein mittelhoher Wert',
                col: 'yellow'
            },
            '1100': {
                txt: 'ein hoher Wert',
                col: 'red'
            }
        }
    }
};