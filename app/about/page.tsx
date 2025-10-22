"use client"

import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "Hon. Christopher Mwambingu",
      role: "Founder & Coordinator",
      image: "/chris.jpeg",
      bio: "Born in Wusi Village, Mwatate, Kenya, Christopher Mwambingu rose from a childhood marked by poverty and exclusion to become a national advocate for equity, dignity, and justice. His lived experiences inspired a lifelong commitment to people-centered leadership and transformative change.",
    },
    {
      name: "Amriyah Juma",
      role: "Co-Founder",
      image: "/amriyah.jpeg",
      bio: "Advocate & first female MCA mjambere ward",
    },
    {
      name: "Moses Macharia",
      role: "Co-Founder",
      image: "/moses.jpeg",
      bio: "Political scientist & community leader",
    },
    {
      name: "Reverend Isaac Mwambingu",
      role: "Co-Founder",
      image: "/issac.jpeg",
      bio: "Anglican church reverend",
    },
    {
      name: "Hassan Maghanga",
      role: "Co-Founder",
      image: "/hassan.jpeg",
      bio: "Youth leader & grassroots representative",
    },
    {
      name: "Egwa Arnold",
      role: "Program Director for Digital Rights",
      image: "/arnold.jpeg",
      bio: "Arnold Egwa is a visionary leader at the intersection of technology, human rights, and economic equity.",
    },
  ]

  return (
    <main className="container">
      <section className="card">
        <h1>About the Economic Justice Forum (EJF)</h1>
        <p>
          The Economic Justice Forum (EJF) is the people's platform for Economic, Climate, Social, and Digital Justice.
          We champion equitable development, participatory governance, and sustainable prosperity for all.
        </p>
        <p>
          EJF bridges grassroots realities and international advocacy, empowering citizens to claim their economic,
          environmental, and digital rights.
        </p>
      </section>

      <section className="card">
        <h2>Vision & Mission</h2>
        <div className="focus-item">
          <h3>Our Vision</h3>
          <p>
            A just, equitable, sustainable, and digitally inclusive Kenya where every person enjoys dignity,
            opportunity, and prosperity.
          </p>
        </div>
        <div className="focus-item">
          <h3>Our Mission</h3>
          <p>
            To advance Economic Justice and inclusive prosperity by empowering communities, promoting policy and
            systemic reforms, ensuring fair access to resources, and fostering sustainable development — locally,
            nationally, and internationally.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Strategic Focus Areas</h2>
        <div className="focus-areas">
          <div className="focus-item">
            <h3>Economic & Resource Justice</h3>
            <p>
              Championing transparent, accountable, and fair management of public resources for the benefit of all. We
              work to ensure natural resource revenues are equitably distributed between national and county
              governments, and that communities benefit directly from resources in their regions.
            </p>
          </div>
          <div className="focus-item">
            <h3>Governance, Civic & Research Justice</h3>
            <p>
              Strengthening constitutionalism, integrity, public participation, and data-driven advocacy to empower
              citizens and institutions. We promote accountable governance through civic education, participatory
              budgeting, and evidence-based policy recommendations.
            </p>
          </div>
          <div className="focus-item">
            <h3>Social, Climate, Digital & Economic Empowerment Justice</h3>
            <p>
              Driving inclusive growth through climate-smart entrepreneurship, equitable digital access, and ethical
              technology governance. We link environmental conservation with economic opportunities, particularly for
              youth and marginalized communities.
            </p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Core Values</h2>
        <div className="values-grid">
          <div className="value-item">Equity & Social Justice</div>
          <div className="value-item">Transparency & Integrity</div>
          <div className="value-item">Inclusion</div>
          <div className="value-item">Sustainability</div>
          <div className="value-item">Collaboration</div>
          <div className="value-item">Digital Fairness</div>
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
            <div className="impact-icon">🏝️</div>
            <h3>Coastal Counties</h3>
            <p>Taita Taveta, Kilifi, Kwale, Lamu, Mombasa</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🌵</div>
            <h3>Arid & Semi-Arid</h3>
            <p>Turkana, Isiolo, Samburu</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">⛰️</div>
            <h3>Resource-Rich Areas</h3>
            <p>Kajiado, Laikipia, Nyandarua</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🏙️</div>
            <h3>Urban Centers</h3>
            <p>Nairobi, Mombasa</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Partnerships and Collaboration</h2>
        <p>
          EJF collaborates with development partners, philanthropic foundations, governments, academia, civil society,
          and media to reform systems that perpetuate inequality and co-create a just economy that serves people and the
          planet.
        </p>

        <div className="values-grid" style={{ marginTop: "20px" }}>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Development Partners
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Philanthropic Foundations
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Government Institutions
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Academic Institutions
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Civil Society Organizations
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Media Partners
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Founding Team</h2>

        {teamMembers.map((member, index) => (
          <div key={index} className="focus-item" style={{ marginBottom: "30px" }}>
            <h3>
              {member.name} — {member.role}
            </h3>
            <div
              style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "20px", flexWrap: "wrap" }}
            >
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={280}
                height={320}
                style={{
                  width: "280px",
                  height: "320px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              />
              <div style={{ flex: 1, minWidth: "300px" }}>
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="card">
        <h2>Organizational Structure</h2>
        <p>
          EJF operates through a coordinated secretariat guided by a governance board, thematic working groups, and
          regional focal points that facilitate collaboration, advocacy, and research across Kenya's diverse regions.
        </p>

        <div className="impact-highlights">
          <div className="impact-item">
            <div className="impact-icon">👥</div>
            <h3>Governance Board</h3>
            <p>Strategic oversight and guidance</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🔬</div>
            <h3>Thematic Working Groups</h3>
            <p>Specialized focus on key justice areas</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🗺️</div>
            <h3>Regional Focal Points</h3>
            <p>Local implementation and advocacy</p>
          </div>
        </div>
      </section>
    </main>
  )
}
