declare var $: any

enum BadgeType {
  Primary = 1,
  Success,
  Warning,
  Danger,
  Info
}

const BADGE_TYPE_MAP = new Map([
  [BadgeType.Primary, 'primary'],
  [BadgeType.Success, 'success'],
  [BadgeType.Warning, 'warning'],
  [BadgeType.Danger, 'danger'],
  [BadgeType.Info, 'info']
])

interface IBadgeOptions {
  value?: string | undefined
  max?: number | undefined
  isDot?: boolean
  hidden?: boolean
  type?: BadgeType | undefined
}

class Badge implements IBadgeOptions {
  value: string | undefined
  max: number | undefined
  isDot: boolean
  hidden: boolean
  type: BadgeType | undefined
  element: any

  constructor(element: any, options: IBadgeOptions) {
    this.value = options.value
    this.max = options.max
    this.isDot = !!options.isDot
    this.hidden = !!options.hidden
    this.type = options.type
    this.element = this.structElement(element)
  }

  structElement(element: any): any {
    let badge = $(
      '<sup class="lyj-badge__content lyj-badge__content--' +
        this.getType() +
        '"></sup>'
    )
    if (element.children().length > 0) {
      badge.addClass('is-fixed')
    }
    if (this.isDot) {
      badge.addClass('is-dot')
    } else if (
      typeof this.value === 'number' &&
      typeof this.max === 'number' &&
      this.max < this.value
    ) {
      badge.text(this.max + '+')
    } else {
      badge.text(this.value)
    }
    return element.addClass('lyj-badge').append(badge)
  }

  getType(): string | undefined {
    if (this.type === undefined) return undefined
    return BADGE_TYPE_MAP.get(this.type)
  }
}

$.fn.extend({
  lyj_badge: function(options: IBadgeOptions) {
    let defaluts: IBadgeOptions = {
      isDot: false,
      hidden: false
    }
    let implementOptions: IBadgeOptions = $.extend(true, {}, defaluts, options)
    this.each(() => {
      let el = $(this)
      if (el.data('badge')) el.data('badge').remove()
      el.data('badge', new Badge(el, implementOptions))
    })
    return this
  }
})
