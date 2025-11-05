// Example 13: Hide input fields on conditions
window['edit_example13_options'] = {
    attrVisibility: [
        {
            applyOnAttr: 'stringval', // Attribute in same dataset to check
            applyOnVal: 'string',     // Expected attributes value
            hide: ['id']              // If value matches apply this hide
        }
    ]
};