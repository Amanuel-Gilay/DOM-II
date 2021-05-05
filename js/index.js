// Your code goes here
const firstTitle = document.querySelector('.logo-heading');
firstTitle.style.color = 'green';
firstTitle.style.fontSize = '3.4rem'

const headerOne = document.querySelector('.main-navigation');
headerOne.style.textAltgn = 'center';

const wholeHeader = document.querySelector('.intro h2');
wholeHeader.style.color = 'red';
wholeHeader.style.textAlign = 'center';
wholeHeader.style.fontSize = '2.4rem';
const titleP = document.querySelector('.intro p');
titleP.style.width = '50%'
titleP.style.textAlign = 'center'
titleP.style.margin = '0 0 0 23%'

const firstImg = document.querySelector('.intro img');
firstImg.style.margin = '20px 330px'

const wholeBody = document.querySelector('body');
wholeBody.style.padding = '100px';
wholeBody.style.padding = '100px';
wholeBody.style.backgroundColor = 'CBC3E3';

const firstSection = document.querySelector('.content-section');
firstSection.style.width = '40%'
firstSection.style.flexDirection = 'column-reverse';



const welcome = document.querySelector(".intro h2");
const homeImg = document.querySelector(".intro img");
console.log(welcome);

welcome.addEventListener('click', function (event){
    if(welcome.style.textTransform !== 'uppercase'){
        welcome.stle.textTransform = 'uppercase'
    }else{
        welcome.style.textTransform = 'lowercase'
    }

});
homeImg.addEventListener('dblclick', function(event){
    homeImg.style.borderRdius = '200px';
})
titleFirst.addEventListener("mouseenter", function( event ) {
    // highlight the mouseenter target
    event.target.style.color = "red";
    // reset the color after a short delay
    setTimeout(function() {
      event.target.style.color = "purple";
    }, 500);
  }, false);
  //dbclick
  wholeHeader.addEventListener('dblclick', function (e) {
    wholeHeader.classList.toggle('large');
  });
  //scroll
  let lastKnownScrollPosition = 0;
let ticking = false;
function doSomething(scrollPos) {
  // Do something with the scroll position
}
document.addEventListener('scroll', function(e) {
  lastKnownScrollPosition = window.scrollY;
  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(lastKnownScrollPosition);
      ticking = false;
    });
    ticking = true;
  }
});