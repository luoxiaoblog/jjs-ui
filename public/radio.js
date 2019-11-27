class Radio {
    constructor(name, label, value, radioTemplate) {
        this.name = name;
        this.label = label;
        this.value = value;
        this.radioTemplate = radioTemplate || `
    <label role="radio" class="lyj-radio">
      <span class="lyj-radio__input">
        <span class="lyj-radio__inner"></span>
        <input type="radio" aria-hidden="true" tabindex="-1" class="lyj-radio__original" value="1">
      </span>
      <span class="lyj-radio__label"></span>
    </label>
    `;
        this.element = this.createElement();
        this.initEvent();
    }
    createElement() {
        return $(this.radioTemplate).find('input[type=radio]').attr('value', this.value).attr('name', this.name)
            .end().find('.lyj-radio__label').text(this.label)
            .end();
    }
    initEvent() {
        this.element.on('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            this.element.trigger('check', this);
        });
    }
    check(isCheck, checkedClass) {
        this.element.toggleClass(checkedClass, isCheck)
            .find('.lyj-radio__input')
            .toggleClass(checkedClass, isCheck)
            .find('input[type=radio]')
            .prop('checked', isCheck);
    }
}
class RadioGroup {
    constructor(element, options) {
        this.checkedClass = 'is-checked';
        this.disabledClass = 'is-disabled';
        this.name = options.name;
        this.radioGroup = options.radioGroup.map((item) => {
            return new Radio(this.name, item.label, item.value, item.radioTemplate);
        });
        this.element = this.createElement(element);
        this.changeHandler = options.changeHandler || (() => { });
        this.value = options.value;
        this.disabled = options.disabled;
        this.initEvent();
    }
    createElement(element) {
        let obj = $(element).addClass('lyj-radio-group');
        this.radioGroup.forEach((item, i) => {
            obj.append(item.element);
        });
        return obj;
    }
    initEvent() {
        this.element.on('check', (event, checkedRadio) => {
            event.stopPropagation();
            event.preventDefault();
            if (this.disabled)
                return false;
            console.log('checked:' + checkedRadio);
            this.value = checkedRadio.value;
        });
    }
    radioStatusChange() {
        this.radioGroup.forEach((radio) => {
            radio.check(radio.value == this.value, this.checkedClass);
        });
    }
    toggleDisabled() {
        var radio = this.element.find('input[type=radio]');
        this.element.toggleClass(this.disabledClass, this.disabled)
            .find('.lyj-radio__input').toggleClass(this.disabledClass, this.disabled);
        if (this.disabled) {
            radio.attr('disabled', 'disabled');
        }
        else {
            radio.removeAttr('disabled');
        }
    }
    get value() {
        return this._value;
    }
    set value(val) {
        this._value = val;
        if (val !== undefined) {
            this.radioStatusChange();
            this.changeHandler(this.value);
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(val) {
        this._disabled = val;
        this.toggleDisabled();
    }
}
$.fn.extend({
    'lyj_radiogroup': function (options) {
        var implementOptions = $.extend(true, {}, defaluts, options);
        this.each(function () {
            var el = $(this);
            if (el.data('radiogroup'))
                el.data('radiogroup').remove();
            el.data('radiogroup', new RadioGroup(el, implementOptions));
        });
        return this;
    }
});
let defaluts = {
    disabled: false
};
//# sourceMappingURL=radio.js.map