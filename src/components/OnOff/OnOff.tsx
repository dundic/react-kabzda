type PropsType = {
   on: boolean
   onClick: (arg: boolean) => void
};


export const OnOff = (props: PropsType) => {
    console.log('выключатель сейчас on: ' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.on ? 'green': 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '3px',
        padding: '2px',
        background: props.on ? 'white': 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.on ? 'green': 'red'
    }

    return (
            <div>
                <div style={onStyle} onClick={()=>props.onClick(true)}>On</div>
                <div style={offStyle} onClick={()=>props.onClick(false)}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
    );
};