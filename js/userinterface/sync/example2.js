window['sync_example2_options']={
    syncTarget: '/SmartDataTest/smartdata/records/target_table?storage=smartmonitoring',
    transformFuncs: new Map()
};
window['sync_example2_options'].transformFuncs.set('doubleval',function(set) {
    // Convert double to only two decimal digits
    return set.doubleval.toFixed(2);
});