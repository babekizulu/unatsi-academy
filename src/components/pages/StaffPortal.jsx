import { useState, useEffect } from 'react';
import axios from 'axios';

function StaffPortal() {
    const [staffID, setStaffID] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({
        staffID: '',
        password: '',
        general: ''
    });

    // Clear errors after 3 seconds
    useEffect(() => {
        if (errors.staffID || errors.password || errors.general) {
            const timer = setTimeout(() => {
                setErrors({
                    staffID: '',
                    password: '',
                    general: ''
                });
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    //handlers
    const handleNavigation = () => {
        window.history.pushState({}, '', '/staff/dashboard');
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            staffID: '',
            password: '',
            general: ''
        };

        // Staff ID validation
        if (!staffID.trim()) {
            newErrors.staffID = 'Staff ID is required';
            isValid = false;
        } else if (!/^\d{6}$/.test(staffID)) {
            newErrors.staffID = 'Staff ID must be 6 digits';
            isValid = false;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(staffID, password);
        setSignedIn(true);
        handleNavigation();
        
        // if (validateForm()) {
        //     try {
        //         const response = await axios.post('http://localhost:5000/api/staff/login', {
        //             staffID,
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
        <section className="page">
            <article className='hero'>
                <h1>Staff Portal</h1>
                <p>Welcome to the staff portal</p>
                <p>Please enter your staff ID and password to login</p>
            </article>
            <article className="sign-in-container">
                <form onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Staff ID" 
                            value={staffID} 
                            onChange={(e) => setStaffID(e.target.value)}
                            className={errors.staffID ? 'error' : ''}
                        />
                        {errors.staffID && <span className="error-message">{errors.staffID}</span>}
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            className={errors.password ? 'error' : ''}
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    {errors.general && <span className="error-message">{errors.general}</span>}
                    <button type="submit">Login</button>
                </form>
            </article>
        </section>
    )
}

export default StaffPortal;
