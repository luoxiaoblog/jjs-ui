/*jshint asi:true, expr:true */
    /**
     * Plugin Name: Combo Select
     * Author : Vinay@Pebbleroad
     * Date: 23/11/2014
     * Description:
     * Converts a select box into a searchable and keyboard friendly interface. Fallbacks to native select on mobile and tablets
     */

    // Expose plugin as an AMD module if AMD loader is present:
    (function(factory) {
      'use strict';
      if (typeof define === 'function' && define.amd) {
          // AMD. Register as an anonymous module.
          define(['jquery'], factory);
      } else if (typeof exports === 'object' && typeof require === 'function') {
          // Browserify
          factory(require('jquery'));
      } else {
          // Browser globals
          factory(jQuery);
      }
  }(function($, undefined) {

      var pluginName = "comboSelect",
          dataKey = 'comboselect';
      var defaults = {
          comboClass: 'combo-select',
          comboArrowClass: 'combo-arrow',
          comboDropDownClass: 'combo-dropdown',
          inputClass: 'combo-input text-input',
          disabledClass: 'option-disabled',
          hoverClass: 'option-hover',
          selectedClass: 'option-hover',
          //selectedClass      : 'option-selected',
          markerClass: 'combo-marker',
          themeClass: '',
          maxHeight: 200,
          extendStyle: true,
          focusInput: true,
          ablefilter: true,
          disabledComboSelect: false
      };

      /**
       * Utility functions
       */

      var keys = {
              ESC: 27,
              TAB: 9,
              RETURN: 13,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              ENTER: 13,
              SHIFT: 16
          },
          isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

      /**
       * Constructor
       * @param {[Node]} element [Select element]
       * @param {[Object]} options [Option object]
       */
      function Plugin(element, options) {

          /* Name of the plugin */

          this._name = pluginName;

          /* Reverse lookup */

          this.el = element

          /* Element */

          this.$el = $(element)

          /* If multiple select: stop */

          if (this.$el.prop('multiple')) return;

          /* Settings */

          this.settings = $.extend({}, defaults, options, this.$el.data());

          /* Defaults */

          this._defaults = defaults;

          /* Options */

          this.$options = this.$el.find('option, optgroup')

          /* Initialize */

          this.init();

          /* Instances */

          $.fn[pluginName].instances.push(this);

      }

      $.extend(Plugin.prototype, {
          init: function() {

              /* Construct the comboselect */

              this._construct();

              /* Add event bindings */
              if (this.settings.disabledComboSelect) { //设置disabled
                  this.settings.focusInput = false;
                  this.$container.on('focus.input', 'input', function() {
                      $(this).prop("disabled", true);
                  })
              } else {
                  this._events();
              }

              if (this.settings.focusInput) { //设置readonly
                  this._events();
              } else {
                  this.$container.on('focus.input', 'input', function(e) {
                      $(this).prop("readonly", true);
                      //  $(this).blur();
                  })
              }
          },
          _construct: function() {

              var self = this

              /**
               * Add negative TabIndex to `select`
               * Preserves previous tabindex
               */

              this.$el.data('plugin_' + dataKey + '_tabindex', this.$el.prop('tabindex'))

                  /* Add a tab index for desktop browsers */

                  !isMobile && this.$el.prop("tabIndex", -1)

              /**
               * Wrap the Select
               */

              this.$container = this.$el.wrapAll('<div class="' + this.settings.comboClass + ' ' + this.settings.themeClass + '" />').parent();

              /**
               * Check if select has a width attribute
               */
              if (this.settings.extendStyle && this.$el.attr('style')) {

                  this.$container.attr('style', this.$el.attr("style"))

              }


              /**
               * Append dropdown arrow
               */

              this.$arrow = $('<div class="' + this.settings.comboArrowClass + '" />').appendTo(this.$container)


              /**
               * Append dropdown
               */

              this.$dropdown = $('<ul class="' + this.settings.comboDropDownClass + '" />').appendTo(this.$container)


              /**
               * Create dropdown options
               */

              var o = '',
                  k = 0,
                  p = '';

              this.selectedIndex = this.$el.prop('selectedIndex')

              this.$options.each(function(i, e) {

                  if (e.nodeName.toLowerCase() == 'optgroup') {

                      return o += '<li class="option-group">' + this.label + '</li>'
                  }

                  if (!e.value) p = e.innerHTML

                  o += '<li class="' + (this.disabled ? self.settings.disabledClass : "option-item") + ' ' + (k == self.selectedIndex ? self.settings.selectedClass : '') + '" data-index="' + (k) + '" data-value="' + this.value + '">' + (this.innerHTML) + '</li>'

                  k++;
              })

              this.$dropdown.html(o)

              /**
               * Items
               */

              this.$items = this.$dropdown.children();


              /**
               * Append Input
               */

              this.$input = $('<input type="text"' + (isMobile ? 'tabindex="-1"' : '') + ' placeholder="' + p + '" class="' + this.settings.inputClass + '">').appendTo(this.$container)

              /* Update input text */

              this._updateInput()

          },

          _events: function() {

              /* Input: focus */

              this.$container.off('focus.input', 'input').on('focus.input', 'input', $.proxy(this._focus, this))

              /**
               * Input: mouseup
               * For input select() event to function correctly
               */
              this.$container.off('mouseup.input', 'input').on('mouseup.input', 'input', function(e) {
                  // e.preventDefault()
              })

              /* Input: blur */

              this.$container.off('blur.input', 'input').on('blur.input', 'input', $.proxy(this._blur, this))

              /* Select: change */

              this.$el.off('change.select').on('change.select', $.proxy(this._change, this))

              /* Select: focus */

              this.$el.off('focus.select').on('focus.select', $.proxy(this._focus, this))

              /* Select: blur */

              this.$el.off('blur.select').on('blur.select', $.proxy(this._blurSelect, this))

              /* Dropdown Arrow: click */

              this.$container.off('click.arrow').on('click.arrow', '.' + this.settings.comboArrowClass, $.proxy(this._toggle, this))

              /* Dropdown: close */

              this.$container.off('comboselect:close').on('comboselect:close', $.proxy(this._close, this))

              /* Dropdown: open */

              this.$container.off('comboselect:open').on('comboselect:open', $.proxy(this._open, this))


              /* HTML Click */
              //点击其他input关闭select下拉
              $(document).on('focus', 'input:not(.combo-input)', function(e) {
                  $.each($.fn[pluginName].instances, function(i, plugin) {
                      plugin.$container.trigger('comboselect:close')
                  })
              });

              $('html').off('click.comboselect').on('click.comboselect', function() {
                  $.each($.fn[pluginName].instances, function(i, plugin) {

                      plugin.$container.trigger('comboselect:close')

                  })
              });

              /* Stop `event:click` bubbling */

              this.$container.off('click.comboselect').on('click.comboselect', function(e) {
                  e.stopPropagation();
                  //关闭其他多选或更多筛选
                  if($('.multiselect-native-select').length>0){
                      $('.multiselect-native-select').find('.btn-group').removeClass('open');
                      $('.multiselect-native-select').find('.multiselect').attr('aria-expanded',false);
                  };
                  if($('.other-btn').length>0&&$(this).parents('.other-content').length==0){
                       $('.other-content').hide();
                      $('.other-btn').attr('data','false');
                  };
              })


              /* Input: keydown */

              this.$container.off('keydown', 'input').on('keydown', 'input', $.proxy(this._keydown, this))

              /* Input: keyup */

              this.$container.off('keyup', 'input').on('keyup', 'input', $.proxy(this._keyup, this))

              /* Dropdown item: click */

              this.$container.off('click.item', '.option-item').on('click.item', '.option-item', $.proxy(this._select, this))
          },

          _keydown: function(event) {



              switch (event.which) {

                  case keys.UP:
                      this._move('up', event)
                      break;

                  case keys.DOWN:
                      this._move('down', event)
                      break;

                  case keys.TAB:
                      this._enter(event)
                      break;

                  /* case keys.RIGHT:
                      this._autofill(event);
                      break; */

                  case keys.ENTER:
                      this._enter(event);
                      break;

                  default:
                      break;


              }

          },


          _keyup: function(event) {

              switch (event.which) {
                  case keys.ESC:
                      this.$container.trigger('comboselect:close')
                      break;

                  case keys.ENTER:
                  case keys.UP:
                  case keys.DOWN:
                  case keys.LEFT:
                  case keys.RIGHT:
                  case keys.TAB:
                  case keys.SHIFT:
                      break;

                  default:
                      if (this.settings.ablefilter) {
                        this._filter(event.target.value)
                      } 
                      break;
              }
          },

          _enter: function(event) {

              var item = this._getHovered()

              item.length && this._select(item);

              /* Check if it enter key */
              if (event && event.which == keys.ENTER) {

                  if (!item.length) {

                      /* Check if its illegal value */

                      this._blur();

                      return true;
                  }

                  event.preventDefault();
              }


          },
          _move: function(dir) {

              var items = this._getVisible(),
                  current = this._getHovered(),
                  index = current.prevAll('.option-item').filter(':visible').length,
                  total = items.length


              switch (dir) {
                  case 'up':
                      index--;
                      (index < 0) && (index = (total - 1));
                      break;

                  case 'down':
                      index++;
                      (index >= total) && (index = 0);
                      break;
              }


              items
                  .removeClass(this.settings.hoverClass)
                  .eq(index)
                  .addClass(this.settings.hoverClass)


              if (!this.opened) this.$container.trigger('comboselect:open');

              this._fixScroll()
          },

          _select: function(event) {

              var item = event.currentTarget ? $(event.currentTarget) : $(event);

              if (!item.length) return;

              /**
               * 1. get Index
               */

              var index = item.data('index');

              this._selectByIndex(index);

              this.$container.trigger('comboselect:close')

          },

          _selectByIndex: function(index) {

              /**
               * Set selected index and trigger change
               * @type {[type]}
               */
              if (typeof index == 'undefined') {
                  index = 0
              }
              if (this.$el.prop('selectedIndex') != index) {
                  var _el = this.$el;
                  this.$el.prop('selectedIndex', index);
                  setTimeout(function() {
                      _el.trigger('change');
                  }, 100);
              }

          },

          _autofill: function() {

              var item = this._getHovered();

              if (item.length) {

                  var index = item.data('index')

                  this._selectByIndex(index)

              }

          },


          _filter: function(search) {

              var self = this,
                  items = this._getAll();
              needle = $.trim(search).toLowerCase(),
                  reEscape = new RegExp('(\\' + ['/', '.', '*', '+', '?', '|', '(', ')', '[', ']', '{', '}', '\\'].join('|\\') + ')', 'g'),
                  pattern = '(' + search.replace(reEscape, '\\$1') + ')';


              /**
               * Unwrap all markers
               */

              $('.' + self.settings.markerClass, items).contents().unwrap();

              /* Search */

              if (needle) {

                  /* Hide Disabled and optgroups */

                  this.$items.filter('.option-group, .option-disabled').hide();


                  items
                      .hide()
                      .filter(function() {

                          var $this = $(this),
                              text = $.trim($this.text()).toLowerCase();

                          /* Found */
                          if (text.toString().indexOf(needle) != -1) {

                              /**
                               * Wrap the selection
                               */

                              $this
                                  .html(function(index, oldhtml) {
                                      return oldhtml.replace(new RegExp(pattern, 'gi'), '<span class="' + self.settings.markerClass + '">$1</span>')
                                  })

                              return true
                          }
                      })
                      .show()
              } else {


                  this.$items.show();
              }

              /* Open the comboselect */

              this.$container.trigger('comboselect:open')


          },

          _highlight: function() {

              /*
               1. Check if there is a selected item
               2. Add hover class to it
               3. If not add hover class to first item
               */

              var visible = this._getVisible().removeClass(this.settings.hoverClass),
                  $selected = visible.filter('.' + this.settings.selectedClass)

              if ($selected.length) {

                  $selected.addClass(this.settings.hoverClass);

              } else {

                  visible.removeClass(this.settings.hoverClass);
                  if (!visible.first().attr('data-value')) { visible.first().addClass(this.settings.hoverClass); }

              }

          },

          _updateInput: function() {

              var selected = this.$el.prop('selectedIndex')

              if (this.$el.val()) {

                  text = this.$el.find('option').eq(selected).text()

                  this.$input.val(text)

                  /*if (!selected == 0) {

                   this.$input.val(text)

                   } else {

                   this.$input.val('');

                   this.$input.attr("placeholder", text);

                   }*/


              } else {

                  this.$input.val('')

              }

              if (this.settings.disabledComboSelect) {
                  this.$input.prop("disabled", true).css("color", "#888");
                  $(".combo-arrow").css("background", "rgba(0,0,0,0)");
              };
              return this._getAll()
                  .removeClass(this.settings.selectedClass)
                  .filter(function() {

                      return $(this).data('index') == selected
                  })
                  .addClass(this.settings.selectedClass)

          },
          _blurSelect: function() {

              this.$container.removeClass('combo-focus');

          },
          _focus: function(event) {

              /* Toggle focus class */

              this.$container.toggleClass('combo-focus', !this.opened);

              /* If mobile: stop */

              if (isMobile) return;

              /* Open combo */

              if (!this.opened) this.$container.trigger('comboselect:open');

              /* Select the input */

              this.settings.focusInput && event && event.currentTarget && event.currentTarget.nodeName == 'INPUT' && event.currentTarget.select();

              // if(!this.settings.focusInput){
              //     this.$input.blur();
              // }
          },

          _blur: function() {

              /**
               * 1. Get hovered item
               * 2. If not check if input value == select option
               * 3. If none
               */

              var val = $.trim(this.$input.val().toLowerCase()),
                  isNumber = !isNaN(val);

              var index = this.$options.filter(function() {

                  if (isNumber) {
                      return parseInt($.trim(this.innerHTML).toLowerCase()) == val
                  }

                  return $.trim(this.innerHTML).toLowerCase() == val

              }).prop('index')

              /* Select by Index */

              this._selectByIndex(index)

          },

          _change: function() {


              this._updateInput();

          },

          _getAll: function() {

              return this.$items.filter('.option-item')

          },
          _getVisible: function() {

              return this.$items.filter('.option-item').filter(':visible')

          },

          _getHovered: function() {

              return this._getVisible().filter('.' + this.settings.hoverClass);

          },

          _open: function() {

              var self = this

              this.$container.addClass('combo-open')

              this.opened = true

              /* Focus input field */

              this.settings.focusInput && setTimeout(function() {!self.$input.is(':focus') && self.$input.focus(); });

              /* Highligh the items */

              this._highlight()

              /* Fix scroll */

              this._fixScroll()

              /* Close all others */


              $.each($.fn[pluginName].instances, function(i, plugin) {

                  if (plugin != self && plugin.opened) plugin.$container.trigger('comboselect:close')
              })

          },

          _toggle: function() {

              this.opened ? this._close.call(this) : this._open.call(this)
          },

          _close: function() {

              this.$container.removeClass('combo-open combo-focus')

              this.$container.trigger('comboselect:closed')

              this.opened = false

              /* Show all items */

              this.$items.show();

          },
          _fixScroll: function() {

              /**
               * If dropdown is hidden
               */
              if (this.$dropdown.is(':hidden')) return;


              /**
               * Else
               */
              var item = this._getHovered();

              if (!item.length) return;

              /**
               * Scroll
               */

              var offsetTop,
                  upperBound,
                  lowerBound,
                  heightDelta = item.outerHeight()

              offsetTop = item[0].offsetTop;

              upperBound = this.$dropdown.scrollTop();

              lowerBound = upperBound + this.settings.maxHeight - heightDelta;

              if (offsetTop < upperBound) {

                  this.$dropdown.scrollTop(offsetTop);

              } else if (offsetTop > lowerBound) {

                  this.$dropdown.scrollTop(offsetTop - this.settings.maxHeight + heightDelta);
              }

          },
          /**
           * Destroy API
           */

          dispose: function() {

              /* Remove combo arrow, input, dropdown */

              this.$arrow.remove()

              this.$input.remove()

              this.$dropdown.remove()

              /* Remove tabindex property */
              this.$el
                  .removeAttr("tabindex")

              /* Check if there is a tabindex set before */

              if (!!this.$el.data('plugin_' + dataKey + '_tabindex')) {
                  this.$el.prop('tabindex', this.$el.data('plugin_' + dataKey + '_tabindex'))
              }

              /* Unwrap */

              this.$el.unwrap()

              /* Remove data */

              this.$el.removeData('plugin_' + dataKey)

              /* Remove tabindex data */

              this.$el.removeData('plugin_' + dataKey + '_tabindex')

              /* Remove change event on select */

              this.$el.off('change.select focus.select blur.select');

          },

          /**
           * Update API add by hcf
           */
          update: function() {
              /**
               * Create dropdown options
               */
              var o = '',
                  k = 0,
                  p = '';
              this.selectedIndex = this.$el.prop('selectedIndex')
              var pluginObj = this;
              this.$el.find("option").each(function(i, e) {
                  if (e.nodeName.toLowerCase() == 'optgroup') {
                      return o += '<li class="option-group">' + this.label + '</li>'
                  }
                  if (!e.value) p = e.innerHTML
                  o += '<li class="' + (this.disabled ? pluginObj.settings.disabledClass : "option-item search-item") + ' ' + (k == pluginObj.selectedIndex ? pluginObj.settings.selectedClass : '') + '" data-index="' + (k) + '" data-value="' + this.value + '"';
                  if ($(this).attr("title")) { // 有title属性的时候li标签加入title属性
                      o += ' title="' + $(this).attr("title") + '" ';
                  }
                  /**生成别称*/
                  var _aliasName = [];
                  var _alias = $(this).attr("alias");
                  var _alias2 = $(this).attr("alias2");
                  var _alias3 = $(this).attr("alias3");

                  if(_alias && _alias != '' && _alias != 'null' && _alias != 'undefined'){
                      _aliasName.push(_alias);
                  }
                  if(_alias2 && _alias2 != '' && _alias2 != 'null' && _alias2 != 'undefined'){
                      _aliasName.push(_alias2);
                  }
                  if(_alias3 && _alias3 != '' && _alias3 != 'null' && _alias3 != 'undefined'){
                      _aliasName.push(_alias3);
                  }
                  var _alias = _aliasName.join("、");
                  if(_alias.length > 0){
                      _alias = "(" + _alias +  ")";
                  }
                  // 楼盘检索的时候在下拉选择，加入城区名称，选中之后文本框不显示城区名称效果
                  if ($(this).attr("areaName") && $(this).attr("areaName") != "" && $(this).attr("areaName") != "null" &&
                          $(this).attr("cityName") && $(this).attr("cityName") != "" && $(this).attr("cityName") != "null") {
                      o += '>' + (this.innerHTML + _alias) + '&nbsp;' + $(this).attr("cityName") + '&nbsp;' + $(this).attr("areaName") + '</li>';
                  } else {
                      o += '>' + (this.innerHTML + _alias) + '</li>';
                  }
                  k++;
              })

              this.$dropdown.html(o);
              o = '', k = 0, p = '';

              /**
               * Items
               */

              this.$items = this.$dropdown.children();
              this.$el = $(this.el);
              this.$options = this.$el.find('option, optgroup');
              this._events();
          },
          /**
           * Update Options API add by hcf
           */
          upOptions: function() {
              this.$options = this.$el.find('option, optgroup');
              this.$items = this.$dropdown.children();
          }
      });



      // A really lightweight plugin wrapper around the constructor,
      // preventing against multiple instantiations
      $.fn[pluginName] = function(options, args) {

          this.each(function() {

              var $e = $(this),
                  instance = $e.data('plugin_' + dataKey)

              if (typeof options === 'string') {

                  if (instance && typeof instance[options] === 'function') {
                      instance[options](args);
                  }

              } else {
                  if (args == "update") {
                      instance.update();
                  } else if (args == "upOptions") {
                      instance.upOptions();
                  } else {
                      if (instance && instance.dispose) {
                          instance.dispose();
                      }

                      $.data(this, "plugin_" + dataKey, new Plugin(this, options));
                  }
              }

          });

          // chain jQuery functions
          return this;
      };

      $.fn[pluginName].instances = [];

  }));