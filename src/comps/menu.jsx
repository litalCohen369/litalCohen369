import React from "react";
import { Component } from "react";
import TextTools from "./textTools";


class Menu extends Component {
    constructor(props) {
      super(props);
      this.state = {
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
        textItem: "true",
        buttonItem: "false",
        imageItem: "false",
      };
    }
  
    render() {
      return (
        <div className="App row flex-container" >
            <div class="sidenav col-sm-4 col-2">
                <h3 className='itemMenu'>
                    {this.state.addElement}
                </h3>
                <button className='itemMenu buttonMenu' onClick={navigate=TextTools}>
                {/* <img src=''></img> */}
                <br></br>
                {this.state.createText}
                </button>
                <br></br>
                <button className='itemMenu buttonMenu'>
                {/* <img src=''></img> */}
                <br></br>
                {this.state.createButton}
                </button>
                <br></br>
                <button className='itemMenu buttonMenu'>
                {/* <img src=''></img> */}
                <br></br>
                {this.state.addImage}
                </button> 
                {false &&<p>dfghjkl</p>}  
                {this.state.textItem == "true" &&<p>fghjk</p>}       

                <br></br>
            </div>
            {this.state.textItem == "true" && <div className='col-sm-8 col-10' >dfghjkghjk</div>}
            {this.state.textItem == "true" && <TextTools></TextTools>}
        </div>
      );
    }
  }

  export default Menu;