/* 
 * Configuration script for worldmap2d_example10
 */

window['worldmap2d_example34_options'] = {
    
};


//add plugin to the worldmap2d component
window['worldmap2d_example34_options'].plugins = new Map();
window['worldmap2d_example34_options'].plugins.set('CreateObjectModal', {
    id: 'createobjectmodal',
    active: true
});


window['createobjectmodal_worldmap2d_example34_options'] = {
    saveMapping: {
        ooNameAttr: 'name',
        ooDescriptionAttr: 'description',
        ooTypeAttr: 'ootype_id',
        ooParentAttr: 'parent_id',
        ooCompletedAttr: 'complete',
        ooDataCollectionAttr: 'data_collection',
        ooMetaCollectionAttr: 'meta_collection',
        locLatAttr: 'lat',
        locLonAttr: 'lon',
        locLatLonAttr: 'coordinates',
        locNameAttr: 'name',
        locDescriptionAttr: 'description',
        joinOoIdAttr: 'oo_id',
        joinLocIdAttr: 'loc_id'
    },
    objectRequestor: {
        fromName: 'tbl_observedobject'
    }
};