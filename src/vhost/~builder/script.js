(function (form) {

    form.modules.vhost = {
        options: [
            'vhost'
        ],
        onUpdate: function () {
            form.setCommand(self.vhost_domain.value, 'vhost-domain', self.vhost_domain.value);
            form.setCommand(self.vhost_name.value, 'vhost-name', self.vhost_name.value);
            form.setCommand(self.vhost_http.checked, 'vhost-http');
            form.setCommand(self.vhost_https.checked, 'vhost-https');
            form.setCommand(self.vhost_www.checked, 'vhost-www');
        }
    };

})(window.form);
