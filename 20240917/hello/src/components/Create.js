console.clear(); console.log('- Create.js --------');


export
function Create(props) {     // React Functional Component.
    console.debug('Create(', props, ') invoked.');

    // Important: if without symbol (), 'Un-reachable code' warning raised and no output.    (***) 
    return (    // React.JSX.Element
        <article>
            <h3>Create</h3>

            <form onSubmit={ e => {     // e => void
                console.debug('Create::form::onSubmit(', e, ') invoked.');

                e.preventDefault();
                // console.info("\t+ title:", e.target.title.value, ', body:', e.target.body.value);

                const title = e.target.title.value;
                const body = e.target.body.value;

                props.onCreate(title, body);
            }}>
                <p><input type="text" name="title" size={ '78' } placeholder="Please enter a title ..." /></p>
                <p><textarea name="body" cols={ '80' } rows={ '10' } placeholder="Please enter a content ..."></textarea></p>

                <p><input type="submit" value={ "Create" } /></p>
            </form>
        </article>
    );
}


// export default Create;      // XX, When using export ~ from in the `index.js`.


