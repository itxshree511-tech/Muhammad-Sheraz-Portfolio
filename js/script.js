const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const skills = [
  ['Python', 'Core backend language for clean application logic.', 'terminal'],
  ['Django', 'Robust web apps, admin workflows and server-rendered systems.', 'layers-3'],
  ['Django REST Framework', 'Structured REST APIs for modern web products.', 'network'],
  ['Node.js', 'Backend services and JavaScript runtimes.', 'hexagon'],
  ['Express.js', 'Lean API services and routing.', 'route'],
  ['JavaScript', 'Interactive frontend behavior and app logic.', 'braces'],
  ['React', 'Component-driven UI knowledge.', 'component'],
  ['Tailwind CSS', 'Fast, responsive utility-first styling.', 'palette'],
  ['HTML5', 'Semantic, accessible page structure.', 'code-2'],
  ['CSS3', 'Responsive layouts, animation and visual polish.', 'paintbrush'],
  ['PostgreSQL', 'Reliable relational data modeling.', 'database'],
  ['MySQL', 'Database-backed application workflows.', 'database-zap'],
  ['Git', 'Version control for disciplined development.', 'git-branch'],
  ['GitHub', 'Project collaboration and source hosting.', 'globe']
];

const projects = [
  {
    title: 'Quick AI - AI Paper Generator',
    description: 'An AI-powered educational paper generation platform built with Django, database-driven question management, PDF text extraction and AI generation.',
    image: 'assets/images/Quick Ai.jpeg',
    tech: ['Django', 'Python', 'Tailwind CSS', 'PyMuPDF', 'OpenAI API'],
    categories: ['all', 'fullstack', 'django'],
    features: ['Database-driven question management', 'PDF text extraction workflow', 'AI-assisted paper generation'],
    live: 'https://itxshree511-tech.github.io/paper-gernater/',
    github: 'https://itxshree511-tech.github.io/paper-gernater/'
  },
  {
    title: 'LinkoraX',
    description: 'A modern community membership platform with membership levels, referral rewards and member management.',
    image: 'assets/images/Lezereve.jpeg',
    tech: ['Django / Node.js', 'JavaScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    categories: ['all', 'fullstack', 'django', 'javascript'],
    features: ['Membership levels', 'Referral rewards', 'Member management workflows'],
    live: 'https://itxshree511-tech.github.io/Lezerev-clone-website/',
    github: 'https://itxshree511-tech.github.io/Lezerev-clone-website/'
  },
  {
    title: "Henry's Auto Car Sales",
    description: 'A professional automotive sales website designed to showcase vehicles with a modern browsing experience.',
    image: 'assets/images/henry Auto.jpeg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Vehicle-focused presentation', 'Responsive browsing experience', 'Conversion-focused sections'],
    live: 'https://itxshree511-tech.github.io/HENRYS-AUTO-SALE/',
    github: 'https://itxshree511-tech.github.io/HENRYS-AUTO-SALE/'
  },
  {
    title: 'Jahan International',
    description: 'A premium luxury perfume website with an elegant visual identity and modern product presentation.',
    image: 'assets/images/Jahan International.jpeg',
    tech: ['HTML', 'CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Luxury product styling', 'Modern product presentation', 'Elegant responsive visuals'],
    live: 'https://perfume-brand-design--itxshree511.replit.app/',
    github: 'https://perfume-brand-design--itxshree511.replit.app/'
  },
  {
    title: 'Animated LogIn and Register form',
    description: 'Small messege big Emotions.Surprise your Love from home.',
    image: 'assets/images/Love And Birthday wish.jpeg',
    tech: ['Django', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'fullstack', 'django', 'javascript'],
    features: ['Tournament overlay screens', 'Live-score display patterns', 'Streaming and OBS-friendly UI'],
    live: 'https://itxshree511-tech.github.io/Animated-Login-register-Form/',
    github: 'https://itxshree511-tech.github.io/Animated-Login-register-Form/'
  },
  {
    title: 'ToDesktop Landing Page',
    description: 'A responsive modern landing page focused on layout, animations and responsive frontend development.',
    image: 'assets/images/To Desktop.jpeg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Responsive layout craft', 'Frontend animation details', 'Modern landing page structure'],
    live: 'https://itxshree511-tech.github.io/ToDesktop-landing-page/',
    github: 'https://itxshree511-tech.github.io/ToDesktop-landing-page/'
  },

// New

  {
    title: 'Git Hub Read Me',
    description: 'A responsive modern landing page focused on layout, animations and responsive frontend development.',
    image: 'assets/images/Git Hub read me.jpeg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Responsive layout craft', 'Frontend animation details', 'Modern landing page structure'],
    live: 'https://github.com/itxshree511-tech/itxshree511-tech',
    github: 'https://github.com/itxshree511-tech/itxshree511-tech'
  },
  {
    title: 'codes college landing page',
    description: 'A responsive modern landing page focused on layout, animations and responsive frontend development.',
    image: 'assets/images/codes college.jpeg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Responsive layout craft', 'Frontend animation details', 'Modern landing page structure'],
    live: 'https://itxshree511-tech.github.io/Codes-College-Kot-Sultan/',
    github: 'https://itxshree511-tech.github.io/Codes-College-Kot-Sultan/'
  },
  {
    title: 'Google Space Let,s Expirience the Space',
    description: 'A responsive modern landing page focused on layout, animations and responsive frontend development.',
    image: 'assets/images/Google space.jpeg',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    categories: ['all', 'frontend', 'javascript'],
    features: ['Responsive layout craft', 'Frontend animation details', 'Modern landing page structure'],
    live: 'https://itxshree511-tech.github.io/Google-Space/',
    github: 'https://itxshree511-tech.github.io/Google-Space/'
  }
];

const services = [
  ['Full Stack Web Development', 'Modern frontend + backend applications.', 'blocks'],
  ['Django Development', 'Scalable Django websites and applications.', 'server-cog'],
  ['REST API Development', 'Clean and structured APIs using Django REST Framework and Node.js.', 'waypoints'],
  ['Node.js Development', 'Backend services and APIs using Node.js.', 'workflow'],
  ['Responsive Frontend', 'Modern responsive interfaces using HTML, Tailwind CSS and JavaScript.', 'monitor-smartphone'],
  ['Business Websites', 'Professional websites for businesses and brands.', 'briefcase-business'],
  ['E-commerce Development', 'Modern product and e-commerce experiences.', 'shopping-bag'],
  ['SEO', 'Optimize websites for search engines.', 'search'],
  ['UI/UX Design', 'Creating intuitive and engaging user interfaces.', 'palette'],
  ['Database Applications', 'Database-driven applications with PostgreSQL/MySQL.', 'database'],
  ['Wordpress Development', 'Content management systems for websites.', 'wordpress'],
  ['Shopify Development', 'E-commerce solutions using Shopify.', 'shopping-bag'],
  ['GMB Optimization', 'Optimize Google My Business listings for local search.', 'map-pin'],
  ['Social Media Marketing', 'Promote brands and products on social media platforms.', 'share-2'],
  ['Ai SEO', 'Leverage AI tools for search engine optimization.', 'cpu'],

];

const journey = [
  ['Started web development', 'Built a foundation in how the web is structured and delivered.'],
  ['Learned HTML/CSS/JavaScript', 'Focused on semantic pages, responsive styling and browser interaction.'],
  ['Advanced into Tailwind CSS', 'Improved speed and consistency while building responsive interfaces.'],
  ['Learned Python/Django', 'Moved into backend development and database-driven applications.'],
  ['Built database-driven applications', 'Worked with relational data, admin flows and practical CRUD features.'],
  ['Learned REST APIs', 'Designed structured APIs for frontend and backend communication.'],
  ['Expanded into Node.js', 'Added JavaScript backend services and API development.'],
  ['Full Stack development', 'Combined frontend, backend, APIs and databases into complete products.'],
  ['Current professional direction', 'Building polished, maintainable web applications for real business needs.']
];



const socialIcons = {
  github: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.36 6.84 9.72.5.1.68-.22.68-.5v-1.9c-2.78.62-3.37-1.22-3.37-1.22-.46-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.28 9.28 0 0 1 12 6.94c.85 0 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.81c0 .28.18.61.69.5A10.22 10.22 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M5.34 8.98H2.67v12h2.67v-12ZM4.01 3.02a1.55 1.55 0 1 0 0 3.1 1.55 1.55 0 0 0 0-3.1Zm17.32 11.08c0-3.23-1.72-4.74-4.02-4.74-1.85 0-2.68 1.02-3.14 1.73V8.98H11.5v12h2.67v-5.93c0-1.56.3-3.07 2.23-3.07 1.9 0 1.93 1.78 1.93 3.17v5.83H21v-6.88h.33Z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12.04 2.02a9.92 9.92 0 0 0-8.4 15.2L2 22l5.1-1.35A9.9 9.9 0 1 0 12.04 2.02Zm5.69 13.88c-.24.67-1.38 1.27-1.9 1.35-.48.08-1.08.12-3.46-.76-2.93-1.08-4.8-3.95-4.95-4.13-.14-.18-1.17-1.55-1.17-2.95 0-1.4.74-2.08 1-2.36.25-.28.56-.34.75-.34h.54c.17 0 .4.01.61.46.25.5.85 1.72.92 1.84.07.12.12.27.02.44-.08.17-.12.27-.24.42-.12.15-.25.34-.36.46-.12.12-.25.26-.11.48.14.22.62 1.02 1.34 1.65.92.81 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.16.6-.7.76-.94.17-.25.35-.2.6-.12.25.09 1.6.76 1.87.9.27.14.45.2.52.32.07.12.07.7-.17 1.38Z"/></svg>'
};
const socialLinks = {
  github: 'https://github.com/itxshree511-tech',
  linkedin: 'https://www.linkedin.com/',
  whatsapp: 'https://wa.me/923216763141',
  email: 'mailto:itxshree511@gmail.com'
};

const projectGallery = [
  {
    title: 'Developer workspace dashboard',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80',
    alt: 'Analytics dashboard on a laptop screen'
  },
  {
    title: 'Clean application interface',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Modern web interface with charts'
  },
  {
    title: 'Code and planning setup',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
    alt: 'Code editor on a professional development desk'
  },
  {
    title: 'Responsive product view',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    alt: 'Responsive website displayed on a laptop'
  },
  {
    title: 'Backend systems work',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=80',
    alt: 'Server and development equipment in a clean workspace'
  }
];

const musicTracks = [
  {
    title: 'Creative Technology',
    artist: 'SoundHelix Demo',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    cover: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Deep Work Session',
    artist: 'SoundHelix Demo',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    cover: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?auto=format&fit=crop&w=600&q=80'
  },
  {
    title: 'Late Night Build',
    artist: 'SoundHelix Demo',
    audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
    cover: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=600&q=80'
  }
];
const qs = (selector, parent = document) => parent.querySelector(selector);
const qsa = (selector, parent = document) => [...parent.querySelectorAll(selector)];

function renderSkills() {
  qs('#skills-grid').innerHTML = skills.map(([name, description, icon]) => `
    <article class="skill-card reveal-card">
      <i class="skill-icon" data-lucide="${icon}"></i>
      <h3>${name}</h3>
      <p>${description}</p>
    </article>
  `).join('');
}

function renderProjects(filter = 'all') {
  const grid = qs('#projects-grid');
  const visible = projects.filter(project => project.categories.includes(filter));

  grid.innerHTML = visible.map((project, index) => `
    <article class="project-card reveal-card" data-project-index="${projects.indexOf(project)}" tabindex="0">
      <div class="project-image-wrap">
        <img src="${project.image}" alt="${project.title} project preview" loading="lazy">
      </div>
      <div class="project-body">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tech-list">${project.tech.map(item => `<span>${item}</span>`).join('')}</div>
        <div class="project-actions">
          <button type="button" data-open-project="${projects.indexOf(project)}">Details</button>
          <a href="${project.live}" target="_blank" rel="noopener" aria-label="${project.title} live demo">Live Demo</a>
          <a href="${project.github}" target="_blank" rel="noopener" aria-label="${project.title} GitHub">GitHub</a>
        </div>
      </div>
    </article>
  `).join('');

  attachProjectEvents();
  attachPointerGlow();

  if (!prefersReducedMotion && window.gsap) {
    gsap.fromTo('.project-card', { y: 24, opacity: 0 }, {
      y: 0,
      opacity: 1,
      duration: 0.55,
      stagger: 0.07,
      ease: 'power3.out'
    });
  }
}

function renderServices() {
  qs('#services-grid').innerHTML = services.map(([title, text, icon]) => `
    <article class="service-card reveal-card">
      <i data-lucide="${icon}"></i>
      <h3>${title}</h3>
      <p>${text}</p>
    </article>
  `).join('');
}

function renderTimeline() {
  qs('#timeline').innerHTML = journey.map(([title, text]) => `
    <article class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="timeline-card">
        <h3>${title}</h3>
        <p>${text}</p>
      </div>
    </article>
  `).join('');
}

function attachPointerGlow() {
  qsa('.info-card, .skill-card, .service-card, .process-card, .project-card').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}

function setupNavigation() {
  const header = qs('#site-header');
  const toggle = qs('.nav-toggle');
  const mobileMenu = qs('#mobile-menu');
  const links = qsa('.nav-link, .mobile-link, .footer-nav a');
  let lastScroll = window.scrollY;

  const closeMenu = () => {
    toggle.classList.remove('active');
    toggle.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('active');
    header.classList.remove('menu-active');
    document.body.classList.remove('menu-open');
  };

  toggle.addEventListener('click', () => {
    const open = !mobileMenu.classList.contains('active');
    toggle.classList.toggle('active', open);
    toggle.setAttribute('aria-expanded', String(open));
    mobileMenu.classList.toggle('active', open);
    header.classList.toggle('menu-active', open);
    document.body.classList.toggle('menu-open', open);
  });

  links.forEach(link => link.addEventListener('click', event => {
    const target = qs(link.getAttribute('href'));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
  }));

  window.addEventListener('scroll', () => {
    const current = window.scrollY;
    header.classList.toggle('scrolled', current > 20);
    header.classList.toggle('nav-hidden', current > lastScroll && current > 420 && !mobileMenu.classList.contains('active'));
    lastScroll = current;
  }, { passive: true });
}

function setupActiveSections() {
  const sections = qsa('main section[id]');
  const navLinks = qsa('.nav-link');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });

  sections.forEach(section => observer.observe(section));
}

function setupCursor() {
  if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;

  const dot = qs('.cursor-dot');
  const ring = qs('.cursor-ring');
  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('pointermove', event => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.opacity = '1';
    ring.style.opacity = '1';
    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
  }, { passive: true });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.16;
    ringY += (mouseY - ringY) * 0.16;
    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
    requestAnimationFrame(animateRing);
  }
  animateRing();

  qsa('a, button, .project-card, input, textarea').forEach(el => {
    el.addEventListener('pointerenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('pointerleave', () => ring.classList.remove('cursor-hover'));
  });
}

function setupProjectFilters() {
  qsa('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
      qsa('.filter-btn').forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderProjects(button.dataset.filter);
      if (window.lucide) lucide.createIcons();
    });
  });
}

function attachProjectEvents() {
  qsa('[data-open-project]').forEach(button => {
    button.addEventListener('click', event => {
      event.stopPropagation();
      openProjectModal(Number(button.dataset.openProject));
    });
  });

  qsa('.project-card').forEach(card => {
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter') openProjectModal(Number(card.dataset.projectIndex));
    });
    card.addEventListener('click', event => {
      if (event.target.closest('a, button')) return;
      openProjectModal(Number(card.dataset.projectIndex));
    });
  });
}

function openProjectModal(index) {
  const project = projects[index];
  const modal = qs('#project-modal');
  const panel = qs('.modal-panel');

  qs('#modal-image').src = project.image;
  qs('#modal-image').alt = `${project.title} project preview`;
  qs('#modal-title').textContent = project.title;
  qs('#modal-description').textContent = project.description;
  qs('#modal-features').innerHTML = project.features.map(feature => `<p>- ${feature}</p>`).join('');
  qs('#modal-tech').innerHTML = project.tech.map(item => `<span>${item}</span>`).join('');
  qs('#modal-live').href = project.live;
  qs('#modal-github').href = project.github;

  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  panel.focus();

  if (!prefersReducedMotion && window.gsap) {
    gsap.fromTo('.modal-backdrop', { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(panel, { opacity: 0, y: 32, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'power3.out' });
  }
}

function closeProjectModal() {
  const modal = qs('#project-modal');
  const panel = qs('.modal-panel');
  const finish = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  if (!modal.classList.contains('active')) return;

  if (!prefersReducedMotion && window.gsap) {
    gsap.to(panel, { opacity: 0, y: 18, scale: 0.98, duration: 0.22, ease: 'power2.in', onComplete: finish });
    gsap.to('.modal-backdrop', { opacity: 0, duration: 0.22 });
  } else {
    finish();
  }
}

function setupModal() {
  qsa('[data-close-modal]').forEach(el => el.addEventListener('click', closeProjectModal));
  window.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeProjectModal();
  });
}

function setupContactForm() {
  const form = qs('#contact-form');
  const note = qs('#form-note');

  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get('name')}`);
    const body = encodeURIComponent(`Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`);
    note.textContent = 'Opening your email app. You can connect this form to a real form service later.';
    window.location.href = `mailto:itxshree511@gmail.com?subject=${subject}&body=${body}`;
  });
}

function setupBackToTop() {
  qs('.back-to-top').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}

function setupParticles() {
  const canvas = qs('#particle-canvas');
  const ctx = canvas.getContext('2d');
  let width;
  let height;
  let particles = [];
  const count = window.innerWidth < 720 ? 28 : 64;

  function resize() {
    width = canvas.width = window.innerWidth * window.devicePixelRatio;
    height = canvas.height = window.innerHeight * window.devicePixelRatio;
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
  }

  function createParticles() {
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.4 + 0.6) * window.devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.18 * window.devicePixelRatio,
      vy: (Math.random() - 0.5) * 0.18 * window.devicePixelRatio,
      alpha: Math.random() * 0.38 + 0.12
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > width) p.vx *= -1;
      if (p.y < 0 || p.y > height) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(103, 232, 249, ${p.alpha})`;
      ctx.fill();
    });

    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();
  window.addEventListener('resize', () => {
    resize();
    createParticles();
  }, { passive: true });
}

function setupAnimations() {
  if (prefersReducedMotion || !window.gsap) {
    qsa('.reveal-text, .reveal-item, .reveal-visual, .reveal-card, .timeline-item, .process-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }

  if (!window.ScrollTrigger) {
    qsa('.reveal-text, .reveal-item, .reveal-visual, .reveal-card, .timeline-item, .process-card').forEach(el => {
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
    return;
  }
  gsap.registerPlugin(ScrollTrigger);

  const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  loadTl
    .from('.nav-shell', { y: -26, opacity: 0, duration: 0.65 })
    .from('.reveal-text', { y: 42, opacity: 0, duration: 0.82, stagger: 0.1 }, '-=0.25')
    .from('.reveal-item', { y: 24, opacity: 0, duration: 0.55, stagger: 0.08 }, '-=0.35')
    .from('.reveal-visual', { y: 50, opacity: 0, rotateX: 8, duration: 0.9 }, '-=0.45');

  gsap.to('.hero-visual', {
    y: -18,
    duration: 3.8,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  gsap.to('.visual-orbit', {
    rotate: 360,
    duration: 36,
    repeat: -1,
    ease: 'none',
    transformOrigin: '50% 50%',
    stagger: 5
  });

  gsap.to('.orb-one', {
    x: 80,
    y: -35,
    duration: 8,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  gsap.to('.orb-two', {
    x: -70,
    y: 42,
    duration: 9,
    yoyo: true,
    repeat: -1,
    ease: 'sine.inOut'
  });

  gsap.to('.scroll-indicator span', {
    y: 20,
    opacity: 0.2,
    duration: 1.25,
    repeat: -1,
    ease: 'power2.inOut'
  });

  qsa('.section-heading, .about-copy, .contact-lead').forEach(el => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 82%' },
      y: 34,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out'
    });
  });

  qsa('.info-card, .skill-card, .project-card, .service-card, .process-card').forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: { trigger: card, start: 'top 86%' },
      y: 34,
      opacity: 0,
      duration: 0.62,
      delay: Math.min(index % 6, 5) * 0.035,
      ease: 'power3.out'
    });
  });

  gsap.from('.timeline-item', {
    scrollTrigger: { trigger: '.timeline', start: 'top 82%' },
    x: 32,
    opacity: 0,
    duration: 0.65,
    stagger: 0.09,
    ease: 'power3.out'
  });

  gsap.to('.grid-layer', {
    scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 1 },
    y: 160,
    ease: 'none'
  });

  qsa('.magnetic').forEach(button => {
    button.addEventListener('pointermove', event => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      gsap.to(button, { x: x * 0.16, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
    });
    button.addEventListener('pointerleave', () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.35, ease: 'elastic.out(1, 0.4)' });
    });
  });
}

function runIntroLoader(onDone) {
  const loader = qs('#intro-loader');
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (loader && loader.isConnected) loader.remove();
    document.body.classList.remove('loading');
    if (typeof onDone === 'function') {
      try { onDone(); } catch (error) { console.error('Portfolio animation setup failed:', error); }
    }
  };
  // Keep the intro polished but not slow; the loader should feel immersive, not stuck on screen.
  const fallbackTimer = window.setTimeout(finish, 2800);
  if (!loader) {
    window.clearTimeout(fallbackTimer);
    finish();
    return;
  }

  const progress = qs('#loader-progress');
  const count = qs('#loader-count');
  const welcome = qs('#loader-welcome');

  if (prefersReducedMotion || !window.gsap) {
    window.clearTimeout(fallbackTimer);
    finish();
    return;
  }

  const state = { value: 0 };
  let tl;
  try {
    tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
  } catch (error) {
    console.error('Intro loader animation unavailable:', error);
    window.clearTimeout(fallbackTimer);
    finish();
    return;
  }

  tl.fromTo('.loader-panel', { opacity: 0, y: 18 }, { opacity: 1, y: 0, duration: 0.42 })
    .to('.beam-one', { xPercent: 120, duration: 0.72, ease: 'power3.inOut' }, 0.06)
    .to('.beam-two', { xPercent: -120, duration: 0.72, ease: 'power3.inOut' }, 0.1)
    .to('.light-core', { opacity: 1, scale: 1.06, duration: 0.24, yoyo: true, repeat: 1 }, 0.2)
    .to(state, {
      value: 100,
      duration: 1.1,
      ease: 'power2.inOut',
      onUpdate: () => {
        const value = Math.round(state.value);
        count.textContent = `${value}%`;
        progress.style.width = `${value}%`;
      }
    }, 0.3)
    .to('.loader-row, .loader-track, .loader-brand', { opacity: 0, y: -10, duration: 0.26 }, '>-0.08')
    .to(welcome, { opacity: 1, y: -6, duration: 0.42, ease: 'power2.out' }, '<0.08')
    .to(loader, {
      opacity: 0,
      scale: 1.01,
      duration: 0.52,
      delay: 0.28,
      ease: 'power2.inOut',
      onComplete: () => {
        window.clearTimeout(fallbackTimer);
        finish();
      }
    });
}

function setupSocialLinks() {
  qsa('[data-social-link]').forEach(link => {
    const key = link.dataset.socialLink;
    if (!socialLinks[key]) return;

    link.href = socialLinks[key];

    const icon = link.querySelector('i[data-lucide]');
    if (icon && socialIcons[key]) {
      icon.outerHTML = socialIcons[key];
    }

    const labelMap = {
      github: 'GitHub',
      linkedin: 'LinkedIn',
      whatsapp: 'WhatsApp',
      email: 'Email'
    };
    link.setAttribute('aria-label', labelMap[key] || 'Social link');
  });
}


function setupSpiderShowcase() {
  const stage = qs('#sheraz-showcase-stage');
  if (!stage) return;

  let autoRotateTimer = null;
  let isAutoRotating = false;

  const scheduleNextRotation = () => {
    if (!isAutoRotating) return;

    const isSpider = stage.classList.contains('is-spider');
    const displayDuration = isSpider ? 2000 : 5000;

    autoRotateTimer = window.setTimeout(() => {
      stage.classList.add('blur-transition');

      if (stage.classList.contains('is-spider')) {
        stage.classList.remove('is-spider');
      } else {
        stage.classList.add('is-spider');
      }

      window.setTimeout(() => {
        stage.classList.remove('blur-transition');
      }, 400);

      scheduleNextRotation();
    }, displayDuration);
  };

  const startAutoRotate = () => {
    if (isAutoRotating) return;

    isAutoRotating = true;
    scheduleNextRotation();
  };

  const stopAutoRotate = () => {
    if (autoRotateTimer !== null) {
      window.clearTimeout(autoRotateTimer);
      autoRotateTimer = null;
    }

    isAutoRotating = false;
  };

  // Start with your picture visible.
  stage.classList.remove('is-spider');
  startAutoRotate();

  // Pause rotation while hovering on desktop.
  if (!window.matchMedia('(hover: none), (pointer: coarse)').matches) {
    const updateSpotlight = event => {
      const rect = stage.getBoundingClientRect();
      const x = Math.min(
        Math.max(event.clientX - rect.left, 0),
        rect.width
      );
      const y = Math.min(
        Math.max(event.clientY - rect.top, 0),
        rect.height
      );

      stage.style.setProperty('--spot-x', `${(x / rect.width) * 100}%`);
      stage.style.setProperty('--spot-y', `${(y / rect.height) * 100}%`);
    };

    stage.addEventListener('pointerenter', event => {
      stopAutoRotate();
      stage.classList.add('is-hovering');
      updateSpotlight(event);
    }, { passive: true });

    stage.addEventListener('pointermove', updateSpotlight, {
      passive: true
    });

    stage.addEventListener('pointerleave', () => {
      stage.classList.remove('is-hovering');
      stage.style.removeProperty('--spot-x');
      stage.style.removeProperty('--spot-y');
      startAutoRotate();
    });
  }
}

function setupProjectGallery() { 
  const gallery = qs('#project-gallery'); 
  const prev = qs('#gallery-prev'); 
  const next = qs('#gallery-next'); 
  if (!gallery || !projectGallery.length) return; 
 
  let active = 0; 
  let timer; 
 
  const positionFor = index => { 
    const total = projectGallery.length; 
    let offset = index - active; 
    if (offset > total / 2) offset -= total; 
    if (offset < -total / 2) offset += total; 
    return Math.max(-2, Math.min(2, offset)); 
  }; 
 
  const render = () => { 
    gallery.innerHTML = projectGallery.map((item, index) => { 
      const position = positionFor(index); 
      const hidden = Math.abs(index - active) > 2 && Math.abs(index - active) < projectGallery.length - 2; 
      return ` 
        <figure class="gallery-item ${index === active ? 'active' : ''}" data-gallery-index="${index}" data-position="${position}" aria-hidden="${hidden}"> 
          <img src="${item.image}" alt="${item.alt}" loading="lazy"> 
          <figcaption>${item.title}</figcaption> 
        </figure> 
      `; 
    }).join(''); 
 
    qsa('[data-gallery-index]', gallery).forEach(item => { 
      item.addEventListener('click', () => goTo(Number(item.dataset.galleryIndex), true)); 
    }); 
  }; 
 
  const goTo = (index, userAction = false) => { 
    active = (index + projectGallery.length) % projectGallery.length; 
    render(); 
    if (window.lucide) lucide.createIcons(); 
    if (userAction) restart(); 
  }; 
 
  const restart = () => { 
    window.clearInterval(timer); 
    if (!prefersReducedMotion) timer = window.setInterval(() => goTo(active + 1), 5200); 
  }; 
 
  if (prev) prev.addEventListener('click', () => goTo(active - 1, true)); 
  if (next) next.addEventListener('click', () => goTo(active + 1, true)); 
  gallery.addEventListener('mouseenter', () => window.clearInterval(timer)); 
  gallery.addEventListener('mouseleave', restart); 
  gallery.addEventListener('focusin', () => window.clearInterval(timer)); 
  gallery.addEventListener('focusout', restart); 
 
  render(); 
  restart(); 
} 
 
function setupMusicPlayer() { 
  const audio = qs('#portfolio-audio'); 
  const playlist = qs('#playlist'); 
  const cover = qs('#music-cover'); 
  const title = qs('#music-track-title'); 
  const artist = qs('#music-track-artist'); 
  const toggle = qs('#music-toggle'); 
  const prev = qs('#music-prev'); 
  const next = qs('#music-next'); 
  const progress = qs('#music-progress'); 
  const currentTime = qs('#music-current-time'); 
  const duration = qs('#music-duration'); 
  const volume = qs('#music-volume'); 
  const status = qs('#music-status'); 
  if (!audio || !playlist || !musicTracks.length) return; 
 
  let active = 0; 
  let seeking = false; 
 
  const formatTime = seconds => { 
    if (!Number.isFinite(seconds)) return '0:00'; 
    const mins = Math.floor(seconds / 60); 
    const secs = Math.floor(seconds % 60).toString().padStart(2, '0'); 
    return `${mins}:${secs}`; 
  }; 
 
  const setIcon = name => { 
    toggle.innerHTML = `<i data-lucide="${name}"></i>`; 
    const playing = name === 'pause';
    toggle.classList.toggle('is-playing', playing);
    toggle.setAttribute('aria-label', playing ? 'Pause selected song' : 'Play selected song');
    toggle.setAttribute('aria-pressed', String(playing));
    if (window.lucide) lucide.createIcons(); 
  }; 

  const safePlay = () => {
    if (!audio.src) {
      status.textContent = 'No audio source is available yet.';
      return;
    }

    const startPlayback = () => audio.play().then(() => {
      status.textContent = '';
    }).catch(() => {
      status.textContent = 'Unable to play this track right now. Please try again.';
      setIcon('play');
    });

    startPlayback();
  };
 
  const renderPlaylist = () => { 
    playlist.innerHTML = musicTracks.map((track, index) => ` 
      <button type="button" class="playlist-item ${index === active ? 'active' : ''}" data-track="${index}" aria-label="Play ${track.title} by ${track.artist}"> 
        <img src="${track.cover}" alt="" loading="lazy"> 
        <span><strong>${track.title}</strong><small>${track.artist}</small></span> 
        <i data-lucide="${index === active ? 'volume-2' : 'music-2'}"></i> 
      </button> 
    `).join(''); 
    qsa('[data-track]', playlist).forEach(button => { 
      button.addEventListener('click', () => selectTrack(Number(button.dataset.track), true)); 
    }); 
    if (window.lucide) lucide.createIcons(); 
  }; 
 
  const selectTrack = (index, playAfterLoad = false) => { 
    active = (index + musicTracks.length) % musicTracks.length; 
    const track = musicTracks[active]; 
    audio.pause();
    audio.src = track.audio;
    audio.load();
    cover.src = track.cover; 
    cover.alt = `${track.title} cover art`; 
    title.textContent = track.title; 
    artist.textContent = track.artist; 
    status.textContent = ''; 
    progress.value = 0; 
    currentTime.textContent = '0:00'; 
    duration.textContent = '0:00'; 
    renderPlaylist(); 
    setIcon('play');
    if (playAfterLoad) {
      safePlay();
    }
  }; 
 
  toggle.addEventListener('click', () => { 
    if (audio.paused) {
      safePlay();
    } else {
      audio.pause();
      status.textContent = '';
    }
  }); 
 
  prev.addEventListener('click', () => selectTrack(active - 1, true)); 
  next.addEventListener('click', () => selectTrack(active + 1, true)); 
  volume.addEventListener('input', () => { audio.volume = Number(volume.value); }); 
  progress.addEventListener('input', () => { seeking = true; }); 
  progress.addEventListener('change', () => { 
    if (Number.isFinite(audio.duration)) audio.currentTime = (Number(progress.value) / 100) * audio.duration; 
    seeking = false; 
  }); 
 
  audio.addEventListener('play', () => setIcon('pause')); 
  audio.addEventListener('pause', () => setIcon('play')); 
  audio.addEventListener('loadedmetadata', () => { duration.textContent = formatTime(audio.duration); }); 
  audio.addEventListener('timeupdate', () => { 
    currentTime.textContent = formatTime(audio.currentTime); 
    if (!seeking && Number.isFinite(audio.duration) && audio.duration > 0) {
      progress.value = String((audio.currentTime / audio.duration) * 100);
    }
  }); 
  audio.addEventListener('ended', () => selectTrack(active + 1, true)); 
  audio.addEventListener('error', () => { 
    setIcon('play'); 
    status.textContent = 'Audio failed to load. The track URL is editable in musicTracks.'; 
  }); 
 
  audio.volume = Number(volume.value); 
  selectTrack(0, false); 
  setIcon('play'); 
} 

function setupAIShowcase() {
  const frame = document.querySelector('#ai-showcase-frame');
  if (!frame) return;
  const label = frame.querySelector('.ai-showcase__label-text');
  const human = frame.querySelector('.ai-showcase__human');
  const robot = frame.querySelector('.ai-showcase__robot');
  if (!human || !robot) return;

  let robotIsBase = false;
  let pointerInside = false;
  const setMode = (isRobot) => {
    robotIsBase = isRobot;
    frame.classList.toggle('is-robot', isRobot);
    if (label) label.textContent = isRobot ? 'AI MODE' : 'HUMAN MODE';
    frame.classList.toggle('hovering', pointerInside);
  };

  // Alternate the full image every five seconds with a smooth cross-fade.
  const rotation = window.setInterval(() => setMode(!robotIsBase), 5000);

  frame.addEventListener('pointerenter', (event) => {
    if (event.pointerType === 'touch') return;
    pointerInside = true;
    frame.classList.add('hovering');
    updatePointer(event);
  });
  frame.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    updatePointer(event);
  });
  frame.addEventListener('pointerleave', () => {
    pointerInside = false;
    frame.classList.remove('hovering');
  });
  function updatePointer(event) {
    const rect = frame.getBoundingClientRect();
    frame.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`);
    frame.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`);
  }
  // Avoid leaving a timer behind if the showcase is removed by a page editor.
  frame.dataset.rotationReady = 'true';
}

function init() { 
  const tasks = [ 
    ['AI showcase animation', setupAIShowcase],
    ['spider showcase', setupSpiderShowcase],
    ['skills', renderSkills], 
    ['projects', renderProjects], 
    ['services', renderServices], 
    ['timeline', renderTimeline], 
    ['social links', setupSocialLinks], 
    ['project gallery', setupProjectGallery], 
    ['music player', setupMusicPlayer], 
    ['navigation', setupNavigation], 
    ['active sections', setupActiveSections], 
    ['cursor', setupCursor], 
    ['project filters', setupProjectFilters], 
    ['project modal', setupModal], 
    ['contact form', setupContactForm], 
    ['back-to-top control', setupBackToTop], 
    ['pointer effects', attachPointerGlow], 
    ['background particles', setupParticles] 
  ]; 
 
  // A single optional component must not prevent the rest of the page from initializing. 
  tasks.forEach(([name, task]) => { 
    try { task(); } 
    catch (error) { console.error(`Portfolio ${name} initialization failed:`, error); } 
  }); 
 
  const year = qs('#year'); 
  if (year) year.textContent = new Date().getFullYear(); 
  if (window.lucide) { 
    try { window.lucide.createIcons(); } 
    catch (error) { console.error('Icon initialization failed:', error); } 
  } 
  runIntroLoader(setupAnimations); 
} 
 
document.addEventListener('DOMContentLoaded', init); 
