console.log(document.querySelector("#range-wrap"));
var isFirstTimeLoad = true;
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach((wrap) => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });

  // setting bubble on DOM load
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
    //debugger;
  var val = range.value;

  const min = range.min || 0;
  const max =  range.max || 100;

  const offset = Number(((val - min) * 100) / (max - min));

  if((val===0||val==="0")&& isFirstTimeLoad){
      //debugger;
      val = "?"
      isFirstTimeLoad= false;
  }


  bubble.textContent = val;


  // yes, 14px is a magic number
  bubble.style.left = `calc(${offset}% - 14px)`;
}


// document.getElementById("sliderrange").oninput = function() {
//   this.style.background = 'linear-gradient(to right, #82CFD0 0%, #82CFD0 ' + this.value + '%, #fff ' + this.value + '%, white 100%)'
// };

const sliderElement = document.getElementById("sliderrange");

sliderElement.addEventListener('change', (event) => {
  // const result = document.querySelector('.result');
  // result.textContent = `You like ${event.target.value}`;
  console.log('Testing');
  console.log(document.querySelector("#range-wrap"));
 // document.getElementById("range-wrap").style.background = "blue";
  debugger;
});
