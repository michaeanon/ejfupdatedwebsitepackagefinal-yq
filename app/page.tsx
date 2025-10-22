"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [registrationOpen, setRegistrationOpen] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    county: "",
    interest: "",
    contribution: "",
    message: "",
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    const registrations = JSON.parse(localStorage.getItem("ejfRegistrations") || "[]")
    registrations.push({ ...formData, timestamp: new Date().toISOString() })
    localStorage.setItem("ejfRegistrations", JSON.stringify(registrations))
    alert(`Thank you ${formData.fullName}! Your registration has been received.`)
    setFormData({ fullName: "", email: "", phone: "", county: "", interest: "", contribution: "", message: "" })
    setRegistrationOpen(false)
  }

  return (
    <main className="container">
      <section className="hero" aria-label="Hero">
        <Image src="/hero.jpeg" alt="Community banner" fill style={{ objectFit: "cover" }} priority />
        <div className="overlay">
          <div className="hero-inner container">
            <h1>Equity. Justice. Prosperity.</h1>
            <p className="lead">People's Platform for Economic, Climate, Social & Digital Justice</p>
            <div className="cta-row">
              <Link href="/about" className="btn btn-primary">
                Learn More
              </Link>
              <Link href="/donate" className="btn btn-secondary">
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>About Us</h2>
        <p>
          The Economic Justice Forum (EJF) is the people's platform for Economic, Climate, Social, and Digital Justice.
          We champion equitable development, participatory governance, and sustainable prosperity for all.
        </p>
        <p>
          EJF bridges grassroots realities and international advocacy, empowering citizens to claim their economic,
          environmental, and digital rights.
        </p>
        <Link href="/about" className="btn btn-primary">
          Read Our Full Story
        </Link>
      </section>

      <section className="card">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-item">Equity & Social Justice</div>
          <div className="value-item">Transparency & Integrity</div>
          <div className="value-item">Inclusion</div>
          <div className="value-item">Sustainability</div>
          <div className="value-item">Collaboration</div>
          <div className="value-item">Digital Fairness</div>
        </div>
      </section>

      <section className="card three-col">
        <h2>Featured Projects</h2>
        <div className="cols">
          <div className="col project-card">
            <div className="project-image-container">
              <Image src="/our-trees.jpg" alt="Our Trees, Our Future project" fill style={{ objectFit: "cover" }} />
              <div className="project-overlay">
                <div className="overlay-content">
                  <h3>Our Trees, Our Future</h3>
                  <p>
                    Growing Leaders, Growing Trees — linking environmental conservation, youth leadership and civic
                    empowerment.
                  </p>
                  <Link href="/programs#trees" className="btn btn-gold">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col project-card">
            <div className="project-image-container">
              <Image src="/climate-justice.jpg" alt="Civic Engagement project" fill style={{ objectFit: "cover" }} />
              <div className="project-overlay">
                <div className="overlay-content">
                  <h3>Civic Engagement on Economic & Climate Justice</h3>
                  <p>
                    Empowering citizens to influence policy, monitor public spending, and demand accountability in
                    natural resource management.
                  </p>
                  <Link href="/programs#civic" className="btn btn-gold">
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col project-card">
            <div className="project-image-container">
              <Image
                src="/research-policy.png"
                alt="Research & Policy Advocacy project"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="project-overlay">
                <div className="overlay-content">
                  <h3>Research & Policy Advocacy</h3>
                  <p>
                    Developing evidence-based policy recommendations for equitable resource distribution and
                    benefit-sharing frameworks.
                  </p>
                  <Link href="/research" className="btn btn-gold">
                    Explore Research
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Our Impact</h2>
        <div className="stats-grid">
          <div>
            <div className="counter">20,000</div>
            <div>Trees grown</div>
          </div>
          <div>
            <div className="counter">20,000</div>
            <div>Tree Champions inducted</div>
          </div>
          <div>
            <div className="counter">100,000</div>
            <div>People reached through civic engagement</div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Geographic Focus</h2>
        <p>
          EJF operates across coastal counties (Taita Taveta, Kilifi, Kwale, Lamu, Mombasa), arid and semi-arid regions
          (Turkana, Isiolo, Samburu), resource-rich counties (Kajiado, Laikipia, Nyandarua), and urban hubs (Nairobi and
          Mombasa).
        </p>
        <div className="impact-highlights">
          <div className="impact-item">
            <div className="impact-icon">🌊</div>
            <h3>Coastal Regions</h3>
            <p>Focus on marine resources and coastal community rights</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🌵</div>
            <h3>Arid & Semi-Arid</h3>
            <p>Climate resilience and resource management</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🏙️</div>
            <h3>Urban Centers</h3>
            <p>Digital inclusion and economic opportunities</p>
          </div>
        </div>
      </section>

      <section className="card" id="ai-registration">
        <h2>Join EJF - Registration</h2>
        <p>
          Register as a member, volunteer, or partner to join our mission for economic, climate, social, and digital
          justice.
        </p>

        {!registrationOpen ? (
          <button onClick={() => setRegistrationOpen(true)} className="btn btn-primary" style={{ marginTop: "15px" }}>
            Open Registration Form
          </button>
        ) : (
          <div className="registration-form-container">
            <h3>Member Registration Form</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} />
              </div>

              <div className="form-group">
                <label>County/Region *</label>
                <select name="county" value={formData.county} onChange={handleInputChange} required>
                  <option value="">Select your county</option>
                  <option value="Taita Taveta">Taita Taveta</option>
                  <option value="Kilifi">Kilifi</option>
                  <option value="Kwale">Kwale</option>
                  <option value="Lamu">Lamu</option>
                  <option value="Mombasa">Mombasa</option>
                  <option value="Nairobi">Nairobi</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Interest Area *</label>
                <select name="interest" value={formData.interest} onChange={handleInputChange} required>
                  <option value="">Select your interest</option>
                  <option value="Economic Justice">Economic Justice</option>
                  <option value="Climate Justice">Climate Justice</option>
                  <option value="Social Justice">Social Justice</option>
                  <option value="Digital Justice">Digital Justice</option>
                  <option value="All Areas">All Areas</option>
                </select>
              </div>

              <div className="form-group">
                <label>How would you like to contribute? *</label>
                <select name="contribution" value={formData.contribution} onChange={handleInputChange} required>
                  <option value="">Select contribution type</option>
                  <option value="Member">General Member</option>
                  <option value="Volunteer">Volunteer</option>
                  <option value="Partner">Organization Partner</option>
                  <option value="Donor">Donor/Supporter</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message (Optional)</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Tell us about your background or interests..."
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit Registration
              </button>
              <button
                type="button"
                onClick={() => setRegistrationOpen(false)}
                className="btn btn-secondary"
                style={{ marginLeft: "10px" }}
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </section>
    </main>
  )
}
