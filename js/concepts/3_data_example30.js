document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        let btnElem = document.querySelector('#data_example30btn');
        btnElem.addEventListener('click', function (evt) {
            evt.preventDefault();
            requestors.data_example30.swac_comp.saveData();
        });
    }, "data_example30");
});