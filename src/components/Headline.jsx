//components
import Link from './Link';

function Headline({title, description, img, href, includeButton = true}) {
    return (
        <div className="headline">
            <article className='headline-title'>
                <h2>{title}</h2>
            </article>
            <div className='headline-content'>
                <div>
                    <article className='headline-description'>
                        <p>{description}</p>
                    </article>
                    {includeButton && (
                        <article className='headline-button'>
                            <Link href={href} className='button'>Read More</Link>
                        </article>
                    )}
                </div>
                <article className='headline-image'>
                        <img src={img} alt={title} />
                </article> 
            </div>
        </div>
    );
};

export default Headline;
