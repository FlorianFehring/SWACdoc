let onChangeFunc = function (evt) {
    // You are inside the component here
    let inputs = this.getInputs();
    let msg = 'You selected:';
    for (let curInput of inputs) {
        msg += ' ' + curInput.name + ' = ' + curInput.value;
    }
    alert(msg);
};

window['select_example6_select_options'] = {onChange: onChangeFunc};
window['select_example6_multiselect_options'] = {onChange: onChangeFunc};
window['select_example6_checkboxes_options'] = {onChange: onChangeFunc};
window['select_example6_datalist_options'] = {onChange: onChangeFunc};