const timeline = gsap.timeline()

timeline.from(".let-les", {duration: 0.5, ease: "power4.out", x: -1800},"<");
timeline.from(".let-f", {duration: 0.7, ease: "power4.out", y: 500},"<50%");
timeline.from(".let-ous", {duration: 0.9, ease: "power4.out", x : 1000},"<");
timeline.from(".let-v", {duration: 0.7, ease: "power4.out", y: 500},"<60%");
timeline.from(".let-ol", {duration: 0.9, ease: "power4.out", x : 1000},"<");
timeline.from(".let-a", {duration: 0.7, ease: "power4.out", y: 500},"<60%");
timeline.from(".let-usa", {duration: 0.9, ease: "power4.out", x : 1000},"<");
timeline.from(".img-logo", {duration: 1.5, ease: "power4.out", y: -1000, x: 1000, rotate : 1080},"<10%");


