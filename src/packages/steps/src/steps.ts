declare var $: any

interface IStepOptions {
  title?: string
  description?: string
  icon?: string
  status?: string
  template: string
}

interface IStepsOptions {
  space?: string
  direction?: string
  active?: number
  processStatus?: string
  finishStatus?: string
  alignCenter?: boolean
  stepList: Step[]
}

class Step {
  title: string
  description: string
  icon: string
  status: string
  template: string
  element: any

  constructor(options: IStepOptions) {
    this.title = options.title || ''
    this.description = options.description || ''
    this.icon = options.icon || ''
    this.status = options.status || ''
    this.template =
      options.template ||
      `
    <div class="lyj-step" style="margin-right: 0px;">
      <div class="lyj-step__head">
        <div class="lyj-step__line" style="margin-right: 0px;">
          <i class="lyj-step__line-inner" style="transition-delay: 0ms; border-width: 1px; width: 100%;"></i>
        </div>
        <div class="lyj-step__icon">
          <div class="lyj-step__icon-inner"></div>
        </div>
      </div>
      <div class="lyj-step__main">
        <div class="lyj-step__title"></div>
        <div class="lyj-step__description"></div>
      </div>
    </div>
    `
    this.element = this.createElement()
  }

  createElement(): any {
    let obj = $(this.template).addClass('lyj-step')
    obj
      .find('.lyj-step__title')
      .text(this.title)
      .next()
      .text(this.description)
    if (this.icon === '') {
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
}

class Steps {
  space: string | undefined
  direction: string
  private _active: number = 0
  processStatus: string
  finishStatus: string
  alignCenter: boolean
  element: any
  stepList: Step[] = []

  constructor(el: any, options: IStepsOptions) {
    this.space = options.space
    this.direction = options.direction || 'horizontal'
    this.processStatus = options.processStatus || 'process'
    this.finishStatus = options.finishStatus || 'finish'
    this.alignCenter = !!options.alignCenter
    this.stepList = options.stepList.map((stepOptions: IStepOptions) => {
      return new Step(stepOptions)
    })
    this.active = options.active || 0
    this.element = this.createElement(el)
  }

  get active(): number {
    return this._active
  }

  set active(val: number) {
    this._active = val
    this.refleshStepStatus(this.element)
  }

  createElement(el: any): any {
    this.refleshStepStatus(el)
    let step = el.find('.lyj-step')
    el.addClass('lyj-steps').addClass('lyj-steps--' + this.direction)
    step.addClass('is-' + this.direction)
    if (this.space === undefined) {
      step.css(
        'flex-basis',
        Math.floor((1 / (this.stepList.length - 1)) * 100) + '%'
      )
    } else {
      step.css('flex-basis', this.space)
    }
    if (this.alignCenter) {
      step.addClass('is-center')
    }
    return step
  }

  refleshStepStatus(el: any) {
    if (!el) return
    this.stepList.forEach((step: Step, i: number) => {
      let statusObj = step.element.find(
        '.lyj-step__head, .lyj-step__title, .lyj-step__description'
      )
      if (i < this.active) {
        statusObj
          .removeClass('is-' + this.processStatus)
          .removeClass('is-wait')
          .addClass('is-' + this.finishStatus)
        if (i == this.active - 1) {
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
      } else if (i == this.active) {
        statusObj
          .removeClass('is-' + this.finishStatus)
          .removeClass('is-wait')
          .addClass('is-' + this.processStatus)
        step.element.find('.lyj-step__line-inner').css({
          'transition-delay': '-300ms',
          'border-width': '0px',
          width: '0%'
        })
      } else {
        statusObj
          .removeClass('is-' + this.finishStatus)
          .removeClass('is-' + this.processStatus)
          .addClass('is-wait')
      }
      if (step.icon === '') {
        statusObj.find('.lyj-step__icon-inner').text(i + 1)
      }
      if (i == this.stepList.length - 1 && !this.alignCenter) {
        step.element.addClass('is-flex')
      }
      el.append(step.element)
    })
  }
}

$.fn.extend({
  lyj_steps: function(options: IStepsOptions) {
    let defaluts: IStepsOptions = {
      direction: 'horizontal',
      active: 0,
      processStatus: 'process',
      finishStatus: 'finish',
      alignCenter: true,
      stepList: []
    }
    let implementOptions: IStepsOptions = $.extend(true, {}, defaluts, options)
    this.each(() => {
      let el = $(this)
      if (el.data('steps')) el.data('steps').remove()
      el.data('steps', new Steps(el, implementOptions))
    })
    return this
  }
})
