import React from 'react'

export const Control = ({img}) => {
    return (
        <>
            <button className='control'>
                <figure>
                    <img src={img} alt="" />
                </figure>
            </button>   
        </>
    )
}
