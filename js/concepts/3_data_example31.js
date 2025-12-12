// Global variable as datasource
window['dataVariable'] = [
    {
        id: 1,
        value: 100
    },{
        id: 2,
        value: 200
    },{
        id: 3,
        value: 300
    }
];

document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        let btnElem = document.querySelector('#data_example31btn');
        btnElem.addEventListener('click', function (evt) {
            evt.preventDefault();
            requestors.data_example31.swac_comp.saveData();
        });
    }, "data_example31");
});