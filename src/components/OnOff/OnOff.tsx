import React, {useState} from 'react';

type PropsType = {
//    on: boolean
};



export const OnOff = (props: PropsType) => {
    console.log('OnOffrendering')

    let [on, setOn] = useState(true)
    console.log('on: ' + on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green': 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        background: on ? 'white': 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green': 'red'
    }

    return (
            <div>
                <div style={onStyle} onClick={ ( ) => setOn(true)}>On</div>
                <div style={offStyle} onClick={ ( ) => setOn(false)}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
    );
};