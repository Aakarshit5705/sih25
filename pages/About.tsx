"use client"

import type React from "react"
import "./About.css"

const About: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Priya Sharma",
      role: "Founder & CEO",
      description: "Former IIT professor with 15+ years in education technology",
      image: "/team-member-1.jpg",
      expertise: ["Education Technology", "Career Counseling", "AI in Education"],
    },
    {
      name: "Rajesh Kumar",
      role: "Head of Technology",
      description: "Ex-Google engineer specializing in AI and machine learning",
      image: "/team-member-2.jpg",
      expertise: ["Artificial Intelligence", "Machine Learning", "Full Stack Development"],
    },
    {
      name: "Dr. Anita Verma",
      role: "Chief Academic Officer",
      description: "Educational psychologist with expertise in career guidance",
      image: "/team-member-3.jpg",
      expertise: ["Educational Psychology", "Career Assessment", "Student Counseling"],
    },
    {
      name: "Vikram Singh",
      role: "Product Manager",
      description: "Product strategist focused on student experience and engagement",
      image: "/team-member-4.jpg",
      expertise: ["Product Strategy", "User Experience", "Data Analytics"],
    },
  ]

  const achievements = [
    { number: "50,000+", label: "Students Guided", icon: "🎓" },
    { number: "500+", label: "Partner Colleges", icon: "🏛️" },
    { number: "95%", label: "Success Rate", icon: "📈" },
    { number: "4.8/5", label: "User Rating", icon: "⭐" },
  ]

  const values = [
    {
      title: "Accessibility",
      description: "Making quality career guidance accessible to every student, regardless of their background",
      icon: "🌍",
    },
    {
      title: "Innovation",
      description: "Leveraging cutting-edge AI technology to provide personalized career recommendations",
      icon: "🚀",
    },
    {
      title: "Integrity",
      description: "Providing honest, unbiased guidance focused solely on student success",
      icon: "🤝",
    },
    {
      title: "Excellence",
      description: "Maintaining the highest standards in our platform, content, and support services",
      icon: "💎",
    },
  ]

  return (
    <div className="about-page">
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-content">
            <h1 className="hero-title">Empowering Students to Achieve Their Dreams</h1>
            <p className="hero-subtitle">
              We're on a mission to democratize access to quality career guidance and help every student find their
              perfect path to success through government colleges and meaningful careers.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
          </div>
          <div className="mission-content">
            <div className="mission-text">
              <h3>Bridging the Gap Between Dreams and Reality</h3>
              <p>
                At Digital Career Guidance Platform, we believe that every student deserves access to quality education
                and career opportunities. Our mission is to bridge the information gap that often prevents talented
                students from making informed decisions about their academic and professional futures.
              </p>
              <p>
                We focus specifically on government colleges because they offer world-class education at affordable
                fees, making quality higher education accessible to students from all economic backgrounds. Our
                AI-powered platform provides personalized guidance, helping students discover their strengths, explore
                career options, and find the perfect government institution for their goals.
              </p>
            </div>
            <div className="mission-image">
              <img src="/mission-illustration.svg" alt="Our Mission" />
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="achievements-section">
          <div className="section-header">
            <h2 className="section-title">Our Impact</h2>
            <p className="section-subtitle">Numbers that reflect our commitment to student success</p>
          </div>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <div className="achievement-number">{achievement.number}</div>
                <div className="achievement-label">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">The principles that guide everything we do</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-description">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">Passionate experts dedicated to your success</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="member-image">
                  <img src={member.image || "/placeholder.svg"} alt={member.name} />
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <div className="member-role">{member.role}</div>
                  <p className="member-description">{member.description}</p>
                  <div className="member-expertise">
                    {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="section-header">
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">We'd love to hear from you and help with your career journey</p>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div className="contact-details">
                  <h4>Email Us</h4>
                  <p>support@careerguide.edu</p>
                  <p>partnerships@careerguide.edu</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                  <p>Mon-Fri: 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h4>Visit Us</h4>
                  <p>123 Education Hub</p>
                  <p>New Delhi, India 110001</p>
                </div>
              </div>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="What's this about?"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="form-input"
                  placeholder="Tell us how we can help you..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
