import React from 'react'
import { Control } from '../../components/Controls/Control'
import { User } from '../../components/User/User'

export const Header = () => {
    return (
        <header className='header animate__animated animate__bounce animate__slideInDown'>
            <div className='header__search'>
                <Control img={"assets/icons/arrow-left.svg"} />
                <Control img={"assets/icons/arrow-right.svg"} />
                <input type="text" placeholder='Artistas, canciones o podcasts'/>
            </div>
            <User />
        </header>
    )
}
