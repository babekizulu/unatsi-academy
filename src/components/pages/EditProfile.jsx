import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link';

function EditProfile({ student, onSave }) {
    const [formData, setFormData] = useState({
        name: student.name,
        email: student.email,
        phone: student.phone,
        profileImage: student.profileImage,
        grade: student.grade
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <section className="edit-profile page">
            <div className="edit-profile__header">
                <img 
                    src={formData.profileImage} 
                    alt={`${formData.name}'s profile`} 
                    className="profile-image"
                />
                <div className="profile-info">
                    <h1>Edit Profile</h1>
                    <div className="student-id">ID: {student.studentId}</div>
                </div>
            </div>

            <form className="edit-profile__form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <h2>Contact Information</h2>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>Profile Image</h2>
                    <div className="form-group">
                        <label htmlFor="profileImage">Profile Image URL</label>
                        <input
                            type="url"
                            id="profileImage"
                            name="profileImage"
                            value={formData.profileImage}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="form-section">
                    <h2>Academic Information</h2>
                    <div className="form-group">
                        <label htmlFor="grade">Grade</label>
                        <select
                            id="grade"
                            name="grade"
                            value={formData.grade}
                            onChange={handleChange}
                            required
                        >
                            <option value="Grade 8">Grade 8</option>
                            <option value="Grade 9">Grade 9</option>
                            <option value="Grade 10">Grade 10</option>
                            <option value="Grade 11">Grade 11</option>
                            <option value="Grade 12">Grade 12</option>
                        </select>
                    </div>
                </div>

                <div className="form-actions">
                    <button type="submit" className="btn btn--primary">Save Changes</button>
                    <Link href="/student/profile" className="btn btn--secondary">Cancel</Link>
                </div>
            </form>
        </section>
    );
}

EditProfile.propTypes = {
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
    }).isRequired,
    onSave: PropTypes.func.isRequired
};

export default EditProfile;
