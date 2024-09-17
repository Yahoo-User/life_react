console.clear(); console.log('- Article.js --------');


export
function Article(props) {  // React Functional Component.
    console.debug('Article(', props, ') invoked.');

    return (  // React.JSX.Element

        <article>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </article>

    );
}


// export default Article;      // XX, When using export ~ from in the `index.js`.


