function NavLink({className, href, children, onNavigate}) {
    const onClick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return true;
        }
        event.preventDefault();
        window.history.pushState({}, '', href);
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
        
        // Call the onNavigate callback after navigation
        if (onNavigate) {
            onNavigate();
        }
    }
    
    return (
        <a href={href} className={className} onClick={onClick}>{children}</a>
    )
}

export default NavLink; 