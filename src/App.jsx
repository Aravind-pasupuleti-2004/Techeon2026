import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

import blankImage from "./assets/cbit2.jpg";
import cbitLogo from "./assets/cbit2.jpg";
import techeonlogo from "./assets/techeon.jpeg";
import posterlogo from "./assets/poster.jpeg";
import paperlogo from "./assets/paper.jpeg";
import ideathonlogo from "./assets/ideathon.png";
import gtf from "./assets/ideathon.png";
import snde from "./assets/ideathon.png";
import mm from "./assets/ideathon.png";
import tm from "./assets/ideathon.png";
import cf from "./assets/ideathon.png";
/* ================= EVENTS DATA ================= */

const events = [
  {
    id: "paper-presentation",
    title: "Paper Presentation",
    faculty: "Dr B Indira",
    facultyPhone: "9848952195",
    image: paperlogo,
    facultyEmail: "bindira_mca@cbit.ac.in",
    students: [
      { name: "Karunakar", phone: "8179248764" },
      { name: "Rahul", phone: "6305408936" },
      { name: "Alpa", phone: "9874687716" }
    ],
    description: "Present your technical papers and research.",
    fulldesc:`🚀 PAPER PRESENTATION EVENT – 2026 🚀
✨ Turn Your Ideas into Impact ✨

Are you ready to showcase your research, innovation, and technical expertise?
This is your opportunity to present your paper, gain academic recognition, and add strong value to your resume.

Join us for the Paper Presentation Event – 2026, where students can present research papers on emerging technologies and trending technical domains, strictly following the IEEE format.

📌 Don’t miss this chance to learn, present, and get recognized.


🌟 Why You Should Participate

🏅 Participation Certificate – Useful for resume & placements
💰 Cash Prizes – For best paper presentations
📚 Academic Exposure – Experience real IEEE research standards
🧠 Technical Knowledge – Explore latest technologies
🗣️ Presentation Skills – Boost confidence & communication
🎓 Career Growth – Helpful for placements & higher studies


💳 Registration Fee

🔹 ₹400 per paper / per team
🔹 Team size: 1–5 members
🔹 Single payment covers the entire team
🔹 No extra charges per participant


📝 Simple Registration & Payment Process

Step 1 – Submit Abstract (Compulsory)
👉 Fill the registration form and upload your abstract:
🔗 click the below register now button

Step 2 – Wait for Approval
📩 Only shortlisted teams will receive abstract approval confirmation.

Step 3 – Make Payment (After Approval Only)

💳 After approval, participants must:
Complete payment using this form:
🔗 https://forms.gle/LMDY8x1wxNANwRCQ8

`,
    icon: "📄",
    color: "green",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLScgAUgZkZ2lzU_h_UpQtpV0jyVKfsr5rxVY6HR83Kj3p5RACA/viewform"
  },
  {
    id: "poster-presentation",
    title: "Poster Presentation",
    faculty: "Dr G.N.R Prasad",
    facultyPhone: "9885191683",
    facultyEmail: "gnrp@cbit.ac.in",
    image: posterlogo,
    students: [
      { name: "Amulya", phone: "8919714896" },
      { name: "Ajay Chandu", phone: "8247255902" },
      { name: "Prashanth", phone: "8125724950" }
    ],
    description: "Present innovative ideas through creative poster designs.",
    fulldesc: `Techeon 2026: Technical Poster Presentation

As part of our Techeon 2026 event, we are organizing a Technical Poster Presentation open to all students to showcase innovative ideas and research. This event promotes knowledge sharing and creativity through visually engaging posters. 

Event Details:
Event Date: Feb 17, 2026
Theme: Innovative Ideas & Research
Evaluation Criteria: Clarity, Originality, and Impact

Awards & Rewards:
Can give an added weightage to your resume
Participation: 🏅 Every participant gets a Participation Certificate!
Winner’s Reward: 💰 Thrilling Cash Prizes await the winners!

Registration Details:
Team size : 1-4
Per Team: ₹400

Note: The amount is non-refundable.
`,
    icon: "🎨",
    color: "cyan",
    registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSf7l8sBv3k5HfrGMx-glyq4E0nqfDcSVT3D6uN_cFx9NjeK9w/viewform?usp=header"
  },
  {
    id: "ideathon",
    title: "Ideathon",
    faculty: "Dr G.N.R Prasad",
    facultyPhone: "9885191683",
    facultyEmail: "gnrp@cbit.ac.in",
    image: ideathonlogo,
    students: [
      { name: "Aravind", phone: "7396268728" },
      { name: "Isaac", phone: "6305781879" },
      { name: "Ashish", phone: "7989247815" }
    ],
    description: "Problem-solving challenges with innovative thinking.",
    fulldesc:`Techeon 2026: Ideathon

As part of Techeon 2026, the Department of MCA proudly presents an Ideathon, a platform for students to propose innovative, technology-driven solutions to real-world problems. This event encourages creativity, critical thinking, and problem-solving through structured idea pitching and solution design.

Event Details

Event Date: February 17, 2026

Theme: Innovation for Real-World Impact

Rounds: 2

Round 1: Idea Pitch

Round 2: Solution Design & Final Pitch

Evaluation Criteria: Innovation, Feasibility, Clarity, and Impact

Awards & Rewards

⭐ Adds value to your resume

🏅 Participation Certificate for all participants

💰 Exciting Cash Prizes for winning teams

Registration Details

Team Size: 1–5 members

Registration Fee: ₹200 per team

Note: The registration fee is non-refundable`,
    icon: "💡",
    color: "yellow",
    registrationLink: "https://forms.gle/ideathon2026"
  },
  {
    id: "sound-engineer",
    title: "Sound Engineering",
    faculty: "Mr P Rambabu",
    facultyPhone: "9492104200",
    facultyEmail: "rambabup_mca@cbit.ac.in",
    students: [
      { name: "Akhila", phone: "9182109115" },
      { name: "Ramya", phone: "7075758038" },
      { name: "Nikitha", phone: "9951861525" }
    ],
    description: "Technical event focusing on audio engineering skills.",
    fulldesc:"",
    icon: "🎵",
    image: snde,
    color: "blue",
    registrationLink: "https://forms.gle/soundEngineering2026"
  },
  {
    id: "guess-the-flick",
    title: "Guess the Flick",
    faculty: "Dr M Ramchander",
    facultyPhone: "9703144559",
    facultyEmail: "mramchander_mca@cbit.ac.in",
    students: [
      { name: "Raju", phone: "9666100814" },
      { name: "Pranav", phone: "9959676739" },
      { name: "Dheeraj", phone: "6309335222" }
    ],
    description: "Movie-based guessing game with technical twists.",
    fulldesc:"",
    image: gtf,
    icon: "🎬",
    color: "pink",
    registrationLink: "https://forms.gle/guessTheFlick2026"
  },
  {
    id: "memory-masters",
    title: "Memory Masters",
    faculty: "Mr P Rambabu",
    facultyPhone: "9492104200",
    facultyEmail: "rambabup_mca@cbit.ac.in",
    students: [
      { name: "Deepika", phone: "9704347266" },
      { name: "Supriya", phone: "7842126928" },
      { name: "Shivani", phone: "8639712033" }
    ],
    description: "Test your memory with challenging brain teasers.",
    fulldesc:"",
    icon: "🧠",
    image: mm,
    color: "purple",
    registrationLink: "https://forms.gle/memoryMasters2026"
  },
  {
    id: "tech-matrix",
    title: "Tech Matrix",
    faculty: "Dr B Indira",
    facultyPhone: "9848952195",
    facultyEmail: "bindira_mca@cbit.ac.in",
    students: [
      { name: "Kalyani", phone: "9347391980" },
      { name: "Komal Rathod", phone: "9121449510" },
      { name: "Poshitha", phone: "9440905873" }
    ],
    description: "Logical problem-solving and technical challenges.",
    fulldesc:"",
    icon: "🔢",
    image: tm,
    color: "orange",
    registrationLink: "https://forms.gle/techMatrix2026"
  },
  {
    id: "code-cipher",
    title: "Code Cipher",
    faculty: "Dr M Ramchander",
    facultyPhone: "9703144559",
    facultyEmail: "mramchander_mca@cbit.ac.in",
    students: [
      { name: "Sumesh Singh", phone: "7288081868" },
      { name: "Mukesh Vardhan", phone: "6305596725" },
      { name: "Venkatesh P", phone: "8897087598" }
    ],
    description: "Solve complex coding challenges and algorithms.",
    fulldesc:"",
    icon: "💻",
    image: cf,
    color: "red",
    registrationLink: "https://forms.gle/codeCipher2026"
  }
];

/* ================= HOME ================= */

function Home() {
  const [visible, setVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="page-wrapper">
      <div className="dynamic-background">
        <div className="bg-grid"></div>
        <div
          className="bg-gradient-orb"
          style={{ left: mousePosition.x, top: mousePosition.y }}
        ></div>
        <div className="scanline"></div>
      </div>

      <header className="main-header">
        <div className="header-container">
          <div className="logo-container left-logo">
            <div className="logo-placeholder cbit-logo">
              <img src={cbitLogo} alt="CBIT" className="header-logo-img" />
            </div>
          </div>

          <div className={`brand-center ${visible ? "visible" : ""}`}>
            <div className="techeon-logo-container">
              <div className="logo-placeholder techeon-logo">
                <span className="sudhee-text">SUDHEE 2026</span>
              </div>
            </div>

            <div className="brand-tagline">
              <span className="tagline-highlight">Department Of MCA Presents</span>
            </div>

            <h1 className="brand-title">TECHEON</h1>
            <div className="brand-year">2026</div>

            <div className="brand-tagline">
              <span className="tagline-highlight">
                Chaitanya Bharathi Institute Of Technology
              </span>
            </div>
          </div>

          <div className="logo-container right-logo">
            <div className="logo-placeholder techeon-logo-small">
              <img src={techeonlogo} alt="Techeon" className="header-logo-img" />
            </div>
          </div>
        </div>
      </header>

      <main className="events-container">
        <div className="section-header">
          <h2 className="section-title">FEATURED EVENTS</h2>
          <div className="title-underline"></div>
        </div>

        <div className="events-grid">
          {events.map((event, index) => (
            <Link
              key={event.id}
              to={`/event/${event.id}`}
              className={`event-box ${event.color} ${visible ? "visible" : ""}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="event-corner top-left"></div>
              <div className="event-corner top-right"></div>
              <div className="event-corner bottom-left"></div>
              <div className="event-corner bottom-right"></div>

              <div className="event-glow"></div>

              <div className="event-logo-section">
                <div className="event-logo-placeholder">
                  <img
                       src={event.image}
                       alt=""
                       className="event-logo-img"
                  />
                </div>
              </div>

              <div className="event-content">
                <h3 className="event-name">{event.title}</h3>
                <div className="event-faculty-info">
                  <span className="faculty-label">Faculty:</span>
                  <span className="faculty-name">{event.faculty}</span>
                </div>
                <p className="event-desc">{event.description}</p>

                <div className="event-action">
                  <span className="action-text">VIEW DETAILS</span>
                  <span className="action-arrow">→</span>
                </div>
              </div>

              <div className="event-number">
                {String(index + 1).padStart(2, "0")}
              </div>
            </Link>
          ))}
        </div>
        {/* ================= ABOUT TECHEON ================= */}
<section className="about-techeon">
  <div className="about-container">
    <h2 className="about-title">ABOUT TECHEON</h2>
    <div className="about-underline"></div>

    <p className="about-text">
      <strong>Event Description:</strong> TECHEON 2026, part of CBIT's
      <strong> SUDHEE 2026</strong> technical fest, organized by the
      <strong> Department of MCA</strong>, is a dynamic event encompassing
      various technical challenges and competitions.
    </p>

    <p className="about-text">
      It features engaging activities such as <strong>Paper Presentations</strong>,
      <strong> Poster Presentations </strong>, <strong> Tech Matrix </strong>,
      <strong> The Memory Masters </strong>, <strong> Code Ciphers </strong>,
      <strong> Sound Engineer </strong>, <strong> Ideathon </strong>,and
      <strong> Guess The Flick </strong>
      catering to the diverse interests and talents of participants.
    </p>

    <p className="about-text">
      <strong>Purpose:</strong> The primary purpose of TECHEON 2026 is to
      provide a platform for students to demonstrate their technical prowess,
      fostering innovation and collaboration within the academic community.
      By showcasing their skills and knowledge, participants gain recognition,
      network with peers, and deepen their understanding of technical concepts
      and real-world applications.
    </p>
  </div>
</section>

        {/* ================= EVENT COORDINATORS ================= */}
        <section className="event-coordinators-section">
          <div className="coordinators-container">
            <h2 className="coordinators-title">EVENT COORDINATORS</h2>
            <div className="coordinators-underline"></div>
            
            <div className="coordinators-grid">
              <div className="coordinator-card">
                <div className="coordinator-card-glow"></div>
                <div className="coordinator-icon">👤</div>
                <h3 className="coordinator-name">Adep Ajay</h3>
                <div className="coordinator-contact">
                  <span className="contact-label">Contact:</span>
                  <span className="contact-value">8247335709</span>
                </div>
              </div>

              <div className="coordinator-card">
                <div className="coordinator-card-glow"></div>
                <div className="coordinator-icon">👤</div>
                <h3 className="coordinator-name">K Tejaswi</h3>
                <div className="coordinator-contact">
                  <span className="contact-label">Contact:</span>
                  <span className="contact-value">7601087761</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="page-footer">
        <div className="footer-glow"></div>
        <p>TECHEON 2026 © Chaitanya Bharathi Institute of Technology</p>
      </footer>
    </div>
  );
}

/* ================= EVENT DETAILS ================= */

function EventDetails() {
  const { id } = useParams();
  const event = events.find((e) => e.id === id);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    window.scrollTo(0, 0);
  }, []);

  if (!event) {
    return (
      <div className="not-found-container">
        <h2>EVENT NOT FOUND</h2>
        <Link to="/" className="return-link">← RETURN TO HOME</Link>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="dynamic-background">
        <div className="bg-grid"></div>
        <div className="scanline"></div>
      </div>

      <div className={`event-detail-page ${visible ? "visible" : ""}`}>
        <Link to="/" className="back-button">
          <span className="back-icon">←</span>
          <span>BACK TO EVENTS</span>
        </Link>

        <div className={`detail-hero ${event.color}`}>
          <div className="detail-hero-glow"></div>
          <span className="detail-icon">{event.icon}</span>
          <h1 className="detail-event-title">{event.title}</h1>
          <p className="detail-event-description">{event.fulldesc}</p>
        </div>

        <div className="coordinators-section">
          <div className="coordinator-panel faculty-panel">
            <div className="panel-header">
              <span className="panel-icon">👨‍🏫</span>
              <h3>FACULTY COORDINATOR</h3>
            </div>
            <div className="coordinator-info-box">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">{event.faculty}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Contact:</span>
                <span className="info-value">{event.facultyPhone}</span>
              </div>
              <div className="info-row">
                <span className="info-label">Email:</span>
                <span className="info-value">{event.facultyEmail}</span>
              </div>
            </div>
          </div>

          <div className="coordinator-panel student-panel">
            <div className="panel-header">
              <span className="panel-icon">👥</span>
              <h3>STUDENT COORDINATORS</h3>
            </div>
            {event.students.map((student, index) => (
              <div key={index} className="coordinator-info-box">
                <div className="info-row">
                  <span className="info-label">Name:</span>
                  <span className="info-value">{student.name}</span>
                </div>
                <div className="info-row">
                  <span className="info-label">Contact:</span>
                  <span className="info-value">{student.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`registration-panel ${event.color}`}>
          <div className="registration-glow"></div>
          <div className="registration-content">
            <h3 className="registration-heading">READY TO PARTICIPATE?</h3>
            <p className="registration-text">
              Join {event.title} and showcase your skills at TECHEON 2026!
            </p>
            <a 
              href={event.registrationLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="registration-cta"
            >
              <span className="cta-icon">🚀</span>
              <span className="cta-text">REGISTER NOW</span>
              <span className="cta-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:id" element={<EventDetails />} />
      </Routes>
    </Router>
  );
}
