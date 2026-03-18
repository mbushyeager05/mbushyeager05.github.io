const hasGsap = typeof window.gsap !== 'undefined';

if (hasGsap) {
  if (document.querySelector('.hero')) {
    const homeTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    homeTl.to('.eyebrow', { opacity: 1, duration: 0.5 })
      .to('.word-in', { y: '0%', duration: 0.9, stagger: 0.12 }, '-=0.2')
      .to('.sub-line', { opacity: 1, duration: 0.6 }, '-=0.3')
      .to('.hero-sidebar', { opacity: 1, duration: 0.7 }, '-=0.4');
  }

  if (document.querySelector('.page')) {
    const aboutTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    aboutTl.to('#hero', { opacity: 1, duration: 0.5 })
      .to('.title-word', { y: '0%', duration: 0.9, stagger: 0.1 }, '-=0.2')
      .to('#bio', { opacity: 1, duration: 0.5 }, '-=0.25')
      .to('#disc', { opacity: 1, duration: 0.5 }, '-=0.2')
      .to('#now', { opacity: 1, duration: 0.5 }, '-=0.2')
      .to('#sidebar', { opacity: 1, duration: 0.6 }, '-=0.35');
  }
} else {
  document.querySelectorAll('.eyebrow, .sub-line, .hero-sidebar, #hero, #bio, #disc, #now, #sidebar').forEach((el) => {
    el.style.opacity = '1';
  });

  document.querySelectorAll('.word-in, .title-word').forEach((el) => {
    el.style.transform = 'translateY(0)';
  });
}