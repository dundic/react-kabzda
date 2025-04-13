import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValue} from './components/Rating/Rating';
import {UncontrolledOnOff} from './components/OnOff/UncontrolledOnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {OnOff} from './components/OnOff/OnOff';


function App() {

    let [ratingValue, setRatingValue] = useState<RatingValue>(0);
    let [expanded, setExpanded] = useState<boolean>(false);
    let [on, setOn] = useState<boolean>(false);

    return (
            <div className={'App'}>
                <PageTitle title={'This is APP component'}/>
                <h2>Controlled Rating</h2>
                <Rating value={ratingValue} onClick={setRatingValue}/>
                <h2>Uncontrolled Rating</h2>
                <UncontrolledRating/>
                <h2>Controlled Accordion</h2>
                <Accordion titleValue={'Menu'} onClick={()=>setExpanded(!expanded)} expanded={expanded}/>
                <h2>Uncontrolled Accordion</h2>
                <UncontrolledAccordion title={'Pickupers'}/>
                <h2>Uncontrolled OnOff</h2>
                <UncontrolledOnOff onChange={setOn}/> {on.toString()}
                <h2>Controlled OnOff</h2>
                <OnOff on={on} onClick={setOn}/>
            </div>
    );
}

type PageTitleProps = {
    title: string;
}

function PageTitle(props: PageTitleProps) {
    return <h1>{props.title}</h1>
}

export default App;
