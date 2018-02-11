# Webino™ Setup Scripts

## Post-Installing operating system

`wget https://get.webino.org/os -qO- | sh`

**Configuring system mailer and reporting (apticron, logwatch, fail2ban)**

`wget https://get.webino.org/os -qO- | sh -s -- --pub --admin-mail admin@example.com --smtp-host mail.example.com --smtp-user mail@example.com`

**With SSH setup**

`wget https://get.webino.org/os -qO- | sh -- --with-ssh`

**Providing custom host info**

`wget https://get.webino.org/os -qO- | sh -- --host-name example --host-ip 127.0.0.1`
