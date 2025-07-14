// pages/RegisterPage.js
import React, { useState } from 'react';
import '../styles/register.css';

function RegisterPage() {
  const [role, setRole] = useState('student');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    college: '',
    branch: '',
    year: '',
    goal: '',
    organization: '',
    expertise: '',
    linkedin: '',
    preparation: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { role, ...formData });
  };

  // ✅ Set inline background using PUBLIC_URL
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/register-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundBlendMode: 'darken',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  };

  return (
    <div className="register-container" style={backgroundStyle}>
      <h1 className="register-title">Create Your Space</h1>

      <div className="role-toggle">
        <button onClick={() => setRole('student')} className={role === 'student' ? 'active' : ''}>Student</button>
        <button onClick={() => setRole('mentor')} className={role === 'mentor' ? 'active' : ''}>Mentor</button>
      </div>

      <form className="register-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />

        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <span className="toggle-password" onClick={togglePassword}>{showPassword ? '🙈' : '👁️'}</span>
        </div>

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        {role === 'student' && (
          <>
            <input type="text" name="college" placeholder="College Name" value={formData.college} onChange={handleChange} required />
            <input type="text" name="branch" placeholder="Branch (e.g., CSE, ECE)" value={formData.branch} onChange={handleChange} required />
            <input type="text" name="year" placeholder="Year of Study (e.g., 2nd Year)" value={formData.year} onChange={handleChange} required />
            <input type="text" name="goal" placeholder="Career Goal (e.g., SDE, GATE, MBA)" value={formData.goal} onChange={handleChange} />
            <input type="text" name="preparation" placeholder="What are you preparing for?" value={formData.preparation} onChange={handleChange} />
          </>
        )}

        {role === 'mentor' && (
          <>
            <input type="text" name="organization" placeholder="Current Organization" value={formData.organization} onChange={handleChange} required />
            <input type="text" name="expertise" placeholder="Expertise Areas (e.g., DSA, ML, Core)" value={formData.expertise} onChange={handleChange} required />
            <input type="url" name="linkedin" placeholder="LinkedIn Profile (optional)" value={formData.linkedin} onChange={handleChange} />
          </>
        )}

        <button type="submit" className="submit-btn">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
