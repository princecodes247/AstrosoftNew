history.scrollRestoration = 'manual';

 const enterAnimation = container => {
   let enterTl = gsap.timeline({defaults: {ease: Power4.easeInOut}});


   enterTl
   .set("section > :not(svg)", {y: "10px", opacity: 0})
   .to("section > :not(svg)", {duration: 1, y: "0px", opacity: 1})
 }

 const pageTransition = container => {
   let tl = gsap.timeline({defaults: {ease: Power4.easeInOut}});
   tl
   .to("section > :not(svg)", {duration: 1, y: "10px", opacity: 0})
    .to(".loading_cover", {duration: 1.2, x: "100vw", stagger: 0.1}, "-=0.7")
   .to(".loading_cover", {duration: 0.8, x: "200vw", stagger: -0.1}, "-=0.1")
   .set(".loading_cover", {x: "-100vw"});
 }

 function delay (n) {
      n = n || 2000;
      return new Promise(resolve => setTimeout(() => {
            resolve();
      }, n));
 }

 barba.init({
    sync: true,
   transitions: [{

     // async/await
       async leave(data) {
          const done = this.async();
          pageTransition();
            await delay(1900);
            done();
         },
      async enter(data) {
        window.scrollTo(0, 0);
            enterAnimation();
            setupHeader()
            try {
              setupFeaturesEffect()
            } catch (error) {
              console.log(error);
            }
            try {
              setupTeam()
            } catch (error) {
              console.log(error);
            }
            try {
              setupTestimonials()
            } catch (error) {
              console.log(error);
            }
            try {
              setupFaqs()
            } catch (error) {
              console.log(error);
            }
            
      },
      async once(data) {
         
         enterAnimation();
         
         
   }
   }]
 });
