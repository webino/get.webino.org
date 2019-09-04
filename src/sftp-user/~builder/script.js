(function (form) {

    form.modules['sftp-user'] = {
        options: [
            'sftp-user'
        ],
        onUpdate: function () {
            form.setCommand(form['sftp-user-name'].value, 'sftp-user-name', form.vhost_domain.value);
            form.setCommand(form['sftp-user-group'].value, 'sftp-user-group', form.vhost_name.value);
        }
    };

})(window.form);
