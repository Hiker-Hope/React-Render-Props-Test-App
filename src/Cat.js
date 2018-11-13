import React from 'react'
import './App.css'

const Cat = (props) => {
    return (
        <img
            src="./cat.png"
            width="200"
            height="auto"
            alt="The cat"
            style={{
                position: 'absolute',
                left: props.position.posX - 20,
                top: props.position.posY - 50,
                paddingTop: props.position.padding,
                zIndex: -1
            }}
        />
    )
}

export default Cat
