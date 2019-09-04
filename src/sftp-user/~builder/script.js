(function (form) {

    form.modules['sftp-user'] = {
        options: [
            'sftp-user'
        ],
        onUpdate: function () {
            form.setCommand(form.sftp_user_name.value, 'sftp-user-name', form.sftp_user_name.value);
            form.setCommand(form.sftp_user_group.value, 'sftp-user-group', form.sftp_user_group.value);
        }
    };

})(window.form);
