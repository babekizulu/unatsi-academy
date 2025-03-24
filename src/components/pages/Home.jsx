//components
import Headline from "../Headline";
import Link from '../Link';
//images
import bm from '../images/bm.jpg';
import aj from '../images/aj.jpg';
import bu from '../images/bu.jpg';
import ao from '../images/ao.jpg';

const Home = () => {
    const titles = ['Building the Future: The Role of STEM in Primary Education', 'Why STEM Skills Matter for the Next Generation', 'Hands-on Learning: The Power of Experiential STEM Education', 'Bridging the Digital Divide: How STEM Transforms Young Minds'];
    const descriptions = ['Discover how STEM education prepares students for future success', 'Explore the importance of STEM skills in today\'s world', 'Experience hands-on STEM activities that spark curiosity and creativity', 'Learn how STEM education bridges the digital divide and empowers young minds'];
    const images = [
        bm,
        aj,
        bu,
        ao
    ];
    
    return (
        <section className="page home">
            <article className='hero'>
                <h1>Inspiring Innovation, Nurturing Young Minds</h1>
                <p>At Unatsi Academy, we empower young learners with the skills to explore, create, and lead in a world driven by science and technology</p>
                <div className="button-container">
                    <Link href="/admissions" className="button">Admissions</Link>
                </div>
            </article>
            <Headline title={titles[0]} description={descriptions[0]} img={images[0]} href='/articles/1'/>
            <Headline title={titles[1]} description={descriptions[1]} img={images[1]} href='/articles/2'/>
            <Headline title={titles[2]} description={descriptions[2]} img={images[2]} href='/articles/3'/>
            <Headline title={titles[3]} description={descriptions[3]} img={images[3]} href='/articles/4'/>
        </section>
    )
}

export default Home;
