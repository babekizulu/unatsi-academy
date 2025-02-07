//videos
import stem from '../videos/stem.mp4';

function Home() {
    return (
        <section className="page">
            <article className='main-hero'>
                <video src={stem} autoPlay loop muted playsInline className='video'></video>
                <style>{`
                  @keyframes typing {
                    from { width: 0; }
                    to { width: 100%; }
                  }
                  @keyframes blink-caret {
                    50% { border-color: transparent; }
                  }
                `}</style>
                <h1 style={{
                    display: 'inline-block',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    borderRight: '0.15em solid #fff',
                    animation: 'typing 5s steps(20, end) forwards, blink-caret 1s step-end infinite'
                }}>
                    STEM IS THE FUTURE.
                </h1>
            </article>
            <article className='hero b' id='about'>
                <h2>About Us</h2>
                <p><h3>Welcome to Unatsi Academy</h3>
                Nestled in the breathtaking mountains of Evusweni, eSwatini, Unatsi Academy is a growing primary school dedicated to providing a strong foundation for young learners. With a vision to become a leading STEM-focused institution, we are committed to equipping students with the skills and knowledge needed for the future.</p>
                <br />
                <h3>Our Journey</h3>
                <p>Founded with a passion for education and community development, Unatsi Academy currently serves 25 bright young minds from Grade RR to Grade 2. As we continue to expand, our goal is to introduce a modern, technology-driven curriculum that integrates Science, Technology, Engineering, and Mathematics (STEM) into early childhood education.</p>
                <br />
                <h3>Our Learning Environment</h3>
                <p>Surrounded by stunning landscapes, our school offers a unique learning experience, blending nature and innovation to inspire curiosity and creativity. Our small class sizes allow for personalized attention, ensuring that each child receives the support they need to grow academically and socially.</p>
                <br />
                <h3>Our Vision</h3>
                <p>We believe in the power of education to transform lives. Our vision is to become a pioneering STEM school in eSwatini, preparing young learners to think critically, solve problems, and embrace the challenges of a rapidly evolving world.</p>
                <br />
                <h3>Join Us on This Journey</h3>
                <p>As we grow, we welcome parents, educators, and community members to join us in shaping a brighter future for our children. Together, we can build a school that not only nurtures young minds but also empowers the next generation of innovators and leaders.</p>
            </article>
            <article className='hero ba' id='admissions'>
                <h2>Admissions</h2>
                <p>At Unatsi Academy, we are excited to welcome new students and families into our growing community. Our admission process is designed to ensure that each child is placed in an environment where they can thrive academically and socially.</p>
                <br />
                <h3>Availability Check</h3>
                <p>Once you submit an inquiry or application, we will review our current enrollment and inform you if there are spaces available for the grade you are applying for.</p>
                <br />
                <h3>Student Assessment</h3>
                <p>If space is available, we will contact you to schedule an assessment session for your child. This evaluation helps us determine their readiness and capability for the grade level they are applying for. The assessment is designed to be child-friendly and focuses on basic skills, learning ability, and developmental readiness.</p>
                <br />
                <h3>Admission Decision</h3>
                <p>After the assessment, our admissions team will carefully review the results. We will then notify you of our final admission decision and provide the next steps for enrollment. If accepted, you will receive details on registration, required documentation, and school policies.</p>
                <br />
                <h3>Additional Information</h3>
                <p>Our admission process is open throughout the year, subject to space availability.</p>
                <p>Priority may be given to students residing within the local community or siblings of current students.</p>
                <p>For any inquiries, please contact us at:</p>
                <p>📞 +268 765 95317</p>
                <p>📧 info@unatsiacademy.com</p>
                <p>We look forward to welcoming your child to Unatsi Academy, where learning meets exploration and growth! 🎓✨</p>
            </article>
            <article className='hero w' id='contact'>
                <h2>Contact Us</h2>
                <p>We would love to hear from you! Whether you have questions about our school, want to schedule a visit, or need more information, please don't hesitate to reach out to us.</p>
                <br />
                <h3>Contact Information</h3>
                <p>📞 +268 765 95317</p>
                <p>📧 info@unatsiacademy.com</p>
                <p>📍 Unatsi Academy, Evusweni, eSwatini</p>
            </article>
        </section>
    );
};

export default Home;