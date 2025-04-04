//libs
import React from 'react';
//components
import Link from '../../Link';
//icons
import { FaBook, FaCalendarAlt, FaGraduationCap, FaTasks, FaUserGraduate } from 'react-icons/fa';

function StudentDashboard() {
    // Mock data - replace with actual data from your backend
    const upcomingEvents = [
        { title: 'Math Test', date: '2024-04-15' },
        { title: 'Science Project Due', date: '2024-04-18' },
        { title: 'Sports Day', date: '2024-04-20' },
    ];

    const progressData = [
        { subject: 'Mathematics', progress: 85 },
        { subject: 'Science', progress: 72 },
        { subject: 'English', progress: 90 },
    ];

    return (
        <section className="page student-dashboard">
            <h1>Welcome back, Student!</h1>
            
            <div className="quick-actions">
                <Link href="/student/assignments" className="action-button">
                    <FaTasks />
                    <span>Assignments</span>
                </Link>
                <Link href="/student/subjects" className="action-button">
                    <FaBook />
                    <span>Subjects</span>
                </Link>
                <Link href="#" className="action-button">
                    <FaCalendarAlt />
                    <span>Schedule</span>
                </Link>
                <Link href="/student/profile" className="action-button">
                    <FaUserGraduate />
                    <span>Profile</span>
                </Link>
            </div>

            <div className="dashboard-grid">
                <div className="dashboard-card upcoming-events">
                    <h2>Upcoming Events</h2>
                    <ul className="event-list">
                        {upcomingEvents.map((event, index) => (
                            <li key={index}>
                                <span>{event.title}</span>
                                <span className="event-date">{event.date}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="dashboard-card progress-section">
                    <h2>Your Progress</h2>
                    {progressData.map((item, index) => (
                        <div key={index}>
                            <div className="progress-label">
                                <span>{item.subject}</span>
                                <span>{item.progress}%</span>
                            </div>
                            <div className="progress-bar">
                                <div 
                                    className="progress-fill" 
                                    style={{ width: `${item.progress}%` }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="dashboard-card">
                    <h2>Quick Stats</h2>
                    <div className="stats-grid">
                        <div className="stat-item">
                            <FaGraduationCap />
                            <div>
                                <h3>3</h3>
                                <p>Active Courses</p>
                            </div>
                        </div>
                        <div className="stat-item">
                            <FaTasks />
                            <div>
                                <h3>5</h3>
                                <p>Pending Assignments</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudentDashboard;
