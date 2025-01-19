import {useState} from 'react';

export const UncontrolledRating = () => {

    const[mark, setMark] = useState(0);

    return (
            <div>
                <Star painted={mark > 0}/>
                <button onClick={()=>setMark(1)}>1</button>
                <Star painted={mark > 1}/>
                <button onClick={()=>setMark(2)}>2</button>
                <Star painted={mark > 2}/>
                <button onClick={()=>setMark(3)}>3</button>
                <Star painted={mark > 3}/>
                <button onClick={()=>setMark(4)} >4</button>
                <Star painted={mark > 4}/>
                <button onClick={()=>setMark(5)}>5</button>
            </div>
    );
};

type StarProps = {
    painted?: boolean
}

const Star = ({painted}: StarProps) => {
    // if(mark) {
    //     return <span><b>star </b></span>
    // } else {
    //     return <span>star </span>
    // }
    return painted
            ? <span><b>star </b></span>
            : <span>star </span>
}