"use client"

import Link from "next/link"

export default function Research() {
  return (
    <main className="container">
      <section className="card">
        <h1>Research & Publications</h1>
        <p>
          Explore EJF's evidence-based research, policy briefs, case studies, and publications that inform our advocacy
          and contribute to public discourse on economic, climate, social, and digital justice.
        </p>
        <p>
          Our research combines rigorous analysis with community perspectives to develop practical solutions and policy
          recommendations.
        </p>
      </section>

      <section className="card">
        <h2>Featured Publications</h2>
        <div className="research-grid">
          <div className="research-item">
            <h3>Benefit-Sharing Frameworks for Natural Resources</h3>
            <p>
              <strong>Publication Date:</strong> January 2023
            </p>
            <p>
              <strong>Summary:</strong> Comprehensive analysis of policy options for equitable distribution of natural
              resource revenues between national and county governments, with case studies from mining, forestry, and
              wildlife sectors.
            </p>
            <div style={{ marginTop: "15px" }}>
              <a className="btn btn-primary" href="#">
                Download PDF
              </a>
              <a className="btn btn-secondary" href="#" style={{ marginLeft: "10px" }}>
                Executive Summary
              </a>
            </div>
          </div>

          <div className="research-item">
            <h3>Climate Finance Governance in Kenya</h3>
            <p>
              <strong>Publication Date:</strong> March 2023
            </p>
            <p>
              <strong>Summary:</strong> Assessment of climate finance flows, governance mechanisms, and community access
              to adaptation funds in arid and semi-arid regions of Kenya.
            </p>
            <div style={{ marginTop: "15px" }}>
              <a className="btn btn-primary" href="#">
                Download PDF
              </a>
              <a className="btn btn-secondary" href="#" style={{ marginLeft: "10px" }}>
                Executive Summary
              </a>
            </div>
          </div>

          <div className="research-item">
            <h3>Digital Inclusion in Coastal Communities</h3>
            <p>
              <strong>Publication Date:</strong> June 2023
            </p>
            <p>
              <strong>Summary:</strong> Research on digital access, literacy, and technology adoption patterns in
              coastal counties, with recommendations for bridging the digital divide.
            </p>
            <div style={{ marginTop: "15px" }}>
              <a className="btn btn-primary" href="#">
                Download PDF
              </a>
              <a className="btn btn-secondary" href="#" style={{ marginLeft: "10px" }}>
                Executive Summary
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Policy Briefs</h2>
        <div className="research-grid">
          <div className="research-item">
            <h3>Fiscal Decentralization and Equity</h3>
            <p>
              <strong>Issue:</strong> August 2023
            </p>
            <p>Analysis of revenue sharing formulas and their impact on equitable development across counties.</p>
            <a className="btn btn-primary" href="#">
              Read Brief
            </a>
          </div>

          <div className="research-item">
            <h3>Youth Entrepreneurship in Green Economy</h3>
            <p>
              <strong>Issue:</strong> October 2023
            </p>
            <p>Policy recommendations for supporting youth-led green enterprises and climate-smart businesses.</p>
            <a className="btn btn-primary" href="#">
              Read Brief
            </a>
          </div>

          <div className="research-item">
            <h3>Community Land Rights and Investment</h3>
            <p>
              <strong>Issue:</strong> November 2023
            </p>
            <p>Balancing investment opportunities with protection of community land rights in resource-rich areas.</p>
            <a className="btn btn-primary" href="#">
              Read Brief
            </a>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Research Areas</h2>
        <div className="focus-areas">
          <div className="focus-item">
            <h3>Economic Justice Research</h3>
            <p>
              Examining patterns of resource distribution, fiscal policies, and economic opportunities to identify
              barriers to equity and propose inclusive alternatives.
            </p>
            <ul>
              <li>Natural resource revenue sharing</li>
              <li>Tax justice and domestic resource mobilization</li>
              <li>Debt sustainability and management</li>
              <li>Inclusive economic growth models</li>
            </ul>
          </div>

          <div className="focus-item">
            <h3>Climate Justice Research</h3>
            <p>
              Investigating climate impacts, adaptation strategies, and climate finance governance to ensure vulnerable
              communities benefit from climate action.
            </p>
            <ul>
              <li>Climate vulnerability assessments</li>
              <li>Adaptation finance tracking</li>
              <li>Community-based adaptation strategies</li>
              <li>Climate policy implementation</li>
            </ul>
          </div>

          <div className="focus-item">
            <h3>Social & Digital Justice Research</h3>
            <p>
              Analyzing social inclusion, digital access, and technology governance to promote equitable participation
              in social, economic, and digital spheres.
            </p>
            <ul>
              <li>Digital divide mapping</li>
              <li>Social protection systems</li>
              <li>Technology ethics and governance</li>
              <li>Inclusive service delivery</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="card">
        <h2>Research Methodology</h2>
        <p>
          EJF employs mixed-methods approaches that combine quantitative data analysis with qualitative insights from
          communities. Our research process includes:
        </p>

        <div className="impact-highlights">
          <div className="impact-item">
            <div className="impact-icon">📊</div>
            <h3>Data Collection</h3>
            <p>Surveys, interviews, focus groups, and secondary data analysis</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">👥</div>
            <h3>Community Participation</h3>
            <p>Engaging communities as co-researchers and validators</p>
          </div>
          <div className="impact-item">
            <div className="impact-icon">🔍</div>
            <h3>Rigorous Analysis</h3>
            <p>Applying appropriate analytical frameworks and peer review</p>
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Ethical Standards</h3>
          <p>
            All EJF research adheres to strict ethical standards including informed consent, confidentiality, respect
            for participants, and commitment to doing no harm. Our research protocols are reviewed and approved through
            internal ethical review processes.
          </p>
        </div>
      </section>

      <section className="card">
        <h2>Research Partnerships</h2>
        <p>
          EJF collaborates with academic institutions, research organizations, and community-based organizations to
          enhance the quality, reach, and impact of our research. Current partners include:
        </p>

        <div className="values-grid">
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            University Research Departments
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Policy Think Tanks
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            Community Organizations
          </div>
          <div className="value-item" style={{ background: "var(--gold)", color: "var(--navy)" }}>
            International Research Networks
          </div>
        </div>

        <div style={{ marginTop: "25px" }}>
          <h3>Call for Research Collaboration</h3>
          <p>
            We welcome partnerships with researchers, academic institutions, and organizations interested in
            collaborative research on economic, climate, social, and digital justice issues.
          </p>
          <Link href="/donate#volunteer" className="btn btn-primary">
            Contact Us for Collaboration
          </Link>
        </div>
      </section>
    </main>
  )
}
