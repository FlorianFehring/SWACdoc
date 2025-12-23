let expandSourcesMap = new Map();
expandSourcesMap.set('../../../data/input/select/example8/hierarchicalOptions.json', {
    sizeRequestor: {
        fromName: '../../../data/input/select/example9/expandsize.json',
        fromWheres: {
            id: '{swac_setid}'
        }
    },
    dataRequestor: {
        fromName: '../../../data/input/select/example9/expands.json'
    }
});

window['select_example9_checkboxes_options'] = {
    expandSources: expandSourcesMap,
    onChange: onChangeFunc
};