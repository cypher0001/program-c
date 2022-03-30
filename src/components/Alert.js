import React from 'react'

function Alert(props) {
    const word=(word)=>{
      const up=word.toUpperCase();
      return up.charAt(0)+word.slice(1);
    }
  return (
    props.alert&&
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
            <strong >{word(props.alert.type)}</strong>:{props.alert.msg}
         </div>
  )
}

export default Alert
