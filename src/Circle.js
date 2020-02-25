import React from 'react';
import './App.css';
import picture from './dog.jpg'

const Circle = (props) => {

    let photoClass = props.index === props.randomIndex ? 'photo' : 'show';
    let onClickHandler = props.index === props.randomIndex ? props.onClickHandler : () => {
    };

    return (
        <div className='item' onClick={onClickHandler}>
            <img className={photoClass} src={picture}/>
        </div>
    )
};

export default Circle;
