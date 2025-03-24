//components
import BackButton from '../BackButton';

function AU3() {
    return (
        <article className='article page'>
            <BackButton href='/about-us' prevPage='about us'/>
            <div className='article-title-container'>
                <h1>How We Learn at Unatsi Academy</h1>
            </div>
            <div className='article-content'>
                <div className='paragraph-heading'>
                    <h2>Hands-On Learning</h2>
                </div>
                <div className='paragraph-content'>
                    <p>
                        At Unatsi Academy, we are dedicated to transitioning into a STEM-focused curriculum. Our approach emphasizes hands-on learning, where students engage with real-world examples and projects to grasp the practical applications of STEM concepts. This method not only makes learning more interactive and enjoyable but also ensures that our students develop critical thinking and problem-solving skills essential for their future.
                    </p>
                </div>
            </div>
        </article>
    )
}

export default AU3;
