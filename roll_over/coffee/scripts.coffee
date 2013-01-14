class Rollover
  $a: null
  $img: null
  _src_off: null
  _src_on: null

  constructor: ($a) ->
    @$a = $a
    @_prepareEls()
    @_prepareSrcs()
    @_preload()
    @_eventify()

  _prepareEls: ->
    @$img = @$a.find 'img'
    @

  _prepareSrcs: ->
    @_src_off = @$img.attr 'src'
    @_src_on = @_src_off.replace '_off', '_on'
    @

  _preload: ->
    $('<img />').attr 'src', @_src_on
    @

  _eventify: ->
    @$a.hover =>
      @toOver()
    , =>
      @toNormal()
    @

  toOver: ->
    @$img.attr 'src', @_src_on
    @

  toNormal: ->
    @$img.attr 'src', @_src_off
    @


$ ->
  $('.rollover').each ->
    new Rollover $(@)
