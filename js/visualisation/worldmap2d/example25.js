window['worldmap2d_example25_options'] = {
    zoom: 17,
    // Add DataAPIShowModal plugin
    plugins: new Map([[
            'DataAPIShowModal', {
                id: 'DataAPIShowModal',
                active: true
            }]
    ])
};

// Options for DataAPIShowModel
window['DataAPIShowModal_worldmap2d_example25_options'] = {
    apis: [
        {
            // APIs URL. Use {lat} and {long} to give the clicked coordinates.
            url: 'https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lng}&current=temperature_2m,relative_humidity_2m&forecast_days=1',
            // Define attributes found in response json that should be displayed
            attrs: ['current.time', 'current.temperature_2m', 'current.relative_humidity_2m']},
        {
            url: 'https://air-quality-api.open-meteo.com/v1/air-quality?latitude={lat}&longitude={lng}&current=european_aqi,pm10,pm2_5&forecast_days=1',
            attrs: ['current.european_aqi', 'current.pm10', 'current.pm2_5']}
    ]
};