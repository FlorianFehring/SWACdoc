// Component onfiguration
var worldmap2d_example14_options = {
    plugins: new Map()
};

// Functionallity outside the component
document.addEventListener('swac_components_complete', function () {
    // Add eventlistener for add / remove checkbox for Startdata
    let opt1elem1 = document.querySelector('.dataopt_1');
    opt1elem1.addEventListener('change', function (evt) {
        // Get map element
        let map = document.querySelector('#worldmap2d_example14');
        if(evt.target.checked) {
            map.swac_comp.addDataFromReference('ref://' + evt.target.value);
        } else {
            map.swac_comp.removeData(evt.target.value);
        }
    });
    
    // Add eventlistener for add / remove checkbox for additional data
    let opt1elem2 = document.querySelector('.dataopt_2');
    opt1elem2.addEventListener('change', function (evt) {
        // Get map element
        let map = document.querySelector('#worldmap2d_example14');
        if(evt.target.checked) {
            map.swac_comp.addDataFromReference('ref://' + evt.target.value);
        } else {
            map.swac_comp.removeData(evt.target.value);
        }
    });
    
    // Add / remove data from custom url
    let opt1elem3 = document.querySelector('.dataopt_3');
    opt1elem3.addEventListener('change', function (evt) {
        // Get URL
        let url = document.querySelector('.dataurl').value;
        if(!url) {
            UIkit.modal.alert('Please enter URL first');
            return;
        }
        // Get map element
        let map = document.querySelector('#worldmap2d_example14');
        if(evt.target.checked) {
            map.swac_comp.addDataFromReference('ref://' + url);
        } else {
            map.swac_comp.removeData(url);
        }
    });
});