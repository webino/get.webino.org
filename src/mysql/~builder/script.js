(function (form) {

    form.modules.mysql = {
        options: [
            'system',
            'apache',
            'mysql'
        ],
        onUpdate: function () {
            // MySQL client user
            form.setCommand(form.mysql_client_user.value, 'mysql-client-user', form.mysql_client_user.value);
        }
    };

})(window.form);
