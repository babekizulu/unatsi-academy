//components
import Header from "./components/Header";
import Route from "./components/Route";
//pages
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";
import Academics from "./components/pages/Academics";
import Admissions from "./components/pages/Admissions";
import Gallery from "./components/pages/Gallery";
import ContactUs from "./components/pages/ContactUs";
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

function App() {
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
        </div>
    )
}

export default App;