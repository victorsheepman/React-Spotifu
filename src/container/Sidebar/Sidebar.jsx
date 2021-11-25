import React from 'react'
import { MenuItem } from '../../components/MenuItem/MenuItem'

export const Sidebar = () => {
    return (
        <div className='sidebar animate__animated animate__bounce animate__slideInLeft'>
            <div className='sidebar__top'>
                <figure className='sidebar__logo'>
                    <img src="assets/icons/logo.svg" alt="" />
                </figure>
                <div className='sidebar__items'>
                    <MenuItem   name={'Inicio'} icon={'assets/icons/home-active.svg'} active={'active'}/>
                    <MenuItem   name={'Buscar'} icon={'assets/icons/search.svg'}/>
                    <MenuItem   name={'Premium'} icon={'assets/icons/credit-card.svg'} /> 
                </div>
                
            </div>
            <ul className='sidebar__biblioteca'>
                <li className='base'>
                    Tu Biblioteca
                </li>
                <li className='base-bold'>
                    Creada para ti
                </li>
                <li className='base-bold'>
                    Escuchado recientemente
                </li>
                <li className='base-bold'>
                Tus Me Gusta
                </li>        
            </ul>
            <ul className='sidebar__biblioteca'>
                <li className='base'>
                    Playlist
                </li>
                <li className='base-bold'>
                    Lo mejor de los mejor
                </li>
                <li className='base-bold'>
                    Naruto al 100% para progr…
                </li>
                <li className='base-bold'>
                    Para cantar en la ducha
                </li>   
                <li className='base-bold'>
                    Sin Parar
                </li>   
                <li className='base-bold'>
                    Naruto openings
                </li>
                <li className='base-bold'>
                Boku no pico
                </li> 
                <li className='base-bold'>
                This is Pokémon
                </li>
                <li className='base-bold'>
                    Más populares de la semana
                </li>
                <li className='base-bold'>
                Mis pistas de shazam
                </li>
               
               
            </ul>
        </div>
    )
}
