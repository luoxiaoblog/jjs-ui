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