(function (form) {

    form.modules.apache = {
        options: [
            'system'
        ],
        onUpdate: function () {
            form.setCommand(form.apache_htaccess.checked, 'apache-htaccess');
        }
    };

})(window.form);
