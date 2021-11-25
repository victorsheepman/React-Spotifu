import React from 'react'
import { useNavigate } from 'react-router'
export const MenuItem = ({name, icon, active}) => {
    const history = useNavigate();
    const handleClick = () =>{
        history('/')
    }
    return (
        <div className={`menu__item ${active}`} onClick={handleClick}>
            <figure className="menu__item__icon" >
                <img src={icon} alt="" />
            </figure>
            <p className="menu__item__title button-font">
                {name}
            </p>
        </div>
    )
}
