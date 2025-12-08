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
    
    let present_example7_rem = document.querySelector('.present_example7_rem');
    present_example7_rem.addEventListener('click', function (evt) {
        evt.preventDefault();
        let comp = document.querySelector('#present_example7').swac_comp;
        comp.removeAllData();
        comp.addDataFromReference("ref://exampledata_biglist.json");
        comp.addDataLazy();
    });
});