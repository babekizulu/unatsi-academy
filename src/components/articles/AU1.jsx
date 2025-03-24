import BackButton from '../BackButton';

function AU1() {
    return (
        <article className='article page'>
            <BackButton href='/about-us' prevPage='about us'/>
            <div className='article-title-container'>
                <h1>About Us</h1>
            </div>
            <div className='article-content'>
                <div className='paragraph-heading'>
                    <h2>The Founders</h2>
                </div>
                <div className='paragraph-content'>
                <p>
                    Unatsi Academy, a primary school founded by the Dlamini family in 2022, was the brainchild of Mbusi Dlamini, Fana Maphanga, and Madoda Dlamini. Their vision was to establish a school with a STEM-based curriculum in Evusweni, Swaziland. The academy aims to provide students with a strong foundation in Science, Technology, Engineering, and Mathematics, preparing them for future success in a rapidly evolving world.
                </p>
                </div>
            </div>
        </article>
    )
}

export default AU1;
