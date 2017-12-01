# Webino™ Installation Scripts

## Post-Installing operating system

- `wget https://get.webino.org/seed/os -qO- | sh`

** Configuring system mailer and reporting (apticron, logwatch, fail2ban) **

- `wget https://get.webino.org/seed/os -qO- | sh -s -- --pub --admin-mail admin@example.com --smtp-host mail.example.com --smtp-user mail@example.com --smtp-password (optional|prompt)`
