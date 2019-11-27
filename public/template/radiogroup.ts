(function ($) {
  RadioGroup function(element, options) {
    this.name = options.name;
    this.value = options.value;
    this.radioGroup = options.radioGroup;
    this.disabled = options.disabled;
    this.radioTemplate = `
    <label role="radio" class="lyj-radio">
      <span class="lyj-radio__input">
        <span class="lyj-radio__inner"></span>
        <input type="radio" aria-hidden="true" tabindex="-1" class="lyj-radio__original" value="1">
      </span>
      <span class="lyj-radio__label"></span>
    </label>
    `;
    this.element = this.createElement(element);
  }

  RadioGroup.prototype = {
    constructor: RadioGroup,
    createElement: function (element) {
      var obj = $(element).addClass('lyj-radio-group');
      this.radioGroup.each
      return ''
    }
  };

  $.fn.extend({
    'lyj_radiogroup':function(options){
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

  var defaluts = {
    disabled: false
  };
})(window.jQuery);


(function () {
  class Radio {
    label: string;
    value: any;
    disabled: boolean;
    radioTemplate: string;

    constructor(label: string, value: any, disabled?: boolean, radioTemplate?: string) {
      this.label = label;
      this.value = value;
      this.disabled = disabled;
      if (radioTemplate) {
        this.radioTemplate = radioTemplate;
      } else {
        this.radioTemplate = `
        <label role="radio" class="lyj-radio">
          <span class="lyj-radio__input">
            <span class="lyj-radio__inner"></span>
            <input type="radio" aria-hidden="true" tabindex="-1" class="lyj-radio__original" value="1">
          </span>
          <span class="lyj-radio__label"></span>
        </label>
        `;
      } 
    }
  }


  interface IRadioGroupOptions {
    name: string;
    value: any;
    radioGroup: Radio[];
    radioTemplate: string;
    disabled: boolean;

    // constructor(options: any) {
    //   this.name = options.name;
    //   if (options.value != undefined) {
    //     this.value = options.value;
    //   }
    //   this.radioGroup = options.RadioGroup;
    //   if (options.radioTemplate != undefined) {
    //     this.radioTemplate = options.radioTemplate;
    //   } else {
    //     this.radioTemplate = `
    //     <label role="radio" class="lyj-radio">
    //       <span class="lyj-radio__input">
    //         <span class="lyj-radio__inner"></span>
    //         <input type="radio" aria-hidden="true" tabindex="-1" class="lyj-radio__original" value="1">
    //       </span>
    //       <span class="lyj-radio__label"></span>
    //     </label>
    //     `;
    //   }
    //   if (options.disabled != undefined) {
    //     this.disabled = options.disabled;
    //   } else {
    //     this.disabled = false;
    //   }
    // }
  }

  class RadioGroup {
    name: string;
    value: any;
    radioGroup: Radio[];
    disabled: boolean;
    radioTemplate: string;
    element: any;

    constructor(element: any, options: IRadioGroupOptions) {
      this.name = options.name;
      this.value = options.value;
      this.radioGroup = options.radioGroup;
      this.disabled = options.disabled;
      this.radioTemplate = options.radioTemplate;
      this.element = this.createElement(element);
      this.initEvent();
    }

    createElement(element: any): Element {
      let obj = $(element).addClass('lyj-radio-group');
      this.radioGroup.forEach((item: Radio, i: number) => {
        $(this.radioTemplate).find('input[type=radio]').attr('value', item.value)
                             .end().find('.lyj-radio__label').text(item.label)
                             .end().appendTo(obj);
      });
      return obj[0];
    }

    initEvent(): void {

    }
  }

  $.fn.extend({
    'lyj_radiogroup': function(options){
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
})(window.jQuery);
