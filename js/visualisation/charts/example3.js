// Register example 1 button events
document.addEventListener('swac_components_complete', function () {
    // Wait until chart component is complete
    window.swac.reactions.addReaction(function (requestors) {
        let addDatasetButton = document.getElementById('charts_example3_addset');
        addDatasetButton.addEventListener('click', function (evt) {
            // Create random values
            var min = -5;
            var max = 45;
            var randomDouble = (Math.random() * (max - min)) + min;

            var min = 1000;
            var max = 4000;
            var randomInt = Math.round(Math.random() * (max - min)) + min;

            // Create a dataset
            let newset = {
                // You can set an id, but if that id allready exists it will not be added
                // Datasets without id automatically become a id after the highest available id
//                id: newsetid,
                name: "Datensatz " + randomInt,
                doubleval: randomDouble,
                intval: randomInt,
                stringval: 'string' + randomInt,
                ts: new Date().toISOString(),
                refval: 'ref://exampledata/' + randomInt,
                // swac_fromname adds the dataset into the WatchableSource for this source
                swac_fromName: '../../../data/visualisation/charts/example1.json'
            };
            // Add the dataset to the right datasource
            requestors['charts_example3'].swac_comp.addSet('../../../data/visualisation/charts/example1.json', newset);
        });

        let delSourceButton = document.getElementById('charts_example3_clear');
        delSourceButton.addEventListener('click', function (evt) {
            requestors['charts_example3'].swac_comp.removeAllData();
        });

        let clearAddButton = document.getElementById('charts_example3_clearadd');
        clearAddButton.addEventListener('click', function (evt) {
            requestors['charts_example3'].swac_comp.removeAllData();
            // Create random values
            var min = -5;
            var max = 45;
            var randomDouble = (Math.random() * (max - min)) + min;

            var min = 1000;
            var max = 4000;
            var randomInt = Math.round(Math.random() * (max - min)) + min;

            let newset = {
//                id: newsetid,
                name: "Datensatz " + randomInt,
                doubleval: randomDouble,
                intval: randomInt,
                stringval: 'string' + randomInt,
                ts: new Date().toISOString(),
                refval: 'ref://exampledata_list/' + randomInt,
                swac_fromName: '../../../data/visualisation/charts/example1.json'
            };

            requestors['charts_example3'].swac_comp.addSet('../../../data/visualisation/charts/example1.json', newset);
        });

        // Add button function for adding a new datasource
        let addSourceButton = document.getElementById('charts_example3_newsource');
        addSourceButton.addEventListener('click', function (evt) {
            // Create random values
            var min = -5;
            var max = 45;
            var randomDouble = (Math.random() * (max - min)) + min;

            var min = 1000;
            var max = 4000;
            var randomInt = Math.round(Math.random() * (max - min)) + min;

            let newset = {
//                id: newsetid,
                name: "Datensatz " + randomInt,
                doubleval: randomDouble,
                intval: randomInt,
                stringval: 'string' + randomInt,
                ts: new Date().toISOString(),
                refval: 'ref://exampledata/' + randomInt
            };

            requestors['charts_example3'].swac_comp.addSet('examplenewsource', newset);
        });
    }, "charts_example3");
});