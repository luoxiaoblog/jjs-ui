var BadgeType
;(function(BadgeType) {
  BadgeType[(BadgeType['Primary'] = 1)] = 'Primary'
  BadgeType[(BadgeType['Success'] = 2)] = 'Success'
  BadgeType[(BadgeType['Warning'] = 3)] = 'Warning'
  BadgeType[(BadgeType['Danger'] = 4)] = 'Danger'
  BadgeType[(BadgeType['Info'] = 5)] = 'Info'
})(BadgeType || (BadgeType = {}))
var BADGE_TYPE_MAP = new Map([
  [BadgeType.Primary, 'primary'],
  [BadgeType.Success, 'success'],
  [BadgeType.Warning, 'warning'],
  [BadgeType.Danger, 'danger'],
  [BadgeType.Info, 'info']
])
var Badge = (function() {
  function Badge(element, options) {
    this.value = options.value
    this.max = options.max
    this.isDot = options.isDot
    this.hidden = options.hidden
    this.type = options.type
    this.element = this.structElement(element)
  }
  Badge.prototype.structElement = function(element) {
    var badge = $(
      '<sup class="lyj-badge__content lyj-badge__content--' +
        this.getType() +
        '"></sup>'
    )
    if (element.children().length > 0) {
      badge.addClass('is-fixed')
    }
    if (this.isDot) {
      badge.addClass('is-dot')
    } else if (typeof this.value === 'number' && this.max < this.value) {
      badge.text(this.max + '+')
    } else {
      badge.text(this.value)
    }
    return element.addClass('lyj-badge').append(badge)
  }
  Badge.prototype.getType = function() {
    return BADGE_TYPE_MAP.get(this.type)
  }
  return Badge
})()
$.fn.extend({
  lyj_badge: function(options) {
    var _this = this
    var defaluts = {
      isDot: false,
      hidden: false
    }
    var implementOptions = $.extend(true, {}, defaluts, options)
    this.each(function() {
      var el = $(_this)
      if (el.data('badge')) el.data('badge').remove()
      el.data('badge', new Badge(el, implementOptions))
    })
    return this
  }
})
//# sourceMappingURL=badge.js.map
