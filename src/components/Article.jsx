function Article({title, children}) {
    return (
        <article className="article">
            <article className='article-title-container'>
                <h1>{title}</h1>
            </article>
            <article className='article-content'>
                {children}
            </article>
        </article>
    )
}

export default Article;
