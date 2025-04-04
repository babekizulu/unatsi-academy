//libs
import React from 'react';
import PropTypes from 'prop-types';
//components
import Link from '../Link';

const StudentProfile = ({ student }) => {
  const {
    name,
    studentId,
    profileImage,
    email,
    phone,
    grade,
    enrollmentDate,
    status,
    mark,
    attendance
  } = student;

  return (
    <div className="page student-profile">
      <div className="student-profile__header">
        <img 
          src={profileImage} 
          alt={`${name}'s profile`} 
          className="profile-image"
        />
        <div className="profile-info">
          <h1>{name}</h1>
          <div className="student-id">ID: {studentId}</div>
        </div>
      </div>

      <div className="student-profile__details">
        <div className="detail-section">
          <h2>Contact Information</h2>
          <div className="detail-item">
            <span className="label">Email</span>
            <span className="value">{email}</span>
          </div>
          <div className="detail-item">
            <span className="label">Phone</span>
            <span className="value">{phone}</span>
          </div>
        </div>

        <div className="detail-section">
          <h2>Academic Information</h2>
          <div className="detail-item">
            <span className="label">Grade</span>
            <span className="value">{grade}</span>
          </div>
          <div className="detail-item">
            <span className="label">Mark</span>
            <span className="value">{mark}%</span>
          </div>
          <div className="detail-item">
            <span className="label">Status</span>
            <span className="value">{status}</span>
          </div>
        </div>

        <div className="detail-section">
          <h2>Additional Details</h2>
          <div className="detail-item">
            <span className="label">Enrollment Date</span>
            <span className="value">{enrollmentDate}</span>
          </div>
          <div className="detail-item">
            <span className="label">Attendance</span>
            <span className="value">{attendance}%</span>
          </div>
        </div>
      </div>

      <div className="student-profile__actions">
        <Link href="/student/profile/edit" className="btn btn--primary">Edit Profile</Link>
        <Link href="/student/profile/academic-history" className="btn btn--secondary">View Academic History</Link>
      </div>
    </div>
  );
};

StudentProfile.propTypes = {
  student: PropTypes.shape({
    name: PropTypes.string.isRequired,
    studentId: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    grade: PropTypes.string.isRequired,
    enrollmentDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    mark: PropTypes.string.isRequired,
    attendance: PropTypes.number.isRequired
  }).isRequired
};

export default StudentProfile; 