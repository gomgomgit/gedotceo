$(document).ready(function() {

  const tour = new Shepherd.Tour({
    defaultStepOptions: {
      cancelIcon: {
        enabled: true,
        // classes: "shep",
        // action: tour.cancel,
      },
      arrow: true,
      classes: 'guider betweentitle shepherd-theme-custom',
      scrollTo: {behavior: 'smooth', block: 'center'},
    }
  });

  tour.addStep({
    id: 'step',
    classes:'startshep guider',
    title: "Hello!",
    text: "I'm the guide, I'll show you ...",
    // attachTo: { 
    //   element: '.head', 
    //   on: 'bottom'
    // },
    advanceOn: {
      selector: '.event',
      event: 'click',
    },
    
    buttons: [
      {
        text: 'Start',
        // classPrefix:'startbutton',
        action: tour.next,
        // secondary: true,
      }
    ]
  });
  tour.addStep({
    title: "Logo",
    text: "It's My Logo ...",
    attachTo: { 
      element: '.logo-head', 
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    title: "Our Product ",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem natus eos pariatur maxime, quidem qui sequi fugiat inventore in facere voluptates!",
    attachTo: { 
      element: '.row-product', 
      on: 'right'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    title: "Last event we attend",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste perferendis error maxime asperiores modi, ipsa reprehenderit sit harum beatae odio neque, quas excepturi explicabo inventore possimus reiciendis at doloribus ex rem molestiae. Eius!",
    attachTo: { 
      element: '.event', 
      on: 'left'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    title: "This ...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste perferendis error maxime asperiores modi, ipsa reprehenderit sit harum beatae odio neque, quas excepturi explicabo inventore possimus reiciendis at doloribus ex rem molestiae. Eius!",
    attachTo: { 
      element: '.lewa1', 
      on: 'right'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    title: "This ...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste perferendis error maxime asperiores modi, ipsa reprehenderit sit harum beatae odio neque, quas excepturi explicabo inventore possimus reiciendis at doloribus ex rem molestiae. Eius!",
    attachTo: { 
      element: '.lewa2', 
      on: 'right'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });

  tour.addStep({
    title: "and This ...",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis iste perferendis error maxime asperiores modi, ipsa reprehenderit sit harum beatae odio neque, quas excepturi explicabo inventore possimus reiciendis at doloribus ex rem molestiae. Eius!",
    attachTo: { 
      element: '.lewa3', 
      on: 'right'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    title: "Collabs",
    text: "It's the brand that works with us ...",
    attachTo: { 
      element: '.collabs', 
      on: 'top'
    },
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Next',
        action: tour.next,
      },
    ],
  });
  tour.addStep({
    title: "Let's explore",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odio totam dolorem accusantium nobis saepe sed incidunt non quo!...",
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Done',
        action: tour.complete,
      },
    ],
  });
  tour.cancel({
    title: "Let's explore",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est odio totam dolorem accusantium nobis saepe sed incidunt non quo!...",
    buttons: [
      {
        text: 'Back',
        action: tour.back,
      },
      {
        text: 'Done',
        action: tour.complete,
      },
    ],
  })

  tour.start();

	AOS.init({
		offset: 100,
		easing: "ease",
	});

      $('.owl-carousel').owlCarousel({
        items: 5,
        loop: true,
        slideTransition: 'ease',
        nav:true,
        autoplay:true,
        autoplaySpeed:2,
        animateIn:'fadeIn',

      });

      $('#ge').midnight();

      $(window).scroll(function() {
        var scroll_top = $(window).scrollTop(); //Jarak scroll

        if(scroll_top > 54) {
          $(".navbar-head").addClass("bg-light navbar-light fixed-top").removeClass("navbar-dark py-3");
          $(".logo-head").css({"font-size" : "40px", "margin-top" : "-5px "});
          // $(".parallax-mirror").css({"bottom" : "100px"});
        } else {
          $(".navbar-head").removeClass("bg-light fixed-top").addClass("navbar-dark py-3");
          $(".logo-head").css({"font-size" : "60px", "margin-top" : "-15px "});
          // $(".parallax-mirror").css({"margin-bottom" : "0px"});
        }
      });

    });