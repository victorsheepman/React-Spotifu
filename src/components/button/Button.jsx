
import React from 'react'
export const Button = ({state, setState}) => {
    const play = 'assets/icons/Play.svg';
    const pause = 'assets/icons/pause.svg';
   
    return (
        <button className='button' onClick={()=>setState(!state)}>
            <figure>
                <img src={state ? pause : play} alt="" />
            </figure>
        </button>
    )
}
