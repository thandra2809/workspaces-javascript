const slider = $('input[type="range"]');
var sliderHandle;
var initialSliderState = true;

slider
    .rangeslider({
        polyfill: false,
        onInit: function () {
            sliderHandle = $('.rangeslider__handle', this.$range);
            updateHandle(sliderHandle[0], this.value);


        }
    })
    .on('input', function () {

        updateHandle(sliderHandle[0], this.value);

        console.log('this range',sliderHandle[0]);

    }).on('click',function (){
        console.log('Testing');
});

// Update the value inside the slider handle
function updateHandle(el, val) {

    if (initialSliderState) {
        el.textContent = "?";
        //initialSliderState = false;
        $('.rangeslider__fill').css({'background-color':'#9f9b9b'});
       // $('.rangeslider__handle').css({'left':'129 px'});

    } else {
        console.log('actual value',val);
        el.textContent = Math.round(val);
        $('.rangeslider__fill').css({'background-color':'#0464f5'});
    }
}



if (initialSliderState) {
    var elements = document.getElementsByClassName('rangeslider__handle');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.left = "129px";
    }
    initialSliderState = false;
}
//$('.rangeslider__handle').css({'left':'129 px'});

// Check if the slider state has changed
function checkState(el, val) {
    // if the value does not fall in the range of the current state, update that shit.
    /*    if (!_.contains(currentState.range, parseInt(val))) {
            updateState(el, val);
        }*/
}

// Change the state of the slider
function updateState(el, val) {
    /*    for (var j = 0; j < sliderStates.length; j++){
            if (_.contains(sliderStates[j].range, parseInt(val))) {
                currentState = sliderStates[j];
                // updateSlider();
            }
        }
        // If the state is high, update the handle count to read 50+
        if (currentState.name == "high") {
            updateHandle($handle[0], "50+");
        }
        // Update handle color
        $handle
            .removeClass (function (index, css) {
                return (css.match (/(^|\s)js-\S+/g) ||   []).join(' ');
            })
            .addClass("js-" + currentState.name);
        // Update tooltip
        $tooltip.html(currentState.tooltip);*/
}