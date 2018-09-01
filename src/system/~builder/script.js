(function (form) {

    form.modules.system = {
        options: [
            'system'
        ],
        onUpdate: function () {
            form.ssh && form.setCommand(form.ssh.checked, 'with-ssh');
            form.host_name && form.setCommand(form.host_name.value, 'host-name', form.host_name.value);
            form.host_ip && form.setCommand(form.host_ip.value, 'host-ip', form.host_ip.value);
            form.smtp_host && form.setCommand(form.smtp_host.value, 'smtp-host', form.smtp_host.value);
            form.smtp_user && form.setCommand(form.smtp_user.value, 'smtp-user', form.smtp_user.value);
        }
    };

})(window.form);
