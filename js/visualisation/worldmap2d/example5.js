// Minimal configuration for useing the navigation plugin
window['worldmap2d_example5_options'] = {
    plugins: new Map([['Navigation', {
                id: 'navigation',
                active: true
            }]])
};
// Navigation plugin configuration
window['navigation_worldmap2d_example5_options'] = {
    // Often a proxy is needed. This example uses SmartData proxy
    searchurl: 'http://localhost:8080/SmartData/smartdata/proxy/get?url=https://nominatim.openstreetmap.org/search'
};
