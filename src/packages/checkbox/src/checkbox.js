var Checkbox = (function () {
    function Checkbox(options) {
        this.name = options.name;
        this.label = options.label;
        this.value = options.value;
        this._disabled = !!options.disabled;
        this.template =
            options.template ||
                "\n    <label class=\"lyj-checkbox\">\n      <span class=\"lyj-checkbox__input\">\n        <span class=\"lyj-checkbox__inner\"></span>\n        <input type=\"checkbox\" class=\"lyj-checkbox__original\" value=\"\u590D\u9009\u6846 B\">\n      </span><span class=\"lyj-checkbox__label\">\u590D\u9009\u6846 B</span>\n    </label>\n    ";
        this.checked = !!options.checked;
        this.element = this.createElement();
        this.bindEvent();
    }
    Checkbox.prototype.createElement = function () {
        var checkbox = $(this.template);
        if (this.disabled) {
            checkbox
                .find('.lyj-checkbox__input')
                .addBack()
                .addClass('is-disabled');
            checkbox.find('.lyj-checkbox__original').attr('disabled', 'disabled');
        }
        checkbox
            .find('.lyj-checkbox__original')
            .val(this.value)
            .prop('checked', this.checked)
            .attr('name', this.name);
        checkbox.find('.lyj-checkbox__label').text(this.label);
        return checkbox;
    };
    Checkbox.prototype.bindEvent = function () {
        var self = this;
        this.element
            .find('.lyj-checkbox__original')
            .on('change', function (event) {
            self.checked = $(event.target).prop('checked');
            self.element.trigger('lyj-checkbox-change');
        });
    };
    Checkbox.prototype.refleshCptCheckStatus = function () {
        this.element
            .find('.lyj-checkbox__input')
            .addBack()
            .toggleClass('is-checked', this.checked);
        this.element.find('.lyj-checkbox__original').prop('checked', this.checked);
    };
    Checkbox.prototype.refleshCptDisableStatus = function () {
        var $inputOriginal = this.element.find('.lyj-checkbox__original');
        this.element
            .find('.lyj-checkbox__input')
            .addBack()
            .toggleClass('is-disabled', this.disabled);
        if (this.disabled) {
            $inputOriginal.attr('disabled', 'disabled');
        }
        else {
            $inputOriginal.removeAttr('disabled');
        }
    };
    Object.defineProperty(Checkbox.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
        },
        enumerable: true,
        configurable: true
    });
    return Checkbox;
}());
var CheckboxGroup = (function () {
    function CheckboxGroup(element, options) {
        var _this = this;
        this._value = [];
        this._disabled = false;
        this.checkboxGroup = [];
        this.name = options.name;
        this.checkboxGroup = options.checkboxGroup.map(function (checkboxOptions) {
            if (options.value !== undefined) {
                checkboxOptions.checked =
                    options.value.indexOf(checkboxOptions.value) != -1;
            }
            checkboxOptions.name = _this.name;
            return new Checkbox(checkboxOptions);
        });
        this.changeHandler = options.changeHandler || (function () { });
        this.element = this.createElement(element);
        this.disabled = !!options.disabled;
        this.value = options.value || [];
        this.min = options.min;
        this.max = options.max;
        this.initEvent();
    }
    CheckboxGroup.prototype.initEvent = function () {
        var _this = this;
        this.element.on('lyj-checkbox-change', function (event) {
            var value = [];
            _this.checkboxGroup.forEach(function (checkbox) {
                if (checkbox.checked) {
                    value.push(checkbox.value);
                }
            });
            _this.value = value;
            _this.changeHandler(_this.value);
        });
    };
    CheckboxGroup.prototype.createElement = function (element) {
        element.addClass('lyj-checkbox-group').empty();
        this.checkboxGroup.forEach(function (checkbox) {
            element.append(checkbox.element);
        });
        return element;
    };
    CheckboxGroup.prototype.refleshCptCheckStatus = function () {
        var _this = this;
        this.checkboxGroup.forEach(function (checkbox) {
            checkbox.checked = _this.value.indexOf(checkbox.value) !== -1;
            checkbox.refleshCptCheckStatus();
        });
    };
    CheckboxGroup.prototype.refleshCptDisableStatus = function () {
        var _this = this;
        if (this.disabled === undefined)
            return;
        this.checkboxGroup.forEach(function (checkbox) {
            checkbox.disabled = _this.disabled;
            checkbox.refleshCptDisableStatus();
        });
    };
    CheckboxGroup.prototype.getValue = function (includeDisabled) {
        var _this = this;
        if (includeDisabled === void 0) { includeDisabled = false; }
        if (includeDisabled) {
            return this._value;
        }
        if (this.disabled) {
            return [];
        }
        var t = this._value.slice();
        this.checkboxGroup.forEach(function (checkbox) {
            var i = _this.value.indexOf(checkbox.value);
            if (i !== -1 && checkbox.disabled) {
                t.splice(i, 1);
            }
        });
        return t;
    };
    Object.defineProperty(CheckboxGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            this.refleshCptCheckStatus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
            this.refleshCptDisableStatus();
        },
        enumerable: true,
        configurable: true
    });
    return CheckboxGroup;
}());
$.fn.extend({
    lyj_checkboxGroup: function (options) {
        var _this = this;
        var defaluts = {
            name: '',
            min: 0,
            max: options.checkboxGroup.length,
            value: [],
            checkboxGroup: [],
            changeHandler: function () { }
        };
        var implementOptions = $.extend(true, {}, defaluts, options);
        this.each(function () {
            var el = $(_this);
            if (el.data('checkboxGroup'))
                el.data('checkboxGroup').remove();
            el.data('checkboxGroup', new CheckboxGroup(el, implementOptions));
        });
        return this;
    }
});
//# sourceMappingURL=checkbox.js.map