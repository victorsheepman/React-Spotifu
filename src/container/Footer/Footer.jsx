import React from 'react'
import { Playing } from '../../components/Playing/Playing'
import {Button} from '../../components/button/Button';
export const Footer = () => {
    return (
        <footer className='animate__animated animate__bounce animate__slideInUp'>
            <Playing />
            <div className='timeline'>
                <div className='timeline__control'>
                    <figure className='timeline__control__icon'>
                        <img src="assets/icons/prev.svg" alt="" />
                    </figure>
                    <Button type={'button--white'} state={true}/>
                    <figure className='timeline__control__icon'>
                        <img src="assets/icons/next.svg" alt="" />
                    </figure>
                </div>
                <div className='timeline__time'>
                    <div className='timeline__line'>
                        <div className='timeline__line--white'>
                        </div>
                    </div>

                </div>
            </div>
            <div className='volume'>
                <figure className='volume__image'>
                    <img src="assets/icons/volume-down.svg" alt="" />
                </figure>
                <span>
                    
                </span>

            </div>
        </footer>
    )
}
