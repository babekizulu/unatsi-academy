import React from 'react';
import { FaBell, FaExclamationCircle, FaInfoCircle, FaCalendarAlt } from 'react-icons/fa';

function Notifications() {
    // Mock data - replace with actual data from your backend
    const notifications = [
        {
            id: 1,
            title: 'Upcoming Parent-Teacher Meeting',
            message: 'The parent-teacher meeting is scheduled for next week. Please inform your parents.',
            type: 'info',
            date: '2024-04-15',
            read: false
        },
        {
            id: 2,
            title: 'School Holiday Notice',
            message: 'School will be closed for the upcoming holiday break from April 20-25.',
            type: 'warning',
            date: '2024-04-10',
            read: true
        },
        {
            id: 3,
            title: 'Sports Day Registration',
            message: 'Registration for the annual sports day is now open. Please register by Friday.',
            type: 'info',
            date: '2024-04-08',
            read: true
        },
        {
            id: 4,
            title: 'Important: Exam Schedule Change',
            message: 'The Mathematics exam has been rescheduled to next Monday.',
            type: 'alert',
            date: '2024-04-05',
            read: false
        }
    ];

    const getNotificationIcon = (type) => {
        switch (type) {
            case 'alert':
                return <FaExclamationCircle className="notification-icon alert" />;
            case 'warning':
                return <FaExclamationCircle className="notification-icon warning" />;
            default:
                return <FaInfoCircle className="notification-icon info" />;
        }
    };

    return (
        <section className="page student-notifications">
            <h1>Notifications</h1>
            
            <div className="notifications-container">
                {notifications.length === 0 ? (
                    <div className="no-notifications">
                        <FaBell className="no-notifications-icon" />
                        <p>No Notifications to Show</p>
                    </div>
                ) : (
                    notifications.map((notification) => (
                        <div 
                            key={notification.id} 
                            className={`notification-card ${notification.read ? 'read' : 'unread'}`}
                        >
                            <div className="notification-header">
                                {getNotificationIcon(notification.type)}
                                <h3>{notification.title}</h3>
                                <span className="notification-date">
                                    <FaCalendarAlt /> {notification.date}
                                </span>
                            </div>
                            <p className="notification-message">{notification.message}</p>
                            {!notification.read && (
                                <span className="unread-badge">New</span>
                            )}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
}

export default Notifications;
