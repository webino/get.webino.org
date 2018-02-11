#!/usr/bin/env php
<?php

ini_set('error_log', '/var/log/zabbix-server/phpmail.log');
error_log(print_r($argv, true));
mail($argv[1], $argv[2], $argv[3], null, '-f root@%ADMIN_MAIL_HOST%');
