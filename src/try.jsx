import React, { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Try = (props) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');

	// const config = useMemo(
	// 	{
	// 		readonly: false, // all options from https://xdsoft.net/jodit/doc/,
	// 		props: props || 'Start typings...'
	// 	},
	// 	[props]
	// );

	return (
        <div>
            if ({props}) {
                <p>fghjklvhjkl</p>
            }
            else{
                <p>dddddddd</p>
            }
            
        </div>
	);
};

export default Try;