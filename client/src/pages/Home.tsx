import { FormEvent, useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleDot,
  Compass,
  Dumbbell,
  ExternalLink,
  HeartHandshake,
  Laptop,
  Leaf,
  Library,
  Menu,
  MessageCircle,
  MoveUpRight,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  X,
} from "lucide-react";
import { toast } from "sonner";

const navItems = [
  { label: "Our story", href: "#story", id: "story" },
  { label: "Learning", href: "#learning", id: "learning" },
  { label: "Campus", href: "#campus", id: "campus" },
  { label: "Student life", href: "#student-life", id: "student-life" },
  { label: "Admissions", href: "#admissions", id: "admissions" },
];

const fourH = [
  {
    number: "01",
    title: "Head",
    text: "Curious, critical thinkers who are ready for changing times and new questions.",
    tone: "mint",
  },
  {
    number: "02",
    title: "Heart",
    text: "A values-led school culture shaped by respect, kindness, and faith in one another.",
    tone: "peach",
  },
  {
    number: "03",
    title: "Hand",
    text: "Hands-on learning that turns knowledge into practical, capable, generous action.",
    tone: "sky",
  },
  {
    number: "04",
    title: "Human relations",
    text: "A community where children learn to live simply, work together, and serve with purpose.",
    tone: "lavender",
  },
];

const campusSpaces = [
  { label: "Instructional rooms", icon: BookOpen, detail: "Flexible spaces for focused, active learning." },
  { label: "Computer room", icon: Laptop, detail: "Digital tools for 21st-century confidence." },
  { label: "Library room", icon: Library, detail: "A quiet place to read, research, and wonder." },
  { label: "Science laboratory", icon: Sparkles, detail: "Experiments that make ideas tangible." },
  { label: "Guidance office", icon: HeartHandshake, detail: "Care and counsel for the whole learner." },
  { label: "Activity area", icon: Users, detail: "Space to gather, create, and celebrate." },
];

const faculty = [
  { role: "School Director", name: "Miraflor Aquino-Torrente" },
  { role: "Principal", name: "Dolly Chiong" },
  { role: "Administrative Officer", name: "Francisco F. Aquino" },
  { role: "Program Coordinator", name: "Alex M. Aragon" },
  { role: "Guidance Specialist", name: "Oscar M. Gomez" },
  { role: "Registered Librarian", name: "Edith N. Sudutan" },
];

const sports = [
  { name: "Basketball", note: "teamwork · timing · courage", tint: "gold" },
  { name: "Volleyball", note: "rhythm · trust · energy", tint: "coral" },
  { name: "Badminton", note: "focus · agility · finesse", tint: "blue" },
  { name: "Taekwondo", note: "discipline · balance · respect", tint: "green" },
];

const clubs = [
  "Drum & Lyre",
  "Dance",
  "VSOP Band",
  "Glee Club",
  "Robotics",
  "E-Sports",
  "Faith Fellowship",
  "Journalism",
  "Math-Sci",
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("story");
  const [curriculum, setCurriculum] = useState<"k12" | "matatag">("matatag");
  const [openPolicy, setOpenPolicy] = useState<string | null>("safe");

  useEffect(() => {
    document.title = "Village School of Parkwoods | Learn with purpose";
    const sections = navItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      { rootMargin: "-18% 0px -65% 0px", threshold: [0.1, 0.3, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleTourRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success("Thanks — our school team will be in touch soon.", {
      description: "This demo form is ready to connect to your admissions inbox.",
    });
    event.currentTarget.reset();
  };

  const closeMenuAndScroll = (id: string) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  return (
    <div className="site-shell">
      <div className="announcement-bar">
        <span className="announcement-dot" />
        <span>Admissions are open for School Year 2026–2027</span>
        <button onClick={() => scrollToId("admissions")} className="announcement-link">Explore requirements <ArrowRight size={14} /></button>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Village School of Parkwoods home">
          <span className="brand-mark"><Leaf size={19} strokeWidth={2.4} /></span>
          <span><strong>Village School</strong><small>of Parkwoods, Inc.</small></span>
        </a>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <button className="nav-cta" onClick={() => closeMenuAndScroll("connect")}>Visit us <MoveUpRight size={15} /></button>
        </nav>
        <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <div className="eyebrow"><span /> Rooted here. Ready for everywhere.</div>
            <h1>Learn with purpose.<br /><em>Lead with heart.</em></h1>
            <p className="hero-intro">A joyful, values-led school community in Parkwood Hills where children grow into capable, compassionate citizens.</p>
            <div className="hero-actions">
              <button className="button button-dark" onClick={() => scrollToId("story")}>Discover VSOP <ArrowDownRight size={17} /></button>
              <button className="text-link" onClick={() => scrollToId("connect")}>Plan a visit <ArrowRight size={16} /></button>
            </div>
            <div className="hero-note"><CircleDot size={14} /> Building confident learners since 2004</div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-wrap">
              <img src="/manus-storage/classroom-collab_d483110c.jpg" alt="Students learning together in a classroom" />
              <div className="hero-image-overlay" />
              <div className="hero-caption"><span>VSOP</span><strong>Every learner has potential.</strong></div>
            </div>
            <div className="hero-badge"><span>4H</span><small>Head · Heart<br />Hand · Human relations</small></div>
            <div className="scribble scribble-one">✳</div>
            <div className="scribble scribble-two">〰</div>
          </div>
          <div className="hero-bottomline"><span>Village School of Parkwoods</span><span>Quezon City · Philippines</span><span>Scroll to explore ↓</span></div>
        </section>

        <section className="signal-strip" aria-label="School highlights">
          <div><strong>21st century</strong><span>skills with a human center</span></div>
          <div><strong>3-term</strong><span>academic calendar</span></div>
          <div><strong>4 + 1 + 1</strong><span>blended learning rhythm</span></div>
          <div><strong>5 core</strong><span>values in practice</span></div>
        </section>

        <section className="section story-section" id="story">
          <div className="section-kicker"><span>01</span><span>Our story</span></div>
          <div className="story-grid">
            <div>
              <h2>A school that believes <em>education changes things.</em></h2>
              <p className="lead">Village School of Parkwoods began with a simple conviction: every person is unique, and every child deserves the space and support to develop their potential.</p>
              <p>From its elementary roots to the opening of the High School Department in 2004, VSOP has grown with its community — adding rooms, improving facilities, and keeping student welfare at the center of every decision.</p>
              <div className="quote-card"><span className="quote-mark">“</span><p>We help children learn to act simply, live gracefully, and give respect to one another.</p><span className="quote-signoff">— The VSOP vision</span></div>
            </div>
            <div className="story-side">
              <div className="story-stat"><strong>2004</strong><span>High School Department opens</span></div>
              <div className="story-stat accent"><strong>4H</strong><span>Head, Heart, Hand, Human relations</span></div>
              <div className="story-side-note"><Compass size={19} /><span>Locally responsive.<br />Globally competitive.</span></div>
            </div>
          </div>
          <div className="mission-row">
            <article><span className="mini-label">Our vision</span><p>A center of educational excellence with a facility and curriculum responsive to children and youth in changing times.</p></article>
            <article><span className="mini-label">Our mission</span><p>Provide quality education, develop each learner’s potential, and strengthen the foundation for lifelong wellness and contribution.</p></article>
            <article><span className="mini-label">Our promise</span><p>A healthy personality — physically, mentally, socially — in harmony with a quality Filipino way of life.</p></article>
          </div>
        </section>

        <section className="fourh-section">
          <div className="section fourh-inner">
            <div className="fourh-heading"><div className="section-kicker light"><span>02</span><span>The 4H framework</span></div><h2>Grow the whole <em>person.</em></h2><p>Academic excellence matters more when it is carried by character, capability, and care for others.</p></div>
            <div className="fourh-grid">
              {fourH.map((item) => <article key={item.title} className={`fourh-card ${item.tone}`}><span>{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><ArrowUpRight /></article>)}
            </div>
          </div>
        </section>

        <section className="section learning-section" id="learning">
          <div className="section-kicker"><span>03</span><span>Learning, in motion</span></div>
          <div className="learning-heading"><h2>Strong foundations.<br /><em>Flexible futures.</em></h2><p>VSOP combines the warmth of an on-campus community with a blended learning model that helps learners build confidence across different environments.</p></div>
          <div className="learning-layout">
            <div className="learning-feature">
              <div className="feature-top"><span className="pill">Blended learning modality</span><span className="feature-number">03 / 04</span></div>
              <h3>More ways to learn,<br /><em>one shared purpose.</em></h3>
              <p>Four days onsite, one day synchronous online, and one day of asynchronous or off-screen activity sheets keep learning active, social, and sustainable.</p>
              <div className="rhythm"><div><strong>4</strong><span>onsite<br />class days</span></div><div><strong>1</strong><span>synchronous<br />online day</span></div><div><strong>1</strong><span>asynchronous<br />learning day</span></div></div>
            </div>
            <div className="curriculum-card">
              <div className="curriculum-tabs"><button className={curriculum === "k12" ? "selected" : ""} onClick={() => setCurriculum("k12")}>K–12</button><button className={curriculum === "matatag" ? "selected" : ""} onClick={() => setCurriculum("matatag")}>MATATAG</button></div>
              {curriculum === "k12" ? <><span className="mini-label">The broad view</span><h3>Competencies that connect.</h3><p>Broad subject areas, spiral progression, and predetermined modules stimulate intellectual curiosity, critical thinking, and problem-solving.</p></> : <><span className="mini-label">The focused view</span><h3>Foundations that endure.</h3><p>Decongested, integrated learning strengthens foundational skills, values formation, and the confidence to become job-ready.</p></>}
              <div className="curriculum-check"><Check size={15} /> Phased implementation starts with Kindergarten, Grades 1, 4, and 7.</div>
            </div>
          </div>
        </section>

        <section className="section campus-section" id="campus">
          <div className="campus-intro"><div className="section-kicker"><span>04</span><span>On campus</span></div><h2>Small spaces.<br /><em>Big possibility.</em></h2><p>Every room has a job in the learning journey — from the first question to the final reflection.</p><button className="round-link" onClick={() => scrollToId("connect")}><ArrowDownRight size={21} /></button></div>
          <div className="campus-photo"><img src="/manus-storage/library-learners_8f31597d.jpg" alt="Learners reading in a bright library" /><div className="photo-label">A place to wonder<br /><em>and belong.</em></div></div>
          <div className="campus-list">{campusSpaces.map(({ label, icon: Icon, detail }, index) => <div className="campus-item" key={label}><span className="campus-index">0{index + 1}</span><Icon size={20} /><div><strong>{label}</strong><p>{detail}</p></div><ArrowRight size={16} /></div>)}</div>
        </section>

        <section className="section people-section">
          <div className="section-kicker"><span>05</span><span>The people behind the promise</span></div>
          <div className="people-heading"><h2>Guided by care.<br /><em>Powered by a team.</em></h2><p>Teachers, leaders, specialists, and support staff work together so each learner feels known, challenged, and supported.</p></div>
          <div className="people-grid"><div className="faculty-card"><div className="faculty-card-top"><span className="pill">Leadership & support</span><Users size={21} /></div>{faculty.map((person) => <div className="faculty-row" key={person.role}><span>{person.role}</span><strong>{person.name}</strong></div>)}<button className="inline-arrow" onClick={() => toast("Faculty directory", { description: "A full faculty directory can be connected here." })}>Meet the full team <ArrowRight size={16} /></button></div><div className="departments-card"><span className="mini-label">Academic departments</span><h3>Many subjects.<br /><em>One shared standard.</em></h3><div className="department-tags"><span>English</span><span>Filipino</span><span>Mathematics</span><span>Science</span><span>Araling Panlipunan</span><span>TLE</span><span>ICT</span><span>MAPEH</span></div><div className="department-note"><Sparkles size={16} /><span>Learning is strongest when every discipline has room to contribute.</span></div></div></div>
        </section>

        <section className="section calendar-section">
          <div className="calendar-copy"><div className="section-kicker"><span>06</span><span>Keep the rhythm</span></div><h2>A school year with <em>shape.</em></h2><p>The three-term calendar gives learners clear moments to begin, deepen, share, and grow — with orientation days that bring families into the story from the start.</p><button className="text-link" onClick={() => toast("Academic calendar", { description: "Downloadable calendar files can be linked here." })}>View full calendar <ExternalLink size={15} /></button></div>
          <div className="calendar-visual"><div className="calendar-header"><CalendarDays size={19} /><span>Academic calendar · 3 term system</span></div><div className="term-row active"><span>01</span><div><strong>Opening block</strong><small>Students and parents orientation · June</small></div><b>JUN</b></div><div className="term-row"><span>02</span><div><strong>Build & deepen</strong><small>Core learning, clubs, and co-curricular practice</small></div><b>TERM</b></div><div className="term-row"><span>03</span><div><strong>Share & celebrate</strong><small>Assessment, reflection, and the next step</small></div><b>TERM</b></div><div className="calendar-footer"><span>Next up</span><strong>See you on June 18</strong><ArrowRight size={17} /></div></div>
        </section>

        <section className="safety-section">
          <div className="section safety-inner"><div className="safety-heading"><div className="section-kicker light"><span>07</span><span>A safe school is a learning school</span></div><h2>Care is a <em>practice.</em></h2><p>VSOP’s policies are designed to protect dignity, build trust, and keep the learning environment focused, inclusive, and motivating.</p></div><div className="policy-list">{[{ id: "safe", icon: ShieldCheck, title: "Child safeguarding", text: "A zero-tolerance stance on abuse, violence, exploitation, discrimination, bullying, and corporal punishment — supported by a functional Child Protection Committee." }, { id: "bullying", icon: HeartHandshake, title: "Anti-bullying", text: "Physical, verbal, social, cyber, and gender-based bullying are addressed through preventive lessons, clear reporting, and positive discipline." }, { id: "digital", icon: Laptop, title: "Digital wellbeing", text: "Phones and portable devices stay away during instructional hours except for emergencies or teacher-approved learning activities." }].map(({ id, icon: Icon, title, text }) => <div className={`policy-item ${openPolicy === id ? "open" : ""}`} key={id}><button onClick={() => setOpenPolicy(openPolicy === id ? null : id)}><span className="policy-icon"><Icon size={18} /></span><strong>{title}</strong><ChevronDown size={18} /></button>{openPolicy === id && <p>{text}</p>}</div>)}</div></div>
        </section>

        <section className="section student-section" id="student-life">
          <div className="section-kicker"><span>08</span><span>Student life</span></div>
          <div className="student-heading"><h2>Find your people.<br /><em>Find your play.</em></h2><p>Clubs, organizations, and sports help learners practice leadership in the most memorable way: by doing something together.</p></div>
          <div className="sport-feature"><div className="sport-photo"><img src="/manus-storage/sports-team_87957963.jpg" alt="Students celebrating together after a sports game" /><div className="sport-overlay" /><span className="sport-photo-label">Play is a serious<br /><em>way to grow.</em></span></div><div className="sport-copy"><span className="pill green-pill">Sports & movement</span><h3>Compete with character.</h3><p>From first practice to game day, our sports program builds discipline, collaboration, resilience, and respect.</p><div className="sports-grid">{sports.map((sport) => <div key={sport.name} className={`sport-card ${sport.tint}`}><Trophy size={17} /><strong>{sport.name}</strong><span>{sport.note}</span></div>)}</div><button className="inline-arrow" onClick={() => toast("Sports program", { description: "Team schedules and coach contacts can be added here." })}>Explore team life <ArrowRight size={16} /></button></div></div>
          <div className="club-row"><div><span className="mini-label">Clubs & organizations</span><h3>There’s a place for every spark.</h3></div><div className="club-tags">{clubs.map((club) => <span key={club}>{club}</span>)}</div></div>
        </section>

        <section className="section admissions-section" id="admissions">
          <div className="admissions-panel"><div className="section-kicker light"><span>09</span><span>Start here</span></div><h2>Bring your next<br /><em>chapter to life.</em></h2><p>For Grade 7 applicants, the essentials are simple. Our team is here to help families understand the process, explore ESC support, and find the right fit.</p><button className="button button-light" onClick={() => scrollToId("connect")}>Ask about admissions <ArrowRight size={16} /></button></div><div className="requirements-card"><div className="requirements-top"><span className="pill">Grade 7 requirements</span><span>2026–27</span></div><ul><li>Report card (SF9)</li><li>PSA birth or baptismal certificate</li><li>SF10, upon request</li><li>Student enrolment form</li><li>Certificate of indigency / non-filing of tax</li><li>2×2 photos · 2 pieces</li><li>ESC form, if applicable</li></ul><div className="esc-note"><Check size={16} /><span>Ask us about the Educational Service Contracting program and available subsidy guidance.</span></div></div>
        </section>

        <section className="section connect-section" id="connect">
          <div className="connect-copy"><div className="section-kicker"><span>10</span><span>Let’s connect</span></div><h2>Come see the<br /><em>V.S.O.P in action.</em></h2><p>Questions about the program, the campus, or finding your place at VSOP? Start a conversation with our admissions team.</p><div className="contact-details"><div><span>Find us</span><strong>Block 6 Lot 8, Durian St.<br />Violago Homes, Parkwood Hills</strong></div><div><span>Reach us</span><strong>Call the school office<br />or message on Facebook</strong></div></div></div><form className="tour-form" onSubmit={handleTourRequest}><div className="form-label">Request a school visit <Sparkles size={15} /></div><label>Your name<input required name="name" placeholder="Parent or guardian name" /></label><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>What can we help with?<select name="interest" defaultValue="visit"><option value="visit">Plan a campus visit</option><option value="admissions">Ask about admissions</option><option value="sports">Ask about sports & clubs</option><option value="other">Something else</option></select></label><button className="button button-dark" type="submit">Send enquiry <ArrowRight size={16} /></button><small>We’ll use your details only to respond to this enquiry.</small></form>
        </section>
      </main>

      <footer className="site-footer"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark"><Leaf size={19} strokeWidth={2.4} /></span><span><strong>Village School</strong><small>of Parkwoods, Inc.</small></span></a><p>Education as an instrument for change.<br />Learning as a way to serve.</p><div className="footer-links"><a href="#story">Our story</a><a href="#learning">Learning</a><a href="#student-life">Sports & clubs</a><a href="#admissions">Admissions</a></div><div className="footer-social"><button aria-label="Message the school" onClick={() => scrollToId("connect")}><MessageCircle size={18} /></button><button aria-label="Visit the school Facebook page" onClick={() => toast("Facebook", { description: "Connect this button to the school’s official Facebook page." })}><ExternalLink size={17} /></button></div></div><div className="footer-bottom"><span>© 2026 Village School of Parkwoods, Inc.</span><span>Learn · Lead · Belong</span><span>Built around the 4H’s</span></div></footer>
    </div>
  );
}
