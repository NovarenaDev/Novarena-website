import React, { useEffect } from 'react';

export default function PrivacyPolicy({ onNavigate }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Privacy Policy — Novarena Technologies LLP";
  }, []);

  const sections = [
    {
      id: "introduction",
      number: "1",
      title: "Introduction",
      content: (
        <>
          <p>
            <strong>Novarena Technologies LLP</strong> ("Company", "we", "us", or "our") operates digital technology platforms, software applications, websites, and associated technical services.
          </p>
          <p>
            This Privacy Policy explains how we collect, use, process, disclose, and safeguard personal information when users access our platforms, software, applications, or related digital services. All personal information will be handled strictly as described in this policy, subject to applicable Indian data privacy regulations and standards.
          </p>
        </>
      ),
    },
    {
      id: "information-we-collect",
      number: "2",
      title: "Information We Collect",
      content: (
        <>
          <p>
            Depending on the specific services and features you interact with, we may collect the following categories of information:
          </p>
          <ul className="legal-list">
            <li>
              <strong>(a) Personal and Account Information:</strong> Name, email address, authentication credentials, profile preferences, and account configuration details.
            </li>
            <li>
              <strong>(b) Participant, Player, and Community Data:</strong> Profile details, team associations, tournament and event registrations, age or date of birth (where required for category eligibility verification), and participation records.
            </li>
            <li>
              <strong>(c) Booking and Transaction Information:</strong> Venue, court, tournament, or digital service details, transaction reference numbers, payment and refund statuses, amount paid, and service convenience charges.
            </li>
            <li>
              <strong>(d) Technical and Device Diagnostics:</strong> Device type, operating system, browser version, IP address, referral URLs, access timestamps, and analytical crash logs collected automatically during platform interactions.
            </li>
          </ul>
          <p>
            We adhere to data minimization principles and collect only information reasonably necessary to provide and secure the requested services.
          </p>
        </>
      ),
    },
    {
      id: "how-we-use-information",
      number: "3",
      title: "How We Use Your Information",
      content: (
        <>
          <p>We utilize personal information for legitimate business purposes, including to:</p>
          <ul className="legal-list">
            <li>Create, verify, and maintain secure user accounts;</li>
            <li>Authenticate logins using email OTP or other secure verification mechanisms;</li>
            <li>Process tournament entries, service requests, and venue bookings;</li>
            <li>Verify payments and coordinate eligible refunds;</li>
            <li>Send transactional updates, booking receipts, and critical operational alerts;</li>
            <li>Provide client support, resolve technical issues, and address user grievances;</li>
            <li>Detect, prevent, and investigate fraud, security threats, or terms violations;</li>
            <li>Improve software performance, user interface design, and service offerings;</li>
            <li>Comply with statutory reporting, accounting, and legal requirements.</li>
          </ul>
          <p>
            Any promotional or marketing communications will only be transmitted in accordance with applicable laws and consent preferences.
          </p>
        </>
      ),
    },
    {
      id: "payments-providers",
      number: "4",
      title: "Payments & Payment Service Providers",
      content: (
        <>
          <p>
            Payments made through our platforms are handled through certified third-party payment service providers, including Razorpay and PCI-DSS compliant banking partners, where enabled.
          </p>
          <p>
            Payment processors independently collect and process data needed to complete and secure financial transactions under their own privacy frameworks and terms. Novarena receives transaction confirmation tokens, payment statuses, and transaction reference numbers required to validate bookings and process refunds.
          </p>
          <div className="legal-notice-box">
            <strong>Security Guarantee:</strong> Novarena Technologies LLP does not intentionally store or retain full credit/debit card numbers, card expiration dates, CVVs, net banking passwords, or UPI PINs on its systems.
          </div>
        </>
      ),
    },
    {
      id: "sharing-of-information",
      number: "5",
      title: "Sharing of Information",
      content: (
        <>
          <p>
            We may share relevant, strictly necessary personal information in the following limited circumstances:
          </p>
          <ul className="legal-list">
            <li>
              <strong>Service & Infrastructure Providers:</strong> Trusted cloud hosting partners, transactional email/SMS gateways, database infrastructure, and IT security vendors under strict confidentiality obligations;
            </li>
            <li>
              <strong>Organizers & Venue Partners:</strong> Tournament hosts, sports facilities, or event managers directly involved in delivering the specific booking or event you have enrolled in;
            </li>
            <li>
              <strong>Authorized Payment Processors:</strong> Gateways required to authenticate and settle transactions;
            </li>
            <li>
              <strong>Legal Authorities:</strong> Competent judicial, law enforcement, or regulatory bodies when mandated by law, court order, or official governmental request.
            </li>
          </ul>
          <p>
            <strong>We do not sell, rent, or trade personal data to third parties for commercial marketing purposes.</strong>
          </p>
        </>
      ),
    },
    {
      id: "children-privacy",
      number: "6",
      title: "Children's Privacy",
      content: (
        <>
          <p>
            Our platforms may support sports, tournament, and community activities that involve minors. When processing data concerning children (such as age verification for competitive age-category brackets), we adhere strictly to applicable legal requirements regarding parental or guardian consent.
          </p>
          <p>
            Parents or legal guardians may contact us at <a href="mailto:Novarenatech@gmail.com" className="legal-link">Novarenatech@gmail.com</a> to review, update, or request the deletion of information collected about their minor children, subject to legal record-retention requirements.
          </p>
        </>
      ),
    },
    {
      id: "data-security",
      number: "7",
      title: "Data Security",
      content: (
        <>
          <p>
            We deploy multi-layered physical, electronic, and procedural safeguards designed to protect personal information against unauthorized access, alteration, loss, or disclosure. These measures include encrypted communication protocols (TLS/SSL), role-based data access controls, and regular vulnerability audits.
          </p>
          <p>
            While we implement industry-standard safeguards, no transmission method over the internet or electronic storage infrastructure is 100% impenetrable. Any potential security incident will be managed promptly in accordance with applicable legal guidelines.
          </p>
        </>
      ),
    },
    {
      id: "data-retention",
      number: "8",
      title: "Data Retention",
      content: (
        <>
          <p>
            We retain personal information only for as long as reasonably required to fulfill the operational purposes described in this policy, deliver active services, maintain accounting and audit records, resolve disputes, and satisfy statutory requirements.
          </p>
          <p>
            When data is no longer necessary for these purposes, it is securely destroyed, erased, or anonymized so that it can no longer be associated with an identifiable individual.
          </p>
        </>
      ),
    },
    {
      id: "privacy-rights",
      number: "9",
      title: "Your Privacy Rights",
      content: (
        <>
          <p>
            Subject to applicable Indian laws and regulatory frameworks, you have rights concerning your personal information, which may include:
          </p>
          <ul className="legal-list">
            <li>Requesting access to the personal data we maintain about you;</li>
            <li>Requesting the rectification of inaccurate or outdated information;</li>
            <li>Requesting the erasure of your personal data where retention is no longer justified;</li>
            <li>Withdrawing consent for discretionary data processing activities;</li>
            <li>Lodging a privacy concern or grievance with our designated contact officer.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at <a href="mailto:Novarenatech@gmail.com" className="legal-link">Novarenatech@gmail.com</a>. Certain transactional or accounting records may need to be retained as legally mandated.
          </p>
        </>
      ),
    },
    {
      id: "cookies",
      number: "10",
      title: "Cookies & Similar Technologies",
      content: (
        <>
          <p>
            Our web properties may utilize session cookies and related standard web technologies to maintain authentication states, preserve user interface preferences, ensure platform security, and collect aggregated analytical usage data.
          </p>
          <p>
            You can manage or disable non-essential cookies through your browser settings, though doing so may limit access to certain dynamic platform features.
          </p>
        </>
      ),
    },
    {
      id: "third-party-services",
      number: "11",
      title: "Third-Party Services",
      content: (
        <>
          <p>
            Our platforms may contain links or integrations with third-party websites, APIs, or services. We do not control and are not responsible for the privacy practices, content, or policies of third parties. We encourage users to inspect third-party privacy notices prior to submitting information to external services.
          </p>
        </>
      ),
    },
    {
      id: "policy-changes",
      number: "12",
      title: "Changes to This Policy",
      content: (
        <>
          <p>
            We may periodically update this Privacy Policy to reflect advancements in technology, adjustments in our business operations, or changes in legal obligations.
          </p>
          <p>
            Any modifications will be published on this page with an updated effective date. We recommend checking this page periodically to remain informed about how we protect your personal information.
          </p>
        </>
      ),
    },
    {
      id: "contact-grievances",
      number: "13",
      title: "Contact & Privacy Grievances",
      content: (
        <>
          <p>
            If you have questions, feedback, or privacy-related inquiries regarding this policy or wish to exercise your data rights, please contact our privacy desk:
          </p>
          <div className="legal-contact-card">
            <h4>Novarena Technologies LLP</h4>
            <div className="legal-contact-item">
              <span className="icon">📧</span>
              <div>
                <strong>Support & Privacy Email:</strong>{' '}
                <a href="mailto:Novarenatech@gmail.com">Novarenatech@gmail.com</a>
              </div>
            </div>
            <div className="legal-contact-item">
              <span className="icon">📍</span>
              <div>
                <strong>Office / Jurisdiction:</strong> Hyderabad, Telangana, India
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
              <span className="label-dot"></span>Privacy & Security
            </div>
            <h1 className="h-lg grad-multi">Privacy Policy</h1>
            <p className="legal-hero-sub">
              Your privacy is important to us. Here is how Novarena Technologies LLP collects, uses, and safeguards your data.
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
