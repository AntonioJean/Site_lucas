document.addEventListener("DOMContentLoaded", () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.defaults({
      toggleActions: "play none none none"
    });
// estado inicial
gsap.set(".reveal", { y: 40, opacity: 0 });

// animação
gsap.utils.toArray(".reveal").forEach(el => {
  gsap.to(el, {
    y: 0,
    opacity: 1,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  });
});


    ScrollTrigger.batch(".reveal", {
      start: "top 85%",
      onEnter: batch => {
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          overwrite: true
        });
      }
    });
  }
});