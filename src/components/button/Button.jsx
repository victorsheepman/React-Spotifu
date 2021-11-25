
import React from 'react'
export const Button = ({state, setState, type}) => {
    const play = 'assets/icons/Play.svg';
    const pause = 'assets/icons/pause.svg';
   
    return (
        <button className={type} onClick={()=>setState(!state)}>
            <figure>
                <img src={state ? pause : play} alt="" />
            </figure>
        </button>
    )
}
