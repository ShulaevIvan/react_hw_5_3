import React from "react";
import { useState } from "react";
import { useRef } from "react";


const Collapse = (props) => {
    let collapsedLabel = undefined;
    let expendedLabel = undefined;
    let defaultText = 

    !props.collapsedLabel ? collapsedLabel = 'Развернуть' : collapsedLabel =  props.collapsedLabel;
    !props.expandedLabel ? expendedLabel = 'Свернуть': expendedLabel = props.expandedLabel;
    !props.text ? defaultText = `Some placeholder content for the collapse component. This 
        panel is hidden by default but revealed when the user activates the relevant trigger.` : 
        defaultText = props.text;

    const initialState = {
        btnRef: useRef(null),
        collapsedLabel: collapsedLabel,
        expandedLabel: expendedLabel,
        btnActive: 'collapse-btn',
        bodyClass: 'collapse-body-hide',
    };

    const [collapseState, setCollapseState] = useState(initialState)

    const showHandler = (e) => {
        if  (collapseState.bodyClass === 'collapse-body-show') {
            collapseState.btnRef.current.textContent = collapsedLabel
            setCollapseState(prevState => ({
                ...prevState,
                btnActive: prevState.btnActive = 'collapse-btn',
                bodyClass: prevState.bodyClass = 'collapse-body-hide'
            }));
            return
        }
        collapseState.btnRef.current.textContent = expendedLabel
        setCollapseState(prevState => ({
            ...prevState,
            btnActive: prevState.btnActive = 'collapse-btn-active',
            bodyClass: prevState.bodyClass = 'collapse-body-show'
        }));
        return;
      
    }
    return (
        <React.Fragment>
            <div className="collapse-btn-wrap">
                {/* eslint-disable-next-line */}
                <a href="#"ref={collapseState.btnRef} className={collapseState.btnActive} onClick={showHandler}>{collapseState.collapsedLabel}</a>
            </div>
            <div className={collapseState.bodyClass}>
                <div className="collapse-content-wrap">
                    {defaultText}
                </div>
            </div>
        </React.Fragment>
    );
}

export default Collapse;