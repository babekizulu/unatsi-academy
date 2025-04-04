// libs
import { useState, useEffect } from 'react';
import axios from 'axios';

function Assignments() {
    const [assignments, setAssignments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch assignments
        const fetchAssignments = async () => {
            setLoading(true);
            try {
                // This would be replaced with an actual API call
                // const response = await axios.get('http://localhost:5000/api/student/assignments');
                // setAssignments(response.data);
                
                // Mock data for development
                setTimeout(() => {
                    const mockAssignments = [
                        {
                            id: 1,
                            title: 'Mathematics Problem Set',
                            subject: 'Mathematics',
                            description: 'Complete exercises 1-20 from Chapter 5',
                            dueDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
                            status: 'pending'
                        },
                        {
                            id: 2,
                            title: 'Physics Lab Report',
                            subject: 'Physics',
                            description: 'Write a lab report on the experiment conducted last week',
                            dueDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago (overdue)
                            status: 'pending'
                        },
                        {
                            id: 3,
                            title: 'History Essay',
                            subject: 'History',
                            description: 'Write a 5-page essay on the Industrial Revolution',
                            dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
                            status: 'pending'
                        },
                        {
                            id: 4,
                            title: 'Chemistry Quiz Preparation',
                            subject: 'Chemistry',
                            description: 'Study chapters 7-9 for upcoming quiz',
                            dueDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000), // 1 day from now
                            status: 'pending'
                        },
                        {
                            id: 5,
                            title: 'English Literature Analysis',
                            subject: 'English',
                            description: 'Analyze the themes in "To Kill a Mockingbird"',
                            dueDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000), // 1 day ago (overdue)
                            status: 'pending'
                        }
                    ];
                    setAssignments(mockAssignments);
                    setLoading(false);
                }, 800); // simulate loading delay
            } catch (err) {
                console.error('Error fetching assignments:', err);
                setError('Failed to load assignments. Please try again later.');
                setLoading(false);
            }
        };

        fetchAssignments();
    }, []);

    // Format date to show in a readable format
    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Check if assignment is overdue
    const isOverdue = (dueDate) => {
        return new Date(dueDate) < new Date();
    };

    // Calculate time remaining or overdue status
    const getTimeStatus = (dueDate) => {
        const now = new Date();
        const due = new Date(dueDate);
        const diffTime = due - now;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays < 0) {
            return `Overdue by ${Math.abs(diffDays)} day${Math.abs(diffDays) !== 1 ? 's' : ''}`;
        } else if (diffDays === 0) {
            return 'Due today';
        } else if (diffDays === 1) {
            return 'Due tomorrow';
        } else {
            return `Due in ${diffDays} days`;
        }
    };

    return (
        <section className="page assignments-page">
            <article className="hero">
                <h1>My Assignments</h1>
                <p>View and manage your current assignments</p>
            </article>

            <div className="assignments-container">
                {loading ? (
                    <div className="loading-spinner">Loading assignments...</div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : assignments.length === 0 ? (
                    <div className="no-assignments">
                        <p>You have no current assignments.</p>
                    </div>
                ) : (
                    <div className="assignments-list">
                        {assignments.map((assignment) => (
                            <div 
                                key={assignment.id} 
                                className={`assignment-card ${isOverdue(assignment.dueDate) ? 'overdue' : ''}`}
                            >
                                <div className="assignment-header">
                                    <h3>{assignment.title}</h3>
                                    <span className="subject-badge">{assignment.subject}</span>
                                </div>
                                <p className="assignment-description">{assignment.description}</p>
                                <div className="assignment-footer">
                                    <div className="due-date">
                                        <span>Due date: {formatDate(assignment.dueDate)}</span>
                                    </div>
                                    <div className={`time-status ${isOverdue(assignment.dueDate) ? 'overdue-status' : ''}`}>
                                        {getTimeStatus(assignment.dueDate)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

export default Assignments;
