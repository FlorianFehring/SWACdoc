window['charts_example9_options'] = {
    showWhenNoData: true,
    xAxisAttrName: 'time',
    yAxisAttrNames: ['temp'],
    plugins: new Map([['Linechart', {
                id: 'Linechart',
                active: true
            }]])
};

document.addEventListener('uiComplete', function () {
    let clrBtn = document.querySelector('.charts_example9_clr');
    clrBtn.addEventListener('click', function () {
        document.querySelector('#charts_example9').swac_comp.removeAllData();
    });

    let addnewBtn = document.querySelector('.charts_example9_addnew');
    addnewBtn.addEventListener('click', function () {
        let req = document.getElementById('charts_example9');
        req.swac_comp.addDataFromReference("ref://../../../data/visualisation/charts/example8_series2.json");
    });

    let adddiffBtn = document.querySelector('.charts_example9_adddiff');
    adddiffBtn.addEventListener('click', function () {
        let req = document.getElementById('charts_example9');
        req.swac_comp.addDataFromReference("ref://../../../data/visualisation/charts/example9_series3.json");
    });
});