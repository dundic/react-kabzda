import React from 'react';

type RatingProps = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingProps) {

    return (
            <div>
                <Star selected={props.value > 0}/>
                <Star selected={props.value > 1}/>
                <Star selected={props.value > 2}/>
                <Star selected={props.value > 3}/>
                <Star selected={props.value > 4}/>
            </div>
    )

}

type StarProps = {
    selected?: boolean
}

function Star(props: StarProps) {
    if (props.selected === true) {
        return <span><b>star</b> </span>
    } else {
        return <span>star </span>
    }
}