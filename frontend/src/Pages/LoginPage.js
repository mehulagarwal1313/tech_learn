import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/login.css';

function LoginPage() {
  const [role, setRole] = useState('student');
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });

  const history = useHistory();

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(prev => !prev);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (role === 'student') history.push('/student/dashboard');
    else history.push('/mentor/dashboard');
  };

  const handleGoogleLogin = () => {
    alert('Google login triggered!');
  };

  return (
    <div
      className="login-wrapper"
      style={{
        backgroundImage: `url('/images/bg-login.jpg')`, // ✅ image from public/images/
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="login-overlay" />
      <div className="login-card">
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Log in to your EduMentor account</p>

        <div className="role-toggle">
          <button className={role === 'student' ? 'active' : ''} onClick={() => setRole('student')}>Student</button>
          <button className={role === 'mentor' ? 'active' : ''} onClick={() => setRole('mentor')}>Mentor</button>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={loginData.email}
            onChange={handleChange}
            required
          />

          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={handleChange}
            required
          />

          <span className="toggle-password" onClick={togglePassword}>
            {showPassword ? '🙈 Hide' : '👁️ Show'}
          </span>

          <button type="submit" className="login-btn">
            Login as {role}
          </button>
        </form>

        <div className="google-divider">or</div>

        <button className="google-btn" onClick={handleGoogleLogin}>
          <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google" />
          Login with Google
        </button>

        <p className="login-footer">
          Don’t have an account? <a href="/register">Sign up here</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
