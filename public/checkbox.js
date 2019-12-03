var Checkbox = (function() {
  function Checkbox(options) {
    this.name = options.name
    this.label = options.label
    this.value = options.value
    this.disabled = options.disabled
    this.template =
      options.template ||
      '\n    <label class="lyj-checkbox">\n      <span class="lyj-checkbox__input">\n        <span class="lyj-checkbox__inner"></span>\n        <input type="checkbox" class="lyj-checkbox__original" value="\u590D\u9009\u6846 B">\n      </span><span class="lyj-checkbox__label">\u590D\u9009\u6846 B</span>\n    </label>\n    '
    this.checked = options.checked
    this.element = this.createElement()
    this.bindEvent()
  }
  Checkbox.prototype.createElement = function() {
    var checkbox = $(this.template)
    if (this.disabled) {
      checkbox
        .find('.lyj-checkbox__input')
        .addBack()
        .addClass('is-disabled')
      checkbox.find('.lyj-checkbox__original').attr('disabled', 'disabled')
    }
    checkbox
      .find('.lyj-checkbox__original')
      .val(this.value)
      .prop('checked', this.checked)
      .attr('name', this.name)
    checkbox.find('.lyj-checkbox__label').text(this.label)
    return checkbox
  }
  Checkbox.prototype.bindEvent = function() {
    var self = this
    this.element.find('.lyj-checkbox__original').on('change', function() {
      self.checked = $(this).prop('checked')
      self.element.trigger('lyj-checkbox-change', this)
    })
  }
  Checkbox.prototype.refleshCptCheckStatus = function() {
    this.element
      .find('.lyj-checkbox__input')
      .addBack()
      .toggleClass('is-checked', this.checked)
  }
  Checkbox.prototype.refleshCptDisableStatus = function() {
    var $inputOriginal = this.element.find('.lyj-checkbox__original')
    this.element
      .find('.lyj-checkbox__input')
      .addBack()
      .toggleClass('is-disabled', this.disabled)
    if (this.disabled) {
      $inputOriginal.attr('disabled', 'disabled')
    } else {
      $inputOriginal.removeAttr('disabled')
    }
  }
  Object.defineProperty(Checkbox.prototype, 'disabled', {
    get: function() {
      return this._disabled
    },
    set: function(val) {
      this._disabled = val
    },
    enumerable: true,
    configurable: true
  })
  return Checkbox
})()
var CheckboxGroup = (function() {
  function CheckboxGroup(element, options) {
    var _this = this
    this.checkboxGroup = []
    this.name = options.name
    this.checkboxGroup = options.checkboxGroup.map(function(checkboxOptions) {
      checkboxOptions.checked =
        options.value.indexOf(checkboxOptions.value) != -1
      checkboxOptions.name = _this.name
      return new Checkbox(checkboxOptions)
    })
    this.changeHandler = options.changeHandler
    this.element = this.createElement(element)
    this.disabled = options.disabled
    this.value = options.value
    this.min = options.min
    this.max = options.max
    this.initEvent()
  }
  CheckboxGroup.prototype.initEvent = function() {
    var _this = this
    this.element.on('lyj-checkbox-change', function(event, checkbox) {
      var value = []
      _this.checkboxGroup.forEach(function(checkbox) {
        if (checkbox.checked) {
          value.push(checkbox.value)
        }
      })
      _this.value = value
      _this.changeHandler(_this.value)
    })
  }
  CheckboxGroup.prototype.createElement = function(element) {
    element.addClass('lyj-checkbox-group').empty()
    this.checkboxGroup.forEach(function(checkbox) {
      element.append(checkbox.element)
    })
    return element
  }
  CheckboxGroup.prototype.refleshCptCheckStatus = function() {
    var _this = this
    this.checkboxGroup.forEach(function(checkbox) {
      checkbox.checked = _this.value.indexOf(checkbox.value) !== -1
      checkbox.refleshCptCheckStatus()
    })
  }
  CheckboxGroup.prototype.refleshCptDisableStatus = function() {
    var _this = this
    if (this.disabled === undefined) return
    this.checkboxGroup.forEach(function(checkbox) {
      checkbox.disabled = _this.disabled
      checkbox.refleshCptDisableStatus()
    })
  }
  Object.defineProperty(CheckboxGroup.prototype, 'value', {
    get: function() {
      return this._value
    },
    set: function(val) {
      this._value = val
      this.refleshCptCheckStatus()
    },
    enumerable: true,
    configurable: true
  })
  Object.defineProperty(CheckboxGroup.prototype, 'disabled', {
    get: function() {
      return this._disabled
    },
    set: function(val) {
      this._disabled = val
      this.refleshCptDisableStatus()
    },
    enumerable: true,
    configurable: true
  })
  return CheckboxGroup
})()
$.fn.extend({
  lyj_checkboxGroup: function(options) {
    var _this = this
    var defaluts = {
      min: 0,
      max: options.checkboxGroup.length,
      value: [],
      changeHandler: function() {}
    }
    var implementOptions = $.extend(true, {}, defaluts, options)
    this.each(function() {
      var el = $(_this)
      if (el.data('checkboxGroup')) el.data('checkboxGroup').remove()
      el.data('checkboxGroup', new CheckboxGroup(el, implementOptions))
    })
    return this
  }
})
//# sourceMappingURL=checkbox.js.map
