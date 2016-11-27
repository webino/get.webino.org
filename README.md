# Webino Installation Scripts

[![Build Status](https://travis-ci.org/webino/get.webino.org.svg?branch=develop)](https://travis-ci.org/webino/get.webino.org) 


## Requirements

- Ubuntu 15.10 | 14.04 | 12.04 (wget 1.14)


## Features

- Easy server setup
- Apache build from source
- MySQL database install
- PHP build from source
- Webino Devkit install
- Travis CI support


## How To

**Easy Setup** [TODO]

- `wget https://get.webino.org -qO- | sh`

*NOTE: Skip SSH setup with `--no-ssh`*

**Machine setup** [TODO]

*Local development* [TODO]

- `wget https://get.webino.org/seed -qO- | sh -s -- --local`

*Development server* [TODO]

- `wget https://get.webino.org/seed -qO- | sh -s -- --dev`

*Public server* [TODO]

- `wget https://get.webino.org/seed -qO- | sh -s -- --pub`


**Building Apache 2.4 from source**

*Local development* [TODO]

- `wget https://get.webino.org/seed/apache -qO- | sh -s -- --local`

*Development server* [TODO]

- `wget https://get.webino.org/seed/apache -qO- | sh -s -- --dev`

*Public server*

- `wget https://get.webino.org/seed/apache -qO- | sh -s -- --pub`


**Installing MySQL database**

- `wget https://get.webino.org/seed/mysql  -qO- | sh`


**Building PHP from source**

*Local development* [TODO]

- `wget https://get.webino.org/seed/php -qO- | sh -s -- --local`

*Development server* [TODO]

- `wget https://get.webino.org/seed/php  -qO- | sh -s -- --dev`

*Public server*

- `wget https://get.webino.org/seed/php  -qO- | sh -s -- --pub`

- `wget https://get.webino.org/seed/php  -qO- | sh -s -- --pub --update`

*PHP 7*

- `wget https://get.webino.org/seed/php  -qO- | sh -s -- --pub --php 7.0.0RC5`


**Installing Webino Devkit**

- `wget https://get.webino.org/devkit -qO- | sh`


## Development

We will appreciate any contributions on development of these scripts.

Learn [about Webino](https://github.com/webino/Webino/wiki)

## Addendum

Please, if you are interested in these scripts report any issues and don't hesitate to contribute.

[Report a bug](https://github.com/webino/get.webino.org/issues) | [Fork me](https://github.com/webino/get.webino.org)
