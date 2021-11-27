import React from 'react'
import { Control } from '../../components/Controls/Control'

import { Playlist } from '../../components/Playlist/Playlist'
import {Hits} from '../../components/Hits/Hits'
export const Main = () => {
    return (
        <main className='main animate__animated animate__bounce  animate__slideInRight'>
            <div className='main_top'>
                <div className='main__top__title'>
                    <h2>Buenas noches</h2>
                    <div>
                        <Control img={"assets/icons/arrow-left.svg"} />
                        <Control img={"assets/icons/arrow-right.svg"} />
                    </div>
                </div>
                <div className='main__top__playlist'>
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                    <Playlist />
                </div>
            </div>
            <div className='main__bottom'>
                <div className='main__top__title'>
                    <h2>Escuchado recientemente</h2>
                    <div>
                        <Control img={"assets/icons/arrow-left.svg"} />
                        <Control img={"assets/icons/arrow-right.svg"} />
                    </div>
                </div>
                <div className='main__bottom__music'>
                    <Hits />
                    <Hits />
                    <Hits />
                    <Hits />
                    <Hits />
                    <Hits />
                </div>
            </div>
        </main>
    )
}
