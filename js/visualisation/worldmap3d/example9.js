/* 
 * Configuration script for worldmap3d_example9
 */
document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search and worldmap component
        let searchcomp = requestors['worldmap3d_search'].swac_comp;
        let worldmapcomp = requestors['worldmap3d'].swac_comp;
        // Register searchsources
        searchcomp.addSearchsource({
            type: 'SearchProviderGeoREST',
//        url: '/GeodataREST/geodataapi/geocoding/search?expression={expression}'
            url: 'https://nominatim.openstreetmap.org/search?q={expression}&format=geojson&addressdetails=1',
            geolocationComp: requestors['worldmap3d_geolocate'].swac_comp
        });

        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerGeoJson();
        searchcomp.options.searchresultentrymakers[0].setOnClickEventListener(Worldmap3d.onClickSearchResult);

        // Register search on worldmap
        worldmapcomp.options.searchComp = searchcomp;
    }, 'worldmap', 'worldmap3d_search', 'worldmap3d_geolocate');
});