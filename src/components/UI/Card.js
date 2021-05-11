import classes from './Card.module.css'
import React from 'react'

const Card = ( { name, flag } ) => (
    <div className={classes.card}>
        <h3>{ name }</h3>
        <img src={ flag } alt={ name } />
    </div>
)

export default Card