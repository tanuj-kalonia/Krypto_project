import React from 'react'
import "./SmallCard.css"

function SmallCard(props) {
    return (
        <div className='small-card'>
            <p className='small-p'>{props.ptext}</p>
            <h3>{props.priceText}</h3>
        </div>
    )
}

export default SmallCard    