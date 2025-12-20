window['search_example3_options'] = {
    searchsources: [
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/example2/rest_api.json?query={expression}'
        }
    ]
};

document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search component
        let searchcomp = requestors['search_example3'].swac_comp;
        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers = [];
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerDescription();
        // Name of the attribute that holds the title
        searchcomp.options.searchresultentrymakers[0].titleattr = 'title';
        // Name of the attribut that holds the description
        searchcomp.options.searchresultentrymakers[0].descattr = 'desc';
        // There are linkattr and linktitleattr too
    }, 'search_example3');
});