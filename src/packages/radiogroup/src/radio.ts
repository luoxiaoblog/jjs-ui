declare var $: any

interface IRadioGroupOptions {
  name?: string
  value?: any
  radioGroup?: Radio[]
  disabled?: boolean
  changeHandler?: Function
}

class Radio {
  label: string
  value: any
  radioTemplate: string
  element: any
  name: string

  constructor(name: string, label: string, value: any, radioTemplate?: string) {
    this.name = name
    this.label = label
    this.value = value
    this.radioTemplate =
      radioTemplate ||
      `
    <label role="radio" class="lyj-radio">
      <span class="lyj-radio__input">
        <span class="lyj-radio__inner"></span>
        <input type="radio" aria-hidden="true" tabindex="-1" class="lyj-radio__original" value="1">
      </span>
      <span class="lyj-radio__label"></span>
    </label>
    `
    this.element = this.createElement()
    this.initEvent()
  }

  createElement() {
    return $(this.radioTemplate)
      .find('input[type=radio]')
      .attr('value', this.value)
      .attr('name', this.name)
      .end()
      .find('.lyj-radio__label')
      .text(this.label)
      .end()
  }

  initEvent() {
    this.element.on('click', (e: Event) => {
      e.stopPropagation()
      e.preventDefault()
      this.element.trigger('check', this)
    })
  }

  check(isCheck: boolean, checkedClass: string) {
    this.element
      .toggleClass(checkedClass, isCheck)
      .find('.lyj-radio__input')
      .toggleClass(checkedClass, isCheck)
      .find('input[type=radio]')
      .prop('checked', isCheck)
  }
}

class RadioGroup {
  private _value: any
  private _disabled: boolean = false
  name: string
  radioGroup: Radio[] = []
  element: any
  changeHandler: Function
  checkedClass: string = 'is-checked'
  disabledClass: string = 'is-disabled'

  constructor(element: any, options: IRadioGroupOptions) {
    this.name = options.name || ''
    if (options.radioGroup) {
      this.radioGroup = options.radioGroup.map((item: any) => {
        return new Radio(this.name, item.label, item.value, item.radioTemplate)
      })
    }
    this.element = this.createElement(element)
    this.changeHandler = options.changeHandler || (() => {})
    this.value = options.value
    this.disabled = !!options.disabled
    this.initEvent()
  }

  createElement(element: any): Element {
    let obj = $(element)
      .addClass('lyj-radio-group')
      .empty()
    this.radioGroup.forEach((item: Radio, i: number) => {
      obj.append(item.element)
    })
    return obj
  }

  initEvent(): void {
    this.element.on('check', (event: Event, checkedRadio: Radio) => {
      event.stopPropagation()
      event.preventDefault()
      if (this.disabled) return false
      console.log('checked:' + checkedRadio)
      this.value = checkedRadio.value
    })
  }

  radioStatusChange(): void {
    this.radioGroup.forEach((radio: Radio) => {
      radio.check(radio.value == this.value, this.checkedClass)
    })
  }

  toggleDisabled() {
    var radio = this.element.find('input[type=radio]')
    this.element
      .toggleClass(this.disabledClass, this.disabled)
      .find('.lyj-radio__input')
      .toggleClass(this.disabledClass, this.disabled)
    if (this.disabled) {
      radio.attr('disabled', 'disabled')
    } else {
      radio.removeAttr('disabled')
    }
  }

  get value(): any {
    return this._value
  }

  set value(val: any) {
    this._value = val
    if (val !== undefined) {
      this.radioStatusChange()
      this.changeHandler(this.value)
    }
  }

  get disabled(): boolean {
    return this._disabled
  }

  set disabled(val: boolean) {
    this._disabled = val
    this.toggleDisabled()
  }
}

$.fn.extend({
  lyj_radiogroup: function(options: IRadioGroupOptions) {
    let defaluts: IRadioGroupOptions = {
      disabled: false
    }
    var implementOptions = $.extend(true, {}, defaluts, options)
    this.each((i: number, item: any) => {
      var el = $(item)
      if (el.data('radiogroup')) el.data('radiogroup').remove()
      el.data('radiogroup', new RadioGroup(el, implementOptions))
    })
    return this
  }
})
