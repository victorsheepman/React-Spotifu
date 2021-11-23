import React, {useState} from 'react'
import { Button } from '../button/Button'

export const Playlist = ({img, title}) => {
    const [state, setState] = useState(false);
    return (
        <div className={state ? 'playlist--light' : 'playlist'}>
            <figure className='playlist__image'>
                <img src="" alt="" />
            </figure>
            <div className='playlist__title'>
                <h3 className='base-bold'>Naruto Openins & 
                    endings</h3>
            </div>
            <Button state={state} setState={setState} />
        </div>
    )
}
