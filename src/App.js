import React from "react";
import {useState, useEffect} from "react";
import changeDivHeight from './changeDivHeight'


const App = (props) => {
    const [windowDimention, setWinwidth] = useState({
        winWidth: window.innerWidth,
    });
    const widthResize = () => {
        setWinwidth({
            winWidth: window.innerWidth,
        });
    };


    useEffect(() => {
        window.addEventListener("resize", widthResize);
        return () => {
            window.removeEventListener("resize", widthResize);
        };
    }, [windowDimention]);

    return (
        <>
            <div className="testContainer" style={{border: '1px solid black', height: `${props.customDivHeight}px`}}>
                <span>window-width:{windowDimention.winWidth}</span>
                <br></br>
                <label htmlFor="height">
                    DivHeight:
                    <input type="text" onChange={props.onInputChange} value={props.customDivHeight}/>
                </label>
            </div>
        </>
    );
};

export default changeDivHeight(App);
