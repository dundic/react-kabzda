import {useState} from 'react';

type Props = {
    title: string
}

export const UncontrolledAccordion = (props: Props) => {

    const[expanded, setExpanded] = useState(false)

    return (
            <div>
                <AccordionTitle title={props.title} />
                <button onClick={()=>{setExpanded(!expanded)}}>toggle</button>
                {expanded && <AccordionBody/>}
            </div>
    );
};

type AccordionTitleProps = {
    title: string
}

const AccordionTitle = ({title}: AccordionTitleProps) => {
    return <h3>---{title}---</h3>
}

const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}