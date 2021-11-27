import React from 'react'
import {Heart} from '../Heart/Heart';
export const Song = () => {
    return (
        <div className='song'>
            <div className='song__play'>
                <figure className='song__play__image'>
                    <img src="assets/icons/Play.svg" alt="" />
                </figure>
            </div>
            <div className='song__like'>
                <Heart />
            </div>
            <div className="song__title">
                <h5 className='base'>Grand Escape</h5>
            </div>
            <div className="song__artist">
                <h5 className='base'>RADWIMPS</h5>
            </div>
            <div className="song__album">
                <h5 className='base'>Weathering With You</h5>
            </div>
            <div className="song__date">
                <h5 className='base'>2021-02-10</h5>
            </div>
            <div className="song__time">
                <h5 className='base'>3:25</h5>
            </div>
            
        </div>
    )
}
