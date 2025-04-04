import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaGraduationCap, FaClock } from 'react-icons/fa';

const Subjects = () => {
  // Mock data - replace with actual data from your backend
  const subjects = [
    {
      id: 1,
      name: "Mathematics",
      code: "MATH101",
      description: "Advanced mathematics covering algebra, calculus, and statistics",
      duration: "2 hours per week",
      topics: [
        "Linear Algebra",
        "Differential Calculus",
        "Probability Theory",
        "Statistics"
      ],
      instructor: "Teacher Name"
    },
    {
      id: 2,
      name: "Physics",
      code: "PHYS101",
      description: "Fundamental physics principles and applications",
      duration: "3 hours per week",
      topics: [
        "Mechanics",
        "Thermodynamics",
        "Electromagnetism",
        "Quantum Physics"
      ],
      instructor: "Teacher Name"
    },
    // Add more subjects as needed
  ];

  return (
    <section className="subjects-container page">
      <motion.div 
        className="subjects-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1>My Subjects</h1>
        <p>Overview of your enrolled subjects and their curriculum</p>
      </motion.div>

      <div className="subjects-grid">
        {subjects.map((subject) => (
          <motion.div
            key={subject.id}
            className="subject-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="subject-header">
              <FaBook className="subject-icon" />
              <div>
                <h2>{subject.name}</h2>
                <span className="subject-code">{subject.code}</span>
              </div>
            </div>

            <p className="subject-description">{subject.description}</p>

            <div className="subject-details">
              <div className="detail-item">
                <FaGraduationCap />
                <span>{subject.instructor}</span>
              </div>
              <div className="detail-item">
                <FaClock />
                <span>{subject.duration}</span>
              </div>
            </div>

            <div className="subject-topics">
              <h3>Topics Covered</h3>
              <ul>
                {subject.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Subjects;
