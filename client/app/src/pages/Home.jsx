
import React, { useState } from 'react';
import "../styles/Home.css";

const Home = () => {
    const [email, setEmail] = useState('');

    const redirectToSignup = () => {
        window.location.href = "signup.html";
    };

    const redirectToDashboard = (event) => {
        event.preventDefault();
        localStorage.setItem("userEmail", email);
        window.location.href = "dashboard.html";
    };

    return (
        <div>
            <header>
                <div className="logo">HourBank</div>
                <nav>
                    <a href="about.html">About Us</a>
                    <a href="contact.html">Contact</a>
                    <button className="login-btn" onClick={redirectToSignup}>Signup</button>
                </nav>
            </header>

            <main>
                <div className="content">
                    <h1>Trade time. <span className="highlight">Build skills.</span> Grow together.</h1>
                    <input type="text" placeholder="Search" />
                    <div className="website-list">
                        <div className="website" onClick={redirectToSignup}>
                            <img src="landing1.jpg" alt="Website Preview" />
                            <h3>LeadForward: Cultivating Future Leaders</h3>
                            <p>Dr. Michael Brown</p>
                        </div>
                        <div className="website" onClick={redirectToSignup}>
                            <img src="landing2.jpg" alt="Website Preview" />
                            <h3>Graphic Alchemy: Transforming Ideas into Visuals</h3>
                            <p>Dr. Sam Harrison</p>
                        </div>
                        <div className="website" onClick={redirectToSignup}>
                            <img src="landing3_1.png" alt="Website Preview" />
                            <h3>The Ergonomic Eye: Optimizing Space for Human Interaction</h3>
                            <p>Sarah Jones</p>
                        </div>
                        <div className="website" onClick={redirectToSignup}>
                            <img src="landing4.png" alt="Website Preview" />
                            <h3>Building Bridges: Fostering Effective Team Communication</h3>
                            <p>Dr. Carlos Rodriguez</p>
                        </div>
                    </div>
                </div>

                <div className="right-container">
                    <div className="login-section">
                        <h2>Login</h2>
                        <form onSubmit={redirectToDashboard}>
                            <input 
                                type="email" 
                                id="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required 
                            />
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Password" 
                                required 
                            />
                            <button type="submit">Login</button>
                        </form>
                        <p>Don't have an account? <a href="signup.html">Sign up</a></p>
                    </div>

                    <section className="faq">
                        <h2>Frequently Asked Questions</h2>
                        <div className="faq-item">
                            <button className="faq-question">What is HourBank?</button>
                            <div className="faq-answer">
                                <p>HourBank is a time-banking platform where users can trade skills and services with others without using money. Earn hours by offering your skills and spend them to learn something new.</p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button className="faq-question">How does HourBank work?</button>
                            <div className="faq-answer">
                                <p>Users can offer their skills in various categories and earn time credits for their service. These credits can then be used to learn new skills from other users.</p>
                            </div>
                        </div>
                        <div className="faq-item">
                            <button className="faq-question">Is HourBank free to use?</button>
                            <div className="faq-answer">
                                <p>Yes! HourBank is completely free. It is based on exchanging time instead of money, making it accessible for everyone.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer>
                © 2025 HourBank. All rights reserved.
            </footer>
        </div>
    );
};

export default Home;
