import { useEffect, useRef, useState } from 'react';

export default function App() {
  const canvasRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobOpen, setIsMobOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Contact Form Inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // ── PARTICLE CANVAS ──
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H;
    let particles = [];
    let animationId;

    function resize() {
      if (!canvas) return;
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.3;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.alpha = Math.random() * 0.4 + 0.05;
        const r = Math.random();
        this.color = r < 0.5 ? '59,130,246' : r < 0.8 ? '0,230,118' : '255,109,0';
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.alpha})`;
        ctx.fill();
      }
    }

    function drawGrid() {
      ctx.strokeStyle = 'rgba(59,130,246,0.025)';
      ctx.lineWidth = 1;
      const sp = 80;
      for (let x = 0; x < W; x += sp) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      for (let y = 0; y < H; y += sp) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(W, y);
        ctx.stroke();
      }
    }

    particles = [];
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, W, H);
      drawGrid();
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(59,130,246,${0.06 * (1 - dist / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // ── NAVBAR SCROLL ──
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Active Section tracking
      const sections = document.querySelectorAll('section[id]');
      let cur = '';
      sections.forEach((s) => {
        const offsetTop = s.offsetTop;
        if (window.scrollY >= offsetTop - 150) {
          cur = s.id;
        }
      });
      setActiveSection(cur);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // ── SCROLL REVEAL ──
    const revEls = document.querySelectorAll('.reveal');
    const ro = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            ro.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revEls.forEach((el) => ro.observe(el));

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  const toggleMob = () => setIsMobOpen(!isMobOpen);
  const closeMob = () => setIsMobOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp URL to send details to +91 88225 22228
    const whatsappNumber = "918822522228";
    const text = `Hello Novarena Technologies,\n\nI would like to get in touch. Here are my details:\n- *Name*: ${firstName} ${lastName}\n- *Email*: ${email}\n- *Company*: ${company || 'N/A'}\n- *Service*: ${service}\n- *Message*: ${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
    
    setFormSubmitted(true);
  };

  const getLinkStyle = (hash) => {
    if (activeSection === hash) {
      return {
        color: 'var(--white)',
        background: 'var(--surface)',
      };
    }
    return {};
  };

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef}></canvas>

      {/* ── NAV ── */}
      <nav id="nav" className={isScrolled ? 'scrolled' : ''}>
        <div className="container nav-inner">
          <a href="#" className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/logo_mark_trimmed.png" alt="Novarena logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
            <img src="/logo_text_trimmed.png" alt="Novarena Technologies" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
          </a>
          <ul className="nav-links">
            <li>
              <a href="#about" style={getLinkStyle('about')}>
                About
              </a>
            </li>
            <li>
              <a href="#products" style={getLinkStyle('products')}>
                Products
              </a>
            </li>
            <li>
              <a href="#services" style={getLinkStyle('services')}>
                Services
              </a>
            </li>
            <li>
              <a href="#tech" style={getLinkStyle('tech')}>
                Stack
              </a>
            </li>
            <li>
              <a href="#contact" style={getLinkStyle('contact')}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <a href="#contact" className="btn btn-ghost" style={{ padding: '10px 22px', fontSize: '13px' }}>
              Get in Touch
            </a>
            <a href="#products" className="btn btn-primary" style={{ padding: '10px 22px', fontSize: '13px' }}>
              Explore Products
            </a>
          </div>
          <div className="ham" id="ham" onClick={toggleMob}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className={`mob-menu ${isMobOpen ? 'open' : ''}`} id="mobMenu">
        <a href="#about" onClick={closeMob}>
          About
        </a>
        <a href="#products" onClick={closeMob}>
          Products
        </a>
        <a href="#services" onClick={closeMob}>
          Services
        </a>
        <a href="#tech" onClick={closeMob}>
          Tech Stack
        </a>
        <a href="#contact" onClick={closeMob}>
          Contact
        </a>
        <a href="#products" onClick={closeMob} style={{ color: 'var(--blue-bright)' }}>
          Explore Products →
        </a>
        <a href="#contact" onClick={closeMob} style={{ color: 'var(--blue-bright)' }}>
          Get in Touch →
        </a>
      </div>

      {/* ── HERO ── */}
      <section id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="pulse"></span>Multi-product Technology Company
              </div>
              <h1 className="hero-title">
                Building the<br />
                <span className="grad-multi">Future of Digital</span><br />
                Innovation
              </h1>
              <p className="hero-sub">
                We create powerful, scalable technology solutions across industries — from sports platforms to AI-driven systems that transform how the world operates.
              </p>
              <div className="btn-grp hero-btns">
                <a href="#products" className="btn btn-primary btn-lg">
                  Explore Our Products <span>→</span>
                </a>
                <a href="#contact" className="btn btn-ghost btn-lg">
                  Get in Touch
                </a>
              </div>
              <div className="hero-metrics">
                <div className="metric">
                  <strong>5+</strong>
                  <span>Products Building</span>
                </div>
                <div className="metric">
                  <strong>3+</strong>
                  <span>Domains Covered</span>
                </div>
                <div className="metric">
                  <strong>∞</strong>
                  <span>Scale Potential</span>
                </div>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-orb"></div>
              <div className="floating-chip chip-1">⚡ AI-Powered Systems</div>
              <div className="floating-chip chip-2">🚀 Shipped to Production</div>
              <div className="floating-chip chip-3">🏆 Sports-Tech Leader</div>
              <div className="glass-card-hero">
                <div className="card-topbar">
                  <div className="tb-dot r"></div>
                  <div className="tb-dot y"></div>
                  <div className="tb-dot g"></div>
                  <span style={{ marginLeft: '8px', fontSize: '11px', color: 'var(--text-3)', fontFamily: "'Poppins',sans-serif" }}>
                    novarena.system
                  </span>
                </div>
                <div className="code-block">
                  <div>
                    <span className="code-comment">// Novarena Core System v2.0</span>
                  </div>
                  <div style={{ marginTop: '10px' }}>
                    <span className="code-key">const</span> <span style={{ color: '#e2e8f0' }}>novarena</span>{' '}
                    <span className="code-op">= &#123;</span>
                  </div>
                  <div style={{ paddingLeft: '18px' }}>
                    <span className="code-key">mission:</span> <span className="code-str">"Digital Innovation"</span>
                    <span className="code-op">,</span>
                  </div>
                  <div style={{ paddingLeft: '18px' }}>
                    <span className="code-key">domains:</span> <span className="code-op">[</span>
                  </div>
                  <div style={{ paddingLeft: '36px' }}>
                    <span className="code-str">"Sports-Tech"</span>
                    <span className="code-op">,</span>
                  </div>
                  <div style={{ paddingLeft: '36px' }}>
                    <span className="code-str">"AI & Automation"</span>
                    <span className="code-op">,</span>
                  </div>
                  <div style={{ paddingLeft: '36px' }}>
                    <span className="code-str">"SaaS Platforms"</span>
                  </div>
                  <div style={{ paddingLeft: '18px' }}>
                    <span className="code-op">]</span>
                    <span className="code-op">,</span>
                  </div>
                  <div style={{ paddingLeft: '18px' }}>
                    <span className="code-key">status:</span> <span className="code-str">"building.future"</span>
                    <span className="code-op">,</span>
                  </div>
                  <div style={{ paddingLeft: '18px' }}>
                    <span className="code-key">scale:</span> <span className="code-num">Infinity</span>
                  </div>
                  <div>
                    <span className="code-op">&#125;;</span>
                  </div>
                  <div style={{ marginTop: '12px' }}>
                    <span className="code-fn">launch</span>
                    <span className="code-op">(</span>
                    <span style={{ color: '#e2e8f0' }}>novarena</span>
                    <span className="code-op">);</span> <span className="code-comment">// 🚀</span>
                  </div>
                  <div style={{ marginTop: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: 'var(--green)' }}>▶ Ready.</span>{' '}
                    <span
                      style={{
                        width: '8px',
                        height: '14px',
                        background: 'var(--blue-bright)',
                        display: 'inline-block',
                        borderRadius: '1px',
                        animation: 'blink 1s infinite',
                      }}
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── ABOUT ── */}
      <section id="about" className="sec-pad">
        <div className="container">
          <div className="about-grid">
            <div className="about-text reveal">
              <div className="label">
                <span className="label-dot"></span>Who We Are
              </div>
              <h2 className="h-lg">
                A Company Built to<br />
                <span className="grad-blue">Solve the Complex</span>
              </h2>
              <p className="body-lg">
                Novarena Technologies LLP is a multi-product technology company focused on building next-generation digital platforms. Our mission is to simplify complex systems through innovative design and scalable engineering.
              </p>
              <p className="body-md">
                From sports ecosystems to AI-powered tools, we architect solutions that are built to last — elegant in design, robust in infrastructure, and transformative in impact.
              </p>
              <div className="about-pills">
                <span className="pill pill-blue">Sports-Tech</span>
                <span className="pill pill-green">AI & Automation</span>
                <span className="pill pill-orange">SaaS Platforms</span>
                <span className="pill pill-blue">Mobile Apps</span>
                <span className="pill pill-green">Future Technologies</span>
              </div>
            </div>
            <div className="about-visual reveal reveal-delay-2">
              <div className="about-bg-glow"></div>
              <div className="about-cards-stack">
                <div className="ac">
                  <div className="ac-icon blue">🎯</div>
                  <div>
                    <h4>Mission-Driven</h4>
                    <p>We build with purpose — every product solves a real, scalable problem.</p>
                  </div>
                </div>
                <div className="ac">
                  <div className="ac-icon green">⚙️</div>
                  <div>
                    <h4>Engineering Excellence</h4>
                    <p>Modern architecture, clean code, and infrastructure built for millions.</p>
                  </div>
                </div>
                <div className="ac">
                  <div className="ac-icon orange">🌐</div>
                  <div>
                    <h4>Multi-Domain Expertise</h4>
                    <p>Sports, AI, SaaS — we move fast across industries with deep expertise.</p>
                  </div>
                </div>
                <div className="ac">
                  <div className="ac-icon blue">🚀</div>
                  <div>
                    <h4>Startup Velocity</h4>
                    <p>Ship fast, iterate with data, and scale without limits.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── PRODUCTS ── */}
      <section id="products" className="sec-pad">
        <div className="container">
          <div className="text-center reveal">
            <div className="label mx-auto" style={{ justifyContent: 'center' }}>
              <span className="label-dot"></span>Our Products
            </div>
            <h2 className="h-lg max-700 mx-auto">
              Innovations Built<br />
              <span className="grad-green">Across Industries</span>
            </h2>
            <p className="body-lg max-580 mx-auto" style={{ marginTop: '16px' }}>
              Each product is a standalone platform — designed to dominate its category and built on shared infrastructure for scale.
            </p>
          </div>
          <div className="products-grid">
            <div className="prod-card pc-green reveal reveal-delay-1">
              <div className="prod-badge badge-live">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--green)', display: 'inline-block' }}></span>Live
              </div>
              <span className="prod-icon">⚽</span>
              <h3>Arenova</h3>
              <p>
                A smart sports ecosystem connecting players, coaches, and venues. Book turfs, find coaches, join tournaments, and build a sports community — all in one app.
              </p>
              <div className="prod-tag-row">
                <span className="tag">Sports-Tech</span>
                <span className="tag">React Native</span>
                <span className="tag">Node.js</span>
                <span className="tag">PostgreSQL</span>
              </div>
            </div>
            <div className="prod-card pc-blue reveal reveal-delay-2">
              <div className="prod-badge badge-soon">Coming Soon</div>
              <span className="prod-icon">🤖</span>
              <h3>Nova AI Suite</h3>
              <p>
                A collection of AI-powered productivity and automation tools. Smart document processing, intelligent workflows, and business intelligence — powered by LLMs.
              </p>
              <div className="prod-tag-row">
                <span className="tag">Artificial Intelligence</span>
                <span className="tag">Python</span>
                <span className="tag">LangChain</span>
                <span className="tag">OpenAI</span>
              </div>
            </div>
            <div className="prod-card pc-orange reveal reveal-delay-3">
              <div className="prod-badge badge-future">In Research</div>
              <span className="prod-icon">☁️</span>
              <h3>NovaCloud SaaS</h3>
              <p>
                Next-generation SaaS infrastructure platform for businesses. Multi-tenant architecture, real-time collaboration, and enterprise-grade security out of the box.
              </p>
              <div className="prod-tag-row">
                <span className="tag">SaaS Platform</span>
                <span className="tag">AWS</span>
                <span className="tag">Microservices</span>
                <span className="tag">Kubernetes</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── VISION ── */}
      <section id="vision">
        <div className="container">
          <div className="reveal">
            <div className="vision-icon-ring">🌍</div>
            <div className="label mx-auto" style={{ justifyContent: 'center' }}>
              <span className="label-dot"></span>Our Vision
            </div>
            <p className="vision-quote">
              "To build <span className="hl">impactful digital ecosystems</span> that empower businesses and individuals to operate, compete, and thrive — <span className="hl">globally</span>."
            </p>
            <p className="vision-meta">— Novarena Technologies LLP, Hyderabad, India</p>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── SERVICES ── */}
      <section id="services" className="sec-pad">
        <div className="container">
          <div className="text-center reveal">
            <div className="label mx-auto" style={{ justifyContent: 'center' }}>
              <span className="label-dot"></span>Services
            </div>
            <h2 className="h-lg max-700 mx-auto">
              What We<br />
              <span className="grad-blue">Build For You</span>
            </h2>
            <p className="body-lg max-580 mx-auto" style={{ marginTop: '16px' }}>
              End-to-end technology services — from strategy and design to deployment and scale.
            </p>
          </div>
          <div className="services-grid">
            <div className="svc-card reveal reveal-delay-1">
              <div className="svc-num">01</div>
              <div className="svc-icon">💻</div>
              <h3>Software Development</h3>
              <p>Full-stack web and backend engineering. From APIs to complex distributed systems — we architect and build it.</p>
            </div>
            <div className="svc-card reveal reveal-delay-2">
              <div className="svc-num">02</div>
              <div className="svc-icon">📱</div>
              <h3>Mobile App Development</h3>
              <p>Cross-platform iOS and Android apps with Flutter and React Native — native performance, beautiful interfaces.</p>
            </div>
            <div className="svc-card reveal reveal-delay-3">
              <div className="svc-num">03</div>
              <div className="svc-icon">☁️</div>
              <h3>SaaS Product Development</h3>
              <p>Multi-tenant SaaS platforms built for scale. From MVP to enterprise-grade with clean billing and auth systems.</p>
            </div>
            <div className="svc-card reveal reveal-delay-1">
              <div className="svc-num">04</div>
              <div className="svc-icon">🤖</div>
              <h3>AI & Automation Solutions</h3>
              <p>LLM integration, intelligent agents, workflow automation, and custom ML models that drive real business value.</p>
            </div>
            <div className="svc-card reveal reveal-delay-2">
              <div className="svc-num">05</div>
              <div className="svc-icon">🎨</div>
              <h3>UI/UX Design</h3>
              <p>Premium product design — from wireframes to pixel-perfect Figma handoffs. We design for conversion and delight.</p>
            </div>
            <div className="svc-card reveal reveal-delay-3">
              <div className="svc-num">06</div>
              <div className="svc-icon">🏗️</div>
              <h3>Cloud Architecture</h3>
              <p>Scalable AWS/GCP infrastructure, DevOps pipelines, containerisation, and production-ready deployments.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── TECH STACK ── */}
      <section id="tech" className="sec-pad">
        <div className="container">
          <div className="text-center reveal">
            <div className="label mx-auto" style={{ justifyContent: 'center' }}>
              <span className="label-dot"></span>Technology Stack
            </div>
            <h2 className="h-lg mx-auto">
              Built with Modern<br />
              <span className="grad-green">Technologies</span>
            </h2>
            <p className="body-lg max-580 mx-auto" style={{ marginTop: '16px' }}>
              We use best-in-class tools — chosen for performance, scalability, and developer excellence.
            </p>
          </div>
          <div className="tech-grid">
            <div className="tech-item reveal">
              <div className="tech-logo">⚛️</div>
              <div className="tech-name">React</div>
            </div>
            <div className="tech-item reveal reveal-delay-1">
              <div className="tech-logo">🟢</div>
              <div className="tech-name">Node.js</div>
            </div>
            <div className="tech-item reveal reveal-delay-2">
              <div className="tech-logo">🐍</div>
              <div className="tech-name">Python</div>
            </div>
            <div className="tech-item reveal reveal-delay-3">
              <div className="tech-logo">☁️</div>
              <div className="tech-name">AWS</div>
            </div>
            <div className="tech-item reveal reveal-delay-4">
              <div className="tech-logo">💙</div>
              <div className="tech-name">Flutter</div>
            </div>
            <div className="tech-item reveal">
              <div className="tech-logo">🤖</div>
              <div className="tech-name">OpenAI</div>
            </div>
            <div className="tech-item reveal reveal-delay-1">
              <div className="tech-logo">🐘</div>
              <div className="tech-name">PostgreSQL</div>
            </div>
            <div className="tech-item reveal reveal-delay-2">
              <div className="tech-logo">🔴</div>
              <div className="tech-name">Redis</div>
            </div>
            <div className="tech-item reveal reveal-delay-3">
              <div className="tech-logo">🐋</div>
              <div className="tech-name">Docker</div>
            </div>
            <div className="tech-item reveal reveal-delay-4">
              <div className="tech-logo">△</div>
              <div className="tech-name">Next.js</div>
            </div>
            <div className="tech-item reveal">
              <div className="tech-logo">🔷</div>
              <div className="tech-name">TypeScript</div>
            </div>
            <div className="tech-item reveal reveal-delay-1">
              <div className="tech-logo">⚡</div>
              <div className="tech-name">FastAPI</div>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── WHY ── */}
      <section id="why" className="sec-pad">
        <div className="container">
          <div className="text-center reveal">
            <div className="label mx-auto" style={{ justifyContent: 'center' }}>
              <span className="label-dot"></span>Why Novarena
            </div>
            <h2 className="h-lg mx-auto">
              The Novarena<br />
              <span className="grad-blue">Advantage</span>
            </h2>
            <p className="body-lg max-580 mx-auto" style={{ marginTop: '16px' }}>
              We're not just a dev shop. We're a product company that understands business, design, and engineering equally.
            </p>
          </div>
          <div className="why-grid">
            <div className="why-card reveal">
              <div className="why-icon-wrap w-blue">💡</div>
              <div>
                <h4>Innovative Approach</h4>
                <p>We challenge assumptions and think from first principles. Every solution starts with deep research and ends with something users actually love using.</p>
              </div>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-icon-wrap w-green">📐</div>
              <div>
                <h4>Scalable Architecture</h4>
                <p>Our systems are designed for 10 users and 10 million users at the same time. Clean architecture, microservices, and cloud-native thinking from day one.</p>
              </div>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-icon-wrap w-orange">👤</div>
              <div>
                <h4>User-First Design</h4>
                <p>Beautiful products that convert. Every pixel, interaction, and flow is designed with the user's clarity and delight as the primary objective.</p>
              </div>
            </div>
            <div className="why-card reveal reveal-delay-3">
              <div className="why-icon-wrap w-blue">⚡</div>
              <div>
                <h4>Fast Execution</h4>
                <p>We operate with startup velocity. From idea to live product in weeks, not months. Agile, focused, and obsessed with shipping quality fast.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── CTA BAND ── */}
      <section id="cta-band">
        <div className="cta-glow"></div>
        <div className="container reveal">
          <div className="label mx-auto" style={{ justifyContent: 'center' }}>
            <span className="label-dot"></span>Start Building
          </div>
          <h2 className="grad-multi">Let's Build the<br />Future Together</h2>
          <p>Have a product idea or a technology challenge? We'd love to hear it. Let's turn your vision into a scalable digital reality.</p>
          <div className="btn-grp" style={{ justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary btn-lg">Contact Us →</a>
            <a href="#products" className="btn btn-ghost btn-lg">View Products</a>
          </div>
          <div className="cta-trust">
            <div className="trust-pill">
              <svg viewBox="0 0 12 12" style={{ width: '14px', height: '14px', fill: 'var(--green)' }}>
                <path d="M2 6l3 3 5-5" />
              </svg>
              No commitment required
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 12 12" style={{ width: '14px', height: '14px', fill: 'var(--green)' }}>
                <path d="M2 6l3 3 5-5" />
              </svg>
              Free initial consultation
            </div>
            <div className="trust-pill">
              <svg viewBox="0 0 12 12" style={{ width: '14px', height: '14px', fill: 'var(--green)' }}>
                <path d="M2 6l3 3 5-5" />
              </svg>
              Fast response within 24hrs
            </div>
          </div>
        </div>
      </section>

      <div className="grad-line"></div>

      {/* ── CONTACT ── */}
      <section id="contact" className="sec-pad">
        <div className="container">
          <div className="contact-grid">
            <div className="reveal">
              <div className="label">
                <span className="label-dot"></span>Contact
              </div>
              <h2 className="h-lg">
                Get in <span className="grad-blue">Touch</span>
              </h2>
              <p className="body-lg" style={{ marginTop: '16px' }}>
                Whether you have a project in mind, want to partner with us, or just want to say hello — we're always open to a good conversation.
              </p>
              <div className="contact-info">
                <div className="ci">
                  <div className="ci-icon">📧</div>
                  <div>
                    <h5>Email</h5>
                    <p><a href="mailto:Novarenatech@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>Novarenatech@gmail.com</a></p>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon">📱</div>
                  <div>
                    <h5>Phone</h5>
                    <p><a href="tel:+918822522228" style={{ color: 'inherit', textDecoration: 'none' }}>+91 88225 22228</a></p>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon">📍</div>
                  <div>
                    <h5>Location</h5>
                    <p>Hyderabad, Telangana, India</p>
                  </div>
                </div>
                <div className="ci">
                  <div className="ci-icon">🕐</div>
                  <div>
                    <h5>Working Hours</h5>
                    <p>Mon – Sat, 9:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal reveal-delay-2">
              <div style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', borderRadius: 'var(--r-xl)', padding: '36px', backdropFilter: 'blur(16px)' }}>
                {!formSubmitted ? (
                  <>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '20px', marginBottom: '6px' }}>Send a Message</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-2)', marginBottom: '26px' }}>We'll get back to you within 24 hours.</p>
                    <form className="form" id="contactForm" onSubmit={handleSubmit}>
                      <div className="form-row">
                        <div className="form-group">
                          <label>First Name</label>
                          <input type="text" placeholder="Rahul" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input type="text" placeholder="Sharma" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="rahul@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
                      </div>
                      <div className="form-group">
                        <label>Company (Optional)</label>
                        <input type="text" placeholder="Your company name" value={company} onChange={(e) => setCompany(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Service Interested In</label>
                        <select value={service} onChange={(e) => setService(e.target.value)} required>
                          <option value="">Select a service...</option>
                          <option>Software Development</option>
                          <option>Mobile App Development</option>
                          <option>SaaS Product Development</option>
                          <option>AI & Automation</option>
                          <option>UI/UX Design</option>
                          <option>Partnership / Investment</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label>Message</label>
                        <textarea rows="4" placeholder="Tell us about your project or idea..." value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                      </div>
                      <div className="form-submit">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Send Message →
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div id="formSuccess" style={{ textAlign: 'center', padding: '32px 0' }}>
                    <div style={{ fontSize: '48px', marginBottom: '14px' }}>✅</div>
                    <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: '18px', marginBottom: '8px' }}>Message Sent!</h4>
                    <p style={{ color: 'var(--text-2)', fontSize: '14px' }}>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="nav-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/logo_mark_trimmed.png" alt="Novarena logo" style={{ height: '36px', width: 'auto', objectFit: 'contain' }} />
                <img src="/logo_text_trimmed.png" alt="Novarena Technologies" style={{ height: '20px', width: 'auto', objectFit: 'contain' }} />
              </div>
              <p>A multi-product technology company building next-generation digital platforms across sports-tech, AI, and SaaS.</p>
              <span className="footer-tagline">Registered in India · LLP</span>
              <div className="social-row">
                <div className="soc">𝕏</div>
                <div className="soc">in</div>
                <div className="soc">gh</div>
                <div className="soc">ig</div>
              </div>
            </div>
            <div className="footer-col">
              <h5>Products</h5>
              <ul>
                <li><a href="#products">Arenova</a></li>
                <li><a href="#products">Nova AI Suite</a></li>
                <li><a href="#products">NovaCloud SaaS</a></li>
                <li><a href="#">Roadmap</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">Software Development</a></li>
                <li><a href="#services">Mobile Apps</a></li>
                <li><a href="#services">AI & Automation</a></li>
                <li><a href="#services">UI/UX Design</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Novarena Technologies LLP. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
