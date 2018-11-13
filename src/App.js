import React, { Component, Fragment } from 'react'
import Cat from './Cat.js'
import Box from './Box.js'
import './App.css'

class App extends Component {
    state = {
        posX: 50,
        posY: 50,
        padding: 100
    }

    handleMove = event => {
        this.setState({
            posX: event.clientX,
            posY: event.clientY,
            padding: 0
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Hola, chikito, move your mouse and watch me</h1>
                <div className="App" onMouseMove={this.handleMove}>
                    <Cat position={this.state} />
                    <Box position={this.state} />
                </div>
            </Fragment>
        )
    }
}

export default App
