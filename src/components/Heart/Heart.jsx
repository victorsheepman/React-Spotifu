import React, { useState } from 'react'

export const Heart = () => {
    const [state, setState] = useState('white');
    const handleClick= ()=>{
        setState('#00b050');
    }
    return (
        <figure className='heart' onClick={handleClick}>
            <svg width="16" height="16" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.1175 3.13508C31.8363 -1.03449 25.4692 -0.284499 21.5396 4.34935L20.0006 6.16181L18.4615 4.34935C14.5397 -0.284499 8.16486 -1.03449 3.8837 3.13508C-1.02246 7.92071 -1.28027 16.5098 3.11027 21.6972L18.2272 39.5362C19.2037 40.688 20.7896 40.688 21.7662 39.5362L36.8831 21.6972C41.2814 16.5098 41.0236 7.92071 36.1175 3.13508Z" fill={state}/>
            </svg>
        </figure>
    )
}