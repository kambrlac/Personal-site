import React from "react"
import './Button.css'


export const Button = ({
    type,
    onClick,
}) => {


    return(
        <form action="/comment">
        <button className={'btn'} onClick={onClick} type={type} >
            Comment
        </button>
        </form>
    )
}