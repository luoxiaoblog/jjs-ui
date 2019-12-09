declare var $: any

$.extend({
  lyj_message: (function() {
    class LYJ_Message {
      static messageInstances: LYJ_Message[] = []
      private timer: number | undefined
      type: string
      msg: string
      duration: number
      showClose: boolean
      element: any
      template =
        '<div class="lyj-message lyj-message-fade-enter" style="top: 20px; z-index: 2177;">' +
        '<i class="lyj-message__icon iconfont"></i>' +
        '<p class="lyj-message__content">这是一条消息提示</p>' +
        '</div>'

      constructor(options: any) {
        this.type = options.type
        this.msg = options.msg
        this.duration = options.duration
        this.showClose = options.showClose
        this.element = this.createMessageAlert()
        this.bindEvent()
        this.setOffsetTop()
        this.show()
        LYJ_Message.messageInstances.push(this)
      }

      createMessageAlert(): any {
        var alert = $(this.template)
        alert
          .addClass('lyj-message--' + this.type)
          .find('.lyj-message__icon')
          .addClass('lyj-icon-' + this.type)
          .next()
          .html(this.msg)
        if (this.showClose) {
          alert
            .addClass('is-closable')
            .append(
              '<i class="lyj-message__closeBtn iconfont lyj-icon-close"></i>'
            )
        }
        return alert.appendTo(document.body)
      }

      setOffsetTop() {
        let top = 20
        LYJ_Message.messageInstances.forEach((item: LYJ_Message) => {
          top += item.element.outerHeight() + 16
        })
        this.element.css('top', top)
      }

      bindEvent() {
        this.element
          .on('mouseenter', () => {
            this.clearTimer()
          })
          .on('mouseleave', () => {
            this.startTimer()
          })
          .on('click', '.lyj-message__closeBtn', () => {
            this.clearTimer()
            this.close()
          })
      }

      clearTimer() {
        clearTimeout(this.timer)
      }

      startTimer() {
        if (this.duration) {
          this.timer = window.setTimeout(() => {
            this.close()
          }, this.duration)
        }
      }

      show() {
        var t = 0
        var onCretedTransitionend = () => {
          if (++t == 1 && this.duration !== 0) {
            this.startTimer()
          } else {
            this.element
              .get(0)
              .removeEventListener('transitionend', onCretedTransitionend)
          }
        }
        setTimeout(() => {
          this.element.removeClass('lyj-message-fade-enter')
          this.element
            .get(0)
            .addEventListener('transitionend', onCretedTransitionend)
        }, 0)
      }

      close() {
        this.element.get(0).addEventListener(
          'transitionend',
          () => {
            $(this.element).remove()
          },
          0
        )
        this.element.addClass('lyj-message-fade-leave-active')
        let n = LYJ_Message.messageInstances.length
        let top = 20
        for (let i = 0; i < LYJ_Message.messageInstances.length; i++) {
          let item: LYJ_Message = LYJ_Message.messageInstances[i]
          if (i >= n) {
            item.element.css('top', top)
          }
          if (this === item) {
            n = i
            LYJ_Message.messageInstances.splice(i--, 1)
          } else {
            top += item.element.outerHeight() + 16
          }
        }
      }
    }

    return {
      message(options: any) {
        let defaultSetting: any = {
          duration: 3000,
          showClose: false
        }
        let settings = $.extend(true, {}, defaultSetting, options)
        new LYJ_Message(settings)
      },
      success: function(msg: string) {
        this.message({
          type: 'success',
          msg
        })
      },
      warning: function(msg: string) {
        this.message(
          this.message({
            type: 'warning',
            msg
          })
        )
      },
      info: function(msg: string) {
        this.message({
          type: 'info',
          msg
        })
      },
      error: function(msg: string) {
        this.message({
          type: 'error',
          msg
        })
      }
    }
  })()
})
