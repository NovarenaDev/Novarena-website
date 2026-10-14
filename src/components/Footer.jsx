import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand Col */}
          <div className="footer-brand">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              className="nav-logo"
              style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
            >
              <img
                src="/logo_mark_trimmed.png"
                alt="Novarena logo"
                style={{ height: '36px', width: 'auto', objectFit: 'contain' }}
              />
              <img
                src="/logo_text_trimmed.png"
                alt="Novarena Technologies"
                style={{ height: '20px', width: 'auto', objectFit: 'contain' }}
              />
            </a>
            <p>
              A multi-product technology company building next-generation digital platforms across sports-tech, AI, and SaaS.
            </p>
            <span className="footer-tagline">Registered in India · LLP</span>
            <div className="social-row">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="X / Twitter"
              >
                𝕏
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="LinkedIn"
              >
                in
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="GitHub"
              >
                gh
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title="Instagram"
              >
                ig
              </a>
            </div>
          </div>

          {/* Products Col */}
          <div className="footer-col">
            <h5>Products</h5>
            <ul>
              <li>
                <a
                  href="https://getarenova.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                >
                  Arenova{' '}
                  <span
                    style={{
                      fontSize: '10px',
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: 'rgba(0, 230, 118, 0.15)',
                      color: 'var(--green)',
                      fontWeight: 700,
                    }}
                  >
                    LIVE ↗
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'products');
                  }}
                >
                  Nova AI Suite
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'products');
                  }}
                >
                  NovaCloud SaaS
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'products');
                  }}
                  style={{ color: 'var(--blue-bright)', fontWeight: 500 }}
                >
                  Explore All Products →
                </a>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  Mobile Apps
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  SaaS Platforms
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  AI & Automation
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  UI/UX Design
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'services');
                  }}
                >
                  Cloud Architecture
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Legal Col */}
          <div className="footer-col">
            <h5>Company & Legal</h5>
            <ul>
              <li>
                <a
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'about');
                  }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#why"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'why');
                  }}
                >
                  Why Novarena
                </a>
              </li>
              <li>
                <a
                  href="#tech"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'tech');
                  }}
                >
                  Tech Stack
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/', 'contact');
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/terms-and-conditions"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/terms-and-conditions');
                  }}
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy-policy');
                  }}
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2026 Novarena Technologies LLP. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/privacy-policy');
              }}
            >
              Privacy Policy
            </a>
            <a
              href="/terms-and-conditions"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/terms-and-conditions');
              }}
            >
              Terms & Conditions
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/', 'contact');
              }}
            >
              Contact Support
            </a>
            <a
              href="#nav"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              style={{ color: 'var(--blue-bright)' }}
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
