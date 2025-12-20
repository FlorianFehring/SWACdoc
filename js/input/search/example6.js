window['search_example6_options'] = {
    searchsources: [
        {
            type: 'SearchProviderRest',
            url: 'https://www.govdata.de/ckan/api/3/action/package_search?q={expression}'
        }
    ]
};
document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search component
        let searchcomp = requestors['search_example6'].swac_comp;
        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers = [];
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerDatasource({
            nameAttrs: ['name', 'title'], // Name of the attribute that holds the title
            descAttrs: ['description', 'desc'], // Name of the attribut that holds the description
            urlAttrs: ['url'], // Attribute names where to find the url
            knowntypesonly: false, // Show results with unsupported file types, too
            importurl: '/SmartFile/smartfile/download?filespace=test&url=%url%&type=%type%',
            mapurl: '/SWAC/sites/visualisation/worldmap2d_example21.html?modelurl=%url%&type=%type%',
            listurl: '/SWAC/sites/visualisation/present_example10.html?url=%url%&type=%type%'
        });
    }, 'search_example6');
});