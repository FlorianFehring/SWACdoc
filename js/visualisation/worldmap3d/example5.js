/* 
 * Configuration script for worldmap3d_example5
 */
document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        let worldmapComp = requestors['worldmap'].swac_comp;
        requestors['worldmap3d_geolocate'].swac_comp.options.onLocateFunctions[0] = worldmapComp.onUserLocation.bind(worldmapComp);
    }, 'worldmap', 'worldmap3d_geolocate');
});