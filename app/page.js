"use client";

import { useState } from "react";

const services = [
  [
    "Scrap Metals",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Stainless Steel",
    "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Copper",
    "https://images.unsplash.com/photo-1565610222536-ef125c59da2e?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Brass",
    "https://images.unsplash.com/photo-1586864387789-628af9feed72?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Aluminium",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Cable & Wire",
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Machinery",
    "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=900&q=85",
  ],
  [
    "Aircon Units",
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=85",
  ],
];

const testimonials = [
  [
    "Sivakumar",
    "@SIVAKUMARPRANAV",
    "RTHT Recycling were outstanding on our latest building clearance. We have used loads of waste and recycling companies, but we have never come across a company so accommodating and with such a high level of service.",
    "https://i.pravatar.cc/160?img=12",
  ],
  [
    "Eduardo Saverin",
    "@eduardosaverin",
    "It is a pleasure to work with RTHT Recycling. They are prompt, courteous and always professional. Scheduling is very important to us and we have never been let down or disappointed.",
    "https://i.pravatar.cc/160?img=11",
  ],
  [
    "Jackie Chan",
    "@jackiechan",
    "It is nice to know I am going to get excellent service. RTHT Recycling are professional and conscientious about providing the best service for their customers.",
    "https://i.pravatar.cc/160?img=68",
  ],
  [
    "Jade Seah",
    "@jadeseah",
    "The good thing about working with RTHT Recycling is knowing our materials are recycled in a responsible manner. They have helped us eliminate a full process.",
    "https://i.pravatar.cc/160?img=47",
  ],
  [
    "JJ Lin",
    "@jjlin",
    "RTHT Recycling has helped us eliminate our landfill footprint and disposal costs. They are professional and conscientious about providing the best service.",
    "https://i.pravatar.cc/160?img=53",
  ],
  [
    "Royston Tan",
    "@roystontan",
    "I am very satisfied with all the services RTHT Recycling performs. They do what they say they will do and their representative is helpful and informative.",
    "https://i.pravatar.cc/160?img=14",
  ],
];

const navItems = [
  ["HOME", "banner"],
  ["FEATURES", "feature"],
  ["SERVICES", "services"],
  ["TESTIMONIALS", "testimonial"],
  ["CONTACT US", "footer"],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <section id="banner" className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">Singapore&apos;s trusted scrap partner</p>
          <h1>RTHT Recycling Pte Ltd</h1>
          <p className="hero-tagline">Turning trash into treasure.</p>
          <p className="hero-phone">
            90039575 <span>/</span> 83217212
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#footer">
              Find out more
            </a>
            <a className="button button-outline" href="#feature">
              Read our story
            </a>
          </div>
        </div>
        <div className="scroll-note">
          Scroll to explore <span>↓</span>
        </div>
      </section>

      <aside
        className={`side-nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="side-nav-brand">
          RTHT<span>.</span>
        </div>
        <nav>
          {navItems.map(([label, target]) => (
            <a key={target} href={`#${target}`} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </nav>
      </aside>
      <button
        className={`menu-button ${menuOpen ? "is-open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <section id="feature" className="section feature-section">
        <div className="section-heading">
          <p className="eyebrow">Why choose us</p>
          <h2>
            We make every
            <br />
            <em>scrap</em> count.
          </h2>
        </div>
        <div className="feature-grid">
          <div className="feature-copy">
            <p className="section-kicker">About RTHT Recycling</p>
            <p>
              RTHT Recycling Pte Ltd, incorporated in Singapore, is a premier
              provider of collection, trading, and recycling services for all
              grades of ferrous and non-ferrous metals, industrial scraps, and
              electronic waste.
            </p>
            <p>
              As one of Singapore&apos;s leading metal waste collectors and
              scrap metal buyers, we offer competitive prices and dependable
              service to homes, schools, commercial buildings, factories,
              warehouses, construction sites, shipyards, and more.
            </p>
            <a className="text-link" href="#footer">
              Talk to our team <span>→</span>
            </a>
          </div>
          <div className="feature-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=1400&q=85"
              alt="Sorted recyclable materials ready for processing"
            />
            <span className="image-label">01 / Responsible recovery</span>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="section-heading services-heading">
          <p className="eyebrow">What we handle</p>
          <h2>
            We buy all
            <br />
            <em>scraps.</em>
          </h2>
          <p>
            From everyday metals to industrial equipment, we help valuable
            materials find their next useful life.
          </p>
        </div>
        <div className="service-grid">
          {services.map(([name, image], index) => (
            <article className="service-card" key={name}>
              <img src={image} alt={name} />
              <div className="service-overlay" />
              <div className="service-meta">
                <span>0{index + 1}</span>
                <h3>{name}</h3>
                <span className="service-arrow">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="testimonial" className="section testimonial-section">
        <div className="section-heading testimonial-heading">
          <p className="eyebrow">In good company</p>
          <h2>
            What our
            <br />
            <em>customers</em> say.
          </h2>
        </div>
        <div className="testimonial-grid">
          {testimonials.map(([name, handle, quote, image]) => (
            <article className="testimonial-card" key={name}>
              <div className="user">
                <img src={image} alt="" />
                <div>
                  <h3>{name}</h3>
                  <small>{handle}</small>
                </div>
              </div>
              <p>&ldquo;{quote}&rdquo;</p>
            </article>
          ))}
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="footer-top">
          <p className="eyebrow">Come by or call</p>
          <h2>
            Let&apos;s make
            <br />
            <em>less</em> waste.
          </h2>
        </div>
        <div className="footer-grid">
          <div className="map-frame">
            <iframe
              title="RTHT Recycling location"
              src="https://www.google.com/maps?q=The%20Index%20Tuas%20South%20Avenue%203%20Singapore&output=embed"
              loading="lazy"
            />
          </div>
          <div className="contact-copy">
            <p className="section-kicker">Get in touch</p>
            <address>
              <b>K. Ramkumar</b>  <br/>
                 Director  
              <br />
              11, Tuas South Link 1, #01-45,<br />
              Singapore 636901
            </address>
            <a href="mailto:rthtrecycling@gmail.com">rthtrecycling@gmail.com</a>
            <a href="tel:+6590039575">
              90039575 <span>/</span> 83217212
            </a>
            <p className="hours">Open daily · 8:30 AM to 9:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RTHT Recycling Pte Ltd</p>
          <div className="social-links">
            <a href="https://wa.me/6590039575" target="_blank" rel="noreferrer">
              WhatsApp ↗
            </a>
            <a href="mailto:rthtrecycling@gmail.com">Email ↗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
