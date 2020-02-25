import React from 'react';
import './App.css';
import Circle from './Circle';
import sound from './dog.mp3'
import {incCounterAC, setRandomIndexAC} from "./reducer";
import {connect} from "react-redux";

class App extends React.Component {
    constructor() {
        super();
        this.audioRef = React.createRef();
    };

    componentDidMount() {
        setInterval(this.setRandomIndex, 1000)
    };

    setRandomIndex = () => {
        this.props.setRandomIndex(
        )
    };

    incCounter = () => {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
        this.props.incCounter(this.props.count + 1)
    };

    items = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    render = () => {

        return (
            <div className={'wrapper'}>

                <audio src={sound} ref={this.audioRef}> </audio>
                {this.items.map(i => <Circle
                    key={i}
                    randomIndex={this.props.randomIndex}
                    index={i}
                    onClickHandler={this.incCounter}/>)}

                <div className='counter'> {this.props.count} </div>
            </div>

        );
    }
}

let mapStateToProps = (state) => {
    return {
        randomIndex: state.count.randomIndex,
        count: state.count.count,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setRandomIndex: (index) => {
            dispatch(setRandomIndexAC(index))
        },
        incCounter: (num) => {
            dispatch(incCounterAC(num))
        }
    }
};

export const AppHOC = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppHOC;
