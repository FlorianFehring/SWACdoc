var explaincomponent_options = {
    componentName: 'Edit'
};
var testcomponent_options = {
    componentName: 'Edit'
};











// Example 99: Editor with definitions and child datasets
var edit_example99_options = {
    showWhenNoData: true,
    allowAdd: false,
    definitions: new Map()
};
edit_example99_options.definitions.set("../deliveryaddresses", [
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