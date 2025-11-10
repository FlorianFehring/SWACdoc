window['worldmap2d_example12_options'] = {
    // You can use all worldmap2d options here
    zoom: 10
};

// Specify the model file with at least url and name (Used in Layer selection).
let modelFile = {
    url: '../../../data/visualisation/worldmap2d_3d/example12/gemeinden_nrw.geojson',
    name: 'Borders of local communities NRW'
};

// New models can only be added, if
document.addEventListener('uiComplete', function () {
    // Register add function to custom button
    let addBtn = document.querySelector('.worldmap2d_example12_add');
    addBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        document.querySelector('#worldmap2d_example12').swac_comp.loadModelFile(modelFile);
    });

    // Add remove function to custom button
    let remBtn = document.querySelector('.worldmap2d_example12_rem');
    remBtn.addEventListener('click', function (evt) {
        evt.preventDefault();
        document.querySelector('#worldmap2d_example12').swac_comp.removeModelFile(modelFile.name);
    });
});
