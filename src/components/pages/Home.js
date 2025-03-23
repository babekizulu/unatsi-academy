import { useState } from "react";
//images
import bm from '../../images/bm.jpg';
import bi from '../../images/bi.jpg';
import bj from '../../images/bj.jpg';
import bk from '../../images/bk.jpg';
import Gallery from '../Gallery';

function Home() {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) return alert("Please enter an email");

        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            alert(data.message);
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email");
        }
    };
    return (
        <section className="page">
            <article className="main-hero" style={{ position: "relative", overflow: "hidden", height: "800px" }}>
                <div className="hero-images">
                    <img src={bm} alt="hero-image-1" />
                    <img src={bi} alt="hero-image-2" />
                    <img src={bj} alt="hero-image-3" />
                    <img src={bk} alt="hero-image-4" />
                </div>
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        left: "1.4%",
                        transform: "translateY(-20%)",
                        backgroundColor: '#071b44',
                        color: 'white',
                        padding: '30px',
                        border: '1px solid #ccc',
                        borderRadius: '10px',
                        fontFamily: 'Arial, sans-serif',
                        lineHeight: '1.6',
                        maxWidth: "80%",
                        zIndex: 2,
                    }}
                >
                    <h1
                        style={{
                            fontSize: "2.5rem",
                            lineHeight: "1.5",
                            color: "#fff",
                            fontFamily: "'Roboto', sans-serif",
                            textAlign: "start",
                            marginBottom: "1rem",
                        }}
                    >
                        Welcome to Unatsi Academy –<br />
                        <span style={{ fontWeight: "bold" }}>Inspiring Innovation Through STEM</span>
                    </h1>
                    <p
                        style={{
                            fontSize: "1.2rem",
                            color: "#fff",
                            fontWeight: "400",
                            marginTop: "1rem",
                        }}
                    >
                        At Unatsi Academy, we empower young minds to explore the world of Science, Technology, Engineering, and Mathematics.
                    </p>
                    <button className='online-registration-button'>
                        ONLINE REGISTRATION
                    </button>
                </div>
                <style>{`
                    @keyframes typing {
                        from { width: 0; }
                        to { width: 100%; }
                    }
                    @keyframes blink-caret {
                        50% { border-color: transparent; }
                    }
                `}</style>
            </article>
            <article className="hero" id="about" style={{ backgroundColor: "#181818", padding: "40px 20px" }}>
                <h2 style={{ textAlign: "center", color: "#fff" }}>About Us</h2>
                <div
                    style={{
                        display: "flex",
                        gap: "30px",
                        justifyContent: "center",
                        flexWrap: "wrap",
                    }}
                >
                    <div
                        style={{
                            background: "#071b44",
                            padding: "30px",
                            borderRadius: "15px",
                            maxWidth: "450px",
                            width: "100%",
                            boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.5)", // Blue shadow
                            border: "2px solid rgba(0, 123, 255, 0.8)", // Blue border
                            color: "#fff",
                        }}
                    >
                        <h3>Welcome to Unatsi Academy</h3>
                        <p>
                            Nestled in the breathtaking mountains of Evusweni, eSwatini, Unatsi Academy is a growing
                            primary school dedicated to providing a strong foundation for young learners. Our vision is
                            to become a leading STEM-focused institution, equipping students with the skills and
                            knowledge needed for the future.
                        </p>
                    </div>
                    <div
                        style={{
                            background: "#071b44",
                            padding: "30px",
                            borderRadius: "15px",
                            maxWidth: "450px",
                            width: "100%",
                            boxShadow: "0px 4px 15px rgba(0, 123, 255, 0.5)", // Blue shadow
                            border: "2px solid rgba(0, 123, 255, 0.8)", // Blue border
                            color: "#fff",
                        }}
                    >
                        <h3>Our Journey & Vision</h3>
                        <p>
                            Founded with a passion for education, we serve 25 students from Grade RR to Grade 2.
                            Surrounded by stunning landscapes, we blend nature and innovation to inspire creativity. Our
                            vision is to prepare young learners for a rapidly evolving world with a pioneering STEM
                            curriculum.
                        </p>
                    </div>
                </div>
            </article>

            <article
                style={{
                    backgroundColor: '#071b44',
                    color: 'white',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    margin: '20px',
                    fontFamily: 'Arial, sans-serif',
                    lineHeight: '1.6',
                }}
                id="admissions"
            >
                <h2 style={{ fontSize: '2rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '20px' }}>
                    Admissions
                </h2>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>Availability Check</h3>
                <p>
                    Once you submit an inquiry or application, we will review our current enrollment and inform you if there
                    are spaces available for the grade you are applying for.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>
                    Student Assessment
                </h3>
                <p>
                    If space is available, we will contact you to schedule an assessment session for your child. This
                    evaluation helps us determine their readiness and capability for the grade level they are applying for.
                    The assessment is designed to be child-friendly and focuses on basic skills, learning ability, and
                    developmental readiness.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>
                    Admission Decision
                </h3>
                <p>
                    After the assessment, our admissions team will carefully review the results. We will then notify you of
                    our final admission decision and provide the next steps for enrollment. If accepted, you will receive
                    details on registration, required documentation, and school policies.
                </p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginTop: '20px', marginBottom: '10px' }}>
                    Additional Information
                </h3>
                <p>
                    Our admission process is open throughout the year, subject to space availability. Priority may be given
                    to students residing within the local community or siblings of current students.
                </p>
            </article>

            <Gallery />

            <article
                style={{
                    backgroundColor: '#071b44',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    margin: '20px',
                    fontFamily: 'Arial, sans-serif',
                    color: 'white',
                }}
                id="contact"
            >
                <h2
                    style={{
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    Contact Us
                </h2>
                <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                    We would love to hear from you! Whether you have questions about our
                    school, want to schedule a visit, or need more information, please
                    don't hesitate to reach out to us.
                </p>

                <h3>Contact Information</h3>
                <p>📞 +268 765 21509</p>
                <p>📧 info@unatsiacademy.com</p>
                <p>📍 Unatsi Academy, Evusweni, eSwatini</p>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const name = e.target.name.value;
                        const email = e.target.email.value;
                        const message = e.target.message.value;

                        const whatsappMessage = `Hello, my name is ${name}. My email is ${email}. Here is my message: ${message}`;

                        const whatsappLink = `https://wa.me/27649459612?text=${encodeURIComponent(
                            whatsappMessage
                        )}`;
                        window.open(whatsappLink, '_blank');
                    }}
                    style={{
                        marginTop: '20px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '10px',
                    }}
                >
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginTop: '5px',
                            }}
                        />
                    </label>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginTop: '5px',
                            }}
                        />
                    </label>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            required
                            rows="4"
                            style={{
                                width: '100%',
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ccc',
                                marginTop: '5px',
                            }}
                        ></textarea>
                    </label>
                    <button
                        type="submit"
                        style={{
                            padding: '10px 20px',
                            borderRadius: '5px',
                            backgroundColor: '#007bff',
                            color: '#fff',
                            border: 'none',
                            cursor: 'pointer',
                            fontSize: '1rem',
                        }}
                    >
                        Submit
                    </button>
                </form>
            </article>

            <article
                style={{
                    backgroundColor: '#071b44',
                    color: '#fff',
                    padding: '30px',
                    fontFamily: 'Arial, sans-serif',
                    marginTop: '20px',
                }}
            >
                {/* Row Layout */}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        flexWrap: 'wrap',
                        gap: '20px',
                        marginBottom: '30px',
                    }}
                >
                    {/* Logo and Writeup */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <img
                            src="https://i.ibb.co/wZTSvm2b/324927416-1797086837334568-8246797397037440777-n-removebg-preview.png/150" // Replace with Unatsi Academy logo
                            alt="Unatsi Academy Logo"
                            style={{ maxWidth: '150px', marginBottom: '10px' }}
                        />
                        <p style={{ fontSize: '1rem', margin: '10px 0' }}>
                            At Unatsi Academy, we are dedicated to nurturing academic
                            excellence, fostering curiosity, and building a brighter future
                            for our students.
                        </p>

                    </div>

                    {/* Services Section */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>
                            Our Services
                        </h3>
                        <ul
                            style={{
                                listStyleType: 'none',
                                padding: 0,
                                margin: 0,
                                fontSize: '1rem',
                            }}
                        >
                            <li>🔹 Primary Education</li>
                            <li>🔹 Extracurricular Activities</li>
                            <li>🔹 Student Assessment</li>
                            <li>🔹 Community Engagement</li>
                            <li>🔹 After-School Programs</li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div style={{ flex: '1', minWidth: '250px' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Subscribe</h3>
                        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
                            Stay updated with the latest news and events from Unatsi Academy!
                        </p>


                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}
                        //  style={{
                        //         display: 'flex',
                        //         flexDirection: 'column',
                        //         gap: '10px',
                        //     }}
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc", width: "100%" }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    backgroundColor: '#007bff',
                                    color: '#fff',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '1rem',
                                }}
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright Section */}
                <div
                    style={{
                        fontSize: '0.9rem',
                        marginTop: '20px',
                        textAlign: 'center',
                        display: 'flex',
                        justifyContent: 'center', // Aligns both elements in the center
                        alignItems: 'center', // Aligns the image and text vertically
                        gap: '10px', // Adds space between the text and the image
                    }}
                >
                    <p>© {new Date().getFullYear()} Unatsi Academy. All rights reserved.</p>
                    <img
                        src="https://flagpedia.net/data/flags/w1600/sz.png" // Replace with Unatsi Academy logo
                        alt="Eswatini Flag"
                        style={{
                            maxWidth: '50px',
                            marginBottom: '0', // Ensures there's no extra margin below the image
                        }}
                    />
                </div>

            </article>


        </section>
    );
}
export default Home;
