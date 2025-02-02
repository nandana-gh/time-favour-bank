import React from 'react';


const AboutPage = () => {
  return (
    <div className='about'>
      <header style={headerStyle}>
        <div style={logoStyle}>⏳ HourBank</div>
        <nav>
          <a href="/" style={navLinkStyle}>Home</a>
          <a href="/contact" style={navLinkStyle}>Contact</a>
        </nav>
      </header>

      <section style={aboutSectionStyle}>
        <div style={aboutContentStyle}>
          <h2>About Us – HourBank</h2>
          <p>Welcome to <strong>HourBank</strong> – Where Time is Your Greatest Asset!</p>
          <p>In a world driven by money, we believe time is the real currency. HourBank is a revolutionary platform that redefines skill-sharing by transforming time into value. Here, knowledge isn’t bought or sold with money—it’s exchanged with time.</p>

          <h3>Our Vision</h3>
          <p>We dream of a world where everyone has equal access to knowledge, where talent isn’t limited by financial barriers, and where every skill—no matter how small—holds value. HourBank empowers individuals to learn, teach, and grow through a time-based economy, fostering a global network of collaboration and skill development.</p>

          <h3>How HourBank Works</h3>
          <ul>
            <li>✔ <strong>Earn Time Credits</strong> – Share your expertise with others and earn time credits.</li>
            <li>✔ <strong>Spend Time Wisely</strong> – Use your earned hours to learn new skills from fellow members.</li>
            <li>✔ <strong>Build a Stronger Community</strong> – Connect with like-minded individuals, mentor others, and be mentored.</li>
          </ul>
        </div>

        <div style={aboutImageStyle}>
          <img src="about.jpg" alt="HourBank Concept" style={imageStyle} />
        </div>
      </section>

      <section style={superpowersSectionStyle}>
        <h2>OUR SUPERPOWERS</h2>
        <div style={powerGridStyle}>
          <div style={powerBoxStyle}>We are not Money Mandates but our kind of hearts wish this era. Our easy and elegant website is the best fit for any search related to the skill-sharing business.</div>
          <div style={powerBoxStyle}>You need not to worry about surfing around a huge vague category, but a precisely organized local data listing.</div>
          <div style={powerBoxStyle}>It's just get, set and go! So easy to make your decisions by mapping, virtual tours, genuine reviews, AI & ML etc.</div>
          <div style={powerBoxStyle}>Of course, we are open to talking about market consulting and amazing promotions.</div>
          <div style={powerBoxStyle}>More exposure means fair value to your skills.</div>
          <div style={powerBoxStyle}>Our heart is so big that we made our website customized for listing skill services—best fit for learners or mentors.</div>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>© 2025 HourBank. All rights reserved.</p>
      </footer>
    </div>
  );
};

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

const aboutSectionStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px',
};

const aboutContentStyle = {
  width: '60%',
};

const aboutImageStyle = {
  width: '35%',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
};

const superpowersSectionStyle = {
  padding: '20px',
  backgroundColor: '#f9f9f9',
};

const powerGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '20px',
};

const powerBoxStyle = {
  backgroundColor: '#fff',
  borderRadius: '5px',
  padding: '10px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  fontSize: '14px',
};

const footerStyle = {
  backgroundColor: '#646cff',
  color: 'white',
  textAlign: 'center',
  padding: '10px 0',
};

export default AboutPage;
