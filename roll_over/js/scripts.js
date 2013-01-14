(function() {
  var Rollover;

  Rollover = (function() {

    Rollover.prototype.$a = null;

    Rollover.prototype.$img = null;

    Rollover.prototype._src_off = null;

    Rollover.prototype._src_on = null;

    function Rollover($a) {
      this.$a = $a;
      this._prepareEls();
      this._prepareSrcs();
      this._preload();
      this._eventify();
    }

    Rollover.prototype._prepareEls = function() {
      this.$img = this.$a.find('img');
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

    Rollover.prototype._eventify = function() {
      var _this = this;
      this.$a.hover(function() {
        return _this.toOver();
      }, function() {
        return _this.toNormal();
      });
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

  })();

  $(function() {
    return $('.rollover').each(function() {
      return new Rollover($(this));
    });
  });

}).call(this);
