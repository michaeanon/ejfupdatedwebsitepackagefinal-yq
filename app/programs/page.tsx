"use client"

import Image from "next/image"

export default function Programs() {
  return (
    <main className="container">
      <section className="card">
        <h1>Our Programs & Projects</h1>
        <p>
          EJF implements targeted programs that address our strategic pillars through community-centered approaches,
          research-driven advocacy, and multi-stakeholder partnerships.
        </p>
      </section>

      <section className="card" id="trees">
        <h2>Our Trees, Our Future</h2>
        <Image
          src="/tree.jpeg"
          alt="Our Trees Our Future banner"
          width={800}
          height={400}
          style={{ width: "100%", borderRadius: "8px", marginBottom: "20px" }}
        />
        <p>
          <em>Growing Leaders, Growing Trees</em>
        </p>
        <p>
          Our Trees, Our Future links environmental conservation with youth leadership and civic empowerment. Through
          partnerships with schools, public benefit organizations, and business partners, students adopt and grow trees
          while learning about environmental stewardship, leadership, and civic responsibility.
        </p>

        <h3>Program Components</h3>
        <div className="focus-areas">
          <div className="focus-item">
            <h4>Tree Adoption & Growing</h4>
            <p>
              Students adopt tree seedlings and commit to nurturing them to maturity, learning practical conservation
              skills.
            </p>
          </div>
          <div className="focus-item">
            <h4>Leadership Training</h4>
            <p>Comprehensive training in environmental leadership, climate action, and community engagement.</p>
          </div>
          <div className="focus-item">
            <h4>Community Engagement</h4>
            <p>
              Extending conservation efforts beyond schools to involve entire communities in environmental protection.
            </p>
          </div>
        </div>

        <h3>Impact Highlights</h3>
        <div className="stats-grid">
          <div>
            <div className="counter">20,000</div>
            <div>Trees Grown</div>
          </div>
          <div>
            <div className="counter">20,000</div>
            <div>Tree Champions Inducted</div>
          </div>
          <div>
            <div className="counter">30</div>
            <div>Schools Engaged</div>
          </div>
        </div>

        <ul style={{ marginTop: "20px" }}>
          <li>
            <strong>20,000 Trees Grown</strong> – Each tree represents a Tree Champion committed to environmental
            conservation.
          </li>
          <li>
            <strong>20,000 Tree Champions Inducted</strong> – Youth trained in leadership, climate action, and
            sustainability.
          </li>
          <li>
            <strong>100,000 People Reached</strong> – Through civic engagement forums, local & coastal FM radio, and
            social media campaigns.
          </li>
          <li>
            <strong>30 Schools Engaged</strong> – Across Mwatate and neighboring counties, creating a network of
            environmental champions.
          </li>
        </ul>

        <div className="focus-item" style={{ marginTop: "25px" }}>
          <h4>Supported By:</h4>
          <p>
            <strong>Wildlife Works</strong> (main supporter - donated seedlings) and other conservation partners
            committed to youth environmental education.
          </p>
        </div>
      </section>

      <section className="card" id="civic">
        <h2>Civic Engagement on Economic & Climate Justice</h2>
        <p>
          This project strengthens public participation, community voice, and civic leadership in economic, fiscal, and
          climate justice. It empowers citizens to influence policies, monitor public spending, and demand
          accountability in natural resource management and climate finance.
        </p>

        <h3>Key Focus Areas</h3>
        <div className="values-grid">
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Economic & Fiscal Justice
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Climate Justice
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Public Participation
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Research-Driven Advocacy
          </div>
        </div>

        <h3>Program Activities</h3>
        <div className="focus-areas">
          <div className="focus-item">
            <h4>Civic Education Forums</h4>
            <p>Community dialogues on economic rights, climate justice, and participatory governance.</p>
          </div>
          <div className="focus-item">
            <h4>Policy Monitoring</h4>
            <p>
              Training citizens to monitor public spending and policy implementation in natural resource management.
            </p>
          </div>
          <div className="focus-item">
            <h4>Media Engagement</h4>
            <p>Using radio, social media, and community media to amplify citizen voices and advocacy messages.</p>
          </div>
        </div>

        <h3>Impact</h3>
        <div className="stats-grid">
          <div>
            <div className="counter">100+</div>
            <div>Civic Dialogues Conducted</div>
          </div>
          <div>
            <div className="counter">100,000+</div>
            <div>Citizens Reached</div>
          </div>
          <div>
            <div className="counter">15</div>
            <div>Community Networks Strengthened</div>
          </div>
        </div>

        <ul style={{ marginTop: "20px" }}>
          <li>100+ civic dialogues and policy forums conducted across target counties</li>
          <li>
            <strong>Over 100,000 citizens reached and engaged</strong> through civic education, advocacy, radio and
            social media outreach
          </li>
          <li>Strengthened citizen networks demanding transparency and accountability in resource management</li>
          <li>Enhanced community capacity to engage with county and national governments on development priorities</li>
        </ul>
      </section>

      <section className="card">
        <h2>Digital Justice & Inclusion Program</h2>
        <p>
          Bridging the digital divide by promoting equitable access to digital technologies, digital literacy, and
          ethical technology governance, particularly for marginalized and rural communities.
        </p>

        <h3>Program Components</h3>
        <div className="focus-areas">
          <div className="focus-item">
            <h4>Digital Literacy Training</h4>
            <p>Basic digital skills training for youth, women, and elders in underserved communities.</p>
          </div>
          <div className="focus-item">
            <h4>Community Digital Hubs</h4>
            <p>Establishing community access points with internet connectivity and digital resources.</p>
          </div>
          <div className="focus-item">
            <h4>Digital Rights Advocacy</h4>
            <p>Promoting policies that protect digital rights and ensure equitable technology access.</p>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Women's Economic Empowerment Program</h2>
        <p>
          Promoting women's participation in economic decision-making, entrepreneurship, and leadership through targeted
          capacity building, access to resources, and policy advocacy.
        </p>

        <h3>Key Initiatives</h3>
        <div className="focus-areas">
          <div className="focus-item">
            <h4>Women's Entrepreneurship Support</h4>
            <p>Business skills training, mentorship, and access to seed funding for women-led enterprises.</p>
          </div>
          <div className="focus-item">
            <h4>Leadership Development</h4>
            <p>Capacity building for women's participation in community leadership and decision-making.</p>
          </div>
          <div className="focus-item">
            <h4>Policy Advocacy</h4>
            <p>Advocating for gender-responsive policies in economic planning and resource allocation.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
