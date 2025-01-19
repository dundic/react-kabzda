import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {OnOff} from './components/OnOff/OnOff';
import {UncontrolledAccordion} from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';

function App() {
    console.log('App rendering')
  return (
    <div className={'App'}>
    <PageTitle title={'This is APP component'}/>
        <PageTitle title={'This is main page of our application'}/>
        Article 1

        Article 2
        <Rating value={0}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        <OnOff />
        <UncontrolledRating/>

        <Accordion titleValue={'Menu'} collapsed={false}/>
        <Accordion titleValue={'Users'} collapsed={true}/>
        <UncontrolledAccordion title={'Pickupers'}/>
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
