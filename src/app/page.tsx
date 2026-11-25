"use client";

import React, { useState } from "react";
import Image from "next/image";
import KineticGrid from "@/components/ui/kinetic-grid";

interface Project {
  title: string;
  url: string;
  image: string;
  meta: string;
  description: string;
  tags: string[];
}

const PROJECTS: Project[] = [
  {
    title: "Thorfin",
    url: "https://thorfin.space",
    image: "/projects/thorfin_space.png",
    meta: "Finance Automation, 2026",
    description:
      "Financial automation platform for deterministic transaction reconciliation, payment proof normalization, exception clustering, and audit-ready evidence reporting.",
    tags: ["Reconciliation", "Payment Normalization", "Exception Clustering", "Audit Exports"],
  },
  {
    title: "Kiyo Stores",
    url: "https://ecommerce-hub-mu.vercel.app/",
    image: "/projects/ecommerce_hub.png",
    meta: "Marketplace & Catalog, 2025",
    description:
      "Multi-tenant commerce ecosystem with unified inventory orchestration, cart session clustering, and order management.",
    tags: ["Multi-Vendor", "Inventory Sync", "Checkout", "Order Management"],
  },
    {
    title: "Boardscape",
    url: "https://boardscape-chi.vercel.app/",
    image: "/projects/boardscape.png",
    meta: "Outdoor Media & AdTech, 2025",
    description:
      "Independent advertising company combining creative strategy, media buying, outdoor execution, and the proprietary intelligence platform boardscape Atlas.",
    tags: ["Creative Strategy", "Media Buying", "Outdoor Execution", "boardscape Atlas"],
  },
  {
    title: "Rydway",
    url: "https://rydway-web.rydway-space.workers.dev/",
    image: "/projects/rydway_web.png",
    meta: "Logistics & Mobility, 2024",
    description:
      "Distributed dispatch and fleet mobility web platform powered by edge workers, real-time telematics, and automated ledger billing.",
    tags: ["Fleet Dispatch", "Live Telematics", "Route Tracking", "Automated Billing"],
  },

];

const SEED_PROJECTS = [
  {
    name: "Kashy",
    meta: "AI Fintech, 2025",
    description:
      "AI-native financial technology platform built for intelligent payment automation, financial workflows, and consumer financial intelligence.",
    tags: ["AI Fintech", "Payment Automation", "Financial Workflows", "Ledger Intelligence"],
  },
  {
    name: "SocialHouse",
    meta: "Consumer Technology • Affiliate, 2025",
    description:
      "An affiliate of user-focused social media applications designed around authentic human connectivity, intentional interaction, and everyday digital communities.",
    tags: ["Social Apps", "User-Focused", "Community", "Affiliate"],
  },
  {
    name: "Aparte",
    meta: "Real Estate Discovery, 2023",
    description:
      "Property discovery engine and rental management platform with geolocation mapping, verified tenant screening, inspection booking, and digital lease workflows.",
    tags: ["Property Discovery", "Tenant Screening", "Geolocation", "Digital Leases"],
  },
];

const TEAM = [
  {
    initials: "AT",
    name: "Agbo Terry",
    role: "Co-Founder",
    image: "/team/terry.jpg",
    imagePosition: "center 32%",
    imageScale: 1.26,
    imageOrigin: "center 30%",
    imageFilter: "brightness(1.04)",
    linkedin: "https://www.linkedin.com/in/anjiraterry/",
  },
  {
    initials: "FI",
    name: "Folarinimi Isreal",
    role: "Co-Founder",
    image: "/team/isreal.jpg",
    imagePosition: "center 82%",
    imageScale: 1.08,
    imageOrigin: "center 85%",
    imageFilter: "brightness(0.97)",
    linkedin: "https://www.linkedin.com/in/israelfolaranmia1/",
  },
];

export default function HomePage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "Venture Partnership",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  return (
    <KineticGrid globalColor="default">
      <div className="outer-frame">
        <div className="site-wrapper">
          {/* Navigation Bar */}
          <nav className="nav-bar">
            <a href="#" className="nav-brand">
              <span>
                hubbleflow<span className="nav-brand-muted">labs</span>
              </span>
            </a>

            <ul className="nav-links">
              <li className="nav-link-item">
                <a href="#about" className="nav-link">
                  {"// about"}
                </a>
              </li>
              <li className="nav-link-item">
                <a href="#projects" className="nav-link">
                  {"// ventures"}
                </a>
              </li>
              <li className="nav-link-item">
                <a href="#team" className="nav-link">
                  {"// team"}
                </a>
              </li>
              <li className="nav-link-item">
                <a href="#contact" className="nav-link">
                  {"// contact"}
                </a>
              </li>
            </ul>

            <a href="#contact" className="btn-primary">
              Connect
            </a>
          </nav>

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-header-block">
              <h1>Envision the future.</h1>
              <p className="hero-subhead">
                HubbleFlow Labs is a multidisciplinary technology company,
                research laboratory, and venture studio; exploring emerging
                technologies, engineering intelligent systems, and building
                independent ventures that address meaningful human challenges.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="btn-primary">
                  <span>Connect with us</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ marginLeft: "6px" }}
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#projects" className="btn-outline">
                  Explore ventures
                </a>
              </div>
            </div>
          </section>

          {/* Section: About */}
          <section id="about" className="content-section">
            <div className="section-label-col">{"// about"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Operating at the intersection of software engineering,
                artificial intelligence, scientific research, and
                entrepreneurship : building, incubating, and scaling independent
                technology ventures.
              </div>

              <div className="about-cells-grid">
                <div className="about-cell">
                  <div className="about-cell-title">Artificial Intelligence &amp; R&amp;D</div>
                  <p>
                    Intelligent agents, autonomous systems, machine learning,
                    and applied scientific research into emerging computing
                    paradigms.
                  </p>
                </div>
                <div className="about-cell">
                  <div className="about-cell-title">Software &amp; Financial Technology</div>
                  <p>
                    Enterprise software, distributed systems, payment
                    intelligence, automation, and consumer financial products.
                  </p>
                </div>
                <div className="about-cell">
                  <div className="about-cell-title">Consumer &amp; Venture Studio</div>
                  <p>
                    Internally developing, incubating, launching, and scaling
                    independent technology businesses that improve everyday
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Ventures & Projects */}
          <section id="projects" className="content-section">
            <div className="section-label-col">{"// ventures"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Independent products, platforms, and affiliates engineered
                across the HubbleFlow Labs ecosystem.
              </div>

              {/* Projects Grid with Live Screenshots */}
              <div className="projects-grid">
                {PROJECTS.map((proj) => (
                  <a
                    key={proj.title}
                    href={proj.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card"
                  >
                    <div className="project-thumb-container">
                      <Image
                        src={proj.image}
                        alt={`${proj.title} hero section`}
                        width={600}
                        height={338}
                        className="project-thumb"
                        unoptimized
                      />
                    </div>
                    <div className="project-card-body">
                      <div className="project-card-header">
                        <span className="project-name">{proj.title}</span>
                        <span className="project-meta">{proj.meta}</span>
                      </div>
                      <p className="project-desc">{proj.description}</p>
                      <div className="project-tags">
                        {proj.tags.map((t) => (
                          <span key={t} className="tag-badge">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Technical System Rows */}
              <div className="project-rows-table">
                {SEED_PROJECTS.map((p) => (
                  <div key={p.name} className="project-row">
                    <div style={{ maxWidth: "480px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "baseline",
                          gap: "10px",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "16px",
                            fontWeight: 500,
                            color: "var(--color-fg)",
                          }}
                        >
                          {p.name}
                        </span>
                        <span
                          className="mono"
                          style={{
                            fontSize: "11px",
                            color: "var(--color-muted)",
                          }}
                        >
                          {p.meta}
                        </span>
                      </div>
                      <p
                        style={{
                          fontSize: "13.5px",
                          color: "var(--color-muted)",
                          margin: 0,
                        }}
                      >
                        {p.description}
                      </p>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "6px",
                        marginTop: "8px",
                      }}
                    >
                      {p.tags.map((t) => (
                        <span key={t} className="tag-badge">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Team */}
          <section id="team" className="content-section">
            <div className="section-label-col">{"// team"}</div>
            <div className="section-content-col">
              <div className="section-statement">
                Founded by builders committed to long-term engineering,
                research, and venture creation.
              </div>

              <div className="team-grid">
                {TEAM.map((member) => (
                  <div key={member.name} className="team-card">
                    <div className="team-initials-tile">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={400}
                        height={500}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: member.imagePosition,
                          transform: `scale(${member.imageScale})`,
                          transformOrigin: member.imageOrigin,
                          filter: member.imageFilter,
                        }}
                        unoptimized
                      />
                    </div>
                    <div className="team-info">
                      <span className="team-name">{member.name}</span>
                      <span className="team-role">{member.role}</span>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-link"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <span>LinkedIn</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section: Contact */}
          <section id="contact" className="content-section">
            <div className="section-label-col">{"// contact"}</div>
            <div className="section-content-col">
              <div className="contact-layout">
                <div>
                  <h2
                    style={{
                      fontSize: "28px",
                      fontWeight: 500,
                      color: "var(--color-fg)",
                      marginBottom: "12px",
                    }}
                  >
                    Connect with HubbleFlow Labs.
                  </h2>
                  <p>
                    Reach out regarding venture partnerships, research
                    collaborations, or joining our engineering and product teams.
                  </p>

                  <div className="contact-meta-list">
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// base"}</span>
                      <span className="contact-meta-val">
                        Abuja &amp; Lagos, Nigeria
                      </span>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// timezone"}</span>
                      <span className="contact-meta-val">
                        West Africa Time (WAT • UTC+1)
                      </span>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// email"}</span>
                      <a
                        href="mailto:hello@hubbleflowlabs.com"
                        className="contact-meta-val"
                        style={{ color: "var(--color-accent)" }}
                      >
                        hello@hubbleflowlabs.com
                      </a>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">{"// phone"}</span>
                      <a
                        href="tel:+2349020722091"
                        className="contact-meta-val"
                        style={{ color: "var(--color-accent)" }}
                      >
                        +234 902 072 2091
                      </a>
                    </div>
                    <div className="contact-meta-item">
                      <span className="contact-meta-label">
                        {"// reply time"}
                      </span>
                      <span className="contact-meta-val">Within 24 hours</span>
                    </div>
                  </div>
                </div>

                <div>
                  {formSubmitted ? (
                    <div
                      className="contact-form"
                      style={{ textAlign: "center", padding: "40px 24px" }}
                    >
                      <div
                        style={{
                          color: "#7b9cf0",
                          fontSize: "20px",
                          fontWeight: 500,
                          marginBottom: "8px",
                        }}
                      >
                        Message received.
                      </div>
                      <p style={{ margin: "0 auto", fontSize: "14px" }}>
                        Thank you for reaching out to HubbleFlow Labs. We will
                        review your message and reply within 24 hours.
                      </p>
                      <button
                        className="btn-outline"
                        style={{ marginTop: "20px", alignSelf: "center" }}
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormState({
                            name: "",
                            email: "",
                            projectType: "Venture Partnership",
                            message: "",
                          });
                        }}
                      >
                        Send another message
                      </button>
                    </div>
                  ) : (
                    <form className="contact-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label className="form-label" htmlFor="name">
                          {"// your name"}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          className="form-input"
                          placeholder="Your full name"
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="email">
                          {"// work email"}
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          className="form-input"
                          placeholder="name@company.com"
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="projectType">
                          {"// inquiry focus"}
                        </label>
                        <select
                          id="projectType"
                          className="form-select"
                          value={formState.projectType}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              projectType: e.target.value,
                            })
                          }
                        >
                          <option value="Venture Partnership">
                            Venture Partnership
                          </option>
                          <option value="Research Collaboration">
                            Research Collaboration
                          </option>
                          <option value="Careers">Careers</option>
                          <option value="Something else">Something else</option>
                        </select>
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="message">
                          {"// message"}
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          className="form-textarea"
                          placeholder="Share context on your inquiry, research interest, or venture..."
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              message: e.target.value,
                            })
                          }
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary"
                        disabled={isSubmitting}
                        style={{ marginTop: "8px" }}
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="site-footer">
            <div>
              <span>
                © 2026 HubbleFlow Labs. Abuja &amp; Lagos, Nigeria. All rights
                reserved.
              </span>
            </div>
            <div>
              <span className="mono">{"// envision the future"}</span>
            </div>
          </footer>
        </div>
      </div>
    </KineticGrid>
  );
}
