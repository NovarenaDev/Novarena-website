import React, { useEffect } from 'react';

export default function TermsConditions({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Terms & Conditions — Novarena Technologies LLP";
  }, []);

  const sections = [
    {
      id: "introduction",
      number: "1",
      title: "Introduction",
      content: (
        <>
          <p>
            These Terms & Conditions govern access to and use of the website, applications, platforms, software, and related digital services operated by <strong>Novarena Technologies LLP</strong> ("Company", "we", "us", or "our").
          </p>
          <p>
            By accessing our platform, creating an account, registering for an event, making a booking, contracting digital services, or completing a payment, you agree to these terms. If you do not agree to these terms, please discontinue using the relevant services immediately.
          </p>
        </>
      ),
    },
    {
      id: "services-offered",
      number: "2",
      title: "Services Offered",
      content: (
        <>
          <p>
            Novarena Technologies LLP provides technology products and digital services, including but not limited to:
          </p>
          <ul className="legal-list">
            <li>Custom software, web, and mobile application engineering and deployment;</li>
            <li>Digital platform, SaaS infrastructure, and cloud solutions;</li>
            <li>Tournament, event discovery, registration, scoring, and management systems;</li>
            <li>Participant, player, and team registration and lifecycle management tools;</li>
            <li>Venue, court, and facility discovery and reservation systems;</li>
            <li>Community management, academy management, and related sports-technology solutions.</li>
          </ul>
          <p>
            The specific services available, applicable charges, service level terms, and booking conditions will be explicitly displayed on the relevant service or booking page.
          </p>
        </>
      ),
    },
    {
      id: "user-accounts",
      number: "3",
      title: "User Accounts",
      content: (
        <>
          <p>
            Users must provide accurate, current, and complete information when registering or utilizing the platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities conducted through your account.
          </p>
          <p>
            Please notify us immediately at <a href="mailto:Novarenatech@gmail.com" className="legal-link">Novarenatech@gmail.com</a> if you suspect any unauthorized access or security breach. Parents or legal guardians must supervise account use and provide any required permissions when registering or managing accounts for minors.
          </p>
          <p>
            We reserve the right to restrict, suspend, or terminate accounts involved in fraudulent activities, misuse, false registrations, or material violations of these terms, subject to applicable law.
          </p>
        </>
      ),
    },
    {
      id: "event-registrations",
      number: "4",
      title: "Tournament & Event Registrations",
      content: (
        <>
          <p>
            Tournament and event details, eligibility criteria, categories, entry fees, venue, schedule, and applicable rules will be displayed prior to registration. Users must provide accurate participant and team information and satisfy all stated eligibility criteria.
          </p>
          <p>
            Registration is subject to payment confirmation and event-specific guidelines. A registration confirmation does not guarantee participation if eligibility requirements are not satisfied or if an organizer validly cancels or reschedules the event.
          </p>
          <p>
            Schedules, match timings, and formats may change due to operational requirements, safety considerations, weather disruptions, or unforeseen circumstances. Material changes and cancellations will be communicated where reasonably feasible.
          </p>
        </>
      ),
    },
    {
      id: "venue-bookings",
      number: "5",
      title: "Venue & Court Bookings",
      content: (
        <>
          <p>
            Venue and facility bookings are subject to availability and the specific operational rules of the respective partner venue. Users must verify the venue location, date, time slot, duration, price, and cancellation conditions before finalizing a booking.
          </p>
          <p>
            Users are required to adhere to all venue rules, safety guidelines, and treat facilities responsibly. Additional charges, cleaning penalties, or damages resulting from misuse may be the user's sole responsibility where permitted by law and supported by applicable booking agreements.
          </p>
        </>
      ),
    },
    {
      id: "pricing-payments",
      number: "6",
      title: "Pricing & Payments",
      content: (
        <>
          <p>
            All applicable prices, taxes, and service fees will be displayed transparently before payment is initiated. Unless expressly stated otherwise, all prices are in Indian Rupees (INR).
          </p>
          <p>
            Payments may be processed through authorized third-party payment gateways, including Razorpay and certified banking channels, where enabled. A transaction is considered successful only after it has been verified through both the payment processor and our internal systems.
          </p>
          <div className="legal-notice-box">
            <strong>Payment Security Note:</strong> Novarena Technologies LLP does not intentionally store full payment card numbers, card verification values (CVV), UPI PINs, or sensitive banking credentials on its servers. All payments are processed through secure, PCI-DSS compliant providers.
          </div>
          <p>
            Users must not attempt fraudulent transactions, chargeback manipulation, or misuse payment gateways.
          </p>
        </>
      ),
    },
    {
      id: "cancellations-refunds",
      number: "7",
      title: "Cancellations & Refunds",
      content: (
        <>
          <p>
            Tournament registration cancellations, venue booking cancellations, organizer cancellations, and refund eligibility are governed by the specific cancellation terms disclosed prior to payment and our applicable Refund Policy.
          </p>
          <p>
            Please carefully review the cancellation policy of the specific event, venue, or service before completing your transaction. Where refunds are eligible, they will be processed back to the original source payment method within standard banking timelines.
          </p>
        </>
      ),
    },
    {
      id: "third-party",
      number: "8",
      title: "Third-Party Organisers & Venues",
      content: (
        <>
          <p>
            Certain tournaments, coaching activities, or venue services may be delivered by independent third-party organizers, coaches, academies, or facility partners. Where applicable, their event rules, availability, facilities, and service conditions apply in addition to these terms.
          </p>
          <p>
            Novarena will clearly communicate its role in the relevant transaction and provide appropriate technical support for platform-related issues. Nothing in these terms excludes statutory consumer rights or remedies under applicable law.
          </p>
        </>
      ),
    },
    {
      id: "acceptable-use",
      number: "9",
      title: "Acceptable Use",
      content: (
        <>
          <p>Users agree not to:</p>
          <ul className="legal-list">
            <li>Provide false, misleading, or deceptive information;</li>
            <li>Initiate fraudulent registrations, bookings, or payment chargebacks;</li>
            <li>Interfere with or compromise the security, integrity, or availability of our infrastructure;</li>
            <li>Misuse another individual's account, credentials, or personal information without authorization;</li>
            <li>Upload or transmit unlawful, defamatory, infringing, or harmful software or content;</li>
            <li>Scrape, duplicate, reverse engineer, or exploit platform data without prior written consent.</li>
          </ul>
          <p>
            We may take immediate legal and administrative action against violations, including account termination and referral to law enforcement where appropriate.
          </p>
        </>
      ),
    },
    {
      id: "intellectual-property",
      number: "10",
      title: "Intellectual Property",
      content: (
        <>
          <p>
            The Novarena name, trademarks, logos, visual identity, website design, graphics, custom software code, algorithms, and original platform content are owned by or licensed to Novarena Technologies LLP, unless otherwise indicated.
          </p>
          <p>
            Users may not copy, distribute, modify, create derivative works from, or commercially exploit any protected material without prior written authorization from Novarena Technologies LLP.
          </p>
        </>
      ),
    },
    {
      id: "privacy",
      number: "11",
      title: "Privacy",
      content: (
        <>
          <p>
            Personal data and information are collected, handled, and protected in strict accordance with our{' '}
            <button
              onClick={() => onNavigate('/privacy-policy')}
              className="legal-btn-link"
            >
              Privacy Policy
            </button>
            , which details what information we gather, how we utilize it, and with whom it may be shared.
          </p>
        </>
      ),
    },
    {
      id: "service-availability",
      number: "12",
      title: "Service Availability",
      content: (
        <>
          <p>
            We strive to maintain reliable, continuous access to our platforms, but we cannot guarantee uninterrupted or error-free operation. We may schedule routine maintenance, deploy updates, or temporarily restrict features for operational, security, or legal considerations.
          </p>
        </>
      ),
    },
    {
      id: "limitation-of-liability",
      number: "13",
      title: "Limitation of Liability",
      content: (
        <>
          <p>
            To the maximum extent permitted by applicable law, Novarena Technologies LLP and its designated partners, directors, and employees will not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with the use of our services or platforms.
          </p>
          <p>
            Nothing in these terms limits or excludes liability that cannot lawfully be excluded under Indian consumer protection and contract laws.
          </p>
        </>
      ),
    },
    {
      id: "changes-to-terms",
      number: "14",
      title: "Changes to These Terms",
      content: (
        <>
          <p>
            We may revise these Terms & Conditions from time to time to reflect operational modifications, product enhancements, or regulatory developments.
          </p>
          <p>
            Updated terms will be posted on this page with a revised effective date. Continued use of our platforms following the posting of updates constitutes your acceptance of the revised terms.
          </p>
        </>
      ),
    },
    {
      id: "governing-law",
      number: "15",
      title: "Governing Law & Dispute Resolution",
      content: (
        <>
          <p>
            These terms and any disputes arising out of or related to our platforms are governed by and construed in accordance with the laws of <strong>India</strong>.
          </p>
          <p>
            Any disputes, claims, or controversies shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Hyderabad, Telangana, India</strong>.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      number: "16",
      title: "Contact Information",
      content: (
        <>
          <p>
            For questions, legal notices, or feedback regarding these Terms & Conditions, please contact:
          </p>
          <div className="legal-contact-card">
            <h4>Novarena Technologies LLP</h4>
            <div className="legal-contact-item">
              <span className="icon">📧</span>
              <div>
                <strong>Official Email:</strong>{' '}
                <a href="mailto:Novarenatech@gmail.com">Novarenatech@gmail.com</a>
              </div>
            </div>
            <div className="legal-contact-item">
              <span className="icon">📍</span>
              <div>
                <strong>Registered Office / Location:</strong> Hyderabad, Telangana, India
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="legal-page">
      {/* ── HEADER / HERO ── */}
      <div className="legal-hero">
        <div className="container">
          <div className="legal-hero-inner">
            <button
              onClick={() => onNavigate('/')}
              className="btn btn-ghost legal-back-btn"
            >
              ← Back to Home
            </button>
            <div className="label">
              <span className="label-dot"></span>Legal Documentation
            </div>
            <h1 className="h-lg grad-multi">Terms & Conditions</h1>
            <p className="legal-hero-sub">
              Please read these terms carefully before using Novarena's platforms and services.
            </p>
            <div className="legal-meta-badge">
              <span>📅 Effective Date: <strong>11 October 2026</strong></span>
              <span className="dot">•</span>
              <span>Novarena Technologies LLP</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grad-line"></div>

      {/* ── MAIN CONTENT ── */}
      <div className="container legal-body-container">
        <div className="legal-layout">
          {/* Quick Navigation Sidebar */}
          <aside className="legal-sidebar">
            <div className="legal-toc">
              <h5>Table of Contents</h5>
              <ul>
                {sections.map((s) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(s.id);
                      if (el) {
                        const offset = 90;
                        const bodyRect = document.body.getBoundingClientRect().top;
                        const elementRect = el.getBoundingClientRect().top;
                        const offsetPosition = elementRect - bodyRect - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}>
                      <span>{s.number}.</span> {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Sections List */}
          <main className="legal-content-card">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="legal-section-block">
                <div className="legal-section-header">
                  <span className="legal-sec-num">{s.number}</span>
                  <h3>{s.title}</h3>
                </div>
                <div className="legal-section-body">
                  {s.content}
                </div>
              </section>
            ))}

            <div className="legal-bottom-action">
              <button
                onClick={() => onNavigate('/')}
                className="btn btn-primary"
              >
                Return to Home Page →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
