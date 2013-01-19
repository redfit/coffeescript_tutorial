(function() {
  var EventModule, eventModule;

  EventModule = (function() {

    function EventModule() {}

    EventModule.prototype.bind = function(evName, callback) {
      if (this._callbacks == null) {
        this._callbacks = {};
      }
      if (this._callbacks[evName] == null) {
        this._callbacks[evName] = [];
      }
      this._callbacks[evName].push(callback);
      return this;
    };

    EventModule.prototype.trigger = function(evName) {
      var callback, list, _i, _len, _ref;
      list = (_ref = this._callbacks) != null ? _ref[evName] : void 0;
      if (!list) {
        return this;
      }
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        callback = list[_i];
        callback.apply(this);
      }
      return this;
    };

    return EventModule;

  })();

  eventModule = new EventModule;

  eventModule.bind('foo', function() {
    return console.log('foo1');
  });

  eventModule.bind('foo', function() {
    return console.log('foo2');
  });

  eventModule.trigger('foo');

}).call(this);
