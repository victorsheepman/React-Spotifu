import React from 'react'
import { Heart } from '../Heart/Heart'

export const Playing = () => {
    return (
        <div className='playing'>
            <figure className='playing__image'>
                <img src="assets/images/img-3.jpg" alt="" />
            </figure>
            <div className='playing__body'>
                <h5 className='base-bold'>Grand Escape (feat. Tokio Miura)</h5>
                <span  className='small'>RADWIMPS, Toko Miura</span>
            </div>
            <Heart /> 
        </div>
    )
}
