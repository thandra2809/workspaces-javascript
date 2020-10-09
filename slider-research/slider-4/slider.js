(function(win, dom){
  'use strict';

  // Check for .rangeControl class
  var rangeControlList = dom.getElementsByClassName('custom-rangeInput');

  // Inits components
  var init = function(){

    // Loop all controls
    for (var i = 0; i < rangeControlList.length; i++) {

      // Apply inital
      updateController(rangeControlList[i]);
      // Update when changed
      rangeControlList[i].addEventListener('input', function() {
        updateController(this);
      });
      // Update when changed ( for older browsers )
      rangeControlList[i].addEventListener('change', function() {
        updateController(this);
      });
    }
  }

  // Updates components
  var update = function(){
    for (var i = 0; i < rangeControlList.length; i++) {
      updateController(rangeControlList[i]);
    }
  }

  // Update controller
  var updateController = function(obj){
    // Thumb Position
    var thumbPos = getThumbPercentage(obj);
    var thumPosPX = getThumbPosition(obj);
    if(obj.getAttribute("data-tooltip") != "false"){
      updateTooltip(obj.nextElementSibling, obj.value, thumPosPX, thumbPos);
    }else{
      obj.nextElementSibling.style.display = "none";
    }
    updateProgress(obj, '#9c9e9f', '#21a5c6', thumbPos);
  }

  // Retun range slider pixel position according to offset
  // obj : target object
  var getThumbPosition = function(obj){
    return Math.round((obj.offsetWidth / 100) * obj.value); // Pixel
  }

  // Retun range slider percentage to thumb position
  // obj : target object
  var getThumbPercentage = function(obj){
    return Math.round(100 * obj.value/obj.getAttribute("max")); // Percentage
  }

  // Updated range slider tooltip
  // obj : target object
  // text : tooltip label
  // position : absolute position
  // percentage : percentage of current value
  var updateTooltip = function(obj, text, position, percentage){
    obj.innerHTML = text; // Tooltip text
    obj.style.left = position + 'px'; // Tooltip position

    // Tooltip Position
    var tooltipStartPos = 26;
    var tooltipPosFix = percentage / 1.8;
    if(percentage > 50){
      tooltipPosFix = percentage / 2.2;
    }
    obj.style.transform = 'translate(-'+ (tooltipStartPos + tooltipPosFix) +'%, 0)';
  }

  // Updated background progress bar of range slider
  // obj : target object
  // progressBgColor : background color
  // progressFillColor : fill color
  // percentage : percentage of current value
  var updateProgress = function(obj, progressBgColor, progressFillColor, percentage){
    var rangeBg = 'linear-gradient(to right,  '+ progressFillColor +' 0%, '+ progressFillColor +' '+ percentage +'%, '+ progressBgColor +' '+ percentage +'%, '+ progressBgColor +' 100%)';
    var cssRule = '#'+ obj.id +'::-webkit-slider-runnable-track { background : '+ rangeBg +' } ';
    cssRule += '#'+ obj.id +'::-moz-range-track { background : '+ rangeBg +' } ';
    cssRule += '#'+ obj.id +'::-ms-track { background : '+ rangeBg +' } ';
    var applyStyle = function(styleName, cssText) {
      var styleElement = dom.getElementById(styleName);
      if (styleElement) dom.getElementsByTagName('head')[0].removeChild(styleElement);

      styleElement = dom.createElement('style');
      styleElement.type = 'text/css';
      styleElement.id = styleName;
      styleElement.innerHTML = cssText;
      dom.getElementsByTagName('head')[0].appendChild(styleElement);
    }
    applyStyle('range_'+ obj.id, cssRule);
  }

  // Refresh on resize
  var fireOnceOnResize;
  win.addEventListener('resize', function () {
    fireOnceOnResize = setTimeout(update, 100);
  });

  // Init Component
  init();

}(window, document));