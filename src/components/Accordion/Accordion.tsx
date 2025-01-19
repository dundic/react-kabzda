import React from "react";

type AccordionProps = {
    titleValue: string
    collapsed: boolean
}

function Accordion(props: AccordionProps) {
    return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody />}
    </div>
}
//
// function Accordion2(props: AccordionProps) {
//     if(props.collapsed) {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//         </div>
//     }
//     else {
//         return <div>
//             <AccordionTitle title={props.titleValue}/>
//             <AccordionBody />
//         </div>
//     }
// }


type AccordionTitleProps = {
    title: string
}

function AccordionTitle(props: AccordionTitleProps) {
    return (
            <h3>--{props.title}--</h3>
    )
}

function AccordionBody() {

        return (
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
        )
}

export default Accordion;
