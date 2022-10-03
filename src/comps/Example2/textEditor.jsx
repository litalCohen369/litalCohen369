
import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-pro-react";

const TextEditor = ({}) => {
	const editor = useRef(null)
	const [content, setContent] = useState('')


    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/
        height: '500px',
        width: '85%',
        enableDragAndDropFileToEditor: true,
        // placeholder:'fghjnbvfghj',   // משנה את הכיתוב -start write
        buttons: [
            'source',
            '|',
            'preview',
            '|',
            'bold',
            'italic',
            'underline',
            '|',
            'ul',
            'ol',
            '|',
            'font',
            'fontsize',
            'brush',
            'paragraph',
            // 'align',
            '|',
            // 'image',
            'table',
            'link',
            '|',
            'left',
            'center',
            'right',
            'justify',
            '|',
            // 'undo',
            // 'redo',
            '|',
            'hr',
            'eraser',
            'fullsize',
        ],
        uploader: { 
            // insertImageAsBase64URI: true ,
			url: '/manage/upload',  //your upload api url
        },
        // removeButtons: ['brush', 'file'],
        showXPathInStatusbar: false,
        showCharsCounter: false,
        showWordsCounter: false,
        toolbarAdaptive: true,
        toolbarSticky: true,
        // disabled:true,   // עורך לא זמין- לא ניתן לשינוי
        // iframe:true,     //When this option is enabled, the editor's content will be placed in an iframe and isolated from the rest of the page.
        // style: {
        //     background: '#27272E',
        //     color: 'rgba(255,255,255,0.5)',
        // },
    };


	return (
		<JoditEditor
			ref={editor}
			value={content}
			config={config}
			tabIndex={1} // tabIndex of textarea
			onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
			onChange={newContent => {}}
			height= {1000}
		/>
	);
}

export default TextEditor;