var present_example7_options = {
    lazyLoading: 5
};

document.addEventListener('swac_present_example7_complete', function (evt) {
    let present_example7_btn = document.querySelector('.present_example7_btn');
    present_example7_btn.addEventListener('click', function (evt) {
        evt.preventDefault();
        let comp = document.querySelector('#present_example7').swac_comp;
        comp.addDataLazy();
    });
});