import React, {useState} from 'react';


const changeDivHeight = (OriginalComponent) => {


    const NewComponent = (props) => {
        const [customDivHeight, setCustomDivHeight] = useState();

        const onInputChange = (e) => {
            setCustomDivHeight(Number(e.target.value));
            window.setDivHeight(Number(e.target.value));
        };

        return (
            <OriginalComponent {...props} onInputChange={onInputChange} customDivHeight={customDivHeight}/>
        );

    };
    return NewComponent
};


export default changeDivHeight;