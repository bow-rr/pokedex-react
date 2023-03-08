import React from 'react'

function Button(props) {
  return <button className="buttons" onClick={props.onClick}></button>;
}

export default Button