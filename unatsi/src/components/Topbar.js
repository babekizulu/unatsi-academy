import { Mail, MapPin, Phone } from "lucide-react"; // Icons from lucide-react
import { useEffect, useState } from "react";

function Topbar() {
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowDetails(true), 500); // Show details after 500ms
        return () => clearTimeout(timer);
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#1c2c80",
                color: "white",
                justifyContent: "space-around",
                alignItems: "center",
                animation: "fadeIn 1s ease-in-out",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            }}
        >
            {showDetails && (
                <div style={{ display: "flex", gap: "80px", alignItems: "center", transition: "opacity 0.5s ease-in-out" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Mail size={18} color="#007bff" /> {/* Email Icon */}
                        <span>Email: info@unatsiacademy.com</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Phone size={18} color="#28a745" /> {/* Phone Icon */}
                        <span>Contact: +268 765 95317</span>
                    </div>
                    <div className="location-animation" style={{ display: "flex", alignItems: "center", gap: "8px", transform: "translateX(-50%)" }}>
                        <MapPin size={18} color="#dc3545" /> {/* Location Icon */}
                        <span>Location: Lower Vusweni H108</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Topbar;
