// Example 10: Give a set of possible values
var edit_example10_options = {
    allowAdd: true,
    definitions: new Map()
};
edit_example10_options.definitions.set("input/edit/example10.json", [
    {
        name: 'name',
        type: 'string'
    },
    {
        name: 'doubleval',
        type: 'float8',
        min: -12,
        max: 49.7
    },
    {
        name: 'intval',
        type: 'int4',
        min: 18,
        max: 99
    },
    {
        name: 'stringval',
        possibleValues: ['Deutschland', 'Östereich', 'Schweiz']
    },
    {
        name: 'dateval',
        type: 'date',
        min: '2020-10-01',
        max: '2021-12-31'
    },
    {
        name: 'mimetype',
        possibleValues: 'audio/mp3,audio/avif,audio/ogg,video/mpeg'
    }
]);