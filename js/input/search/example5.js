window['search_example5_options'] = {
    searchsources: [
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/search.json?query={expression}'
        },
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/a.json?query={expression}'
        }
    ],
    indexSearchsources: [
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/{expression}.json',
            name: 'Obst',
            options: {
                minchars: 1
            }
        },
        {
            type: 'SearchProviderRest',
            url: '../../data/input/search/G_{expression}.json',
            name: 'Gemüse',
            options: {
                minchars: 1
            }
        }
    ]
};

document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        // Get search component
        let searchcomp = requestors['search_example5'].swac_comp;
        // Register searchEntryMaker
        searchcomp.options.searchresultentrymakers = [];
        searchcomp.options.searchresultentrymakers[0] = new SearchEntryMakerTable();
        // Name of the attribute that holds the title
        searchcomp.options.searchresultentrymakers[0].titles = ['Title', 'Description', 'Category'];
        // Name of the attribut that holds the description
        searchcomp.options.searchresultentrymakers[0].attrs = ['title', 'desc', 'cat'];
        searchcomp.options.searchresultentrymakers[0].resulturl = 'result.html?id={id}';
        // There are linkattr and linktitleattr too
    }, 'search_example5');
});