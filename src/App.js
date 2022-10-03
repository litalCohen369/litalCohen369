import './App.css';
import TextTools from './comps/LandingPage/textTools';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState, Component } from "react";
import { ReactDOM } from 'react';
import parse from "html-react-parser";
import { Menu } from 'react-pro-sidebar';
import ButtonTools from './comps/LandingPage/buttonTools';
import ImageTools from './comps/LandingPage/imageTools';
// import AddEditor from './comps/addEditor';
import AddTools from './comps/LandingPage/addTools';
import LandingPage from './comps/LandingPage/Jodit_htmlEditor/LandingPage';
import Example from './comps/Exemple/exmple';
import Try from './try';


import Toolbar from '@mui/material/Toolbar';
// or
// import { Toolbar } from '@mui/material';

import JoditEditor from 'jodit-pro-react';
import TextEditor from './comps/Example2/textEditor';

// import DraggingElements from './comps/DraggingElements1/main';

import AppDrop from './comps/DraggingElements1/AppDrop';

import AppDragDropDemo from './comps/DraggingElements2/AppDragDropDemo';

import SaveEditor from './comps/editorWithSaveBtn';

function App() {

  const view = {
    save: "save"
  };

  const [viewState, setViewState] = useState(view);

  const save = async () => {
    // let res = await courseService.putAbout(courseId, about);
    let res = 'ok';
    if (res == 'ok') {
        alert('save about. ok');
    }
  }

  // קבלת הדף שעוצב בעורך כמשתנה מחרוזתי
  const [gethtmlDesign, sethtmlDesign] = useState("");

  const [showEditor, setShowEditor] = useState(true)
  const htmlDesign=(content)=>{
    console.log(content);
    setShowEditor(false);
    sethtmlDesign(content);
  }

  const editLandingPage=()=>{
    setShowEditor(true);
  }

  return (
    <div>
      <AddTools></AddTools>  
      {/* <br></br> */}
      <div className='example'>

        {/* עורך של כל הדברים יחד- העורך המלא */}
        { showEditor && <Example htmlDesign={htmlDesign} contents={gethtmlDesign}></Example> } 
      </div>
      {/* <br></br> */}
      
      {!showEditor && parse(gethtmlDesign)}
      {!showEditor && <button onClick={editLandingPage}>edit LandingPage</button>}

      {/* <TextEditor></TextEditor>  עורך רק של הדברים הקשורים לטקסט */}
        {/* <SaveEditor></SaveEditor> */}
      {/* <DraggingElements></DraggingElements>   מנסה לגרור- לא עובד*/}
      {/* <AppDragDropDemo></AppDragDropDemo>     מעביר את השורות מקבוצה אחת לשניה */}

    </div>
  );
}

export default App;
