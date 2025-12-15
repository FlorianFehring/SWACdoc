window['explaincomponent_options'] = {
    componentName: 'Edit'
};
window['testcomponent_options'] = {
    componentName: 'Edit'
};

// Example 99: Editor with definitions and child datasets
window['edit_example99_options'] = {
    showWhenNoData: true,
    allowAdd: false,
    definitions: new Map()
};
window['edit_example99_options'].definitions.set("../deliveryaddresses", [
    {
        name: 'name',
        type: 'string'
    },
    {
        name: 'eyecolor',
        type: 'string'
    },
    {
        name: 'age',
        type: 'int4'
    },
    {
        name: 'country',
        type: 'string'
    }
]);