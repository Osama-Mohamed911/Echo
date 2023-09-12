// loading function
$(document).ready(function(){
    $(".lds-ring").fadeOut(800)
  })

  //aos int
  AOS.init();
// (show / hide) responsive nav
 var hide = document.getElementById("hide");
 var  bars = document.getElementById("bars");
 var  menu = document.getElementById("menu");

 bars.addEventListener("click",()=>{
    menu.classList.add("active");
 })

 hide.addEventListener("click",()=>{
    menu.classList.remove("active");
 })

//  tiny slider
 var slider =tns({
   container:'.slider',
   slideBy: 1,
   items:3,
   speed:700,
   autoplayTimeout: 3500,
   navPosition:'bottom',
   controlsContainer:'#controls',
   prevButton:".previous",
   nextButton:".next",
   responsive: {
      0: {
         items: 1
      },
      700: {
         items: 2
      },
      1000: {
         items: 3
      }
   }
 
 })
//counter
 $(window).scroll(startCounter);

function startCounter() {
  let scrollY = (window.scrollY || document.documentElement.scrollTop) + window.innerHeight;
  let divPos = document.querySelector('.counter').offsetTop;

  if (scrollY > divPos) {
    $(window).off("scroll", startCounter);

    $('.num').each(function() {
      var $this = $(this);
      jQuery({
        Counter: 0
      }).animate({
        Counter: $this.text().replace(/,/g, '')
      }, {
        duration: 2000,
        easing: 'swing',
        step: function() {
          $this.text(commaSeparateNumber(Math.floor(this.Counter)));
        },
        complete: function() {
          $this.text(commaSeparateNumber(this.Counter));
          //alert('finished');
        }
      });
    });

    function commaSeparateNumber(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }
}



const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer c3d3bd2fbe00199ea04dcf06269a4e62'
  }
};

fetch('https://api.themoviedb.org/3/movie/now_playing', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));