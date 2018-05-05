(function (form) {

    form.modules.system = {
        options: [
            'system'
        ],
        onUpdate: function () {
            // SSH
            form.setCommand(form.ssh.checked, 'with-ssh');
            // SMTP host
            form.setCommand(form.smtp_host.value, 'smtp-host', form.smtp_host.value);
            // SMTP user
            form.setCommand(form.smtp_user.value, 'smtp-user', form.smtp_user.value);
        }
    };

})(window.form);
