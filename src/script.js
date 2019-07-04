(function ($) {
    //-----------------------+
    // Better val() function |
    //-----------------------+
    $.fn.valInternal = jQuery.fn.val;
    $.fn.val = function (val) {
        if (this.length) {
            var type = this.attr('type');
            type = type ? type : this.get(0).tagName.toLowerCase();
            switch (type) {
                case 'checkbox':
                    if (arguments.length) {
                        this.prop('checked', !!val);
                        return $.fn.valInternal.call(this, val);
                    }
                    return this.is(':checked') ? $.fn.valInternal.call(this) : '';

                case 'radio':
                    var el = this.find(':checked');
                    if (arguments.length) {
                        console.log(val);
                        return $.fn.valInternal.call(this, val);
                    }
                    return el.valInternal.call(this);
            }
        }

        if (arguments.length) {
            return $.fn.valInternal.call(this, val);
        } else {
            return $.fn.valInternal.call(this);
        }
    };

    //-------+
    // Setup |
    //-------+
    $.ajaxSetup({async: false});

    //-----------------+
    // Selects Command |
    //-----------------+
    $(document).on('mouseover', '#command', function () {
        // select text
        this.select();
    });
    $(document).on('mouseout', '#command', function () {
        // deselect text
        this.selectionStart = this.selectionEnd;
    });

    //------+
    // Init |
    //------+
    var URL = document.URL.replace(/(\/index.html.*)|(\/)$/, '');
    window.form = $('#form').get(0);
    form.values = {};
    form.options = $('#options').get(0);
    form.modules = {};
    form.task.onChange = [];
    form.command = '';

    //-----------+
    // Functions |
    //-----------+

    // Load form options
    form.options.load = function (name) {
        $.get(URL + '/' + name + '/~builder/options.html', function (response) {
            form.options.innerHTML += response;
        });
    };

    // Add command argument
    form.setCommand = function (cond, name, value) {
        form.command += cond ? ' -' + name + (value ? ' ' + value : '') : '';
    };

    // Invoke module update
    form.update = function (modules) {
        modules.forEach(function (module) {
            if (form.modules[module] && form.modules[module].onUpdate) {
                form.modules[module].onUpdate();
            }
        });
    };


    //--------------------+
    // Handle form update |
    //--------------------+
    var update = function (event) {
        if (event) {
            // task select
            if ($(event.target).is('[name=task]')) {
                change();
                return;
            }
        }

        // command update
        form.command = URL;
        var task = '/' + form.task.value;
        form.command += task + ' -qO- | sh -s --';

        // no interaction
        form.setCommand(form.no_interaction.checked, 'n');

        // environment
        form.setCommand(form.env.value, form.env.value);

        // switch support
        var support = $(form.support).val();
        console.log(form.support);
        console.log(form.support.value);
        console.log(support);
        // support WBPO
        if (support === "wbpo") {
            form.setCommand(true, 'with-wbpo');
        }
        // support Webino
        if (support !== "webino") {
            form.setCommand(true, 'without-webino');
        }

        // admin email
        form.setCommand(form.admin_email.value, 'admin-email', form.admin_email.value);

        // update module options
        if (form.modules[form.task.value] && form.modules[form.task.value].options) {
            form.update(form.modules[form.task.value].options);
        }

        // update command
        $('#command').val('wget ' + form.command);
    };

    //--------------------+
    // Handle task select |
    //--------------------+
    var change = function () {
        // store form values
        $(form).find('input,select').each(function (n, node) {
            var el = $(node);
            node.name && (form.values[node.name] = el.val());
        });

        // load options
        form.options.innerHTML = '';
        if (form.modules[form.task.value] && form.modules[form.task.value].options) {
            form.modules[form.task.value].options.forEach(function (module) {
                form.options.load(module);
            });
        }

        // restore form values
        for (var key in form.values) {
            if (form.values.hasOwnProperty(key)) {
                $(form).find('[name='+ key +']').val(form.values[key]);
            }
        }

        // update command
        update();
    };

    //------------------+
    // Bind form update |
    //------------------+
    $(document).on('change', 'form', update);
    $(document).on('keyup', 'form', update);

    //------------+
    // Init tasks |
    //------------+
    $(form.task).find('option:not(:disabled)').each(function () {
        this.value && $.get(URL + '/' + this.value + '/~builder/script.js');
    });

    //------------+
    // Initialize |
    //------------+
    change();

})(jQuery);
