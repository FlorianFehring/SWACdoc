window['worldmap2d_example54_options'] = {
    zoom: 17,
    plugins: new Map([['Timeline', {
                id: 'Timeline',
                active: true
            }], ['DataAPIShowModal', {
                id: 'DataAPIShowModal',
                active: true
            }]
    ])
};

window['DataAPIShowModal_worldmap2d_example54_options'] = {
    apis: [
        {
            url: 'https://archive-api.open-meteo.com/v1/archive?latitude={lat}&longitude={lng}&start_date={date}&end_date={date}&hourly=temperature_2m,relative_humidity_2m',
            attrs: ['hourly.time', 'hourly.temperature_2m', 'hourly.relative_humidity_2m'],
            timeattr: 'hourly.time'
        }
    ]
};

window['Timeline_worldmap2d_example54_options'] = {
    tsAttr: 'measuredate', // Name of the attribute that contains time data
    startTS: new Date('2023-02-01T08:59:00'), // Timepoint to start timeline with
    endTS: new Date('2023-02-01T09:15:00'), // Timepoint to end timeline with
    animationStepSize: 60, // Every animation step is 60 seconds father
    animationSpeed: 1000, // Every second a new animation step
    animationTimeRange: 30                      // Show data from 30 seconds before and after the animation time point
};