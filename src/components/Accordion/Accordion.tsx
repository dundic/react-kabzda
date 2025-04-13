import React from "react";

type AccordionProps = {
    titleValue: string
    expanded: boolean
    onClick: () => void
}

function Accordion(props: AccordionProps) {
    return <div>
        <AccordionTitle title={props.titleValue} onClick={props.onClick} />
        {props.expanded && <AccordionBody />}
    </div>
}

type AccordionTitleProps = {
    title: string
    onClick: () => void
}

export function AccordionTitle(props: AccordionTitleProps) {
    return (
            <h3 onClick={props.onClick}>--{props.title}--</h3>
    )
}

export function AccordionBody() {
        return (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        )
}

export default Accordion;
