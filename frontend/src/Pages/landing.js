import React from "react";
import "../styles/landing.css";

const Landing = () => {
  return (
    <div className="landing-container">
      {/* 🚀 Hero Section */}
      <section className="hero-section">
        <h1>🚀 Your Learning Journey Starts Here</h1>
        <p>
          LearnHub empowers tech students with curated content, structured
          roadmaps, real-world mentorship, and a growing developer community.
        </p>
        <a href="/register" className="cta-button">
          Join Free
        </a>
      </section>

      {/* 🌟 Features Section */}
      <section className="features-section">
        <h2>Why Choose LearnHub?</h2>
        <div className="features-grid">
          {[
            {
              icon: "📚",
              title: "Curated Roadmaps",
              description:
                "Follow step-by-step learning paths designed by industry experts and top students.",
            },
            {
              icon: "🧠",
              title: "Mentorship",
              description:
                "Connect with final-year mentors and alumni to get personalized guidance.",
            },
            {
              icon: "💡",
              title: "Community Support",
              description:
                "Join active chatrooms, forums, and study groups to collaborate and grow.",
            },
            {
              icon: "🎯",
              title: "Career Prep",
              description:
                "Access interview prep, resume reviews, and placement tips from experts.",
            },
          ].map((feature, index) => (
            <div className="feature-card" key={index}>
              <h3>{`${feature.icon} ${feature.title}`}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🗣️ Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Students Say</h2>
        <div className="testimonial-cards">
          {[
            {
              quote:
                "LearnHub helped me crack my first internship and polish my GitHub profile. Must use!",
              author: "Riya Singh",
            },
            {
              quote:
                "The roadmap really cleared my confusion on what to learn when. Super clean!",
              author: "Mohit Sharma",
            },
            {
              quote:
                "Mentorship sessions were a game changer for me. Highly recommend LearnHub.",
              author: "Anjali Patel",
            },
          ].map((testimonial, index) => (
            <blockquote key={index}>
              “{testimonial.quote}”
              <footer>— {testimonial.author}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* 📣 Call to Action Section */}
      <section className="cta-section">
        <h2>Ready to start your dream career in tech?</h2>
        <p>Sign up, choose your path, and let’s get learning together.</p>
        <a href="/register" className="cta-button">
          Join as Student or Mentor
        </a>
      </section>
    </div>
  );
};

export default Landing;
