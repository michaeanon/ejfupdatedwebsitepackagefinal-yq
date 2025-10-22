"use client"
import { useState } from "react"

export default function Donate() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    alert(`Thank you ${formData.name}! We'll be in touch soon.`)
    setFormData({ name: "", email: "", phone: "", interest: "", message: "" })
  }

  return (
    <main className="container">
      <section className="card">
        <h1>Donate & Support Our Work</h1>
        <p>
          Your support enables EJF to continue our vital work promoting economic, climate, social, and digital justice
          across Kenya. Every contribution, no matter the size, helps us empower communities, conduct research, and
          advocate for equitable policies.
        </p>

        <div className="focus-item" style={{ margin: "25px 0" }}>
          <h3>How Your Donation Makes an Impact</h3>
          <p>
            <strong>Suggested allocation (example):</strong> Research 40% | Community Programs 40% | Operations 20%
          </p>
          <p>Your donation directly supports:</p>
          <ul>
            <li>
              <strong>Community Programs:</strong> Tree planting initiatives, civic education forums, youth leadership
              training
            </li>
            <li>
              <strong>Research & Advocacy:</strong> Policy analysis, community surveys, advocacy campaigns
            </li>
            <li>
              <strong>Capacity Building:</strong> Training community champions, digital literacy programs
            </li>
            <li>
              <strong>Operational Support:</strong> Ensuring we can continue our work effectively and sustainably
            </li>
          </ul>
        </div>
      </section>

      <section className="card">
        <h2>Ways to Give</h2>

        <div className="donation-options">
          <div className="donation-option">
            <h3>One-Time Gift</h3>
            <div className="donation-amount">$50</div>
            <p>Supports one youth Tree Champion with training and tree seedlings</p>
            <a className="btn btn-primary" href="#" style={{ marginTop: "15px" }}>
              Donate $50
            </a>
          </div>

          <div className="donation-option">
            <h3>Monthly Supporter</h3>
            <div className="donation-amount">$25</div>
            <div className="donation-frequency">per month</div>
            <p>Provides ongoing support for our community programs</p>
            <a className="btn btn-primary" href="#" style={{ marginTop: "15px" }}>
              Donate Monthly
            </a>
          </div>

          <div className="donation-option">
            <h3>Community Champion</h3>
            <div className="donation-amount">$100</div>
            <p>Funds a community dialogue reaching 50+ participants</p>
            <a className="btn btn-primary" href="#" style={{ marginTop: "15px" }}>
              Donate $100
            </a>
          </div>

          <div className="donation-option">
            <h3>Custom Amount</h3>
            <div className="donation-amount">Any</div>
            <p>Give any amount that works for you</p>
            <a className="btn btn-primary" href="#" style={{ marginTop: "15px" }}>
              Choose Amount
            </a>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <p>
            <strong>Other Ways to Support:</strong> In-kind donations | Corporate partnerships | Legacy giving
          </p>
          <a href="#volunteer" className="btn btn-secondary">
            Learn About Other Support Options
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Payment Methods</h2>
        <p>
          <strong>How to give:</strong> We accept various payment methods to make supporting our work as convenient as
          possible.
        </p>

        <div className="values-grid">
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Mobile Money
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Bank Transfer
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Credit/Debit Card
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            PayPal
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Bank Transfer Details</h3>
          <div className="focus-item">
            <p>
              <strong>Bank:</strong> Kenya Commercial Bank (KCB)
            </p>
            <p>
              <strong>Account Name:</strong> Economic Justice Forum
            </p>
            <p>
              <strong>Account Number:</strong> 1234567890
            </p>
            <p>
              <strong>Branch:</strong> Mwatate
            </p>
            <p>
              <strong>Swift Code:</strong> KCBLKENX
            </p>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Mobile Money</h3>
          <div className="focus-item">
            <p>
              <strong>M-Pesa Paybill:</strong> 123456
            </p>
            <p>
              <strong>Account Number:</strong> EJF-DONATION
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Transparency & Accountability</h2>
        <p>
          EJF is committed to transparency and accountability in all our operations, including financial management. We
          ensure that donor funds are used effectively and efficiently to maximize impact.
        </p>

        <div className="impact-highlights">
          <div className="impact-item">
            <div className="impact-icon">📋</div>
            <h3>Annual Reports</h3>
            <p>Comprehensive reports on our activities, impact, and finances</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🔍</div>
            <h3>Financial Audits</h3>
            <p>Regular independent audits of our financial statements</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">📊</div>
            <h3>Impact Assessment</h3>
            <p>Regular monitoring and evaluation of program outcomes</p>
          </div>
        </div>

        <div style={{ textAlign: "center", marginTop: "25px" }}>
          <a href="#" className="btn btn-secondary">
            Download Our Latest Annual Report
          </a>
        </div>
      </section>

      <section id="volunteer" className="card">
        <h2>Volunteer or Partner With Us</h2>
        <p>
          Your time and expertise can make a significant difference. Join our network of volunteers and partners working
          towards economic, climate, social, and digital justice.
        </p>

        <div className="focus-areas" style={{ marginBottom: "30px" }}>
          <div className="focus-item">
            <h3>Volunteer Opportunities</h3>
            <ul>
              <li>Community mobilization and outreach</li>
              <li>Research and data collection</li>
              <li>Event organization and support</li>
              <li>Digital skills training</li>
              <li>Translation and interpretation</li>
            </ul>
          </div>

          <div className="focus-item">
            <h3>Partnership Opportunities</h3>
            <ul>
              <li>Corporate social responsibility programs</li>
              <li>Academic research collaboration</li>
              <li>Community organization partnerships</li>
              <li>Media and communication partnerships</li>
              <li>Technical expertise sharing</li>
            </ul>
          </div>
        </div>

        <h3>Get in Touch</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
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
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Your email address"
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your phone number"
            />
          </div>

          <div className="form-group">
            <label>Interest Area</label>
            <select name="interest" value={formData.interest} onChange={handleInputChange} required>
              <option value="">Select your area of interest</option>
              <option value="volunteer">Volunteering</option>
              <option value="partnership">Partnership</option>
              <option value="internship">Internship</option>
              <option value="research">Research Collaboration</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Tell us about your interests, skills, or proposed collaboration..."
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  )
}
