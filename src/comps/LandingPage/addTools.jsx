import './addTools.css';
import TextTools from './textTools';
import React, { useContext, useEffect, useLayoutEffect, useRef, useState, Component} from "react";
import { ReactDOM } from 'react';
import { Menu } from 'react-pro-sidebar';
import ButtonTools from './buttonTools';
import ImageTools from './imageTools';
// import AddEditor from './addEditor';


function AddTools (){

  //#region translation feature
  const view = {
    aboutMe: "About me",
    Iam: 'I am...',
    save: 'save',
    DesignLandingPage: "Design landing page",
    startWriting: "start writing...",
    createButton: "Button",
    createText: "Text",
    createTitle: "Title",
    createSubtitle: "Subtitle",
    createTextbox: "Textbox",
    addImage: "Image",
    addElement: "Add elements:",
    // textItem: "false",
    // buttonItem: "false",
    // imageItem: "false",
  }

  const [textShown, setTextShown] = useState(false);
  const [buttonShown, setButtonShown] = useState(false);
  const [imageShown, setImageShown] = useState(false);

  const [viewState, setViewState] = useState(view);

  // מכאן
  // const [anchorEl_editDetails, setAnchorEl__editDetails] = React.useState(null);
  
  // // const [course, setCourse] = useState(location.state || { name: '', coupon: {} });

  // const handleClick = (event) => {
  //   setAnchorEl__editDetails(anchorEl_editDetails ? null : event.currentTarget);
  //   event.stopPropagation();
  //   event.preventDefault();
  // };

  // const preventBuble = (event) => {
  //   alert('click only me');
  //   event.stopPropagation();
  //   event.preventDefault();
  // }
  // עד כאן

  const handleClickText = event => {
    // 👇️ toggle shown state
    // setTextShown(current => !current);

    // 👇️ or simply set it to true
    setTextShown(true);
    setButtonShown(false);
    setImageShown(false);
    addElemnt(event);
  };

  const handleClickButton = event => {
    // setButtonShown(current => !current);
    setButtonShown(true);
    setTextShown(false);
    setImageShown(false);
    addElemnt(event);
  };

  const handleClickImage = event => {
    // setImageShown(current => !current);
    setImageShown(true);
    setButtonShown(false);
    setTextShown(false);
    addElemnt(event);
  };

  const Input = () => {
    return <span><input placeholder="Add your text here" /></span>;
  };

  const Image = (path) => {
    return <img src={path}/>;
  };

  const Button = () => {
    return <button><input placeholder="Add your text here"/></button>
  };

  const [elementList, setElementList] = useState([]);

  const addElemnt = (event) => {
    console.log(event);
    if (event.target.name == 'text')
      setElementList(elementList.concat(<Input key={elementList.length} />));
    else{
      if (event.target.name == 'button')
        setElementList(elementList.concat(<Button key={elementList.length} />));
      else
        if (event.target.name == 'imge')
          setElementList(elementList.concat(<Image key={elementList.length} path='../../logo'/>));
    }
  };

  return (
    <div className="App row flex-container" >
        <div className="sidenav col-sm-4 col-2">
            <h3 className='itemMenu add-element'>
                {view.addElement}
            </h3>
            <button className='itemMenu buttonMenu' name='text' onClick={handleClickText}>
              {/* <img src=''></img> */}
              <br></br>
              {view.createText}
            </button>
            <br></br>
            <button className='itemMenu buttonMenu button' name='button' onClick={handleClickButton}>
              {/* <img src=''></img> */}
              <br></br>
              {view.createButton}
            </button>
            <br></br>
            <button className='itemMenu buttonMenu' name='image' onClick={handleClickImage}>
              {/* <img src=''></img> */}
              <br></br>
              {view.addImage}
            </button>      
            <br></br>
        </div>

        <div className='htmlPage'>
          {textShown && <TextTools className=""></TextTools>}
          {buttonShown && <ButtonTools></ButtonTools>}
          {imageShown && <ImageTools></ImageTools>}
          {/* אמור להתווסף כל פעם שלוחצים על מקש של טקסט אבל אמור להשאר אחרי זה תמיד לא רק בטקסט */}
          {/* {textShown && <input placeholder='add your text'/>} */}
        </div>
        <br></br>
        <div className='col-sm-8 col-10'>
          {elementList}
        </div>
        {/* מכאן הוספה */}
        {/* <div className="col-12 plus-icon-wrapper p-0 mb-3"> */}
                {/* <IconButton onClick={handleClick} className="p-0 "><img src={plusIcon} className="plus-icon-lessonList" /> </IconButton> */}
                {/* <button className='itemMenu buttonMenu' onClick={handleClick}>{view.createText}</button> */}
            {/* <AddTools onClick={preventBuble} viewState={viewState} /> */}
        {/* </div> */}
        {/* עד כאן */}
    </div>
  );
}

export default AddTools;
