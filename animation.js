const images = document.querySelectorAll('.review');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Optionally unobserve after animation
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

images.forEach(img => observer.observe(img));