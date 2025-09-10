import React, { useState, useEffect } from 'react';
import {
  TrendingUp,
  Shield,
  Smartphone,
  BarChart3,
  PieChart,
  DollarSign,
  Users,
  Award,
  Download,
  Menu,
  X,
  ArrowRight,
  Star,
  CheckCircle
} from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'about', 'screenshots', 'download'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const features = [
    {
      icon: <TrendingUp />,
      title: "Smart Analytics",
      description: "Advanced AI-powered analytics to track your portfolio performance and market trends in real-time."
    },
    {
      icon: <Shield />,
      title: "Bank-Level Security",
      description: "Your investments are protected with military-grade encryption and multi-factor authentication."
    },
    {
      icon: <BarChart3 />,
      title: "Portfolio Management",
      description: "Diversify your investments across stocks, bonds, mutual funds, and cryptocurrencies with ease."
    },
    {
      icon: <PieChart />,
      title: "Risk Assessment",
      description: "Intelligent risk profiling helps you make informed decisions based on your financial goals."
    },
    {
      icon: <DollarSign />,
      title: "Low Fees",
      description: "Competitive pricing with transparent fee structure. No hidden charges, ever."
    },
    {
      icon: <Users />,
      title: "Expert Guidance",
      description: "Access to certified financial advisors and investment experts whenever you need guidance."
    }
  ];

  const achievements = [
    { number: "500K+", label: "Active Users" },
    { number: "2B+", label: "Assets Managed" },
    { number: "4.8★", label: "App Rating" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/01 (1).png" alt="Logo" className="logo-img" />
          </div>


          <div className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <a
              href="#home"
              className={activeSection === 'home' ? 'nav-link active' : 'nav-link'}
              onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}
            >
              Home
            </a>
            <a
              href="#features"
              className={activeSection === 'features' ? 'nav-link active' : 'nav-link'}
              onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}
            >
              Features
            </a>
            <a
              href="#about"
              className={activeSection === 'about' ? 'nav-link active' : 'nav-link'}
              onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}
            >
              About
            </a>
            <a
              href="#screenshots"
              className={activeSection === 'screenshots' ? 'nav-link active' : 'nav-link'}
              onClick={(e) => { e.preventDefault(); scrollToSection('screenshots'); }}
            >
              Screenshots
            </a>
            <button
              className="download-btn-nav"
              onClick={() => scrollToSection('download')}
            >
              Download Apk
            </button>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">
                Invest Smarter with
                <span className="hero-title-accent"> MNYMKT</span>
              </h1>
              <p className="hero-description">
                Take control of your financial future with our AI-powered investment platform.
                Start building wealth with as little as $1 and get expert guidance every step of the way.
              </p>
              <div className="hero-features">
                <div className="hero-feature">
                  <CheckCircle className="hero-feature-icon" />
                  <span>Zero commission trading</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle className="hero-feature-icon" />
                  <span>24/7 customer support</span>
                </div>
                <div className="hero-feature">
                  <CheckCircle className="hero-feature-icon" />
                  <span>SEC regulated platform</span>
                </div>
              </div>
              <div className="hero-actions">
                <button
                  className="cta-button primary"
                  onClick={() => scrollToSection('download')}
                >
                  <Download />
                  Download Apk

                </button>
                {/* <button
                  className="cta-button secondary"
                  onClick={() => scrollToSection('about')}
                >
                  Learn More
                </button> */}
              </div>
            </div>
            <div className="hero-image-wrapper">
              <div className="hero-image">
                <img
                  src="/stock-5275746_1280.jpg"
                  alt="MnyMkt App Interface"
                  className="phone-screen"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title gradient-text">Why Choose MnyMkt?</h2>
            <p className="section-description gradient-subtext">
              Powerful features designed to help you grow your wealth and achieve your financial goals.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="achievements">
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement">
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2 className="section-title">About MnyMkt</h2>
              <p className="about-description">
                Founded in 2020, MnyMkt has revolutionized the way people approach investing.
                Our mission is to democratize financial markets and make investing accessible to everyone,
                regardless of their experience level or account size.
              </p>
              <div className="about-highlights">
                <div className="highlight">
                  <Award className="highlight-icon" />
                  <div>
                    <h4>Award Winning Platform</h4>
                    <p>Recognized as "Best Investment App 2024" by FinTech Awards</p>
                  </div>
                </div>
                <div className="highlight">
                  <Shield className="highlight-icon" />
                  <div>
                    <h4>Fully Regulated</h4>
                    <p>SEC registered and SIPC protected up to 500,000</p>
                  </div>
                </div>
                <div className="highlight">
                  <Users className="highlight-icon" />
                  <div>
                    <h4>Trusted by Millions</h4>
                    <p>Over 500,000 active users trust us with their investments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img
                src="https://images.pexels.com/photos/6801872/pexels-photo-6801872.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Financial team working"
                className="about-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section id="screenshots" className="screenshots">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">See MnyMkt in Action</h2>
            <p className="section-description">
              Discover how our intuitive interface makes investing accessible and enjoyable.
            </p>
          </div>

          <div className="screenshots-grid">
            <div className="screenshot-item">
              <div className="phone-frame">
                <div className="screenshot-mockup">
                  <img src="/Screenshot_1757490342.png" alt="Portfolio Dashboard" className="screenshot-img" />
                </div>
              </div>

            </div>

            <div className="screenshot-item">
              <div className="phone-frame">
                <div className="screenshot-mockup">
                  <img src="/WhatsApp Image 2025-09-08 at 6.07.30 PM.jpeg" alt="Portfolio Dashboard" className="screenshot-img" />
                </div>
              </div>

            </div>

            {/* Screenshot 2 */}
            <div className="screenshot-item">
              <div className="phone-frame">
                <div className="screenshot-mockup">
                  <img src="/WhatsApp Image 2025-09-08 at 6.07.32 PM.jpeg" alt="Market Analysis" className="screenshot-img" />
                </div>
              </div>

            </div>

            {/* Screenshot 3 */}
            <div className="screenshot-item">
              <div className="phone-frame">
                <div className="screenshot-mockup">
                  <img src="/photo-3.jpeg" alt="Easy Trading" className="screenshot-img" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Download Section */}
      <section id="download" className="download">
        <div className="container">
          <div className="download-content">
            <div className="download-text">
              <h2 className="section-title">Ready to Start Investing?</h2>
              <p className="download-description">
                Join thousands of investors who are already building their wealth with MnyMkt.
                Download our app today and start your investment journey with confidence.
              </p>
              <div className="download-features">
                <div className="download-feature">
                  <Star className="download-feature-icon" />
                  <span>4.8 star rating on Google Play</span>
                </div>
                <div className="download-feature">
                  <Shield className="download-feature-icon" />
                  <span>Bank-level security guaranteed</span>
                </div>
                <div className="download-feature">
                  <Smartphone className="download-feature-icon" />
                  <span>Works on all Android devices</span>
                </div>
              </div>
              <div className="download-buttons">
                <a
                  href="https://play.google.com/store"
                  className="download-btn android"
                  target="_blank"
                  rel="noopener noreferrer"
                >

                </a>
              </div>
            </div>
            <div className="download-visual">
              <div className="floating-phone">
                <div className="phone-mockup download-phone">
                  <img
                    src="/ChatGPT Image Sep 9, 2025, 01_57_09 PM.png"
                    alt="MnyMkt Mobile App"
                    className="phone-screen"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="footer-logo">
            <img src="/Logo.png" alt="Logo" className="logo-img" />
                <span>MNYMKT</span>
              </div>
              <p className="footer-description">
                Empowering investors with smart, secure, and simple investment solutions.
              </p>
            </div>
            <div className="footer-links">
              <div className="footer-column">
                <h4>Product</h4>
                <a href="#features">Features</a>
                <a href="#screenshots">Screenshots</a>
                <a href="#download">Download</a>
              </div>
              <div className="footer-column">
                <h4>Company</h4>
                <a href="#about">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Contact</a>
              </div>
              <div className="footer-column">
                <h4>Legal</h4>
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Disclaimer</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 MnyMkt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;