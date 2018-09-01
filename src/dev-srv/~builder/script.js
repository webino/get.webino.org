(function (form) {

    form.modules['dev-srv'] = {
        options: [
            'system',
            'apache',
            'mysql',
            'php',
            'devkit'
        ],
        onUpdate: function () {

        }
    };

})(window.form);
