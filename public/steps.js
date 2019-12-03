var Step = (function() {
  function Step(options) {
    this.title = options.title
    this.description = options.description
    this.icon = options.icon
    this.status = options.status
    this.template =
      this.template ||
      '\n    <div class="lyj-step" style="flex-basis: 25%; margin-right: 0px;">\n      <div class="lyj-step__head">\n        <div class="lyj-step__line" style="margin-right: 0px;">\n          <i class="lyj-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>\n        </div>\n        <div class="lyj-step__icon">\n          <div class="lyj-step__icon-inner"></div>\n        </div>\n      </div>\n      <div class="lyj-step__main">\n        <div class="lyj-step__title"></div>\n        <div class="lyj-step__description"></div>\n      </div>\n    </div>\n    '
    this.element = this.createElement()
  }
  Step.prototype.createElement = function() {
    var obj = $(this.template).addClass('lyj-step')
    obj
      .find('.lyj-step__title')
      .text(this.title)
      .next()
      .text(this.description)
    if (this.icon === undefined) {
      obj.find('.lyj-step__icon').addClass('is-text')
    } else {
      obj
        .find('.lyj-step__icon')
        .addClass('is-icon')
        .find('.lyj-step__icon-inner')
        .addClass(this.icon)
    }
    return obj
  }
  return Step
})()
var Steps = (function() {
  function Steps(el, options) {
    this.space = options.space
    this.direction = options.direction
    this.processStatus = options.processStatus
    this.finishStatus = options.finishStatus
    this.alignCenter = options.alignCenter
    this.stepList = options.stepList.map(function(stepOptions) {
      return new Step(stepOptions)
    })
    this.active = options.active
    this.element = this.createElement(el)
  }
  Object.defineProperty(Steps.prototype, 'active', {
    get: function() {
      return this._active
    },
    set: function(val) {
      this._active = val
      this.refleshStepStatus(this.element)
    },
    enumerable: true,
    configurable: true
  })
  Steps.prototype.createElement = function(el) {
    this.refleshStepStatus(el)
    var step = el.find('.lyj-step')
    el.addClass('lyj-steps').addClass('lyj-steps--' + this.direction)
    step.addClass('is-' + this.direction)
    if (this.direction == 'horizontal') {
      step.css('flex-basis', Math.floor((1 / this.stepList.length) * 100) + '%')
    }
    if (this.alignCenter) {
      step.addClass('is-center')
    }
    return step
  }
  Steps.prototype.refleshStepStatus = function(el) {
    var _this = this
    if (!el) return
    this.stepList.forEach(function(step, i) {
      var statusObj = step.element.find(
        '.lyj-step__head, .lyj-step__title, .lyj-step__description'
      )
      if (i < _this.active) {
        statusObj
          .removeClass('is-' + _this.processStatus)
          .removeClass('is-wait')
          .addClass('is-' + _this.finishStatus)
        if (i == _this.active - 1) {
          step.element.find('.lyj-step__line-inner').css({
            'transition-delay': '-300ms',
            'border-width': '0px',
            width: '0%'
          })
        } else {
          step.element.find('.lyj-step__line-inner').css({
            'transition-delay': '0ms',
            'border-width': '1px',
            width: '100%'
          })
        }
      } else if (i == _this.active) {
        statusObj
          .removeClass('is-' + _this.finishStatus)
          .removeClass('is-wait')
          .addClass('is-' + _this.processStatus)
        step.element.find('.lyj-step__line-inner').css({
          'transition-delay': '-300ms',
          'border-width': '0px',
          width: '0%'
        })
      } else {
        statusObj
          .removeClass('is-' + _this.finishStatus)
          .removeClass('is-' + _this.processStatus)
          .addClass('is-wait')
      }
      if (step.icon === undefined) {
        statusObj.find('.lyj-step__icon-inner').text(i + 1)
      }
      el.append(step.element)
    })
  }
  return Steps
})()
$.fn.extend({
  lyj_steps: function(options) {
    var _this = this
    var defaluts = {
      direction: 'horizontal',
      active: 0,
      processStatus: 'process',
      finishStatus: 'finish',
      alignCenter: true
    }
    var implementOptions = $.extend(true, {}, defaluts, options)
    this.each(function() {
      var el = $(_this)
      if (el.data('steps')) el.data('steps').remove()
      el.data('steps', new Steps(el, implementOptions))
    })
    return this
  }
})
//# sourceMappingURL=steps.js.map
