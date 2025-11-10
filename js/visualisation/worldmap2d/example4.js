window['worldmap2d_example4_options'] = {
    // Activate Search plugin
    plugins: new Map([['SearchPlaces', {
                id: 'searchplaces',
                active: true
            }]])
};
window['searchplaces_worldmap2d_example4_options'] = {
    // Often a proxy is needed. This example uses SmartData proxy
    searchurl: 'http://localhost:8080/SmartData/smartdata/proxy/get?url=https://nominatim.openstreetmap.org/search'
};