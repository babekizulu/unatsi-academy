//components
import Header from "./components/Header";
import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
//pages
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Academics from "./components/pages/Academics";
import Admissions from "./components/pages/Admissions";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
import StudentPortal from "./components/pages/StudentPortal";
import StaffPortal from "./components/pages/StaffPortal";
import StudentDashboard from "./components/pages/dashboard/StudentDashboard";
import StudentProfile from "./components/pages/StudentProfile";
import EditProfile from "./components/pages/EditProfile";
import AcademicHistory from "./components/pages/AcademicHistory";
import Notifications from "./components/pages/Notifications";
import Subjects from "./components/pages/Subjects";
import Assignments from "./components/pages/Assignments";
import Grades from "./components/pages/Grades";
//articles
import Article1 from "./components/articles/Article1";
import Article2 from "./components/articles/Article2";
import Article3 from "./components/articles/Article3";
import Article4 from "./components/articles/Article4";
import AU1 from "./components/articles/AU1";
import AU2 from "./components/articles/AU2";
import AU3 from "./components/articles/AU3";
import AC1 from "./components/articles/AC1";
import AC2 from "./components/articles/AC2";
import AC3 from "./components/articles/AC3";
//hooks
import useUnatsiContext from "./hooks/use-unatsi-context";
import { useEffect, useState } from "react";

function App() {
    //context management
    const { signedIn, setSignedIn } = useUnatsiContext();
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // Set signedIn to false when the route is '/'
    useEffect(() => {
        if (currentPath === '/') {
            setSignedIn(false);
        }
    }, [currentPath, setSignedIn]);

    // Update currentPath when location changes
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };
        window.addEventListener('popstate', onLocationChange);
        return () => window.removeEventListener('popstate', onLocationChange);
    }, []);

    const student = {
        name: "John Doe",
        studentId: "1234567890",
        profileImage: "https://picsum.photos/300",
        email: "john.doe@example.com",
        phone: "123-456-7890",
        grade: "2",
        enrollmentDate: "2024-01-01",
        status: "Active",
        mark: "91",
        attendance: "95"
    }
    return (
        <div className="app">
            <Header />
            <Route path="/">
                <Home />
            </Route>
            <Route path="/articles/1">
                <Article1/>
            </Route>
            <Route path="/articles/2">
                <Article2/>
            </Route>
            <Route path="/articles/3">
                <Article3/>
            </Route>
            <Route path="/articles/4">
                <Article4/>
            </Route>
            <Route path="/about-us">
                <AboutUs />
            </Route>
            <Route path="/about-us/1">
                <AU1/>
            </Route>
            <Route path="/about-us/2">
                <AU2/>
            </Route>
            <Route path="/about-us/3">
                <AU3/>
            </Route>
            <Route path="/academics">
                <Academics />
            </Route>
            <Route path="/academics/1">
                <AC1/>
            </Route>
            <Route path="/academics/2">
                <AC2/>
            </Route>
            <Route path="/academics/3">
                <AC3/>
            </Route>
            <Route path="/admissions">
                <Admissions />
            </Route>
            <Route path="/gallery">
                <Gallery />
            </Route>
            <Route path="/contact-us">
                <ContactUs />
            </Route>
            <Route path="/student-portal">
                <StudentPortal />
            </Route>
            <Route path="/staff-portal">
                <StaffPortal />
            </Route>
            <Route path="/student/dashboard">
                <StudentDashboard />
            </Route>
            <Route path="/student/profile">
                <StudentProfile student={student} />
            </Route>
            <Route path="/student/profile/edit">
                <EditProfile student={student} />
            </Route>
            <Route path="/student/profile/academic-history">
                <AcademicHistory />
            </Route>
            <Route path="/student/notifications">
                <Notifications />
            </Route>
            <Route path="/student/subjects">
                <Subjects />
            </Route>
            <Route path="/student/assignments">
                <Assignments />
            </Route>
            <Route path="/student/grades">
                <Grades />
            </Route>
            {signedIn && <Sidebar/>}
        </div>
    )
}

export default App;