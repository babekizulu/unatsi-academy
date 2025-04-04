import React from 'react';
import { FaGraduationCap, FaCalendarAlt, FaStar, FaTrophy } from 'react-icons/fa';
import BackButton from '../BackButton';

function AcademicHistory() {
    // Mock data - replace with actual data from your backend
    const academicYears = [
        {
            year: '2023-2024',
            grade: 'Grade 12',
            subjects: [
                { name: 'Mathematics', grade: 'A', percentage: 92 },
                { name: 'Science', grade: 'A-', percentage: 88 },
                { name: 'English', grade: 'A+', percentage: 95 },
            ],
            achievements: ['Top Performer in Mathematics', 'Science Fair Winner']
        },
        {
            year: '2022-2023',
            grade: 'Grade 11',
            subjects: [
                { name: 'Mathematics', grade: 'B+', percentage: 87 },
                { name: 'Science', grade: 'A', percentage: 90 },
                { name: 'English', grade: 'A', percentage: 91 },
            ],
            achievements: ['Honor Roll Student']
        }
    ];

    return (
        <section className="academic-history page">
            <BackButton href="/student/profile" prevPage="Profile" />
            <h1>Academic History</h1>
            
            <div className="academic-summary">
                <div className="summary-card">
                    <FaGraduationCap />
                    <div>
                        <h3>Current Grade</h3>
                        <p>Grade 12</p>
                    </div>
                </div>
                <div className="summary-card">
                    <FaStar />
                    <div>
                        <h3>Average Grade</h3>
                        <p>91%</p>
                    </div>
                </div>
                <div className="summary-card">
                    <FaTrophy />
                    <div>
                        <h3>Achievements</h3>
                        <p>5 Awards</p>
                    </div>
                </div>
            </div>

            <div className="academic-timeline">
                {academicYears.map((year, index) => (
                    <div key={index} className="year-card">
                        <div className="year-header">
                            <h2>{year.year}</h2>
                            <span className="grade-badge">{year.grade}</span>
                        </div>
                        
                        <div className="subjects-grid">
                            {year.subjects.map((subject, subIndex) => (
                                <div key={subIndex} className="subject-card">
                                    <h3>{subject.name}</h3>
                                    <div className="grade-info">
                                        <span className="grade">{subject.grade}</span>
                                        <span className="percentage">{subject.percentage}%</span>
                                    </div>
                                    <div className="progress-bar">
                                        <div 
                                            className="progress-fill" 
                                            style={{ width: `${subject.percentage}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {year.achievements.length > 0 && (
                            <div className="achievements">
                                <h3>Achievements</h3>
                                <ul>
                                    {year.achievements.map((achievement, achIndex) => (
                                        <li key={achIndex}>
                                            <FaTrophy className="achievement-icon" />
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default AcademicHistory;
