var tooltip = $('<div id="tooltip" />').css({
    position: 'relative',
    top: 0,
    left: 0
}).hide();

$("#slider").slider({
    value: 5,
    min: 0,
    max: 10,
    step: 1,
    slide: function(event, ui) {
        tooltip.text(ui.value);
    },
    change: function(event, ui) {}
}).find(".ui-slider-handle").append(tooltip).hover(function() {
    tooltip.show()
}, function() {
    tooltip.show()
})