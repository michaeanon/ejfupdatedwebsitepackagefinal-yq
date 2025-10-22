"use client"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/economic_justice_forum?igsh=MWVqdWxjMTV6MzJzdw==",
      icon: "📱",
    },
    {
      name: "Twitter/X",
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
    <main className="container">
      <section className="card">
        <h1>Contact Us</h1>
        <p>
          Have questions about EJF? Want to collaborate, volunteer, or learn more about our work? Get in touch with us
          using the form below or through our social media channels.
        </p>
      </section>

      <section className="card">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginTop: "30px" }}>
          {/* Contact Form */}
          <div>
            <h2>Send us a Message</h2>
            {submitted ? (
              <div
                style={{
                  background: "var(--gold)",
                  color: "var(--navy)",
                  padding: "20px",
                  borderRadius: "8px",
                  textAlign: "center",
                  fontWeight: "600",
                }}
              >
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div className="form-group">
                  <label>Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact Information & Social Media */}
          <div>
            <h2>Get in Touch</h2>

            <div className="focus-item" style={{ marginBottom: "25px" }}>
              <h3>Office Location</h3>
              <p>
                <strong>Economic Justice Forum (EJF)</strong>
                <br />
                Mwatate, Taita Taveta County
                <br />
                Kenya
              </p>
            </div>

            <div className="focus-item" style={{ marginBottom: "25px" }}>
              <h3>Contact Information</h3>
              <p>
                <strong>Email:</strong>
                <br />
                <a href="mailto:info@ejforum.org" style={{ color: "var(--navy)", textDecoration: "none" }}>
                  info@ejforum.org
                </a>
              </p>
              <p style={{ marginTop: "10px" }}>
                <strong>Phone:</strong>
                <br />
                <a href="tel:+254700000000" style={{ color: "var(--navy)", textDecoration: "none" }}>
                  +254 700 000 000
                </a>
              </p>
            </div>

            <div className="focus-item">
              <h3>Follow Us on Social Media</h3>
              <p style={{ marginBottom: "15px" }}>
                Connect with us on social media to stay updated on our latest news, events, and advocacy work.
              </p>
              <div className="social-links" style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 16px",
                      background: "var(--gold)",
                      color: "var(--navy)",
                      textDecoration: "none",
                      borderRadius: "8px",
                      fontWeight: "600",
                      transition: "all 0.3s",
                      border: "2px solid var(--gold)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--navy)"
                      e.currentTarget.style.color = "white"
                      e.currentTarget.style.borderColor = "var(--navy)"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--gold)"
                      e.currentTarget.style.color = "var(--navy)"
                      e.currentTarget.style.borderColor = "var(--gold)"
                    }}
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Response Time</h2>
        <p>
          We aim to respond to all inquiries within 2-3 business days. For urgent matters, please call us directly or
          reach out through our social media channels.
        </p>
      </section>

      <section className="card">
        <h2>Other Ways to Connect</h2>
        <div className="impact-highlights">
          <div className="impact-item">
            <div className="impact-icon">📧</div>
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for updates on our work and events</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🤝</div>
            <h3>Partnerships</h3>
            <p>Interested in collaborating? Visit our donate page to learn more</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🎯</div>
            <h3>Events</h3>
            <p>Join us at our upcoming events and community engagements</p>
          </div>
        </div>
      </section>
    </main>
  )
}
