// Example 11: Get possible values from database
window['edit_example11_options'] = {
    showWhenNoData: true,
    allowAdd: true,
    definitions: new Map()
};
window['edit_example11_options'].definitions.set("input/edit/example11.json", [
    {
        name: 'name',
        type: 'string'
    },
    {
        name: 'stringval',
        // Can use named sources here
        possibleValues: 'ref://input/edit/example11_possibleStringVals.json'
        // Automatically useing attribute id as value attribute and name as name attribute
    },
    {
        name: 'mimetype',
        // Can also use url sources here
        possibleValues: 'ref://../../../data/input/edit/example11_possibleMimeVals.json',
        possibleValueAttr: "no", // Useing attribute "no" as value attribute
        possibleValueName: "mime" // Useing attribute "mime" as name attribute
    }
]);