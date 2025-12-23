let expandSourcesMap = new Map();
expandSourcesMap.set('../../../data/input/select/example8/hierarchicalOptions.json', {
    sizeRequestor: {
        fromName: '../../../data/input/select/example9/expandsize.json',
        fromWheres: {
            id: '{swac_setid}'
        }
    },
    clusterMinimum: 10,
    clusterPercentage: 10,
    dataRequestor: {
        fromName: '../../../data/input/select/example9/expands.json'
    }
});

window['select_example10_checkboxes_options'] = {
    expandSources: expandSourcesMap,
    onChange: onChangeFunc
};
