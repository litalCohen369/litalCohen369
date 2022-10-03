import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import { useLocation, useHistory, useParams } from "react-router-dom";
import uuid from 'react-uuid';
// import userConfigService from '../../../../services/userConfig.service';
// import { ViewContext } from '../../../../Utilities/translate-wizard/viewContext';
import HtmlEditor from "./JoditStyle";
// import userContext from '../../../../Utilities/userContext';
import { Button } from '@mui/material';
// import courseService from '../../../../services/course.service';

const LandingPage = (props) => {

    // const location = useLocation();
    const [about, setAbout] = useState("LandingPage");
    // const { courseId } = props.match.params;
    const { courseId } = 2;
    // const userId = useContext(userContext).user.id;//get the curent user from the context

    // useEffect(() => {
    //     if (!location || !location.state || location.state.details == null)
    //         getAbout();
    // }, [])

    // const getAbout = async () => {
    //     let res = await courseService.getAbout(courseId);
    //     if (res.ok && res.data)
    //         setAbout(res.data);
    // }

    //#region translation feature
    const view = {
        aboutMe: "About me",
        Iam: 'I am...',
        save: 'save',
        DesignLandingPage: "Design landing page",
    }
    const [viewState, setViewState] = useState(view);
    // const { contextState, updateContext } = React.useContext(ViewContext);
    const isFirstRun = React.useRef(true),
        compId = React.useRef();
    // useEffect(() => {
    //     if (isFirstRun.current) {
    //         isFirstRun.current = false;
    //     } else {
    //         let _view = contextState.view[compId.current];
    //         if (_view)
    //             setViewState(_view);
    //     }
    // }, [contextState.changeReport]);

    React.useLayoutEffect(() => {
        compId.current = `id${uuid()}`;
        // updateContext({
        //     type: "init",
        //     payload: { [compId.current]: view },
        //     cb: setViewState,
        // });
    }, []);
    //#endregion translation feature


    const handleChange = (event) => {
        setAbout(event.target.value);
    }

    // const save = async () => {
    //     let res = await courseService.putAbout(courseId, about);
    //     if (res.ok) {
    //         alert('save about. ok');
    //     }
    // }


    return (
        <div className="row px-0">
            <Helmet>
                <title>Langind page</title>
                <meta name='description' content={`my profile, some sentences about me`}></meta>
                <link rel='canonical' href={`/landingPage/${courseId}`}></link>
            </Helmet>
            {/* <div className="aboutMe-header col-12 px-0 mt-5"> */}
                {/* <span className="aboutMe-span font-header"></span> */}
            {/* </div> */}
            <div className="style-profile-wrapper w-100 my-4 ">
                <HtmlEditor value={about} setValue={setAbout} />
            </div>
            {/* <TextField id="outlined-multiline-static" label={viewState.aboutMe} multiline rows={8} defaultValue={viewState.Iam} onChange={handleChange} name='about' required
                value={about} /> */}
            <div className="save-propfile-btn-wrapper col-12 px-0 d-flex justify-content-end">
                {/* <Button onClick={save} className="save-styledProfiled-btn btn-ouline-none font-header col-1">{viewState.save}</Button> */}
                <Button className="save-styledProfiled-btn btn-ouline-none font-header col-1">{viewState.save}</Button>
            </div>
        </div>
    );
};

export default LandingPage;