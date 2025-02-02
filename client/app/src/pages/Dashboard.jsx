
// // // import React, { useState, useEffect } from 'react';
// // // import  "../styles/dashboard.css"; // Assuming you keep the same styling in this file

// // // const Dashboard = () => {
// // //   const [userEmail, setUserEmail] = useState('');
// // //   const [timeCredits, setTimeCredits] = useState(0);
// // //   const [videoDuration, setVideoDuration] = useState('');
// // //   const [watchDuration, setWatchDuration] = useState('');

// // //   useEffect(() => {
// // //     const storedEmail = localStorage.getItem('userEmail');
// // //     const storedCredits = parseInt(localStorage.getItem('credits'), 10) || 0;

// // //     if (!storedEmail) {
// // //       alert('You must log in first!');
// // //       window.location.href = 'index.html'; // Redirect to login page
// // //     } else {
// // //       setUserEmail(storedEmail);
// // //       setTimeCredits(storedCredits);
// // //     }
// // //   }, []);

// // //   const uploadVideo = () => {
// // //     if (!videoDuration || isNaN(videoDuration) || videoDuration <= 0) {
// // //       alert('Please upload a video and enter a valid duration.');
// // //       return;
// // //     }

// // //     const credits = Math.floor(videoDuration / 10);
// // //     let currentCredits = parseInt(localStorage.getItem('credits'), 10) || 0;
// // //     currentCredits += credits;

// // //     localStorage.setItem('credits', currentCredits);
// // //     setTimeCredits(currentCredits);

// // //     alert(`Video uploaded! You earned ${credits} credits.`);
// // //   };

// // //   const watchVideo = () => {
// // //     if (isNaN(watchDuration) || watchDuration % 10 !== 0 || watchDuration <= 0) {
// // //       alert('Enter a valid duration (multiples of 10).');
// // //       return;
// // //     }

// // //     const neededCredits = watchDuration / 10;
// // //     let currentCredits = parseInt(localStorage.getItem('credits'), 10) || 0;

// // //     if (neededCredits > currentCredits) {
// // //       alert('Not enough credits! Upload more videos to earn credits.');
// // //       return;
// // //     }

// // //     currentCredits -= neededCredits;
// // //     localStorage.setItem('credits', currentCredits);
// // //     setTimeCredits(currentCredits);

// // //     alert(`You are now watching a skill video for ${watchDuration} minutes.`);
// // //   };

// // //   return (
// // //     <div>
// // //       <header style={headerStyle}>
// // //         <div style={logoStyle}>🌐 HourBank</div>
// // //         <nav>
// // //           <a href="/about" style={navLinkStyle}>About Us</a>
// // //           <a href="/contact" style={navLinkStyle}>Contact</a>
// // //           <a href="/index" style={logoutBtnStyle}>Logout</a>
// // //         </nav>
// // //       </header>

// // //       <main style={dashboardContainerStyle}>
// // //         <h2>Welcome, <span>{userEmail}</span></h2>

// // //         <h3>Upload a Video</h3>
// // //         <input
// // //           type="file"
// // //           accept="video/*"
// // //           onChange={(e) => console.log(e.target.files)}
// // //           style={inputStyle}
// // //         />
// // //         <input
// // //           type="number"
// // //           placeholder="Enter duration in minutes"
// // //           min="1"
// // //           value={videoDuration}
// // //           onChange={(e) => setVideoDuration(e.target.value)}
// // //           style={inputStyle}
// // //         />
// // //         <button onClick={uploadVideo} style={buttonStyle}>Upload</button>

// // //         <h3>Your Time Credits: <span>{timeCredits}</span></h3>

// // //         <h3>Watch a Skill Video</h3>
// // //         <input
// // //           type="number"
// // //           placeholder="Minutes to watch"
// // //           min="10"
// // //           value={watchDuration}
// // //           onChange={(e) => setWatchDuration(e.target.value)}
// // //           style={inputStyle}
// // //         />
// // //         <button onClick={watchVideo} style={buttonStyle}>Watch</button>
// // //       </main>

// // //       <footer style={footerStyle}>
// // //         © 2025 HourBank. All rights reserved.
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // // Inline styles for the page
// // // const headerStyle = {
// // //   background: '#646cff',
// // //   color: 'white',
// // //   padding: '10px',
// // //   display: 'flex',
// // //   justifyContent: 'space-between',
// // //   alignItems: 'center',
// // // };

// // // const logoStyle = {
// // //   fontSize: '24px',
// // // };

// // // const navLinkStyle = {
// // //   color: 'white',
// // //   margin: '0 10px',
// // //   textDecoration: 'none',
// // // };

// // // const logoutBtnStyle = {
// // //   color: 'white',
// // //   margin: '0 10px',
// // //   textDecoration: 'none',
// // // };

// // // const dashboardContainerStyle = {
// // //   padding: '20px',
// // //   textAlign: 'center',
// // // };

// // // const inputStyle = {
// // //   display: 'block',
// // //   margin: '10px auto',
// // //   padding: '10px',
// // //   width: '80%',
// // //   maxWidth: '300px',
// // // };

// // // const buttonStyle = {
// // //   background: '#646cff',
// // //   color: 'white',
// // //   padding: '10px 20px',
// // //   border: 'none',
// // //   cursor: 'pointer',
// // //   fontSize: '16px',
// // //   borderRadius: '5px',
// // // };

// // // const footerStyle = {
// // //   backgroundColor: '#646cff',
// // //   color: 'white',
// // //   textAlign: 'center',
// // //   padding: '10px 0',
// // // };

// // // export default Dashboard;
// // import React, { useState } from 'react';
// // import "../styles/dashboard.css";

// // const Dashboard = () => {
// //     const [videoURL, setVideoURL] = useState(null);
// //     const [videoThumbnail, setVideoThumbnail] = useState(null);

// //     // Handle video upload
// //     const handleVideoUpload = (event) => {
// //         const videoFile = event.target.files[0];

// //         if (videoFile) {
// //             const videoUrl = URL.createObjectURL(videoFile);
// //             setVideoURL(videoUrl);

// //             // Create a thumbnail from the first frame of the video
// //             const videoElement = document.createElement('video');
// //             videoElement.src = videoUrl;
// //             videoElement.load();
// //             videoElement.onloadeddata = () => {
// //                 // Create a canvas element to capture the first frame
// //                 const canvas = document.createElement('canvas');
// //                 const context = canvas.getContext('2d');
// //                 context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
// //                 setVideoThumbnail(canvas.toDataURL());
// //             };
// //         }
// //     };

// //     return (
// //         <div>
// //             <header>
// //                 <div className="logo">HourBank</div>
// //                 <nav>
// //                     <a href="/">Home</a>
// //                     <a href="about.html">About Us</a>
// //                     <a href="contact.html">Contact</a>
// //                     <button className="logout-btn" onClick={() => { window.location.href = "index.html"; }}>Logout</button>
// //                 </nav>
// //             </header>

// //             <main>
// //                 <h2>Upload and Watch Video</h2>

// //                 <input type="file" accept="video/*" onChange={handleVideoUpload} />
                
// //                 {videoThumbnail && (
// //                     <div className="video-thumbnail">
// //                         <img src={videoThumbnail} alt="Video Thumbnail" />
// //                     </div>
// //                 )}

// //                 {videoURL && (
// //                     <div className="video-player">
// //                         <video controls width="80%">
// //                             <source src={videoURL} type="video/mp4" />
// //                             Your browser does not support the video tag.
// //                         </video>
// //                     </div>
// //                 )}
// //             </main>

// //             <footer>
// //                 © 2025 HourBank. All rights reserved.
// //             </footer>
// //         </div>
// //     );
// // };

// // export default Dashboard;
// import React, { useState } from 'react';
// import "../styles/dashboard.css";

// const Dashboard = () => {
//     const [videoURL, setVideoURL] = useState(null);
//     const [videoThumbnail, setVideoThumbnail] = useState(null);

//     // Handle video upload
//     const handleVideoUpload = (event) => {
//         const videoFile = event.target.files[0];

//         if (videoFile) {
//             const videoUrl = URL.createObjectURL(videoFile);
//             setVideoURL(videoUrl);

//             // Create a thumbnail from the first frame of the video
//             const videoElement = document.createElement('video');
//             videoElement.src = videoUrl;
//             videoElement.load();
//             videoElement.onloadeddata = () => {
//                 // Create a canvas element to capture the first frame
//                 const canvas = document.createElement('canvas');
//                 const context = canvas.getContext('2d');
//                 context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
//                 setVideoThumbnail(canvas.toDataURL());
//             };
//         }
//     };

//     return (
//         <div>
//             <header>
//                 <div className="logo">HourBank</div>
//                 <nav>
//                     <a href="/">Home</a>
//                     <a href="about.html">About Us</a>
//                     <a href="contact.html">Contact</a>
//                     <button className="logout-btn" onClick={() => { window.location.href = "index.html"; }}>Logout</button>
//                 </nav>
//             </header>

//             <main>
//                 <h2>Upload and Watch Video</h2>

//                 <input type="file" accept="video/*" onChange={handleVideoUpload} />
                
//                 {/* {videoThumbnail && (
//                     <div className="video-thumbnail">
//                         <img src={videoThumbnail} alt="Video Thumbnail" />
//                     </div>
//                 )}

//                 {videoURL && (
//                     <div className="video-player">
//                         <video controls width="80%">
//                             <source src={videoURL} type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video>
//                     </div>
//                 )}

//                 <div className="video-list">
//                     <h3>Available Skill Videos</h3>
//                     <div className="website-list">
//                         <a href="/video1.html">
//                             <div className="website">
//                                 <img src="landing1.jpg" alt="Video 1" />
//                                 <h3>LeadForward: Cultivating Future Leaders</h3>
//                                 <p>Dr. Michael Brown</p>
//                             </div>
//                         </a>
//                         <a href="/video2.html">
//                             <div className="website">
//                                 <img src="landing2.jpg" alt="Video 2" />
//                                 <h3>Graphic Alchemy: Transforming Ideas into Visuals</h3>
//                                 <p>Dr. Sam Harrison</p>
//                             </div>
//                         </a>
//                         <a href="/video3.html">
//                             <div className="website">
//                                 <img src="landing3_1.png" alt="Video 3" />
//                                 <h3>The Ergonomic Eye: Optimizing Space for Human Interaction</h3>
//                                 <p>Sarah Jones</p>
//                             </div>
//                         </a>
//                         <a href="/video4.html">
//                             <div className="website">
//                                 <img src="landing4.png" alt="Video 4" />
//                                 <h3>Building Bridges: Fostering Effective Team Communication</h3>
//                                 <p>Dr. Carlos Rodriguez</p>
//                             </div>
//                         </a>
//                     </div>
//                 </div> */}
//                 <div className="Skill video-list">
//                         <div className="website" onClick={redirectToSignup}>
//                             <img src="landing1.jpg" alt="Website Preview" />
//                             <h3>LeadForward: Cultivating Future Leaders</h3>
//                             <p>Dr. Michael Brown</p>
//                         </div>
//                         <div className="website" onClick={redirectToSignup}>
//                             <img src="landing2.jpg" alt="Website Preview" />
//                             <h3>Graphic Alchemy: Transforming Ideas into Visuals</h3>
//                             <p>Dr. Sam Harrison</p>
//                         </div>
//                         <div className="website" onClick={redirectToSignup}>
//                             <img src="landing3_1.png" alt="Website Preview" />
//                             <h3>The Ergonomic Eye: Optimizing Space for Human Interaction</h3>
//                             <p>Sarah Jones</p>
//                         </div>
//                         <div className="website" onClick={redirectToSignup}>
//                             <img src="landing4.png" alt="Website Preview" />
//                             <h3>Building Bridges: Fostering Effective Team Communication</h3>
//                             <p>Dr. Carlos Rodriguez</p>
//                         </div>
//                     </div>
//                 {/* </div> */}
//             </main>

//             <footer>
//                 © 2025 HourBank. All rights reserved.
//             </footer>
//         </div>
//     );
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import "../styles/dashboard.css";

const Dashboard = () => {
    const [videoURL, setVideoURL] = useState(null);
    const [videoThumbnail, setVideoThumbnail] = useState(null);
    const [services, setServices] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    // Fetch services when component mounts
    useEffect(() => {
        fetch('/api/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(err => console.error('Error fetching services:', err));
    }, []);

    // Handle video upload
    const handleVideoUpload = (event) => {
        const videoFile = event.target.files[0];
        if (videoFile) {
            const videoUrl = URL.createObjectURL(videoFile);
            setVideoURL(videoUrl);

            // Create a thumbnail from the first frame of the video
            const videoElement = document.createElement('video');
            videoElement.src = videoUrl;
            videoElement.load();
            videoElement.onloadeddata = () => {
                // Create a canvas element to capture the first frame
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                setVideoThumbnail(canvas.toDataURL());
            };
        }
    };

    // Filter services based on search term
    const filteredServices = services.filter(service =>
        service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <header>
                <div className="logo">HourBank</div>
                <nav>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/contact">Contact</a>
                    <button className="logout-btn" onClick={() => { window.location.href = "/index"; }}>Logout</button>
                </nav>
            </header>

            <main>
                <h2>Upload and Watch Video</h2>
                <input type="file" accept="video/*" onChange={handleVideoUpload} />
                {videoThumbnail && (
                    <div className="video-thumbnail">
                        <img src={videoThumbnail} alt="Video Thumbnail" />
                    </div>
                )}
                {videoURL && (
                    <div className="video-player">
                        <video controls width="80%">
                            <source src={videoURL} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                )}

                <h2>Search for Services</h2>
                <input
                    type="text"
                    placeholder="Search services by title or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-bar"
                />

                <div className="service-list">
                    <h3>Available Services</h3>
                    {filteredServices.length > 0 ? (
                        filteredServices.map((service, index) => (
                            <div key={index} className="service-item">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                                <p>Hours: {service.hours}</p>
                            </div>
                        ))
                    ) : (
                        <p>No services found</p>
                    )}
                </div>
            </main>

            <footer>
                © 2025 HourBank. All rights reserved.
            </footer>
        </div>
    );
};

export default Dashboard;
