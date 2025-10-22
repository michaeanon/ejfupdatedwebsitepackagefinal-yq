"use client"

import Image from "next/image"
import Link from "next/link"

export default function Events() {
  return (
    <main className="container">
      <section className="card">
        <h1>Events & Engagements</h1>
        <p>
          Join us at our upcoming events, forums, and community engagements. EJF events bring together diverse
          stakeholders to discuss, learn, and collaborate on issues of economic, climate, social, and digital justice.
        </p>
      </section>

      <section className="card">
        <h2>Upcoming Events</h2>

        <div className="event-cards">
          <div className="event-card">
            <div className="event-date">March 15, 2024</div>
            <h3>Community Benefit-Sharing Forum — Taita Taveta</h3>
            <p>
              <strong>Location:</strong> Taita Taveta County
            </p>
            <p>
              <strong>Time:</strong> 9:00 AM - 4:00 PM
            </p>
            <p>
              Join community representatives, county officials, and civil society organizations to discuss equitable
              benefit-sharing models for natural resource revenues.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a href="#" className="btn btn-primary">
                Register to Attend
              </a>
              <a href="#" className="btn btn-secondary" style={{ marginLeft: "10px" }}>
                Download Agenda
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">April 5, 2024</div>
            <h3>Youth Climate Action Summit</h3>
            <p>
              <strong>Location:</strong> Mombasa County
            </p>
            <p>
              <strong>Time:</strong> 8:00 AM - 5:00 PM
            </p>
            <p>
              Bringing together young climate champions from coastal counties to share experiences, build skills, and
              develop collective action plans for climate justice.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a href="#" className="btn btn-primary">
                Register to Attend
              </a>
              <a href="#" className="btn btn-secondary" style={{ marginLeft: "10px" }}>
                Download Agenda
              </a>
            </div>
          </div>

          <div className="event-card">
            <div className="event-date">May 20-21, 2024</div>
            <h3>Digital Inclusion Workshop Series</h3>
            <p>
              <strong>Location:</strong> Kilifi & Kwale Counties
            </p>
            <p>
              <strong>Time:</strong> 10:00 AM - 2:00 PM Daily
            </p>
            <p>
              Practical digital literacy training for community members, focusing on basic computer skills, internet
              usage, and online safety.
            </p>
            <div style={{ marginTop: "20px" }}>
              <a href="#" className="btn btn-primary">
                Register to Attend
              </a>
              <a href="#" className="btn btn-secondary" style={{ marginLeft: "10px" }}>
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <p>
            <strong>Want to stay updated on all our events?</strong>
          </p>
          <a href="#newsletter" className="btn btn-gold">
            Subscribe to Our Newsletter
          </a>
        </div>
      </section>

      <section className="card">
        <h2>Past Events Gallery</h2>
        <p>Take a look at some of our recent events, forums, and community engagements across Kenya.</p>

        <div className="gallery">
          <Image src="/com event.jpeg" alt="Community forum on economic justice" width={300} height={220} />
          <Image src="/plant.jpeg" alt="Tree planting ceremony with students" width={300} height={220} />
          <Image src="/tm.jpeg" alt="EJF team at policy advocacy workshop" width={300} height={220} />
          <Image src="/comm dia.jpeg" alt="Community dialogue session" width={300} height={220} />
          <Image src="/youth ev.jpeg" alt="Youth environmental leadership training" width={300} height={220} />
          <Image src="/eme.jpeg" alt="Research dissemination workshop" width={300} height={220} />
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Recent Event Highlights</h3>
          <div className="focus-areas">
            <div className="focus-item">
              <h4>National Economic Justice Convention 2023</h4>
              <p>
                <strong>Date:</strong> November 2023 | <strong>Location:</strong> Nairobi
              </p>
              <p>
                Brought together over 200 participants from civil society, government, academia, and communities to
                discuss strategies for achieving economic justice in Kenya.
              </p>
            </div>

            <div className="focus-item">
              <h4>Coastal Climate Resilience Forum</h4>
              <p>
                <strong>Date:</strong> August 2023 | <strong>Location:</strong> Mombasa
              </p>
              <p>
                Community leaders and climate experts developed action plans for building climate resilience in coastal
                communities affected by sea-level rise and extreme weather.
              </p>
            </div>

            <div className="focus-item">
              <h4>Digital Rights Advocacy Training</h4>
              <p>
                <strong>Date:</strong> June 2023 | <strong>Location:</strong> Taita Taveta
              </p>
              <p>
                Equipped youth and community advocates with skills to promote digital rights and advocate for equitable
                technology access in marginalized communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Host an EJF Event</h2>
        <p>
          Interested in hosting an EJF event in your community or organization? We collaborate with communities,
          schools, and organizations to bring our programs and expertise to diverse audiences.
        </p>

        <div className="focus-areas">
          <div className="focus-item">
            <h3>Community Dialogues</h3>
            <p>
              Interactive forums on economic justice, climate action, or digital inclusion tailored to your community's
              specific context and needs.
            </p>
          </div>

          <div className="focus-item">
            <h3>Training Workshops</h3>
            <p>
              Capacity building sessions on leadership, advocacy, environmental conservation, or digital literacy for
              your organization or community group.
            </p>
          </div>

          <div className="focus-item">
            <h3>Policy Forums</h3>
            <p>
              Multi-stakeholder dialogues bringing together community representatives, government officials, and experts
              to discuss specific policy issues.
            </p>
          </div>
        </div>

        <div style={{ marginTop: "25px", textAlign: "center" }}>
          <Link href="/donate#volunteer" className="btn btn-primary">
            Request an Event in Your Community
          </Link>
        </div>
      </section>
    </main>
  )
}
