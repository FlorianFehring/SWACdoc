// Example 9: Editor with custom definition useing password field
window['edit_example9_options'] = {
    allowAdd: true,
    definitions: new Map()
};
window['edit_example9_options.definitions'].set("../smartuser/user", [
    {
        name: 'username',
        type: 'string',
        required: true
    }, {
        name: 'firstname',
        type: 'string'
    },
    {
        name: 'lastname',
        type: 'string'
    },
    {
        name: 'email',
        type: 'email'
    },
    {
        name: 'password',
        type: 'password'
    },
    {
        name: 'street',
        type: 'string'
    },
    {
        name: 'houseno',
        type: 'string'
    },
    {
        name: 'zipcode',
        type: 'string'
    },
    {
        name: 'city',
        type: 'string'
    },
    {
        name: 'country',
        type: 'string',
        defaultvalue: 'Germany'
    }
]);