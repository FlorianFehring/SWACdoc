window['search_example4_options'] = {
    searchsources: [
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/example2/search.json?query={expression}'
        }
    ],
    indexSearchsources: [
        {
            name: 'Example4SearchSource',
            type: 'SearchProviderRest',
            url: '../../data/input/search/example4/{expression}.json',
            options: {
                minchars: 1
            }
        }
    ]
};

document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search component
        let searchcomp = requestors['search_example4'].swac_comp;
        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers = [];
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerTable();
        // Name of the attribute that holds the title
        searchcomp.options.searchresultentrymakers[0].titles = ['Title', 'Description', 'Category'];
        // Name of the attribut that holds the description
        searchcomp.options.searchresultentrymakers[0].attrs = ['title', 'desc', 'cat'];
        searchcomp.options.searchresultentrymakers[0].resulturl = 'result.html?id={id}';
        // There are linkattr and linktitleattr too
    }, 'search_example4');
});