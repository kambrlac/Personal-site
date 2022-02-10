import React from "react"
import './Button.css'


export const Button = ({
    type,
    onClick,
}) => {


    return(
        <form action="/contact">
        <button className={'btn'} onClick={onClick} type={type} >
            Contact me
        </button>
        </form>
    )
}