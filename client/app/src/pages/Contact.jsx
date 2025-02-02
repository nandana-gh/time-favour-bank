import React from 'react';


const Contact = () => {
  return (
    <div>
      <header style={headerStyle}>
        <div style={logoStyle}>HOURBANK</div>
        <nav>
          <a href="/about" style={navLinkStyle}>About Us</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
          <button onClick={() => window.location.href = '/signup'} style={signupButtonStyle}>Signup</button>
        </nav>
      </header>

      <main style={contactContainerStyle}>
        <h1>Contact Our Support Team</h1>
        <p>Learn how our platform empowers you to share your skills, earn time credits, and learn from others in a collaborative, non-profit community.</p>

        <div style={contactInfoStyle}>
          <h2>By reaching out to our team, you can expect us to:</h2>
          <ul>
            <li>Help you understand how to share your skills through video tutorials.</li>
            <li>Guide you on earning and using time credits effectively.</li>
            <li>Assist with any technical issues related to uploading or accessing videos.</li>
            <li>Answer any additional questions you may have about our community.</li>
          </ul>
        </div>

        <div style={supportInfoStyle}>
          <h2>Looking for immediate support?</h2>
          <p>For general inquiries, email us at <a href="mailto:support@hourbank.com">support@hourbank.com</a></p>
          <p>For technical help or account-related issues, check our <a href="/faq">FAQ</a></p>
        </div>

        <h2>Send us a message</h2>
        <form style={formStyle}>
          <input type="text" placeholder="Your Name" required style={inputStyle} />
          <input type="email" placeholder="Your Email" required style={inputStyle} />
          <textarea placeholder="Your Message" required style={textareaStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </main>

      <footer style={footerStyle}>
        © 2025 HourBank. All rights reserved.
      </footer>
    </div>
  );
};

// Inline styles for the page
const headerStyle = {
  background: '#646cff',
  color: 'white',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  fontSize: '24px',
};

const navLinkStyle = {
  color: 'white',
  margin: '0 10px',
  textDecoration: 'none',
};

const signupButtonStyle = {
  background: '#646cff',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  cursor: 'pointer',
  fontSize: '14px',
  borderRadius: '5px',
};

const contactContainerStyle = {
  padding: '20px',
  textAlign: 'center',
};

const contactInfoStyle = {
  marginBottom: '30px',
};

const supportInfoStyle = {
  marginBottom: '30px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '50%',
  margin: '0 auto',
};

const inputStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '80%',
  maxWidth: '400px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const textareaStyle = {
  padding: '10px',
  margin: '10px 0',
  width: '80%',
  maxWidth: '400px',
  height: '150px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  background: '#646cff',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '16px',
  borderRadius: '5px',
};

const footerStyle = {
  backgroundColor: '#646cff',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
};

export default Contact;
