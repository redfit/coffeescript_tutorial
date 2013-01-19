class EventModule
  bind: (evName, callback) ->
    @_callbacks = {} unless @_callbacks?
    @_callbacks[evName] = [] unless @_callbacks[evName]?
    @_callbacks[evName].push(callback)
    @

  trigger: (evName) ->
    list = @_callbacks?[evName]
    return @ unless list
    for callback in list
      callback.apply(@)
    @


eventModule = new EventModule
eventModule.bind 'foo', -> console.log 'foo1'
eventModule.bind 'foo', -> console.log 'foo2'

eventModule.trigger 'foo'


# f = ->
#   memo= 0
#   ->
#     memo++
# Number::times = (f) ->
#   f i for i in [1..this]
#
# g = f()
#
# 3.times (i) ->
#   console.log i
