// pages/LandingPage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/landingpage.css';

function LandingPage() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Your Learning Journey Starts Here</h1>
          <p className="hero-subtitle">
            We connect Tier 2 & Tier 3 college students with IITians and mentors to guide them.
          </p>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hero-image">
  <img
    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    alt="Learning"
  />
  <img
    src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
    alt="Mentorship"
  />
</div>

      </section>

      {/* Why Join Us */}
      <section className="why-join" id="why">
        <h2 className="section-title">Why Join Us?</h2>
        <div className="cards">
          <div className="card">
            <h3>Curated Content</h3>
            <p>Get access to handpicked study materials and guidance.</p>
          </div>
          <div className="card">
            <h3>Free & Premium Resources</h3>
            <p>Find free and exclusive premium materials from mentors.</p>
          </div>
          <div className="card">
            <h3>Peer Community</h3>
            <p>Connect with others and grow together through our platform.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">What You'll Get</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Live Doubt Support</h3>
            <p>Ask questions and get answers from mentors instantly.</p>
          </div>
          <div className="feature">
            <h3>Career Roadmaps</h3>
            <p>Structured paths to prepare for SDE, GATE, MBA, and more.</p>
          </div>
          <div className="feature">
            <h3>Workshops & Events</h3>
            <p>Attend webinars, hackathons, and guidance sessions.</p>
          </div>
          <div className="feature">
            <h3>Internship Updates</h3>
            <p>Stay informed with curated internship opportunities weekly.</p>
          </div>
          <div className="feature">
            <h3>Mentor Connect</h3>
            <p>Book sessions with IITian mentors for personalized guidance.</p>
          </div>
          <div className="feature">
            <h3>Study Groups</h3>
            <p>Collaborate in groups to stay accountable and consistent.</p>
          </div>
          <div className="feature">
            <h3>Resume & Profile Review</h3>
            <p>Get expert feedback to improve your resume and LinkedIn.</p>
          </div>
          <div className="feature">
            <h3>Mock Interviews</h3>
            <p>Practice with mentors and boost your interview confidence.</p>
          </div>
          <div className="feature">
            <h3>Tech Challenges</h3>
            <p>Participate in regular problem-solving and coding contests.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Users Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"This platform gave me the right guidance at the right time."</p>
            <strong>- Rahul, Student</strong>
          </div>
          <div className="testimonial">
            <p>"Great initiative for underrepresented colleges!"</p>
            <strong>- Priya, Mentor</strong>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-banner">
        <h2 className="section-title">Ready to begin your journey?</h2>
        <p>Join our supportive student-mentor community today.</p>
        <button className="cta-button">Join Now</button>
      </section>

      <Footer />
    </div>
  );
}

export default LandingPage;
