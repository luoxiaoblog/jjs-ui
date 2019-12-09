declare var $: any

interface ITimelineItemOptions {
  // 时间戳
  timestamp: string

  // 是否隐藏时间戳
  hideTimestamp?: boolean

  // 时间戳位置 top / bottom
  placement?: string

  // 节点类型  primary / success / warning / danger / info
  type?: string

  // 节点颜色  hsl / hsv / hex / rgb
  color?: string

  // 节点图标
  icon?: string

  // 文本内容
  content?: string
}

interface ITimelineOptions {
  // 指定节点排序方向，默认为正序
  reverse?: boolean

  itemTemplate: string

  timelimeItemOptionsList: ITimelineItemOptions[]
}

class TimelineItem implements ITimelineItemOptions {
  timestamp: string
  hideTimestamp: boolean
  placement: string
  type: string | undefined
  color: string | undefined
  icon: string | undefined
  content: string | undefined
  element: any

  constructor(options: ITimelineItemOptions) {
    this.timestamp = options.timestamp
    this.hideTimestamp = !!options.hideTimestamp
    this.placement = options.placement || 'bottom'
    this.type = options.type
    this.color = options.color
    this.icon = options.icon
    this.content = options.content
  }
}

class Timeline {
  private _reverse: boolean = false
  timelineItemList: TimelineItem[]
  element: any
  itemTemplate: string

  constructor(el: any, options: ITimelineOptions) {
    this.reverse = !!options.reverse
    this.timelineItemList = options.timelimeItemOptionsList.map(
      (timelineItemOptions: ITimelineItemOptions) => {
        return new TimelineItem(timelineItemOptions)
      }
    )
    this.itemTemplate =
      options.itemTemplate ||
      `
      <li class="lyj-timeline-item">
        <div class="lyj-timeline-item__tail"></div>
        <div class="lyj-timeline-item__node lyj-timeline-item__node--normal"></div>
        <div class="lyj-timeline-item__wrapper">
          <div class="lyj-timeline-item__content">
   
          </div>
          <div class="lyj-timeline-item__timestamp ">
           
          </div>
        </div>
      </li>
    `
    this.element = this.createElement(el)
  }

  createElement(element: any) {
    let timelineEl = $(element)
      .empty()
      .addClass('lyj-timeline')
    this.sortByTimestamp()
    this.timelineItemList.forEach((item: TimelineItem, i: number) => {
      let timelineItemEl = $(this.itemTemplate)
      let itemNode = timelineItemEl.find('.lyj-timeline-item__node')
      let timestamp = timelineItemEl.find('.lyj-timeline-item__timestamp')
      timelineItemEl.find('.lyj-timeline-item__content').html(item.content)
      timestamp
        .text(item.timestamp)
        .addClass('is-' + item.placement)
        .toggle(!item.hideTimestamp)
      if (item.placement == 'top') {
        timestamp.prependTo(timestamp.parent())
      }
      if (item.color) {
        itemNode.css('backgroundColor', item.color)
      }
      if (item.type) {
        itemNode.addClass('lyj-timeline-item__node--' + (item.type || ''))
      }
      if (item.icon) {
        itemNode.append(
          '<i class="el-timeline-item__icon ' + item.icon + '"></i>'
        )
      }
      timelineItemEl.appendTo(timelineEl)
    })
    return timelineEl
  }

  /**
   * 此处正序是近期排前面，倒序是近期排后面
   */
  sortByTimestamp() {
    this.timelineItemList.sort((a, b): number => {
      if (this.reverse) {
        return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
      } else {
        return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      }
    })
  }

  get reverse(): boolean {
    return this._reverse
  }

  set reverse(val: boolean) {
    this._reverse = val
    if (this.timelineItemList) {
      this.createElement(this.element)
    }
  }
}

$.fn.extend({
  lyj_timeline: function(options: ITimelineOptions) {
    this.each(() => {
      let el = $(this)
      if (el.data('timeline')) el.data('timeline').remove()
      el.data('timeline', new Timeline(el, options))
    })
    return this
  }
})
