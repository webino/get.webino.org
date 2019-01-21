(function (form) {

    form.modules.apache = {
        options: [
            'system',
            'apache'
        ],
        onUpdate: function () {
            form.setCommand(form.apache_version.value, 'apache', form.apache_version.value);
        }
    };

})(window.form);
