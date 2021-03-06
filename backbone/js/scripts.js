(function() {
  var Rollover,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Rollover = (function(_super) {

    __extends(Rollover, _super);

    function Rollover() {
      return Rollover.__super__.constructor.apply(this, arguments);
    }

    Rollover.prototype.events = {
      'mouseenter': 'toOver',
      'mouseleave': 'toNormal'
    };

    Rollover.prototype.initialize = function() {
      this._prepareEls();
      this._prepareSrcs();
      this._preload();
      return this;
    };

    Rollover.prototype._prepareEls = function() {
      this.$img = this.$('img');
      return this;
    };

    Rollover.prototype._prepareSrcs = function() {
      this._src_off = this.$img.attr('src');
      this._src_on = this._src_off.replace('_off', '_on');
      return this;
    };

    Rollover.prototype._preload = function() {
      $('<img />').attr('src', this._src_on);
      return this;
    };

    Rollover.prototype.toOver = function() {
      this.$img.attr('src', this._src_on);
      return this;
    };

    Rollover.prototype.toNormal = function() {
      this.$img.attr('src', this._src_off);
      return this;
    };

    return Rollover;

  })(Backbone.View);

  $(function() {
    return $('.rollover').each(function(i, anchor) {
      return new Rollover({
        el: anchor
      });
    });
  });

}).call(this);
