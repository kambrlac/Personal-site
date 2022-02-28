import React from 'react';
import './Futer.css';

function Futer(){
        return(
        <div className='footer'>
        <div className='info'>
                <div className='media'>
                        <p>Follow me</p>
                        <a className='ico' href='https://www.instagram.com/branko_petrovic/?hl=en'><i class="fab fa-instagram fa-2x"></i></a>
                        <a className='ico' href='/gone'><i class="fab fa-facebook fa-2x"></i></a>
                </div>
                <div className='contact'>
                        <p>Contact me</p>
                        <a className='ico' href='/comment'><i class="far fa-envelope fa-2x"></i></a>
                        <a className='ico' href='tel:+381649827907'><i class="fas fa-phone-alt fa-2x"></i></a>
                </div>
        </div>       
                <div className='claim'>
                        Branko 2022
                </div>
        </div>
        )
}

export default Futer;