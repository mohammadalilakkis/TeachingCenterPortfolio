// ============================================
// Synapse Teaching Center - Interactive Scripts
// ============================================

// Cursor Glow Effect
document.addEventListener('DOMContentLoaded', () => {
  const cursorGlow = document.querySelector('.cursor-glow');
  
  if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
      cursorGlow.style.left = e.clientX + 'px';
      cursorGlow.style.top = e.clientY + 'px';
    });

    // Expand on click
    document.addEventListener('mousedown', () => {
      cursorGlow.style.width = '30px';
      cursorGlow.style.height = '30px';
    });

    document.addEventListener('mouseup', () => {
      cursorGlow.style.width = '20px';
      cursorGlow.style.height = '20px';
    });
  }

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isExpanded);
      navLinks.setAttribute('aria-expanded', !isExpanded);
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        navLinks.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Reveal Animation on Scroll - Slower and smoother
  const revealElements = document.querySelectorAll('.reveal');
  
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Keep observing to maintain visibility when scrolling back up
      } else {
        // Only remove active class if scrolled far past (for better UX)
        const rect = entry.boundingClientRect;
        if (rect.bottom < -100) {
          entry.target.classList.remove('active');
        }
      }
    });
  }, {
    threshold: 0.2, // Trigger when 20% visible (was 10%)
    rootMargin: '0px 0px -150px 0px' // Keep visible longer (was -50px)
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  // Parallax Effect for Hero Section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      hero.style.opacity = 1 - scrolled / 500;
    });
  }

  // Animated Counter for Stats - Smoother easing
  const animateCounter = (element, target, duration = 3000) => {
    let start = 0;
    const startTime = Date.now();
    const hasPlus = element.textContent.includes('+');
    
    const easeOutCubic = (t) => {
      return 1 - Math.pow(1 - t, 3);
    };
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.floor(start + (target - start) * easedProgress);
      
      element.textContent = current + (hasPlus ? '+' : '');
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.textContent = target + (hasPlus ? '+' : '');
      }
    };
    
    animate();
  };

  const statNumbers = document.querySelectorAll('.stat-number');
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        const text = entry.target.textContent;
        const number = parseInt(text.replace(/\D/g, ''));
        if (number) {
          entry.target.textContent = '0' + (text.includes('+') ? '+' : '');
          // Slower counter animation for better visibility
          animateCounter(entry.target, number, 3000);
        }
      }
      // Keep stats visible even when scrolling past
      if (!entry.isIntersecting) {
        const rect = entry.boundingClientRect;
        // Only reset if scrolled very far past
        if (rect.bottom < -200) {
          entry.target.classList.remove('counted');
        }
      }
    });
  }, { 
    threshold: 0.3, // Trigger earlier
    rootMargin: '0px 0px -200px 0px' // Keep visible much longer
  });

  statNumbers.forEach(stat => {
    statsObserver.observe(stat);
  });

  // Form Submission Handler
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData);
      
      // Here you would typically send the data to a server
      // For now, we'll just show a success message
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;
      
      // Simulate API call
      setTimeout(() => {
        submitButton.textContent = 'Message Sent! ✓';
        submitButton.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
          submitButton.textContent = originalText;
          submitButton.style.background = '';
          submitButton.disabled = false;
        }, 3000);
      }, 1500);
    });
  }

  // Navbar Background on Scroll
  const navbar = document.querySelector('.nav');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
      } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.8)';
        navbar.style.boxShadow = 'none';
      }
    });
  }

  // Course Card Hover Effects
  const courseCards = document.querySelectorAll('.course-card');
  courseCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });

  // Teacher Card Animation
  const teacherCards = document.querySelectorAll('.teacher-card');
  teacherCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
  });

  // Add ripple effect to buttons
  const buttons = document.querySelectorAll('.btn');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });

  // Add CSS for ripple effect
  const style = document.createElement('style');
  style.textContent = `
    .btn {
      position: relative;
      overflow: hidden;
    }
    .ripple {
      position: absolute;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.6);
      transform: scale(0);
      animation: ripple-animation 0.6s ease-out;
      pointer-events: none;
    }
    @keyframes ripple-animation {
      to {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);

  // Lazy loading for images (if you add images later)
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            observer.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Console welcome message
  console.log('%c Synapse Teaching Center ', 'background: #6366f1; color: #fff; padding: 10px; font-size: 16px; font-weight: bold;');
  console.log('%c Welcome to our portfolio! ', 'color: #818cf8; font-size: 14px;');

  // #region agent log
  // Verify favicon loading
  const faviconLink = document.querySelector('link[rel="icon"]');
  if (faviconLink) {
    fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:272',message:'Favicon link found in DOM',data:{href:faviconLink.href},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
    
    const faviconImg = new Image();
    faviconImg.onload = () => {
      fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:276',message:'Favicon loaded successfully',data:{href:faviconLink.href},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
    };
    faviconImg.onerror = () => {
      fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:280',message:'Favicon failed to load',data:{href:faviconLink.href,error:'Image load error'},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
    };
    faviconImg.src = faviconLink.href;
  } else {
    fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:284',message:'Favicon link not found in DOM',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'initial',hypothesisId:'A'})}).catch(()=>{});
  }
  // #endregion

  // #region agent log
  // Verify .well-known file exists (Chrome DevTools request)
  fetch('/.well-known/appspecific/com.chrome.devtools.json')
    .then(response => {
      if (response.ok) {
        fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:291',message:'Chrome DevTools JSON file accessible',data:{status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
      } else {
        fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:295',message:'Chrome DevTools JSON file not accessible',data:{status:response.status},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
      }
    })
    .catch(() => {
      fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:299',message:'Chrome DevTools JSON file fetch failed',data:{},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
    });
  // #endregion

  // Monitor resource loading errors (excluding extension errors)
  window.addEventListener('error', (event) => {
    // #region agent log
    if (event.target && event.target.tagName) {
      const resourceType = event.target.tagName.toLowerCase();
      const resourceSrc = event.target.src || event.target.href || 'unknown';
      // Filter out extension errors (polyfill.js, content.js are extension files)
      if (!resourceSrc.includes('polyfill.js') && !resourceSrc.includes('content.js') && !resourceSrc.includes('chrome-extension://')) {
        fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:310',message:'Resource loading error detected',data:{tag:resourceType,src:resourceSrc,message:event.message},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'A'})}).catch(()=>{});
      } else {
        fetch('http://127.0.0.1:7243/ingest/4407d48c-0e29-4861-96d7-f5a434c07f2c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'script.js:313',message:'Extension error detected (not our code)',data:{src:resourceSrc},timestamp:Date.now(),sessionId:'debug-session',runId:'post-fix',hypothesisId:'B'})}).catch(()=>{});
      }
    }
    // #endregion
  }, true);
});
