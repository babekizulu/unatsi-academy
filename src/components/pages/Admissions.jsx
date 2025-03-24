//components
import Headline from "../Headline";
//images
import cb from '../images/cb.jpg';
import cc from '../images/cc.jpg';
import by from '../images/by.jpg';
import bz from '../images/bz.jpg';

function Admissions() {
    const titles = ['Availability Check', 'Student Assessment', 'Admission Decision', 'Additional Information'];
    const descriptions = [
        'Once you submit an inquiry or application, we will review our current enrollment and inform you if there are spaces available for the grade you are applying for.',
        'If space is available, we will contact you to schedule an assessment session for your child. This evaluation helps us determine their readiness and capability for the grade level they are applying for. The assessment is designed to be child-friendly and focuses on basic skills, learning ability, and developmental readiness.',
        'After the assessment, our admissions team will carefully review the results. We will then notify you of our final admission decision and provide the next steps for enrollment. If accepted, you will receive details on registration, required documentation, and school policies.',
        'Our admission process is open throughout the year, subject to space availability. Priority may be given to students residing within the local community or siblings of current students.'
    ];
    const images = [
        cb,
        cc,
        by,
        bz
    ];
    return (
        <section className="page admissions">
            <article className='hero'>
                <h1>Admissions</h1>
                <p>Welcome to Unatsi Academy's admissions page. We are excited to have you join our community of learners. Please take a moment to review the information below and apply for admission.</p>
            </article>
            <Headline title={titles[0]} description={descriptions[0]} img={images[0]} href='/admissions/availability-check' includeButton={false}/>
            <Headline title={titles[1]} description={descriptions[1]} img={images[1]} href='/admissions/student-assessment' includeButton={false}/>
            <Headline title={titles[2]} description={descriptions[2]} img={images[2]} href='/admissions/admission-decision' includeButton={false}/>
            <Headline title={titles[3]} description={descriptions[3]} img={images[3]} href='/admissions/additional-information' includeButton={false}/>
        </section>
    )
}

export default Admissions;
