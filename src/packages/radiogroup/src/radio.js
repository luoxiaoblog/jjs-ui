var Radio = (function () {
    function Radio(name, label, value, radioTemplate) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.radioTemplate =
            radioTemplate ||
                "\n    <label role=\"radio\" class=\"lyj-radio\">\n      <span class=\"lyj-radio__input\">\n        <span class=\"lyj-radio__inner\"></span>\n        <input type=\"radio\" aria-hidden=\"true\" tabindex=\"-1\" class=\"lyj-radio__original\" value=\"1\">\n      </span>\n      <span class=\"lyj-radio__label\"></span>\n    </label>\n    ";
        this.element = this.createElement();
        this.initEvent();
    }
    Radio.prototype.createElement = function () {
        return $(this.radioTemplate)
            .find('input[type=radio]')
            .attr('value', this.value)
            .attr('name', this.name)
            .end()
            .find('.lyj-radio__label')
            .text(this.label)
            .end();
    };
    Radio.prototype.initEvent = function () {
        var _this = this;
        this.element.on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            _this.element.trigger('check', _this);
        });
    };
    Radio.prototype.check = function (isCheck, checkedClass) {
        this.element
            .toggleClass(checkedClass, isCheck)
            .find('.lyj-radio__input')
            .toggleClass(checkedClass, isCheck)
            .find('input[type=radio]')
            .prop('checked', isCheck);
    };
    return Radio;
}());
var RadioGroup = (function () {
    function RadioGroup(element, options) {
        var _this = this;
        this._disabled = false;
        this.radioGroup = [];
        this.checkedClass = 'is-checked';
        this.disabledClass = 'is-disabled';
        this.name = options.name || '';
        if (options.radioGroup) {
            this.radioGroup = options.radioGroup.map(function (item) {
                return new Radio(_this.name, item.label, item.value, item.radioTemplate);
            });
        }
        this.element = this.createElement(element);
        this.changeHandler = options.changeHandler || (function () { });
        this.value = options.value;
        this.disabled = !!options.disabled;
        this.initEvent();
    }
    RadioGroup.prototype.createElement = function (element) {
        var obj = $(element)
            .addClass('lyj-radio-group')
            .empty();
        this.radioGroup.forEach(function (item, i) {
            obj.append(item.element);
        });
        return obj;
    };
    RadioGroup.prototype.initEvent = function () {
        var _this = this;
        this.element.on('check', function (event, checkedRadio) {
            event.stopPropagation();
            event.preventDefault();
            if (_this.disabled)
                return false;
            console.log('checked:' + checkedRadio);
            _this.value = checkedRadio.value;
        });
    };
    RadioGroup.prototype.radioStatusChange = function () {
        var _this = this;
        this.radioGroup.forEach(function (radio) {
            radio.check(radio.value == _this.value, _this.checkedClass);
        });
    };
    RadioGroup.prototype.toggleDisabled = function () {
        var radio = this.element.find('input[type=radio]');
        this.element
            .toggleClass(this.disabledClass, this.disabled)
            .find('.lyj-radio__input')
            .toggleClass(this.disabledClass, this.disabled);
        if (this.disabled) {
            radio.attr('disabled', 'disabled');
        }
        else {
            radio.removeAttr('disabled');
        }
    };
    Object.defineProperty(RadioGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (val !== undefined) {
                this.radioStatusChange();
                this.changeHandler(this.value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (val) {
            this._disabled = val;
            this.toggleDisabled();
        },
        enumerable: true,
        configurable: true
    });
    return RadioGroup;
}());
$.fn.extend({
    lyj_radiogroup: function (options) {
        var implementOptions = $.extend(true, {}, defaluts, options);
        this.each(function (i, item) {
            var el = $(item);
            if (el.data('radiogroup'))
                el.data('radiogroup').remove();
            el.data('radiogroup', new RadioGroup(el, implementOptions));
        });
        return this;
    }
});
var defaluts = {
    disabled: false
};
//# sourceMappingURL=radio.js.map