import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import "./JoditNotFull.css";
import { Helmet } from 'react-helmet-async';

const NotFullExample = (props) => {
    const editor = useRef(null)
    // const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }

    return (
        <div className={`joditNotFull-wrapper w-100 px-0 ${props.curTab === 3 ? 'height-in-templates' : ''}`}>
            <Helmet>
                <title>jodit not full</title>
                <meta name='description' content={`Jodit`}></meta>
                <link rel='canonical' href={`/Jodit`}></link>
            </Helmet>

            
            <JoditEditor
                ref={editor}
                value={props.value}
                config={config}
                tabIndex={1} // tabIndex of textarea
                onBlur={newContent => props.setValue(newContent)} // preferred to use only this option to update the content for performance reasons
                onChange={newContent => { }}
                className="notFull-jodit"
                id="notFull-jodit"

            /></div>
    );
}
export default NotFullExample;