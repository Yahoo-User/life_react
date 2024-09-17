import { useState, useEffect } from "react";


console.clear(); console.log('- Update.js --------');


export
function Update(props) {
    console.debug('Update(', props, ') invoked.');

    const [ title, setTitle ] = useState(props.title);
    const [ body, setBody ] = useState(props.body);

    /**
     * --------------------------
     * Monitoring state changes
     * --------------------------
     * - if second parameter of useEffect() hook, deps? abbreviated, listenning to all states changes. (***)
     * - if second parameter of useEffect() hook, deps? empty array [], specified callback function only once created. (***)
     */

    useEffect( () => console.info('\t- Monitoring states: title(', title, '), body(', body, ')'), [ title, body ] );


    return <article>
        <h3>Update</h3>

        <form onSubmit={ e => {     // e => void
            console.debug('Update::form::onSubmit(', e, ') invoked.');
            console.info('\t+ e.target.title.value:', e.target.title.value, ', e.target.body.value:', e.target.body.value);

            e.preventDefault();

            const _title = e.target.title.value;
            const _body = e.target.body.value;

            props.onUpdate(_title, _body);
        }}>

            {/* 
                Warning: 
                    You provided a `value` prop to a form field without an `onChange` handler, regardless of using props or states. <-- ***
                    This will render a read-only field. (***)
                    If the field should be mutable use `defaultValue`. (***)
                    Otherwise, set either `onChange` or `readOnly`.

                        <p><input type="text" name="title" size={ '78' } value={props.title} /></p>
                        <p><textarea name="body" cols={ '80' } rows={ '10' } value={props.body}></textarea></p>
                        
                Warning: Use the `defaultValue` or `value` props instead of setting children on <textarea> :

                        <p><textarea name="body" cols={ '80' } rows={ '10' }>{props.body}</textarea></p>
             */}

            {/* 
                Solution - 1: Using `defaultValue` prop.

                <p><input type="text" name="title" size={ '78' } defaultValue={ props.title } /></p>
                <p><textarea name="body" cols={ '80' } rows={ '10' } defaultValue={ props.body }></textarea></p>
            */}

            {/* Solution - 2: Using title, body states with `useState()` React Hook & `onChange` event handlerto update states on change */}
            <p><input type="text" name="title" size={ '78' } value={ title } onChange={ e => setTitle(e.target.value) } /></p>
            <p><textarea name="body" cols={ '80' } rows={ '10' } value={ body } onChange={ e => setBody(e.target.value) }></textarea></p>

            <p><input type="submit" value={ "Update" } /></p>
        </form>
    </article>;
}


// export default Article;      // XX, When using export ~ from in the `index.js`.


