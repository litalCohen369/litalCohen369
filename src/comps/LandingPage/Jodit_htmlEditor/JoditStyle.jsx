import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import "./JoditStyle.css";
import { Helmet } from 'react-helmet-async';

const Example = (props) => {
  const editor = useRef(null)
  const [content, setContent] = useState(props.value || '')

  const config = {
    readonly: false,// all options from https://xdsoft.net/jodit/doc/

    uploader: {
      url: '/manage/upload',  //your upload api url
      insertImageAsBase64URI: true,
      imagesExtensions: ['jpg', 'png', 'jpeg', 'gif'],
      //headers: {"token":`${db.token}`},
      filesVariableName: function (t) {
        return 'files[' + t + ']';
      }, //"files",
      withCredentials: false,
      pathVariableName: 'path',
      format: 'json',
      method: 'POST',
      prepareData: function (formdata) {
        return formdata;
      },
      isSuccess: function (e) {
        return e.success;
      },
      getMessage: function (e) {
        return void 0 !== e.data.messages && Array.isArray(e.data.messages)
          ? e.data.messages.join('')
          : '';
      },

      contentType: function (e) {
        return (
          (void 0 === this.jodit.ownerWindow.FormData || 'string' == typeof e) &&
          'application/x-www-form-urlencoded; charset=UTF-8'
        );
      },
    },
  }

  const update = (newContent) => {
    setContent(newContent);
    if (props.setValue)
      props.setValue(newContent);
  }

  return (
    <div className="jodit-wrapper w-100 px-0">
      <Helmet>
        <title>JoditStyle</title>
        <meta name='description' content={`JoditStyle`}></meta>
        <link rel='canonical' href={`/JoditStyle`}></link>
      </Helmet>


      <JoditEditor
        ref={editor}
        value={props.value || content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={newContent => update(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={newContent => { }}
      />
    </div>
  );
}
export default Example;