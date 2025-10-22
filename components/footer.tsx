"use client"

import Link from "next/link"

function LogoIcon() {
  return (
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gold/tan rounded square background */}
      <rect width="60" height="60" rx="14" fill="#D4A574" />

      <g transform="translate(30, 30)">
        {/* Balance beam - horizontal line */}
        <line x1="-15" y1="-3" x2="15" y2="-3" stroke="#1B3A6B" strokeWidth="2.8" strokeLinecap="round" />

        {/* Center pivot - triangle */}
        <polygon points="0,3 -4,-3 4,-3" fill="#1B3A6B" />

        {/* Left pan - rectangle */}
        <rect x="-15" y="3" width="7" height="6" rx="1" fill="none" stroke="#1B3A6B" strokeWidth="2.2" />

        {/* Left suspension lines */}
        <line x1="-12" y1="3" x2="-12" y2="-9" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="-15" y1="3" x2="-15" y2="-9" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" />

        {/* Right pan - rectangle */}
        <rect x="8" y="3" width="7" height="6" rx="1" fill="none" stroke="#1B3A6B" strokeWidth="2.2" />

        {/* Right suspension lines */}
        <line x1="11" y1="3" x2="11" y2="-9" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="15" y1="3" x2="15" y2="-9" stroke="#1B3A6B" strokeWidth="1.8" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/economic_justice_forum?igsh=MWVqdWxjMTV6MzJzdw==",
      icon: "📷",
    },
    {
      name: "Twitter",
      url: "https://x.com/Economicjusti?t=PVNhVs2z15kpttGiwFiYtw&s=09",
      icon: "𝕏",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61566791888472",
      icon: "f",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@economicjusticefo?_t=ZS-90jX54XXKQT&_r=1",
      icon: "♪",
    },
  ]

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-about">
          <div className="footer-logo-section">
            <div className="footer-logo-container">
              <LogoIcon />
            </div>
            <div className="footer-text">
              <h3 className="footer-title">Economic Justice Forum</h3>
              <p className="footer-tagline">People's Platform for Economic, Climate, Social & Digital Justice</p>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <h4>Explore</h4>
          <Link href="/about">About</Link>
          <Link href="/pillars">Pillars</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/research">Research</Link>
        </div>

        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                title={link.name}
                className="social-icon"
                aria-label={`Follow us on ${link.name}`}
              >
                <span className="icon-symbol">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer-contact">
          <h4>Subscribe</h4>
          <form id="newsletter" action="#" method="post">
            <input type="email" placeholder="Email address" required />
            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer-legal">
        <p>&copy; Economic Justice Forum (EJF) — Building a Future of Justice, Equity, and Prosperity</p>
      </div>
    </footer>
  )
}
