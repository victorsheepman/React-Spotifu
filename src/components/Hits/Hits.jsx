import React,{lazy, useState} from 'react'
import { Button } from '../button/Button'
import { useNavigate } from 'react-router'
export const Hits = () => {
    const [state, setState] = useState(false);
    const history = useNavigate();
    const handleClick = () =>{
        history('/music')
    }
    return (
        <div className="hits" onClick={handleClick}>
            <figure className='hits__img'>
                <img src="assets/images/img-4.jpg" alt="" />
            </figure>
            <div className='hits__body'>
                <h4 className='base-bold'>Anime Hits</h4>
                <p className='base'>Naruto, Your Name, Weathering With You </p>
            </div>
            <div className="hits__button" >
                <Button state={state} setState={setState} type={'button'} />
            </div>
        </div>
    )
}
