import { Mail, MapPin, Phone } from "lucide-react"; // Icons from lucide-react
import { useEffect, useState } from "react";

function Topbar() {
    const [showDetails, setShowDetails] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowDetails(true); // Show details after 500ms
        }, 500);

        // Update screen size on window resize
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            style={{
                backgroundColor: "#1c2c80",
                color: "white",
                padding: "10px",
                animation: "fadeIn 1s ease-in-out",
                boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {showDetails && (
                <div
                    style={{
                        display: "flex",
                        flexDirection: isMobile ? "column" : "row", // Stack vertically on mobile
                        gap: isMobile ? "15px" : "80px",
                        textAlign: isMobile ? "start" : "left", // Changed to "start" for mobile
                        transition: "opacity 0.5s ease-in-out",
                    }}
                >
                    {/* Email */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Mail size={18} color="#007bff" />
                        <span>Email: info@unatsiacademy.com</span>
                    </div>

                    {/* Phone */}
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <Phone size={18} color="#28a745" />
                        <span>Contact: +268 765 21509</span>
                    </div>

                    {/* Location */}
                    <div
                        className="location-animation"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                            marginLeft: isMobile ? "33%" : "8rem", // Adjust margin for mobile view
                        }}
                    >
                        <MapPin size={18} color="#dc3545" />
                        <span>Location: Lower Vusweni H108</span>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Topbar;
