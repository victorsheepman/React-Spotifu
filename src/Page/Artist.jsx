import React from 'react'
import { Song } from '../components/song/Song'

export const Artist = () => {
    return (
        <div className='artist animate__animated animate__bounce animate__fadeIn'>
            <div className='artist__top'>
                <div className='artist__title'>
                    <h1>Weathering With You</h1>
                </div>
            </div>
            <div className='artist__bottom'>
                <input type="text"  placeholder='filtrar'/>
                <div className='artist__songs'>
                    <div className='artist__songs__types'>
                        <span  className='artist__songs__types__title subtitle'>TITULO</span>
                        <span  className='artist__songs__types__artist subtitle'>Artista</span>
                        <span  className='artist__songs__types__album subtitle'>ÁLBUM</span>
                        <span className='artist__songs__types__date subtitle'>
                            <figure>
                                <img src="assets/icons/calendar.svg" alt="" />
                            </figure>
                        </span>
                        <span className='artist__songs__types__time subtitle'>
                            <figure>
                                <img src="assets/icons/clock.svg" alt="" />
                            </figure>
                        </span>
                        
                    </div>
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                    <Song />
                </div>
            </div>
        </div>
    )
}
