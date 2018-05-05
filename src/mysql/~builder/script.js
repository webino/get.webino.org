(function (form) {

    form.modules.mysql = {
        options: [
            'system',
            'apache',
            'mysql'
        ],
        onUpdate: function () {
            form.setCommand(form.mysql_client_user.value, 'mysql-client-user', form.mysql_client_user.value);
        }
    };

})(window.form);
