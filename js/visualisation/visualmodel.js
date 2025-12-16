window['explaincomponent_options'] = {
    componentName: 'Visualmodel'
};

window['visualmodel_example2_options'] = {
    defaults: new Map()
};

window['visualmodel_example2_options'].defaults.set('example2', {
    width: 100,
    height: 50,
    fillColor: '#000',
    borderColor: '#000',
    visuMargin: 10,
    onClick: function (evt) {
        alert('clicked element of dataset: ' + evt.target.attrs.swac_set.id);
    },
    labelFrontFamily: 'Arial',
    labelFrontStyle: 'Arial',
    labelFrontSize: 12,
    labelPadding: 2,
    labelStrokeWidth: 0.3,
    labelFillColor: '#000',
    labelBorderColor: '#000',
    conLinecalc: 'direct', // direct, curve
    conColor: '#000',
    conWidth: 1,
    conTension: 0.5,
    conOnClick: function (evt) {
        alert('clicked connection of dataset: ' + evt.target.attrs.swac_set.id);
    }
});

window['visualmodel_example3_options'] = {};
window['visualmodel_example3_options'].defaults = new Map();
window['visualmodel_example3_options'].defaults.set('example3', {
    width: 100,
    height: 50,
    fillColor: null,
    borderColor: '#000',
    visuMargin: 10,
    onClick: null,
    labelFrontFamily: 'Arial',
    labelFrontStyle: 'Arial',
    labelFrontSize: 12,
    labelPadding: -15,
    labelStrokeWidth: 0.3,
    labelFillColor: '#000',
    labelBorderColor: '#000',
    labelX: -15,
    labelY: -15,
    conLinecalc: 'direct',   // default: direct
    conColor: '#000',
    conWidth: 4,            // default: 1
    conTension: 0.5,
    conOnClick: null
});

window['visualmodel_example4_options'] = {
    excludeFromScenegraph: {
        name: ''
    }
};
window['visualmodel_example4_options'].defaults = new Map();
window['visualmodel_example4_options'].defaults.set('example4', {
    width: 100,
    height: 50,
    fillColor: null,
    borderColor: '#000',
    visuMargin: 10,
    onClick: null,
    labelFrontFamily: 'Arial',
    labelFrontStyle: 'Arial',
    labelFrontSize: 12,
    labelPadding: -15,
    labelStrokeWidth: 0.3,
    labelFillColor: '#000',
    labelBorderColor: '#000',
    labelX: -15,
    labelY: -15,
    conLinecalc: 'curve',   // default: direct
    conColor: '#000',
    conWidth: 4,            // default: 1
    conTension: 0.5,
    conOnClick: null
});

// Example 5
window['visualmodel_example5_options'] = {
    stageHeight: 100,
    showScenegraph: false,
    mainSource: 'example5_1', // Should be set, if you want to user interactions with the visualmodel
    customAfterLoad: function (requestor) {
        // Add child datasets
        requestor.swac_comp.addDataFromReference('ref://../../data/visualisation/visualmodel/example5_2.json?filter=parent;eq;1', 'id');
    }
};

// Example 6
window['visualmodel_example6_options'] = {
    stageHeight: 100,
    showScenegraph: false,
    customAfterLoad: function (requestor) {
        // Add child datasets
        requestor.swac_comp.addDataFromReference('ref://../../data/visualisation/visualmodel/example5_2.json?filter=parent;eq;1', 'id');
    }
};

window['visualmodel_example6_options'].defaults = new Map();
window['visualmodel_example6_options'].defaults.set('../../data/visualmodel/example5_2.json', {
    xAttr: 'x',  // Value of the attibute 'position' gives the x value
    xOffset: 50,        // Place element at least 50 pixel from the left
    xFactor: 1.2,       // Scale x positioning (yFactor also available)
    heightFactor: 1,   // Invert draw direction
    width: 20,          // Only applies if dataset has no width Also possible: widthAttr, widthOffset, widthFactor
    height: 50,         // Only applies if dataset has no height Also possible: heightAttr, heightOffset, heightFactor
    fillColor: '#000',  // Draw black
    borderColor: '#000',
    visuMargin: 10,
    onClick: null,
    labelParts: 'name',   // Combine label from attribute values
    labelFrontFamily: 'Arial',
    labelFrontStyle: 'Arial',
    labelFrontSize: 12,
    labelX: 0,
    labelY: 15,
    labelPadding: 0,
    labelStrokeWidth: 0.3,
    labelFillColor: '#000',
    labelBorderColor: '#000',
    conLinecalc: 'direct', // direct, curve
    conColor: '#000',
    conWidth: 1,
    conTension: 0.5,
    conOnClick: null,
    dragmode: 'horizontal' // Allow dragging only horizontal
});

window['visualmodel_example6_options'].legendMap = new Map();
window['visualmodel_example6_options'].legendMap.set('Kupferkabel','Kk');
window['visualmodel_example6_options'].legendMap.set('Eisenkabel', 'Ek');
window['visualmodel_example6_options'].legendMap.set('Lichtphaserkabel', 'Lk');

window['visualmodel_example6_options'].plugins = new Map();
window['visualmodel_example6_options'].plugins.set('Exporter', {
    id: 'Exporter',
    active: false
});

window['visualmodel_example7_options'] = {
    stageHeight: 100,
    showScenegraph: false,
    parentAttr: 'parent', // Name of the attribute that contains reference to parent (default: parent)
    mainSource: 'example7_1', // Name of the datasource that holds the parents (must be the mainSource)
    customAfterLoad: function (requestor) {
        // Add child datasets
        requestor.swac_comp.addDataFromReference('ref://../../data/visualisation/visualmodel/example7_2.json?filter=parent;eq;1', 'id');
    }
};

window['visualmodel_example7_options'].defaults = new Map();
window['visualmodel_example7_options'].defaults.set('../../data/visualmodel/example7_2.json', {
    zRotateAttr: 'rotation',
    zRotateApplyOn: 'below',
    xRotateAttr: 'rotation',
    xRotateApplyOn: 'above',
    // Above here are options from examples before example 7
    xAttr: 'x',
    xOffset: 50,
    fillColor: '#000',
    borderColor: '#000',
    visuMargin: 10,
    onClick: null,
    labelParts: 'name',
    labelFrontFamily: 'Arial',
    labelFrontStyle: 'Arial',
    labelFrontSize: 12,
    labelX: 0,
    labelY: 15,
    labelPadding: 0,
    labelStrokeWidth: 0.3,
    labelFillColor: '#000',
    labelBorderColor: '#000',
    conLinecalc: 'direct',
    conColor: '#000',
    conWidth: 1,
    conTension: 0.5,
    conOnClick: null,
    dragmode: 'horizontal'
});

window['visualmodel_example8_options'] = {
    stageHeight: 200,
    showScenegraph: true
};
window['visualmodel_example8_options'].plugins = new Map();
window['visualmodel_example8_options'].plugins.set('Visucreator', {
    id: 'Visucreator',
    active: true
});

// Example 9
// Example 9
window['visualmodel_example9_options'] = {
    stageHeight: 120,
    showScenegraph: false,
    mainSource: 'example5_1',
    customAfterLoad: function (requestor) {
        // Add child datasets
        requestor.swac_comp.addDataFromReference('ref://../../data/visualisation/visualmodel/example5_2.json?filter=parent;eq;1', 'id');
    }
};
window['visualmodel_example9_options'].plugins = new Map();
window['visualmodel_example9_options'].plugins.set('Helplines', {
    id: 'Helplines',
    active: true
});

// Example 10
window['visualmodel_example10_options'] = {
    stageHeight: 120,
    showScenegraph: false
};

// Example 11
window['visualmodel_example11_options'] = {
    stageHeight: 120,
    showScenegraph: false,
    plugins: new Map()
};
window['visualmodel_example11_options'].plugins.set('Data', {
    id: 'Data',
    active: true
});

window['Data_visualmodel_example11_options'] = {
    datasouceattr: 'datasource',
    attrsShown: ['doubleval'],
    datareload: 0, // Time in seconds to auto update data
  datadescription: '#visualmodel_example11dd'
};

// Example 12
window['visualmodel_example12_options'] = {
  stateHeight: 120,
  showScenegraph: false,
  plugins: new Map()
};
window['visualmodel_example12_options'].plugins.set('Hierarchy', {
  id: 'Hierarchy',
  active: true
});
