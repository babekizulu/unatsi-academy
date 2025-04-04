//components
import Link from './Link';
//icons
import { FaHome, FaUser, FaBell, FaBook, FaFile, FaChartBar, FaCalendar, FaMoneyBill, FaHeadset, FaSignOutAlt, FaCog } from 'react-icons/fa';
//context
import { UnatsiContext } from '../context/UnatsiContext';
import { useContext } from 'react';

function Sidebar() {
    const { mode, studentNavItems, staffNavItems } = useContext(UnatsiContext);
    
    const navItems = mode === 'student' ? studentNavItems : 
                    mode === 'staff' ? staffNavItems : [];

    return (
        <aside className="sidebar">
            <nav>
                <ul>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.href}>
                                {item.icon}
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>
    )
}

export default Sidebar;
