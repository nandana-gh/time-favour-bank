// video1.jsx
import React from 'react';

const Video1 = () => {
    return (
        <div>
            <header>
                <h1>LeadForward: Cultivating Future Leaders</h1>
            </header>
            <main>
                <video controls width="80%">
                    <source src="video1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </main>
            <footer>
                © 2025 HourBank. All rights reserved.
            </footer>
        </div>
    );
};

export default Video1;
