//components
import BackButton from '../BackButton';
function AU2() {
    return (
        <article className='article page'>
            <BackButton href='/about-us' prevPage='about us'/>
            <div className='article-title-container'>
                <h1>About Us</h1>
            </div>
            <div className='article-content'>
                <div className='paragraph-heading'>
                    <h2>How We Empower Young Minds</h2>
                </div>
                <div className='paragraph-content'>
                    <p>
                        At Unatsi Academy, we believe that education is the key to unlocking the potential of every child. Our unique approach to STEM education is designed to inspire curiosity, foster creativity, and equip students with the skills they need to thrive in a rapidly changing world.
                    </p>
                    <br/>
                    <p>
                        Our curriculum is built on a foundation of hands-on, experiential learning. We use real-world examples and projects to help students understand the practical applications of STEM concepts.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default AU2;
