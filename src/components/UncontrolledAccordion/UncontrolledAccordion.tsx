import {useState} from 'react';

type Props = {
    title: string
}

export const UncontrolledAccordion = (props: Props) => {

    const[expanded, setExpanded] = useState(false)

    return (
            <div>
                <AccordionTitle title={props.title} onClick={()=>{setExpanded(!expanded)}}/>
                {expanded && <AccordionBody/>}
            </div>
    );
};

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({title, onClick}: AccordionTitleProps) => {
    return <h3 onClick={onClick}>---{title}---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>Gerry</li>
        <li>Mitch</li>
        <li>Sandra</li>
    </ul>
}