window['example3_weathermeter_options'] = {
    visus: [{
            attr: '*',
            type: 'Iconized',
            icons: [
                {
                    path: '/SWAC/swac/components/Icon/imgs/weather/cloudy-light.png',
                    conditions: [
                        'clouds > 50'
                    ]
                },
                {
                    path: '/SWAC/swac/components/Icon/imgs/weather/rain-heavy.png',
                    conditions: [
                        'clouds > 50',
                        'rain > 50'
                    ]
                },
                {
                    path: '/SWAC/swac/components/Icon/imgs/weather/snow-storm.png',
                    conditions: [
                        'wind > 75',
                        'wind < 125',
                        'snow >= 50'
                    ]
                },
                {
                    path: '/SWAC/swac/components/Icon/imgs/weather/sun.png'
                }
            ]
        }]
};

window.onload = function () {
    let clrBtn = document.querySelector('.example3_weathermeter_clear');
    // Avoid error on outcomented example
    if (clrBtn) {
        clrBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            let req = document.querySelector('#example3_weathermeter');
            req.swac_comp.removeData('weatherdata');
        });
    }

    let addBtn = document.querySelector('.example3_weathermeter_add');
    if (addBtn) {
        addBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            let req = document.querySelector('#example3_weathermeter');
            req.swac_comp.addSet('../../../data/visualisation/visualise/weatherdata.json', {
                id: 1,
                clouds: 0,
                wind: 0,
                rain: 0,
                ts: '29.10.2019T7:46:59'
            });
        });
    }
};