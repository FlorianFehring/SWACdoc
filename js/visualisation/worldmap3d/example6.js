/* 
 * Configuration script for worldmap3d_example6
 */
document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search and worldmap component
        let searchcomp = requestors['worldmap3d_search'].swac_comp;
        let worldmapcomp = requestors['worldmap'].swac_comp;
        // Register searchsources
        searchcomp.addSearchsource({
            type: 'SearchProviderFile',
            url: '/SWAC/data/worldmap3d/example6/{expression}.glb'
        });
        searchcomp.addSearchsource({
            type: 'SearchProviderFile',
            url: '/SWAC/data/worldmap3d/example6/{expression}.geojson'
        });
        searchcomp.addSearchsource({
            type: 'SearchProviderRest',
            url: '/GeodataREST/geodataapi/building/ids/search?query={expression}'
        });

        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerGeoJson();
        searchcomp.options.searchresultentrymakers[0].setOnClickEventListener(Worldmap3d.onClickSearchResult);
        searchcomp.options.searchresultentrymakers[1] = new SearchEntryMakerGLTF();
        searchcomp.options.searchresultentrymakers[1].setOnClickEventListener(Worldmap3d.onClickSearchResult);
        searchcomp.options.searchresultentrymakers[2] = new SearchEntryMakerHid();
        searchcomp.options.searchresultentrymakers[2].setOnClickEventListener(Worldmap3d.onClickSearchResult);
        searchcomp.options.searchresultentrymakers[2].groundpath = '/SWAC/data/worldmap3d/example6/{hid}.geojson';
        searchcomp.options.searchresultentrymakers[2].modelpath = '/SWAC/data/worldmap3d/example6/{hid}.glb';

        // Register search on worldmap
        worldmapcomp.options.searchComp = searchcomp;
    }, 'worldmap', 'worldmap3d_search');
});