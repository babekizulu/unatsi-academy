// libs
import { useState, useEffect } from 'react';

function Grades() {
    const [grades, setGrades] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [gpa, setGpa] = useState(0);
    const [selectedSemester, setSelectedSemester] = useState('Current');

    useEffect(() => {
        // Fetch grades
        const fetchGrades = async () => {
            setLoading(true);
            try {
                // This would be replaced with an actual API call
                // const response = await axios.get('http://localhost:5000/api/student/grades');
                // setGrades(response.data);
                
                // Mock data for development
                setTimeout(() => {
                    const mockGrades = [
                        {
                            id: 1,
                            subject: 'Mathematics',
                            term: 'Term 1',
                            semester: 'Current',
                            assignments: [
                                { name: 'Quiz 1', score: 85, maxScore: 100, weight: 0.1 },
                                { name: 'Midterm', score: 78, maxScore: 100, weight: 0.3 },
                                { name: 'Final Exam', score: 92, maxScore: 100, weight: 0.6 }
                            ],
                            overallGrade: 'A-',
                            percentage: 87
                        },
                        {
                            id: 2,
                            subject: 'Physics',
                            term: 'Term 1',
                            semester: 'Current',
                            assignments: [
                                { name: 'Lab Work', score: 45, maxScore: 50, weight: 0.2 },
                                { name: 'Midterm', score: 82, maxScore: 100, weight: 0.3 },
                                { name: 'Project', score: 90, maxScore: 100, weight: 0.2 },
                                { name: 'Final Exam', score: 78, maxScore: 100, weight: 0.3 }
                            ],
                            overallGrade: 'B+',
                            percentage: 81
                        },
                        {
                            id: 3,
                            subject: 'History',
                            term: 'Term 1',
                            semester: 'Current',
                            assignments: [
                                { name: 'Essay', score: 85, maxScore: 100, weight: 0.3 },
                                { name: 'Participation', score: 90, maxScore: 100, weight: 0.1 },
                                { name: 'Midterm', score: 88, maxScore: 100, weight: 0.2 },
                                { name: 'Final Exam', score: 91, maxScore: 100, weight: 0.4 }
                            ],
                            overallGrade: 'A',
                            percentage: 89
                        },
                        {
                            id: 4,
                            subject: 'English Literature',
                            term: 'Term 1',
                            semester: 'Current',
                            assignments: [
                                { name: 'Reading Responses', score: 47, maxScore: 50, weight: 0.2 },
                                { name: 'Essay', score: 85, maxScore: 100, weight: 0.3 },
                                { name: 'Presentation', score: 92, maxScore: 100, weight: 0.2 },
                                { name: 'Final Exam', score: 88, maxScore: 100, weight: 0.3 }
                            ],
                            overallGrade: 'A-',
                            percentage: 87
                        },
                        {
                            id: 5,
                            subject: 'Computer Science',
                            term: 'Term 1',
                            semester: 'Current',
                            assignments: [
                                { name: 'Coding Assignments', score: 95, maxScore: 100, weight: 0.3 },
                                { name: 'Quizzes', score: 88, maxScore: 100, weight: 0.2 },
                                { name: 'Project', score: 94, maxScore: 100, weight: 0.2 },
                                { name: 'Final Exam', score: 91, maxScore: 100, weight: 0.3 }
                            ],
                            overallGrade: 'A',
                            percentage: 92
                        },
                        {
                            id: 6,
                            subject: 'Biology',
                            term: 'Term 2',
                            semester: 'Previous',
                            assignments: [
                                { name: 'Lab Reports', score: 88, maxScore: 100, weight: 0.2 },
                                { name: 'Midterm', score: 84, maxScore: 100, weight: 0.3 },
                                { name: 'Research Paper', score: 91, maxScore: 100, weight: 0.2 },
                                { name: 'Final Exam', score: 86, maxScore: 100, weight: 0.3 }
                            ],
                            overallGrade: 'B+',
                            percentage: 87
                        }
                    ];
                    
                    setGrades(mockGrades);
                    
                    // Calculate GPA (simplified)
                    const currentSemesterGrades = mockGrades.filter(grade => grade.semester === 'Current');
                    const totalPoints = currentSemesterGrades.reduce((sum, grade) => sum + grade.percentage, 0);
                    const calculatedGpa = (totalPoints / currentSemesterGrades.length) / 20; // Convert to 4.0 scale (simplified)
                    setGpa(calculatedGpa.toFixed(2));
                    
                    setLoading(false);
                }, 800); // simulate loading delay
            } catch (err) {
                console.error('Error fetching grades:', err);
                setError('Failed to load grades. Please try again later.');
                setLoading(false);
            }
        };

        fetchGrades();
    }, []);

    // Get letter grade color
    const getGradeColor = (grade) => {
        if (grade.startsWith('A')) return '#22c55e'; // green
        if (grade.startsWith('B')) return '#3b82f6'; // blue
        if (grade.startsWith('C')) return '#f59e0b'; // amber
        if (grade.startsWith('D')) return '#f97316'; // orange
        return '#ef4444'; // red for F
    };

    // Filter grades by selected semester
    const filteredGrades = grades.filter(grade => grade.semester === selectedSemester);

    return (
        <section className="page grades-page">
            <article className="hero">
                <h1>My Academic Grades</h1>
                <p>View your current and past academic performance</p>
            </article>

            <div className="grades-container">
                <div className="grades-header">
                    <div className="semester-selector">
                        <button 
                            className={selectedSemester === 'Current' ? 'active' : ''} 
                            onClick={() => setSelectedSemester('Current')}
                        >
                            Current Semester
                        </button>
                        <button 
                            className={selectedSemester === 'Previous' ? 'active' : ''} 
                            onClick={() => setSelectedSemester('Previous')}
                        >
                            Previous Semester
                        </button>
                    </div>
                    <div className="gpa-display">
                        <div className="gpa-card">
                            <h3>Current GPA</h3>
                            <div className="gpa-value">{gpa}</div>
                            <div className="gpa-scale">on a 4.0 scale</div>
                        </div>
                    </div>
                </div>

                {loading ? (
                    <div className="loading-spinner">Loading grades...</div>
                ) : error ? (
                    <div className="error-message">{error}</div>
                ) : filteredGrades.length === 0 ? (
                    <div className="no-grades">
                        <p>No grades available for the selected semester.</p>
                    </div>
                ) : (
                    <div className="grades-list">
                        {filteredGrades.map((grade) => (
                            <div key={grade.id} className="grade-card">
                                <div className="grade-header">
                                    <h3>{grade.subject}</h3>
                                    <div 
                                        className="grade-badge"
                                        style={{ backgroundColor: getGradeColor(grade.overallGrade) + '20', color: getGradeColor(grade.overallGrade) }}
                                    >
                                        {grade.overallGrade} ({grade.percentage}%)
                                    </div>
                                </div>
                                <div className="grade-details">
                                    <h4>Assignments and Assessments</h4>
                                    <div className="grade-assignments">
                                        {grade.assignments.map((assignment, index) => (
                                            <div key={index} className="assignment-item">
                                                <div className="assignment-info">
                                                    <span>{assignment.name}</span>
                                                    <span className="assignment-score">{assignment.score}/{assignment.maxScore}</span>
                                                </div>
                                                <div className="score-bar">
                                                    <div 
                                                        className="score-fill"
                                                        style={{ 
                                                            width: `${(assignment.score / assignment.maxScore) * 100}%`,
                                                            backgroundColor: getGradeColor(grade.overallGrade)
                                                        }}
                                                    ></div>
                                                </div>
                                                <div className="assignment-weight">
                                                    Weight: {assignment.weight * 100}%
                                                </div>
                                            </div>
                                        ))}
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

export default Grades;
