import React,{useState} from 'react'
import { Button } from '../button/Button'

export const Hits = () => {
    const [state, setState] = useState(false);
    return (
        <div className="hits">
            <figure className='hits__img'>
                <img src="assets/images/img-4.jpg" alt="" />
            </figure>
            <div className='hits__body'>
                <h4 className='base-bold'>Anime Hits</h4>
                <p className='base'>Naruto, Your Name, Weathering With You </p>
            </div>
            <div className="hits__button" >
                <Button state={state} setState={setState} />
            </div>
        </div>
    )
}
