//libs
import { useState } from 'react';
import { createContext } from 'react';
//icons
import { FaHome, FaUser, FaBell, FaBook, FaFile, FaChartBar, FaCalendar, FaMoneyBill, FaHeadset, FaSignOutAlt, FaCog } from 'react-icons/fa';

//create context
const UnatsiContext = createContext();

function UnatsiProvider({children}) {
    const [signedIn, setSignedIn] = useState(false);
    const [mode, setMode] = useState('student'); // 'student' or 'staff'

    const studentNavItems = [
        { href: '/student/dashboard', icon: <FaHome className='icon'/>, label: 'Dashboard' },
        { href: '/student/profile', icon: <FaUser className='icon'/>, label: 'Profile' },
        { href: '/student/notifications', icon: <FaBell className='icon'/>, label: 'Notifications' },
        { href: '/student/subjects', icon: <FaBook className='icon'/>, label: 'Subjects' },
        { href: '/student/assignments', icon: <FaFile className='icon'/>, label: 'Assignments' },
        { href: '/student/grades', icon: <FaChartBar className='icon'/>, label: 'Grades' },
        // { href: '/student/calendar', icon: <FaCalendar className='icon'/>, label: 'Calendar' },
        // { href: '/student/exams', icon: <FaCalendar className='icon'/>, label: 'Exams' },
        // { href: '/student/library', icon: <FaBook className='icon'/>, label: 'Library' },
        // { href: '/student/attendance', icon: <FaCalendar className='icon'/>, label: 'Attendance' },
        // { href: '/student/fees', icon: <FaMoneyBill className='icon'/>, label: 'Fees' },
        // { href: '/student/documents', icon: <FaFile className='icon'/>, label: 'Documents' },
        // { href: '/student/forms', icon: <FaFile className='icon'/>, label: 'Forms' },
        // { href: '/student/settings', icon: <FaCog className='icon'/>, label: 'Settings' },
        // { href: '/student/support', icon: <FaHeadset className='icon'/>, label: 'Support' },
        { href: '/', icon: <FaSignOutAlt className='icon'/>, label: 'Sign Out' }
    ];

    const staffNavItems = [
        { href: '/staff/dashboard', icon: <FaHome className='icon'/>, label: 'Dashboard' },
        { href: '/staff/profile', icon: <FaUser className='icon'/>, label: 'Profile' },
        { href: '/staff/notifications', icon: <FaBell className='icon'/>, label: 'Notifications' },
        { href: '/staff/classes', icon: <FaBook className='icon'/>, label: 'Classes' },
        { href: '/staff/assignments', icon: <FaFile className='icon'/>, label: 'Assignments' },
        { href: '/staff/attendance', icon: <FaCalendar className='icon'/>, label: 'Attendance' },
        { href: '/staff/calendar', icon: <FaCalendar className='icon'/>, label: 'Calendar' },
        { href: '/staff/attendance', icon: <FaCalendar className='icon'/>, label: 'Attendance' },
        { href: '/staff/timetable', icon: <FaCalendar className='icon'/>, label: 'Timetable' },
        { href: '/staff/gradebook', icon: <FaFile className='icon'/>, label: 'Gradebook' },
        { href: '/staff/curriculum', icon: <FaBook className='icon'/>, label: 'Curriculum' },
        { href: '/staff/students', icon: <FaUser className='icon'/>, label: 'Students' },
        { href: '/staff/leave-requests', icon: <FaCalendar className='icon'/>, label: 'Leave Requests' },
        { href: '/staff/staff-directory', icon: <FaUser className='icon'/>, label: 'Staff Directory' },
        { href: '/staff/reports-analytics', icon: <FaFile className='icon'/>, label: 'Reports & Analytics' },
        { href: '/staff/settings', icon: <FaCog className='icon'/>, label: 'Settings' },
        { href: '/staff/events', icon: <FaCalendar className='icon'/>, label: 'Events' },
        { href: '/staff/support', icon: <FaHeadset className='icon'/>, label: 'Support' },
        { href: '/staff/logout', icon: <FaSignOutAlt className='icon'/>, label: 'Logout' }
    ];

    return (
        <UnatsiContext.Provider value={{
            signedIn, 
            setSignedIn,
            mode,
            setMode,
            studentNavItems,
            staffNavItems
        }}>
            {children}
        </UnatsiContext.Provider>
    )
}

export { UnatsiContext, UnatsiProvider };
