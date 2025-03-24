function Paragraph({heading, content}) {
    return (
        <article className="paragraph">
            <h2>{heading}</h2>
            <p>{content}</p>
        </article>
    );
}

export default Paragraph;