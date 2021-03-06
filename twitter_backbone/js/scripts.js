(function() {
  var Tweet, TweetItemDiv, TweetList, TweetsDiv, getTweets, tweets,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  getTweets = function(query) {
    return $.Deferred(function(defer) {
      return $.ajax({
        url: 'http://search.twitter.com/search.json',
        dataType: 'jsonp',
        data: {
          result_type: 'recent',
          rpp: 20,
          page: 1,
          q: query
        }
      }).done(function(res) {
        return defer.resolve(res.results);
      });
    }).promise();
  };

  Tweet = (function(_super) {

    __extends(Tweet, _super);

    function Tweet() {
      return Tweet.__super__.constructor.apply(this, arguments);
    }

    return Tweet;

  })(Backbone.Model);

  TweetList = (function(_super) {

    __extends(TweetList, _super);

    function TweetList() {
      return TweetList.__super__.constructor.apply(this, arguments);
    }

    TweetList.prototype.model = Tweet;

    TweetList.prototype.update = function(query) {
      var _this = this;
      this.trigger('updatestart');
      return getTweets(query).done(function(tweets) {
        _this.reset(tweets);
        return _this.trigger('updatesuccess');
      });
    };

    return TweetList;

  })(Backbone.Collection);

  tweets = new TweetList;

  TweetItemDiv = (function(_super) {

    __extends(TweetItemDiv, _super);

    function TweetItemDiv() {
      return TweetItemDiv.__super__.constructor.apply(this, arguments);
    }

    TweetItemDiv.prototype.tagName = 'div';

    TweetItemDiv.prototype.className = 'item';

    TweetItemDiv.prototype.render = function() {
      var compiled;
      compiled = _.template("<a href=\"http://twitter.com/<%- from_user %>\">\n  <%- from_user %>\n</a>\n<%- text %>");
      this.$el.html(compiled(this.model.toJSON()));
      return this;
    };

    return TweetItemDiv;

  })(Backbone.View);

  TweetsDiv = (function(_super) {

    __extends(TweetsDiv, _super);

    function TweetsDiv() {
      return TweetsDiv.__super__.constructor.apply(this, arguments);
    }

    TweetsDiv.prototype.initialize = function() {
      var _this = this;
      tweets.on('updatestart', function() {
        return _this.$el.empty();
      });
      return tweets.on('updatesuccess', function() {
        return _this.refresh();
      });
    };

    TweetsDiv.prototype.refresh = function() {
      var _this = this;
      tweets.each(function(tweet) {
        var view;
        view = new TweetItemDiv({
          model: tweet
        });
        return _this.$el.append(view.render().el);
      });
      return this;
    };

    return TweetsDiv;

  })(Backbone.View);

  $(function() {
    var tweetsDiv;
    tweetsDiv = new TweetsDiv({
      el: $('#tweets')
    });
    return $('.loadtweets').click(function() {
      var query;
      query = $(this).data('query');
      return tweets.update(query);
    });
  });

}).call(this);
