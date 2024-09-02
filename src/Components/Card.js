import React from 'react';

export default function Card(props) {
    let badgeText
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
    }
    else if(props.item.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className='sold-out'>{badgeText}</div>}
            <img src={props.item.coverImg} alt='zefres' className='card-image'/>
            <div className='card-stats'>
                {/* <span>Description : {props.description} </span> */}
                <img src={props.item.star} alt='star' className='card-star'/>
                <span>{props.item.stats.rating}</span>
                <span className='grey'>({props.item.stats.reviewCount}) *</span>
                <span className='grey'>{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className='bold'>From ${props.item.price} </span> / person</p>
        </div>
    );
}