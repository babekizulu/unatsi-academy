//components
import Headline from "../Headline";
//images
import as from "../images/as.jpg";
import br from "../images/br.jpg";
import ak from "../images/ak.jpg";

function Academics() {
    const titles = ['Our STEM-Focused Curriculum', 'Hands-On Learning & Innovation Labs', 'Beyond the Classroom: Enrichment & Extracurriculars'];
    const descriptions = ['Laying the Foundation for Future Innovators', 'Exploring, Experimenting, and Creating', 'Expanding Young Minds Through Exploration']
    const images = [as, br, ak]
    return (
        <section className="page academics">
            <article className="hero">
                <h1>Academics</h1>
                <p>Unatsi Academy offers a comprehensive academic program that prepares students for future success in a world driven by science and technology.</p>
            </article>
            <Headline title={titles[0]} description={descriptions[0]} img={images[0]} href='/academics/1'/>
            <Headline title={titles[1]} description={descriptions[1]} img={images[1]} href='/academics/2'/>
            <Headline title={titles[2]} description={descriptions[2]} img={images[2]} href='/academics/3'/>
        </section>
    )
}

export default Academics;
