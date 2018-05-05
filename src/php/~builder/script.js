(function (form) {

    form.modules.php = {
        options: [
            'system',
            'apache',
            'php'
        ],
        onUpdate: function () {
            // PHP Version
            form.setCommand(form.php_version.value, 'php', form.php_version.value);
            // PHP Apache
            form.setCommand(form.php_apache.checked, 'with-apache');
            // PHP MySQL
            form.setCommand(form.php_mysql.checked, 'with-mysql');
            // PHP-FPM
            form.setCommand(form.php_fpm.checked, 'php-fpm');
        }
    };

})(window.form);
