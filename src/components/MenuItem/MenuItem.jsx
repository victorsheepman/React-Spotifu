import React from 'react'

export const MenuItem = ({name, icon}) => {
    return (
        <div className="menu__item">
            <figure className="menu__item__icon" >
                <img src={icon} alt="" />
            </figure>
            <p className="menu__item__title button">
                {name}
            </p>
        </div>
    )
}
