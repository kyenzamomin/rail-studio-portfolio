
import { useEffect, useState } from 'react';

const projects = [
  {
    id: '01',
    title: 'The Onboarding Reset',
    category: 'PRODUCT OPERATIONS',
    description:
      'Redesigning the customer onboarding journey to reduce friction and improve activation.',
    image: '/assets/images/project-1.jpg',
    detailImage: '/assets/images/project-1-detail.jpg',
    overview:
      'A growing digital product was experiencing significant drop-offs during its customer onboarding journey. The challenge was to identify friction points and create a more efficient experience.',
    intervention:
      'Mapped the existing onboarding journey, identified high-friction steps, coordinated improvements across product and support teams, and introduced a structured performance tracking process.',
    outcome:
      'Sample outcome: 28% improvement in onboarding conversion and a more consistent customer activation process.',
    metric: '28%',
    metricLabel: 'Conversion improvement',
    tags: ['Onboarding', 'Customer Journey', 'Process Design'],
  },
  {
    id: '02',
    title: 'Operations, Reimagined',
    category: 'BUSINESS OPERATIONS',
    description:
      'Building smarter internal workflows that give teams more time to focus on execution.',
    image: '/assets/images/project-2.jpg',
    detailImage: '/assets/images/project-2-detail.jpg',
    overview:
      'Multiple teams were relying on disconnected spreadsheets and repetitive manual updates. Information was difficult to track and operational visibility was limited.',
    intervention:
      'Audited recurring workflows, documented process gaps, introduced shared tracking systems, and established clearer ownership and reporting routines.',
    outcome:
      'Sample outcome: 40 operational hours saved per month through improved workflows and reduced manual coordination.',
    metric: '40 hrs',
    metricLabel: 'Monthly hours saved',
    tags: ['Workflow Design', 'Automation', 'Team Coordination'],
  },
  {
    id: '03',
    title: 'Launch With Direction',
    category: 'GROWTH STRATEGY',
    description:
      'Coordinating cross-functional launch activities through structured execution and reporting.',
    image: '/assets/images/project-3.jpg',
    detailImage: '/assets/images/project-3.jpg',
    overview:
      'A product team needed a repeatable launch process to coordinate marketing, product, and customer-facing activities without losing visibility.',
    intervention:
      'Developed launch timelines, established milestone ownership, aligned stakeholders, and created a reporting framework to monitor launch readiness.',
    outcome:
      'Sample outcome: 12 product launches coordinated using a repeatable execution framework.',
    metric: '12',
    metricLabel: 'Launches coordinated',
    tags: ['Launch Planning', 'Stakeholder Management', 'Growth'],
  },
];

const methods = [
  {
    number: 'I.',
    title: 'Understand',
    description:
      'Start with the problem. Map the existing process, identify friction, and understand what success should look like.',
  },
  {
    number: 'II.',
    title: 'Structure',
    description:
      'Turn scattered information into clear workflows, measurable priorities, and accountable ownership.',
  },
  {
    number: 'III.',
    title: 'Execute',
    description:
      'Coordinate people and processes, monitor progress, and continuously improve the outcome.',
  },
];

function ContactLinks() {
  return (
    <div className="rail-contact">
      <span className="contact-link primary">
        Lets connect ↗
      </span>
    </div>
  );
}

function LeftRail() {
  return (
    <aside className="left-rail">
      <div className="rail-topline">
        <span>INDEPENDENT PORTFOLIO</span>
        <span>
          <i className="availability-dot" /> AVAILABLE
        </span>
      </div>

      <div className="profile-content">
        <div className="portrait-wrap">
          <img
            src="/assets/images/portrait.jpg"
            alt="Aarav Mehta"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>

        <p className="eyebrow profile-role">
          PRODUCT &amp; GROWTH OPERATIONS
        </p>

        <h1 className="profile-name">
          Aarav
          <br />
          Mehta.
        </h1>

        <p className="profile-description">
          I turn complex business processes into clear, workable systems.
          I bring teams, products, and execution together to help businesses
          operate better and grow with direction.
        </p>

        <div className="credential-block">
          <div className="credential-row">
            <span className="credential-label">CURRENT ROLE</span>
            <span className="credential-value">
              Product &amp; Growth Operations Strategist
            </span>
          </div>

          <div className="credential-row">
            <span className="credential-label">TARGET ROLES</span>
            <span className="credential-value">
              Product Operations Lead
              <br />
              Growth Strategist
            </span>
          </div>

          <div className="credential-row">
            <span className="credential-label">OPEN REGIONS</span>
            <div className="tag-list">
              {['Mumbai', 'Bengaluru', 'Remote', 'EU', 'Singapore'].map(
                (region) => (
                  <span className="tag" key={region}>
                    {region}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="credential-row">
            <span className="credential-label">EXPERIENCE</span>
            <span className="credential-value">3 Years</span>
          </div>
        </div>

        <ContactLinks />
      </div>
    </aside>
  );
}

function CaseCard({ project, onClick }) {
  return (
    <article
      className="case-card"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open case study: ${project.title}`}
    >
      <div className="case-image">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </div>

      <div className="case-copy">
        <div>
          <span className="mono case-index">CASE {project.id}</span>
          <h3 className="case-title">{project.title}</h3>
          <p className="case-description">{project.description}</p>
        </div>

        <div className="case-bottom">
          <span className="case-category">{project.category}</span>
          <span className="case-arrow">↗</span>
        </div>
      </div>
    </article>
  );
}

function Dossier({ project, onBack }) {
  return (
    <main className="dossier-page">
      <nav className="dossier-nav">
        <span className="mono">AARAV MEHTA / PROJECT DOSSIER</span>
        <button className="back-button" onClick={onBack}>
          ← Back to portfolio
        </button>
      </nav>

      <div className="dossier-content">
        <header className="dossier-header">
          <span className="eyebrow">
            {project.category} / CASE {project.id}
          </span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </header>

        <img
          className="dossier-hero"
          src={project.detailImage}
          alt={`${project.title} project overview`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />

        <section className="dossier-section">
          <h2>I. Operational Brief</h2>
          <p>{project.overview}</p>
        </section>

        <section className="dossier-section">
          <h2>II. Strategic Intervention</h2>
          <div>
            <p>{project.intervention}</p>

            <div className="tag-list" style={{ marginTop: 20 }}>
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="dossier-section">
          <h2>III. Measured Outcome</h2>
          <div>
            <h3
              style={{
                fontSize: 48,
                letterSpacing: '-0.06em',
                color: '#2563EB',
              }}
            >
              {project.metric}
            </h3>

            <p>{project.outcome}</p>

            <div className="dossier-outcome">
              <strong>Demonstration content:</strong> Metrics and project
              details are illustrative placeholders, not verified client
              results.
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default function SplitRail() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const syncProjectWithUrl = () => {
      const projectId = window.location.hash.replace('#project-', '');
      const project = projects.find((item) => item.id === projectId);

      setActiveProject(project || null);
    };

    syncProjectWithUrl();

    window.addEventListener('popstate', syncProjectWithUrl);
    window.addEventListener('hashchange', syncProjectWithUrl);

    return () => {
      window.removeEventListener('popstate', syncProjectWithUrl);
      window.removeEventListener('hashchange', syncProjectWithUrl);
    };
  }, []);

  const openProject = (project) => {
    window.history.pushState(
      { projectId: project.id },
      '',
      `#project-${project.id}`
    );

    setActiveProject(project);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const closeProject = () => {
    if (window.location.hash.startsWith('#project-')) {
      window.history.back();
    } else {
      setActiveProject(null);
    }
  };

  if (activeProject) {
    return <Dossier project={activeProject} onBack={closeProject} />;
  }

  return (
    <div className="rail-layout">
      <LeftRail />

      <main className="right-feed">
        <div className="feed-topline">
          <span className="section-label">SELECTED WORK / 2023—2026</span>
          <span className="mono">PORTFOLIO 001</span>
        </div>

        <section className="metrics-strip">
          <div className="metric">
            <div className="metric-number">+28%</div>
            <p className="metric-caption">Onboarding conversion lift</p>
          </div>

          <div className="metric">
            <div className="metric-number">40 hrs</div>
            <p className="metric-caption">Monthly operations time saved</p>
          </div>

          <div className="metric">
            <div className="metric-number">12</div>
            <p className="metric-caption">Product launches coordinated</p>
          </div>
        </section>

        <section className="work-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE WORK</span>
              <h2>Selected Projects.</h2>
            </div>

            <p>Three examples of operational thinking.</p>
          </div>

          <div className="case-list">
            {projects.map((project) => (
              <CaseCard
                key={project.id}
                project={project}
                onClick={() => openProject(project)}
              />
            ))}
          </div>
        </section>

        <section className="methodology-section">
          <div className="section-heading">
            <div>
              <span className="eyebrow">HOW I WORK</span>
              <h2>From problem to progress.</h2>
            </div>
          </div>

          <div className="method-grid">
            {methods.map((method) => (
              <article className="method-item" key={method.number}>
                <span className="mono method-number">{method.number}</span>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="site-footer">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Want a website built like this?</h2>

          <div className="footer-bottom">
            <div className="footer-links">
              <a
                href="https://www.linkedin.com/in/fauziya-momin-3b10202ab"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=fauziyamomin21@gmail.com&su=Custom%20Portfolio%20Website%20Inquiry"
                target="_blank"
                rel="noreferrer"
              >
                Email ↗
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
