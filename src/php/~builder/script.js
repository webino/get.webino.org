(function (form) {

    form.modules.php = {
        options: [
            'system',
            'apache',
            'php'
        ],
        onUpdate: function () {
            form.setCommand(form.php_version.value, 'php', form.php_version.value);
            form.setCommand(form.php_apache.checked, 'apache');
            form.setCommand(form.php_mysql.checked, 'mysql');
            form.setCommand(form.php_memcached.checked, 'php-memcached');
            form.setCommand(form.php_sqlite.checked, 'php-sqlite');
            form.setCommand(form.php_openssl.checked, 'php-openssl');
            form.setCommand(form.php_intl.checked, 'php-intl');
            form.setCommand(form.php_fpm.checked, 'php-fpm');
            form.setCommand(form.php_short_tags.checked, 'php-short-tags');
        }
    };

})(window.form);
