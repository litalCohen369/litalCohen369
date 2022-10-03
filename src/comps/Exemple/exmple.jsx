import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-pro-react";

// מקבל את הפונקציה מהאבא כדי שיוחל להחזיר לשם פרמטר
const Example = ({htmlDesign, contents}) => { 
	// console.log("content: " + contents) 
// const Example = ({}) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	const config = {
		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        height: '500px',
        width: '90%',
		uploader: {
			// url: 'https://xdsoft.net/jodit/finder/?action=fileUpload'
			url: '/manage/upload',  //your upload api url
			insertImageAsBase64URI: true,
			imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
		},
		filebrowser: {
			ajax: {
				url: 'https://xdsoft.net/jodit/finder/'
			},
			height: 580,
		},
		// fullsize: false,
		// value: contents,
	};
	
	// האם להראות את התוכן כמחרוזת תגיות
	const [showContent, setshowContent] = useState(false);

	const saveContent=()=>{
		setshowContent(true);
		console.log(showContent);
		htmlDesign(content);
	};

	return (
		<div>
			<h3>Edit landing page</h3>
			{/* <p>{contents}</p> */}
			<JoditEditor
				ref={editor}
				value={contents}
				config={config}
				tabIndex={1} // tabIndex of textarea
				onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
				onChange={newContent => {}}
				height= {1000}
			/>
			{/*HTML -שומר ושולח לאבא את התוכן כמחרוזת  */}
			<button onClick={saveContent}>save</button> 
			{/* {showContent && <p>{content}</p>} */}
		</div>
	);
}

export default Example;