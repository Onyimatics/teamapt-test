
AOS.init();

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
const container = document.querySelector("div.section-content");
let sectionId = document.querySelector("section#welcome");

navHighlighter();
// Add an event listener listening for scroll
container.addEventListener("scroll", navHighlighter);
function navHighlighter() {

  // Get current scroll position
  const scrollY = container.scrollTop;
  // let scrollY = window.pageYOffset;


  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;


    // Original:
    // const sectionTop = current.offsetTop - 50;
    //  
    // Alex Turnwall's update:
    // Updated original line (above) to use getBoundingClientRect instead of offsetTop, based on:
    // https://plainjs.com/javascript/styles/get-the-position-of-an-element-relative-to-the-document-24/
    // https://newbedev.com/difference-between-getboundingclientrect-top-and-offsettop
    // This allows the use of sections inside a relative parent, which I'm not using here, but needed for a project
    //
    const sectionTop = (current.getBoundingClientRect().top +  container.scrollTop) - 200;

    sectionId = current.getAttribute("id");

    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    console.log('sectionHeight', sectionTop )

    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ) {
      document.querySelector("div.atm-card-section2").classList.add("scrollStyle");
    // console.log('sectionHeight',  document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active"))
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    } else if (
         scrollY < sectionTop
    ) {
         document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    } else {
     document.querySelector("div.atm-card-section2").classList.add("scrollStyle");
        document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("active");
    }
    // else {
    //   document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("active");
    // }
  });
}


const aosAnimation = document.querySelectorAll('[data-aos]');
observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('aos-animate');
    } else {
      entry.target.classList.remove('aos-animate');
    }
  });
});
aosAnimation.forEach(aosObject => {
  observer.observe(aosObject);
});

// var typing = new Typed("#typed", {
//   strings: ['Buy 70 + crypto', 'Grow fast'],
//   // typing speed
//   typeSpeed: 60,
//   // time before typing starts
//   startDelay: 10,
//   // backspacing speed
//   backSpeed: 20,
//   // time before backspacing
//   backDelay: 500,
//   loop: true,
//   showCursor: false
// });
