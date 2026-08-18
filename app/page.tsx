const ENROLLMENT_URL = "#contact";

const programs = [
  {
    number: "01",
    title: "Volleyball",
    tag: "Technique + Teamwork",
    description:
      "Build confident fundamentals through serving, passing, setting, movement, and game-ready team play.",
    focus: ["Ball control", "Court movement", "Team communication"],
  },
  {
    number: "02",
    title: "Basketball",
    tag: "Skill + Game IQ",
    description:
      "Develop strong habits on both ends of the court with purposeful reps, smart decisions, and competitive play.",
    focus: ["Handle & footwork", "Finishing", "Defense & spacing"],
  },
  {
    number: "03",
    title: "Core Training",
    tag: "Strength + Movement",
    description:
      "Create the athletic foundation every young player needs: balance, coordination, stability, and speed.",
    focus: ["Body control", "Agility", "Injury resilience"],
  },
];

const coaches = [
  {
    initials: "HC",
    role: "Head Coach",
    specialty: "Program leadership & athlete development",
  },
  {
    initials: "VC",
    role: "Volleyball Coach",
    specialty: "Fundamentals, movement & team play",
  },
  {
    initials: "BC",
    role: "Basketball Coach",
    specialty: "Skill development & game decisions",
  },
];

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Infinite Sports home">
          <span className="brand-mark">∞</span>
          <span className="brand-name">
            Infinite <strong>Sports</strong>
          </span>
        </a>

        <nav aria-label="Primary navigation">
          <a href="#programs">Programs</a>
          <a href="#campus">Campus</a>
          <a href="#team">Our team</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-small" href={ENROLLMENT_URL}>
          Enroll <ArrowIcon />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Youth sports academy</p>
          <h1>
            Build the
            <span>athlete within.</span>
          </h1>
          <p className="hero-intro">
            Focused coaching. Strong fundamentals. A place where young athletes
            learn to move, compete, and grow with confidence.
          </p>
          <div className="hero-actions">
            <a className="button" href={ENROLLMENT_URL}>
              Explore enrollment <ArrowIcon />
            </a>
            <a className="text-link" href="#programs">
              View our programs <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" role="img" aria-label="Coach working with young athletes in a gym" />
          <div className="hero-stat hero-stat-left">
            <strong>3</strong>
            <span>Training paths</span>
          </div>
          <div className="hero-stat hero-stat-right">
            <strong>All</strong>
            <span>Skill levels welcome</span>
          </div>
        </div>

        <div className="hero-ticker" aria-hidden="true">
          <span>Move</span><i>✦</i><span>Train</span><i>✦</i><span>Compete</span><i>✦</i><span>Grow</span>
        </div>
      </section>

      <section className="section programs-section" id="programs">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span /> Find your game</p>
            <h2>Programs built for progress.</h2>
          </div>
          <p>
            Every class combines clear instruction, high-quality repetitions,
            and the right amount of challenge for developing athletes.
          </p>
        </div>

        <div className="program-grid">
          {programs.map((program) => (
            <article className="program-card" key={program.title}>
              <div className="program-card-top">
                <span>{program.number}</span>
                <span>{program.tag}</span>
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <ul>
                {program.focus.map((item) => (
                  <li key={item}><span aria-hidden="true">+</span>{item}</li>
                ))}
              </ul>
              <a href={ENROLLMENT_URL} aria-label={`Ask about ${program.title}`}>
                Ask about this program <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="campus section-dark" id="campus">
        <div className="campus-court" aria-hidden="true">
          <span className="court-circle" />
          <span className="court-line" />
        </div>
        <div className="campus-copy">
          <p className="eyebrow"><span /> Our campus</p>
          <h2>Your home court for what comes next.</h2>
          <p>
            A welcoming training environment with room to learn, move, and get
            better—one purposeful session at a time.
          </p>
          <div className="campus-details">
            <div>
              <span>Location</span>
              <strong>Campus address coming soon</strong>
            </div>
            <div>
              <span>Training hours</span>
              <strong>Class schedule coming soon</strong>
            </div>
          </div>
          <a className="button button-outline" href="#contact">
            Plan your first visit <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="section team-section" id="team">
        <div className="section-heading team-heading">
          <div>
            <p className="eyebrow"><span /> The coaching team</p>
            <h2>Great coaches shape more than skills.</h2>
          </div>
          <p>
            Our coaching approach is positive, detail-driven, and built around
            the long-term development of every athlete.
          </p>
        </div>

        <div className="coach-grid">
          {coaches.map((coach, index) => (
            <article className="coach-card" key={coach.role}>
              <div className="coach-number">0{index + 1}</div>
              <div className="coach-avatar"><span>{coach.initials}</span></div>
              <div>
                <h3>{coach.role}</h3>
                <p>{coach.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery section-dark" id="gallery">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow"><span /> Inside the work</p>
            <h2>Energy you can feel.</h2>
          </div>
          <p>Real focus. Real reps. Real confidence taking shape.</p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item gallery-wide">
            <img src="/volleyball.jpg" alt="Volleyball players celebrating together on an indoor court" />
            <figcaption><span>01</span> Teamwork in motion</figcaption>
          </figure>
          <figure className="gallery-item gallery-tall">
            <img src="/basketball.jpg" alt="Basketball on a polished indoor court" />
            <figcaption><span>02</span> Ready for the next rep</figcaption>
          </figure>
          <figure className="gallery-item gallery-small">
            <img src="/hero-team.jpg" alt="Young athletes listening to their coach" />
            <figcaption><span>03</span> Coaching that connects</figcaption>
          </figure>
          <div className="gallery-quote">
            <span className="quote-mark">“</span>
            <blockquote>Strong habits today. Limitless potential tomorrow.</blockquote>
            <span className="quote-rule" />
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-watermark" aria-hidden="true">∞</div>
        <div className="contact-copy">
          <p className="eyebrow"><span /> Start here</p>
          <h2>Ready to find the right program?</h2>
          <p>
            Tell us about your athlete, their age, and what they want to work
            on. We’ll help you choose a starting point.
          </p>
          <a className="button button-dark" href="#contact-details">
            Enrollment form coming soon <ArrowIcon />
          </a>
        </div>
        <div className="contact-details" id="contact-details">
          <div>
            <span>Email</span>
            <strong>Contact email coming soon</strong>
          </div>
          <div>
            <span>Phone</span>
            <strong>Contact number coming soon</strong>
          </div>
          <div>
            <span>Campus</span>
            <strong>Address coming soon</strong>
          </div>
        </div>
      </section>

      <footer>
        <a className="brand brand-footer" href="#top" aria-label="Back to top">
          <span className="brand-mark">∞</span>
          <span className="brand-name">Infinite <strong>Sports</strong></span>
        </a>
        <p>Train with purpose. Grow without limits.</p>
        <div>
          <a href="#programs">Programs</a>
          <a href="#campus">Campus</a>
          <a href="#team">Team</a>
          <a href="#contact">Contact</a>
        </div>
        <small>
          © {new Date().getFullYear()} Infinite Sports. Photos: cottonbro studio / Pexels, Vince Fleming &amp; Lesli Whitecotton / Unsplash.
        </small>
      </footer>
    </main>
  );
}
