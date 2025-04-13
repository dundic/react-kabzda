import {useState} from 'react';

type UncontrolledRatingProps = {}

export const UncontrolledRating = (props: UncontrolledRatingProps) => {

    let [value, setValue] = useState(0)

    return (
            <div>
                <Star painted={value > 0} setValue={()=>setValue(1)} />
                <Star painted={value > 1} setValue={()=>setValue(2)} />
                <Star painted={value > 2} setValue={()=>setValue(3)} />
                <Star painted={value > 3} setValue={()=>setValue(4)} />
                <Star painted={value > 4} setValue={()=>setValue(5)} />
            </div>
    );
};

type StarProps = {
    painted: boolean
    setValue: () => void
}

const Star = ({painted, setValue}: StarProps) => {
    return <span onClick={setValue}> {painted ? <b>star</b> : 'star'}</span>
}