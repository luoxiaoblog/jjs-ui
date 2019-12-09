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