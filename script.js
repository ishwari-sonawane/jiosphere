
/*Swiper*/ 

let firstswiper= new Swiper(".mySwiper",{
    slidesPerView: 1,
    spaceBetween: 10,
    // loop: true,
    autoplay: true,
    // mousewheel:true,
    
    keyboard:{
        enabled:true,
    },
  
    breakpoints:{
        320:{
            slidesPerView:1,
        },
        375: {
            slidesPerView: 1,
        },
        1024:{
            slidesPerView: 1,
        }
    },
  
    
  })
  
  
  
  let lastSwiper= new Swiper(".mySwiper2",{
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      autoplay: true,
      // mousewheel:true,
      
      keyboard:{
          enabled:true,
      },
    
      breakpoints:{
          320:{
              slidesPerView:1,
          },
          375: {
              slidesPerView: 1,
              spaceBetween: 10
          },
          1024:{
              slidesPerView: 1,
          }
      },
    
      
    })
    
    
  
  
  
  /* menubuttun*/ 
  
  var menubutton = document.querySelector('.menubutton');
  var showdiv = document.querySelector('.mobile-div-icon');
  
  
  showdiv.style.display = 'none';
  showdiv.style.opacity = '0'; 
  showdiv.style.transition = 'opacity 0 ease'; 
  
  
  
  document.addEventListener('click', function(event) {
      if (!menubutton.contains(event.target) && !showdiv.contains(event.target)) {
          hideMenu();
      }
  });
  
  
  menubutton.addEventListener('click', function(event) {
      if (showdiv.style.display === 'flex') {
          hideMenu();
      } else {
          showMenu();
      }
      event.stopPropagation(); 
  });
  
  
  function showMenu() {
      showdiv.style.display = 'flex'; 
      setTimeout(() => {
          showdiv.style.opacity = '1'; 
          showdiv.style.visibility = 'visible'; 
      }, 10); 
  }
  
  
  
  function hideMenu() {
      showdiv.style.opacity = '0';
      setTimeout(() => {
          showdiv.style.visibility = 'hidden'; 
          showdiv.style.display = 'none'; 
      }, 500);
  }
  
  
  /* Animation*/ 
  
  var tl=gsap.timeline();
  tl.from(".home h1",{
      y:-30,
      opacity:0,
      // delay: 0.5,
      duration:0.9,
      stagger:0.1
  })
  
  tl.from(".home p",{
      y:-30,
      opacity:0,
      // delay: 0.5,
      duration:0.6,
      stagger:0.1
  })
  
  tl.from(".home .decstop-btn ",{
      y:-30,
      opacity:0,
      // delay: 0.5,
      duration:0.5,
      stagger:0.1
  })
  
  
  tl.from(".home .JioCoins-div",{
      y:-30,
      opacity:0,
      // delay: 0.5,
      duration:0.3,
      stagger:0.1
  })
  
  // var tl=gsap.timeline();
  tl.from(".img-div",{
      x: -10,
      opacity: 0, 
      duration: 0.5, 
      stagger: 0
  })
  
  
  
  
  
  
  tl.from('.scrollEle', {
      x: -30,
      opacity: 0,
      duration: 2, 
      scrollTrigger: {
          trigger: '.scrollEle',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
      }
  });
  
  
      
  tl.from('.left-last-card', {
      x: -30,
      opacity: 0,
      duration: 2, 
      scrollTrigger: {
          trigger: '.scrollEle',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
      }
  });
  
  
  
  tl.from('.swiper-second', {
      y: -30,
      opacity: 0,
      duration: 2, 
      scrollTrigger: {
          trigger: '.scrollEle',
          start: 'top 80%',
          end: 'bottom 40%',
          scrub: true,
      }
  });