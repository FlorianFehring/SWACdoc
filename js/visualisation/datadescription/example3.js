document.addEventListener('swac_components_complete', function () {
    window.swac.reactions.addReaction(function (requestors) {
        requestors['datadescription_example3'].swac_comp.formatDataElement(requestors['datadescription_example3_present']);

    }, 'datadescription_example3', 'datadescription_example3_present');
});