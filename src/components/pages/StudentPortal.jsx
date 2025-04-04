//libs
import { useState, useEffect } from 'react';
import axios from 'axios';
//hooks
import useUnatsiContext from '../../hooks/use-unatsi-context';

function StudentPortal() {
    //context management
    const { setSignedIn } = useUnatsiContext();
    //state management
    const [studentID, setStudentID] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        studentID: '',
        password: '',
        general: ''
    });

    // Clear errors after 3 seconds
    useEffect(() => {
        if (errors.studentID || errors.password || errors.general) {
            const timer = setTimeout(() => {
                setErrors({
                    studentID: '',
                    password: '',
                    general: ''
                });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    //handlers
    const handleNavigation = () => {
        window.history.pushState({}, '', '/student/dashboard');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            studentID: '',
            password: '',
            general: ''
        };

        // Validate Student ID
        if (!studentID.trim()) {
            newErrors.studentID = 'Student ID is required';
            isValid = false;
        } else if (studentID.length < 6) {
            newErrors.studentID = 'Student ID must be at least 6 characters';
            isValid = false;
        }

        // Validate Password
        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(studentID, password);
        setSignedIn(true);
        handleNavigation();
        
        // if (validateForm()) {
        //     try {
        //         const response = await axios.post('http://localhost:5000/api/student/login', {
        //             studentID,
        //             password
        //         });
    
        //         if(response.status === 200 || response.status === 201) {
        //             handleNavigation();
        //         }
        //     } catch (error) {
        //         console.error('Login failed:', error);
        //         setErrors(prev => ({
        //             ...prev,
        //             general: 'Failed to login'
        //         }));
        //     }
        // }
    }

    return (
        <section className='page'>
            <article className='hero'>
                <h1>Student Portal</h1>
                <p>Welcome to the Student Portal</p>
                <p>Please enter your Student ID and Password to access your account.</p>
            </article>
            <article className='sign-in-container'>
                <form onSubmit={handleSubmit}>
                    <input 
                        value={studentID} 
                        onChange={(e) => setStudentID(e.target.value)} 
                        type="text" 
                        placeholder='Student ID'
                        className={errors.studentID ? 'error' : ''}
                    />
                    {errors.studentID && <span className="error-message">{errors.studentID}</span>}
                    
                    <input 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        type="password" 
                        placeholder='Password'
                        className={errors.password ? 'error' : ''}
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                    
                    {errors.general && <span className="error-message">{errors.general}</span>}
                    <button type='submit'>Sign In</button>
                </form>
            </article>
        </section>
    )
}

export default StudentPortal;
