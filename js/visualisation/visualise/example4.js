window['example4_weathermeter_options'] = {
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
    let addSetBtn = document.querySelector('.example4_addset');
    if (addSetBtn) {
        addSetBtn.addEventListener('click', function (evt) {
            evt.preventDefault();
            let req = document.querySelector('#example4_repeatvisualise');
            req.swac_comp.addSet('../../../data/visualise/visualsets.json', {
                id: 9
            });
        });
    }
};
