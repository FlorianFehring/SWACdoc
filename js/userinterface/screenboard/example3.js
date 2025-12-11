window['screenboard_options'] = {
    specialButtons: [
        {
            key: 'icon: sign-in',
            func: function (evt) {
                alert('Special button pressed = custom function executed!');
            }
        }
    ]
};