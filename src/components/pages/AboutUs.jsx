//components
import Headline from "../Headline";
//images
import cw from '../images/cw.jpg';
import cd from '../images/cd.jpg';
import bi from '../images/bi.jpg';

function AboutUs() {
    const titles = ['From Humble Beginnings to a Thriving STEM Academy', 'Empowering Young Minds for a Future of Innovation', 'The Unatsi Way: Learning Beyond the Classroom']
    const descriptions = ['Discover the journey of Unatsi Academy from its humble beginnings to becoming a leading STEM academy', 'Explore how Unatsi Academy empowers young minds to become innovators of the future', 'Learn about the unique approach to education that Unatsi Academy takes to prepare students for success in a rapidly changing world']
    const images = [cw, cd, bi]
    return (
        <section className="page about-us">
            <article className="hero">
                <h1>About Us</h1>
                <p>Unatsi Academy is a STEM-focused school that prepares students for future success in a world driven by science and technology.</p>
            </article>
            <Headline title={titles[0]} description={descriptions[0]} img={images[0]} href='/about-us/1'/>
            <Headline title={titles[1]} description={descriptions[1]} img={images[1]} href='/about-us/2'/>
            <Headline title={titles[2]} description={descriptions[2]} img={images[2]} href='/about-us/3'/>
        </section>
    )
}

export default AboutUs;
