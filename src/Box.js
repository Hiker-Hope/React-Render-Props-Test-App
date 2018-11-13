import React, { Fragment } from 'react'
import './App.css'

const Box = props => {
    return (
        <Fragment>
            {props.render(props.position)}
            <img
                src="./box.png"
                width="400"
                height="auto"
                alt="The box"
                style={{
                    position: 'absolute',
                    left: props.position.posX - 100,
                    top: props.position.posY + 50,
                    paddingTop: props.position.padding,
                    zIndex: 1
                }}
            />
        </Fragment>
    )
}

export default Box
