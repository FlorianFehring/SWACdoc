// Example 5: CircleProgress
window['visualise_example5_options'] = {
    visus: [{
            attr: 'wind',
            type: 'CircleProgress',
            datadescription: '#visualise_legend'
        }]
};

// Data defining HOW is visualised
window['weatherdata_legend'] = {
    wind: {
        txt_title: 'Windspeed',
        txt_desc: 'The wind speed',
        txt_uknw: 'Unkown value',
        minValue: 0,
        maxValue: 100,
        calcmode: '<',
        values: {
            '1': {
                txt: 'Windstille',
                col: '#F0F8FF'
            },
            '9': {
                txt: 'leiser Zug',
                col: '#F0FFFF'
            },
            '19': {
                txt: 'leichte Brise',
                col: '#F0FFFF'
            },
            '28': {
                txt: 'schwache Brise',
                col: '#0000FF'
            },
            '37': {
                txt: 'Mäßige Brise',
                col: '#00008B'
            },
            '46': {
                txt: 'Frische Brise',
                col: '#8A2BE2'
            },
            '56': {
                txt: 'Starker Wind',
                col: '#FAFAD2'
            },
            '65': {
                txt: 'Starker bis stürmischer Wind',
                col: '#FFFF00'
            },
            '74': {
                txt: 'Stürmischer Wind',
                col: '#FFA500'
            },
            '83': {
                txt: 'Sturm',
                col: '#FF8C00'
            },
            '93': {
                txt: 'Sturm bis schwerer Sturm',
                col: '#CD5C5C'
            },
            '102': {
                txt: 'Schwerer Sturm',
                col: '#B22222'
            },
            '111': {
                txt: 'Orkanartiger Sturm',
                col: '#FF4500'
            },
            '200': {
                txt: 'Orkan',
                col: '#8B0000'
            }
        }
    }
};
