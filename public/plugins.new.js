var BadgeType;
(function (BadgeType) {
    BadgeType[BadgeType["Primary"] = 1] = "Primary";
    BadgeType[BadgeType["Success"] = 2] = "Success";
    BadgeType[BadgeType["Warning"] = 3] = "Warning";
    BadgeType[BadgeType["Danger"] = 4] = "Danger";
    BadgeType[BadgeType["Info"] = 5] = "Info";
})(BadgeType || (BadgeType = {}));
var BADGE_TYPE_MAP = new Map([
    [BadgeType.Primary, 'primary'],
    [BadgeType.Success, 'success'],
    [BadgeType.Warning, 'warning'],
    [BadgeType.Danger, 'danger'],
    [BadgeType.Info, 'info']
]);
var Badge = (function () {
    function Badge(element, options) {
        this.value = options.value;
        this.max = options.max;
        this.isDot = !!options.isDot;
        this.hidden = !!options.hidden;
        this.type = options.type;
        this.element = this.structElement(element);
    }
    Badge.prototype.structElement = function (element) {
        var badge = $('<sup class="lyj-badge__content lyj-badge__content--' +
            this.getType() +
            '"></sup>');
        if (element.children().length > 0) {
            badge.addClass('is-fixed');
        }
        if (this.isDot) {
            badge.addClass('is-dot');
        }
        else if (typeof this.value === 'number' &&
            typeof this.max === 'number' &&
            this.max < this.value) {
            badge.text(this.max + '+');
        }
        else {
            badge.text(this.value);
        }
        return element.addClass('lyj-badge').append(badge);
    };
    Badge.prototype.getType = function () {
        if (this.type === undefined)
            return undefined;
        return BADGE_TYPE_MAP.get(this.type);
    };
    return Badge;
}());
$.fn.extend({
    lyj_badge: function (options) {
        var _this = this;
        var defaluts = {
            isDot: false,
            hidden: false
        };
        var implementOptions = $.extend(true, {}, defaluts, options);
        this.each(function () {
            var el = $(_this);
            if (el.data('badge'))
                el.data('badge').remove();
            el.data('badge', new Badge(el, implementOptions));
        });
        return this;
    }
});
//# sourceMappingURL=badge.js.map
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
            .on('change', function (i, item) {
            self.checked = $(item).prop('checked');
            self.element.trigger('lyj-checkbox-change', item);
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
        this.element.on('lyj-checkbox-change', function (event, checkbox) {
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
        var defaluts = {
            disabled: false
        };
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
//# sourceMappingURL=radio.js.map
var TimelineItem = (function () {
    function TimelineItem(options) {
        this.timestamp = options.timestamp;
        this.hideTimestamp = !!options.hideTimestamp;
        this.placement = options.placement || 'bottom';
        this.type = options.type;
        this.color = options.color;
        this.icon = options.icon;
        this.content = options.content;
    }
    return TimelineItem;
}());
var Timeline = (function () {
    function Timeline(el, options) {
        this._reverse = false;
        this.reverse = !!options.reverse;
        this.timelineItemList = options.timelimeItemOptionsList.map(function (timelineItemOptions) {
            return new TimelineItem(timelineItemOptions);
        });
        this.itemTemplate =
            options.itemTemplate ||
                "\n      <li class=\"lyj-timeline-item\">\n        <div class=\"lyj-timeline-item__tail\"></div>\n        <div class=\"lyj-timeline-item__node lyj-timeline-item__node--normal\"></div>\n        <div class=\"lyj-timeline-item__wrapper\">\n          <div class=\"lyj-timeline-item__content\">\n   \n          </div>\n          <div class=\"lyj-timeline-item__timestamp \">\n           \n          </div>\n        </div>\n      </li>\n    ";
        this.element = this.createElement(el);
    }
    Timeline.prototype.createElement = function (element) {
        var _this = this;
        var timelineEl = $(element)
            .empty()
            .addClass('lyj-timeline');
        this.sortByTimestamp();
        this.timelineItemList.forEach(function (item, i) {
            var timelineItemEl = $(_this.itemTemplate);
            var itemNode = timelineItemEl.find('.lyj-timeline-item__node');
            var timestamp = timelineItemEl.find('.lyj-timeline-item__timestamp');
            timelineItemEl.find('.lyj-timeline-item__content').html(item.content);
            timestamp
                .text(item.timestamp)
                .addClass('is-' + item.placement)
                .toggle(!item.hideTimestamp);
            if (item.placement == 'top') {
                timestamp.prependTo(timestamp.parent());
            }
            if (item.color) {
                itemNode.css('backgroundColor', item.color);
            }
            if (item.type) {
                itemNode.addClass('lyj-timeline-item__node--' + (item.type || ''));
            }
            if (item.icon) {
                itemNode.append('<i class="el-timeline-item__icon ' + item.icon + '"></i>');
            }
            timelineItemEl.appendTo(timelineEl);
        });
        return timelineEl;
    };
    Timeline.prototype.sortByTimestamp = function () {
        var _this = this;
        this.timelineItemList.sort(function (a, b) {
            if (_this.reverse) {
                return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
            }
            else {
                return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
            }
        });
    };
    Object.defineProperty(Timeline.prototype, "reverse", {
        get: function () {
            return this._reverse;
        },
        set: function (val) {
            this._reverse = val;
            if (this.timelineItemList) {
                this.createElement(this.element);
            }
        },
        enumerable: true,
        configurable: true
    });
    return Timeline;
}());
$.fn.extend({
    lyj_timeline: function (options) {
        var _this = this;
        this.each(function () {
            var el = $(_this);
            if (el.data('timeline'))
                el.data('timeline').remove();
            el.data('timeline', new Timeline(el, options));
        });
        return this;
    }
});
//# sourceMappingURL=timeline.js.map
var Step = (function () {
    function Step(options) {
        this.title = options.title || '';
        this.description = options.description || '';
        this.icon = options.icon || '';
        this.status = options.status || '';
        this.template =
            options.template ||
                "\n    <div class=\"lyj-step\" style=\"margin-right: 0px;\">\n      <div class=\"lyj-step__head\">\n        <div class=\"lyj-step__line\" style=\"margin-right: 0px;\">\n          <i class=\"lyj-step__line-inner\" style=\"transition-delay: 0ms; border-width: 1px; width: 100%;\"></i>\n        </div>\n        <div class=\"lyj-step__icon\">\n          <div class=\"lyj-step__icon-inner\"></div>\n        </div>\n      </div>\n      <div class=\"lyj-step__main\">\n        <div class=\"lyj-step__title\"></div>\n        <div class=\"lyj-step__description\"></div>\n      </div>\n    </div>\n    ";
        this.element = this.createElement();
    }
    Step.prototype.createElement = function () {
        var obj = $(this.template).addClass('lyj-step');
        obj
            .find('.lyj-step__title')
            .text(this.title)
            .next()
            .text(this.description);
        if (this.icon === '') {
            obj.find('.lyj-step__icon').addClass('is-text');
        }
        else {
            obj
                .find('.lyj-step__icon')
                .addClass('is-icon')
                .find('.lyj-step__icon-inner')
                .addClass(this.icon);
        }
        return obj;
    };
    return Step;
}());
var Steps = (function () {
    function Steps(el, options) {
        this._active = 0;
        this.stepList = [];
        this.space = options.space;
        this.direction = options.direction || 'horizontal';
        this.processStatus = options.processStatus || 'process';
        this.finishStatus = options.finishStatus || 'finish';
        this.alignCenter = !!options.alignCenter;
        this.stepList = options.stepList.map(function (stepOptions) {
            return new Step(stepOptions);
        });
        this.active = options.active || 0;
        this.element = this.createElement(el);
    }
    Object.defineProperty(Steps.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (val) {
            this._active = val;
            this.refleshStepStatus(this.element);
        },
        enumerable: true,
        configurable: true
    });
    Steps.prototype.createElement = function (el) {
        this.refleshStepStatus(el);
        var step = el.find('.lyj-step');
        el.addClass('lyj-steps').addClass('lyj-steps--' + this.direction);
        step.addClass('is-' + this.direction);
        if (this.space === undefined) {
            step.css('flex-basis', Math.floor((1 / (this.stepList.length - 1)) * 100) + '%');
        }
        else {
            step.css('flex-basis', this.space);
        }
        if (this.alignCenter) {
            step.addClass('is-center');
        }
        return step;
    };
    Steps.prototype.refleshStepStatus = function (el) {
        var _this = this;
        if (!el)
            return;
        this.stepList.forEach(function (step, i) {
            var statusObj = step.element.find('.lyj-step__head, .lyj-step__title, .lyj-step__description');
            if (i < _this.active) {
                statusObj
                    .removeClass('is-' + _this.processStatus)
                    .removeClass('is-wait')
                    .addClass('is-' + _this.finishStatus);
                if (i == _this.active - 1) {
                    step.element.find('.lyj-step__line-inner').css({
                        'transition-delay': '-300ms',
                        'border-width': '0px',
                        width: '0%'
                    });
                }
                else {
                    step.element.find('.lyj-step__line-inner').css({
                        'transition-delay': '0ms',
                        'border-width': '1px',
                        width: '100%'
                    });
                }
            }
            else if (i == _this.active) {
                statusObj
                    .removeClass('is-' + _this.finishStatus)
                    .removeClass('is-wait')
                    .addClass('is-' + _this.processStatus);
                step.element.find('.lyj-step__line-inner').css({
                    'transition-delay': '-300ms',
                    'border-width': '0px',
                    width: '0%'
                });
            }
            else {
                statusObj
                    .removeClass('is-' + _this.finishStatus)
                    .removeClass('is-' + _this.processStatus)
                    .addClass('is-wait');
            }
            if (step.icon === '') {
                statusObj.find('.lyj-step__icon-inner').text(i + 1);
            }
            if (i == _this.stepList.length - 1 && !_this.alignCenter) {
                step.element.addClass('is-flex');
            }
            el.append(step.element);
        });
    };
    return Steps;
}());
$.fn.extend({
    lyj_steps: function (options) {
        var _this = this;
        var defaluts = {
            direction: 'horizontal',
            active: 0,
            processStatus: 'process',
            finishStatus: 'finish',
            alignCenter: true,
            stepList: []
        };
        var implementOptions = $.extend(true, {}, defaluts, options);
        this.each(function () {
            var el = $(_this);
            if (el.data('steps'))
                el.data('steps').remove();
            el.data('steps', new Steps(el, implementOptions));
        });
        return this;
    }
});
//# sourceMappingURL=steps.js.map
$.extend({
    lyj_message: (function () {
        var LYJ_Message = (function () {
            function LYJ_Message(options) {
                this.template = '<div class="lyj-message lyj-message-fade-enter" style="top: 20px; z-index: 2177;">' +
                    '<i class="lyj-message__icon iconfont"></i>' +
                    '<p class="lyj-message__content">这是一条消息提示</p>' +
                    '</div>';
                this.type = options.type;
                this.msg = options.msg;
                this.duration = options.duration;
                this.showClose = options.showClose;
                this.element = this.createMessageAlert();
                this.bindEvent();
                this.setOffsetTop();
                this.show();
                LYJ_Message.messageInstances.push(this);
            }
            LYJ_Message.prototype.createMessageAlert = function () {
                var alert = $(this.template);
                alert
                    .addClass('lyj-message--' + this.type)
                    .find('.lyj-message__icon')
                    .addClass('lyj-icon-' + this.type)
                    .next()
                    .html(this.msg);
                if (this.showClose) {
                    alert
                        .addClass('is-closable')
                        .append('<i class="lyj-message__closeBtn iconfont lyj-icon-close"></i>');
                }
                return alert.appendTo(document.body);
            };
            LYJ_Message.prototype.setOffsetTop = function () {
                var top = 20;
                LYJ_Message.messageInstances.forEach(function (item) {
                    top += item.element.outerHeight() + 16;
                });
                this.element.css('top', top);
            };
            LYJ_Message.prototype.bindEvent = function () {
                var _this = this;
                this.element
                    .on('mouseenter', function () {
                    _this.clearTimer();
                })
                    .on('mouseleave', function () {
                    _this.startTimer();
                })
                    .on('click', '.lyj-message__closeBtn', function () {
                    _this.clearTimer();
                    _this.close();
                });
            };
            LYJ_Message.prototype.clearTimer = function () {
                clearTimeout(this.timer);
            };
            LYJ_Message.prototype.startTimer = function () {
                var _this = this;
                if (this.duration) {
                    this.timer = window.setTimeout(function () {
                        _this.close();
                    }, this.duration);
                }
            };
            LYJ_Message.prototype.show = function () {
                var _this = this;
                var t = 0;
                var onCretedTransitionend = function () {
                    if (++t == 1 && _this.duration !== 0) {
                        _this.startTimer();
                    }
                    else {
                        _this.element
                            .get(0)
                            .removeEventListener('transitionend', onCretedTransitionend);
                    }
                };
                setTimeout(function () {
                    _this.element.removeClass('lyj-message-fade-enter');
                    _this.element
                        .get(0)
                        .addEventListener('transitionend', onCretedTransitionend);
                }, 0);
            };
            LYJ_Message.prototype.close = function () {
                var _this = this;
                this.element.get(0).addEventListener('transitionend', function () {
                    $(_this.element).remove();
                }, 0);
                this.element.addClass('lyj-message-fade-leave-active');
                var n = LYJ_Message.messageInstances.length;
                var top = 20;
                for (var i = 0; i < LYJ_Message.messageInstances.length; i++) {
                    var item = LYJ_Message.messageInstances[i];
                    if (i >= n) {
                        item.element.css('top', top);
                    }
                    if (this === item) {
                        n = i;
                        LYJ_Message.messageInstances.splice(i--, 1);
                    }
                    else {
                        top += item.element.outerHeight() + 16;
                    }
                }
            };
            LYJ_Message.messageInstances = [];
            return LYJ_Message;
        }());
        return {
            message: function (options) {
                var defaultSetting = {
                    duration: 3000,
                    showClose: false
                };
                var settings = $.extend(true, {}, defaultSetting, options);
                new LYJ_Message(settings);
            },
            success: function (msg) {
                this.message({
                    type: 'success',
                    msg: msg
                });
            },
            warning: function (msg) {
                this.message(this.message({
                    type: 'warning',
                    msg: msg
                }));
            },
            info: function (msg) {
                this.message({
                    type: 'info',
                    msg: msg
                });
            },
            error: function (msg) {
                this.message({
                    type: 'error',
                    msg: msg
                });
            }
        };
    })()
});
//# sourceMappingURL=message.js.map
