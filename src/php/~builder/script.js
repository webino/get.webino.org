(function (form) {

    form.modules.php = {
        options: [
            'system',
            'apache',
            'php'
        ],
        onUpdate: function () {
            form.setCommand(form.php_version.value, 'php', form.php_version.value);
            form.setCommand(form.php_apache.checked, 'with-apache');
            form.setCommand(form.php_mysql.checked, 'with-mysql');
            form.setCommand(form.php_fpm.checked, 'php-fpm');
        }
    };

})(window.form);
