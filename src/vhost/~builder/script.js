(function (form) {

    form.modules.vhost = {
        options: [
            'vhost'
        ],
        onUpdate: function () {
            form.setCommand(form.vhost_domain.value, 'vhost-domain', form.vhost_domain.value);
            form.setCommand(form.vhost_name.value, 'vhost-name', form.vhost_name.value);
            form.setCommand(form.vhost_http.checked, 'vhost-http');
            form.setCommand(form.vhost_https.checked, 'vhost-https');
            form.setCommand(form.vhost_www.checked, 'vhost-www');
        }
    };

})(window.form);
