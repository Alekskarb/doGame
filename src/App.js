import React from 'react';
import './App.css';
import Circle from './Circle';
import sound from './dog.mp3'

class App extends React.Component {
    constructor() {
        super();
        this.audioRef = React.createRef();
    }

    state = {
        showPict: true,
        count: 9,
        dogSound: false,
        randomIndex: 3
    };

    componentDidMount() {
        setInterval(this.setRandomIndex, 1000)
    }

    setRandomIndex = () => {
        this.setState({
            randomIndex: Math.floor(Math.random() * 9)
        })
    }

    incCounter = () => {
        this.audioRef.current.currentTime = 0;
        this.audioRef.current.play();
        this.setState({count: this.state.count + 1})
    }

    items = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    render = () => {

        return (
            <div className={'wrapper'}>
                <audio src={sound} ref={this.audioRef}></audio>
                {this.items.map(i => <Circle
                    key={i}
                    randomIndex={this.state.randomIndex}
                    index={i}
                    onClickHandler={this.incCounter}/>)}

                <div className='counter'> {this.state.count} </div>
            </div>

        );
    }
}

export default App;
